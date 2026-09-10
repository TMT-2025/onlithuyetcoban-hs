const path = require('path');
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType, ImageRun } = require('docx');
const chemistryContent = require('../chemistry-content');

// Helper: build DOCX document for part
function generateDocumentForPart(grade, semester, partIndex) {
  const gradeNum = parseInt(grade);
  const semKey = semester === '1' ? 'hk1' : 'hk2';
  const content = chemistryContent[gradeNum] && chemistryContent[gradeNum][semKey];

  if (!content) return null;
  const part = content.parts[partIndex];
  if (!part) return null;

  const children = [];

  // Tiêu đề đầu trang
  children.push(new Paragraph({
    children: [new TextRun({
      text: content.title,
      bold: true,
      size: 32,
      color: '1F3864',
      font: 'Times New Roman'
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 100 }
  }));

  children.push(new Paragraph({
    children: [new TextRun({
      text: content.subtitle,
      bold: false,
      size: 24,
      color: '2F5496',
      italics: true,
      font: 'Times New Roman'
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60 }
  }));

  children.push(new Paragraph({
    children: [new TextRun({
      text: part.label,
      bold: true,
      size: 28,
      color: 'C00000',
      font: 'Times New Roman'
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 100, after: 200 }
  }));

  // Đường kẻ phân cách
  children.push(new Paragraph({
    children: [new TextRun({ text: '─'.repeat(60), size: 20, color: '888888', font: 'Times New Roman' })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 200 }
  }));

  // Các chương mục
  part.chapters.forEach(chapter => {
    children.push(new Paragraph({
      children: [new TextRun({
        text: chapter.title,
        bold: true,
        size: 30,
        color: '1F3864',
        font: 'Times New Roman',
        allCaps: true
      })],
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 300, after: 120 },
      border: {
        bottom: { color: '2F5496', space: 1, style: BorderStyle.SINGLE, size: 6 }
      }
    }));

    chapter.sections.forEach(section => {
      children.push(new Paragraph({
        children: [new TextRun({
          text: section.heading,
          bold: true,
          size: 26,
          color: 'C00000',
          font: 'Times New Roman'
        })],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 80 }
      }));

      // Render image if present in section
      if (section.image || section.images) {
        const rawImages = section.images || section.image;
        const images = Array.isArray(rawImages) ? rawImages : [rawImages];
        images.forEach(imgObj => {
          let fullPath = path.resolve(__dirname, '..', imgObj.path);
          if (!fs.existsSync(fullPath)) {
            fullPath = path.resolve(process.cwd(), imgObj.path);
          }
          if (!fs.existsSync(fullPath)) {
            fullPath = path.resolve(__dirname, imgObj.path);
          }
          if (fs.existsSync(fullPath)) {
            try {
              const imgData = fs.readFileSync(fullPath);
              children.push(new Paragraph({
                children: [new ImageRun({
                  data: imgData,
                  transformation: {
                    width: imgObj.width || 480,
                    height: imgObj.height || 260
                  }
                })],
                alignment: AlignmentType.CENTER,
                spacing: { before: 140, after: 60 }
              }));
              if (imgObj.caption) {
                children.push(new Paragraph({
                  children: [new TextRun({
                    text: imgObj.caption,
                    italics: true,
                    bold: true,
                    size: 20,
                    color: '595959',
                    font: 'Times New Roman'
                  })],
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 30, after: 120 }
                }));
              }
            } catch (err) {
              console.error('Error rendering image:', err);
            }
          }
        });
      }

      section.content.forEach(item => {
        const trimmed = item.trim();
        if (!trimmed) {
          children.push(new Paragraph({
            children: [new TextRun({ text: '', font: 'Times New Roman' })],
            spacing: { before: 60, after: 60 }
          }));
          return;
        }

        const isSubItem = trimmed.startsWith('–') || trimmed.startsWith('•') || 
                          trimmed.startsWith('-') || item.startsWith('  ');
        const isEquation = trimmed.includes('→') || trimmed.includes('⇌') || trimmed.includes('↑') || trimmed.includes('↓');
        const isSectionHeader = trimmed.startsWith('===');

        if (isSectionHeader) {
          children.push(new Paragraph({
            children: [new TextRun({
              text: trimmed,
              bold: true,
              size: 24,
              color: '2F5496',
              font: 'Times New Roman'
            })],
            spacing: { before: 160, after: 60 },
            shading: { type: ShadingType.CLEAR, color: 'E8F0FE', fill: 'E8F0FE' }
          }));
        } else if (isSubItem) {
          children.push(new Paragraph({
            children: [new TextRun({
              text: trimmed,
              size: 24,
              color: '000000',
              font: 'Times New Roman',
              italics: isEquation
            })],
            spacing: { before: 40, after: 40 },
            indent: { left: 720 }
          }));
        } else if (isEquation && !trimmed.includes(':')) {
          children.push(new Paragraph({
            children: [new TextRun({
              text: trimmed,
              size: 24,
              color: '1F3864',
              font: 'Times New Roman',
              italics: true
            })],
            spacing: { before: 60, after: 60 },
            indent: { left: 360 },
            alignment: AlignmentType.LEFT
          }));
        } else {
          children.push(new Paragraph({
            children: [
              new TextRun({
                text: '• ',
                bold: true,
                size: 24,
                color: '2F5496',
                font: 'Times New Roman'
              }),
              new TextRun({
                text: trimmed,
                size: 24,
                color: '000000',
                font: 'Times New Roman'
              })
            ],
            spacing: { before: 60, after: 60 },
            indent: { left: 360 }
          }));
        }
      });
    });
  });

  // Footer ghi chú cuối tài liệu
  children.push(new Paragraph({
    children: [new TextRun({
      text: `Tài liệu ôn tập lý thuyết – Lớp ${grade} – ${semester === '1' ? 'Học kỳ 1' : 'Học kỳ 2'} – ${part.label}`,
      italics: true,
      size: 20,
      color: '888888',
      font: 'Times New Roman'
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 400, after: 60 }
  }));

  children.push(new Paragraph({
    children: [new TextRun({
      text: 'Bộ sách: Kết nối tri thức với cuộc sống – THCS-THPT Phan Văn Trị',
      italics: true,
      size: 20,
      color: '888888',
      font: 'Times New Roman'
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60 }
  }));

  return new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 1134,
            right: 850,
            bottom: 1134,
            left: 1700
          }
        }
      },
      children
    }],
    styles: {
      default: {
        document: {
          run: { font: 'Times New Roman', size: 24 }
        }
      }
    }
  });
}

async function handler(req, res) {
  // Parse URL & queries
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;
  const searchParams = url.searchParams;

  // Handle /api/parts
  if (pathname.includes('/parts')) {
    const grade = searchParams.get('grade');
    const semester = searchParams.get('semester');
    const gradeNum = parseInt(grade);
    const semKey = semester === '1' ? 'hk1' : 'hk2';

    if (!chemistryContent[gradeNum] || !chemistryContent[gradeNum][semKey]) {
      return res.status(404).json({ error: 'Không tìm thấy nội dung' });
    }

    const content = chemistryContent[gradeNum][semKey];
    const parts = content.parts.map(p => ({
      id: p.id,
      label: p.label
    }));

    return res.status(200).json({
      title: content.title,
      subtitle: content.subtitle,
      totalParts: parts.length,
      parts
    });
  }

  // Handle /api/download
  if (pathname.includes('/download')) {
    const grade = searchParams.get('grade');
    const semester = searchParams.get('semester');
    const part = searchParams.get('part');
    const gradeNum = parseInt(grade);
    const semKey = semester === '1' ? 'hk1' : 'hk2';
    const partIndex = parseInt(part) || 0;

    if (!chemistryContent[gradeNum] || !chemistryContent[gradeNum][semKey]) {
      return res.status(404).json({ error: 'Không tìm thấy nội dung' });
    }

    const content = chemistryContent[gradeNum][semKey];
    if (partIndex >= content.parts.length) {
      return res.status(404).json({ error: 'Phần không tồn tại' });
    }

    try {
      const doc = generateDocumentForPart(grade, semester, partIndex);
      if (!doc) {
        return res.status(500).json({ error: 'Không thể tạo tài liệu' });
      }

      const buffer = await Packer.toBuffer(doc);
      const filename = `LyThuyetHoa${grade}_HK${semester}_Phan${partIndex + 1}.docx`;

      res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`);
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      return res.status(200).send(buffer);
    } catch (err) {
      console.error('Lỗi khi tạo docx:', err);
      return res.status(500).json({ error: 'Lỗi máy chủ khi tạo file: ' + err.message });
    }
  }

  // Handle /api/info
  if (pathname.includes('/info')) {
    const info = {};
    [10, 11, 12].forEach(g => {
      info[g] = {};
      ['hk1', 'hk2'].forEach(sem => {
        if (chemistryContent[g] && chemistryContent[g][sem]) {
          info[g][sem] = {
            title: chemistryContent[g][sem].title,
            totalParts: chemistryContent[g][sem].parts.length
          };
        }
      });
    });
    return res.status(200).json(info);
  }

  return res.status(200).json({ status: 'ok', message: 'API Ôn tập Lý thuyết Hóa học THPT' });
};

handler.generateDocumentForPart = generateDocumentForPart;
module.exports = handler;

