const express = require('express');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType, ShadingType } = require('docx');
const chemistryContent = require('./chemistry-content');

const app = express();
const PORT = 3007;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API: get available parts for a grade and semester
app.get('/api/parts', (req, res) => {
  const { grade, semester } = req.query;
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

  res.json({
    title: content.title,
    subtitle: content.subtitle,
    totalParts: parts.length,
    parts
  });
});

// Helper: create styled paragraph
function createParagraph(text, options = {}) {
  const {
    heading = null,
    bold = false,
    italic = false,
    size = 24, // half-points (24 = 12pt)
    color = '000000',
    indent = 0,
    spacing = {}
  } = options;

  const runs = [];

  if (typeof text === 'string') {
    runs.push(new TextRun({
      text,
      bold,
      italic,
      size,
      color,
      font: 'Times New Roman'
    }));
  } else if (Array.isArray(text)) {
    text.forEach(t => runs.push(new TextRun({
      text: t.text || t,
      bold: t.bold || bold,
      italic: t.italic || italic,
      size: t.size || size,
      color: t.color || color,
      font: 'Times New Roman'
    })));
  }

  const paraOptions = {
    children: runs,
    spacing: {
      before: spacing.before || 60,
      after: spacing.after || 60,
      line: spacing.line || 276, // 1.15 line spacing
      lineRule: 'auto'
    },
    indent: indent ? { left: indent } : undefined
  };

  if (heading) {
    paraOptions.heading = heading;
  }

  return new Paragraph(paraOptions);
}

// Generate document for a specific part
function generateDocumentForPart(grade, semester, partIndex) {
  const gradeNum = parseInt(grade);
  const semKey = semester === '1' ? 'hk1' : 'hk2';
  const content = chemistryContent[gradeNum][semKey];
  const part = content.parts[partIndex];

  if (!part) return null;

  const children = [];

  // Cover section for this part
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

  // Add a divider line
  children.push(new Paragraph({
    children: [new TextRun({ text: '─'.repeat(60), size: 20, color: '888888', font: 'Times New Roman' })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 200 }
  }));

  // Chapters content
  part.chapters.forEach(chapter => {
    // Chapter title
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
      // Section heading
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

      // Content items
      section.content.forEach(item => {
        const trimmed = item.trim();
        if (!trimmed) {
          // Empty line for spacing between sections
          children.push(new Paragraph({
            children: [new TextRun({ text: '', font: 'Times New Roman' })],
            spacing: { before: 60, after: 60 }
          }));
          return;
        }

        // Check if it's a sub-item (starts with –, •, spaces, dashes, etc.)
        const isSubItem = trimmed.startsWith('–') || trimmed.startsWith('•') || 
                          trimmed.startsWith('-') || item.startsWith('  ');
        const isEquation = trimmed.includes('→') || trimmed.includes('⇌') || trimmed.includes('↑') || trimmed.includes('↓');
        const isSectionHeader = trimmed.startsWith('===');

        if (isSectionHeader) {
          // Section sub-header (for summary tables)
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
            indent: { left: 720 } // 0.5 inch indent for sub-items
          }));
        } else if (isEquation && !trimmed.includes(':')) {
          // Chemical equation
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
          // Regular content
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

  // Footer note
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
      text: 'Bộ sách: Kết nối tri thức với cuộc sống – Trường THCS-THPT Phan Văn Trị',
      italics: true,
      size: 20,
      color: '888888',
      font: 'Times New Roman'
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60 }
  }));

  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 1134, // 2cm in twips (1cm = 567 twips)
            right: 850, // 1.5cm
            bottom: 1134,
            left: 1700 // 3cm
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

  return doc;
}

// API: generate and download DOCX for a specific part
app.get('/api/download', async (req, res) => {
  const { grade, semester, part } = req.query;
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
    const partLabel = content.parts[partIndex].label.replace(/[^a-zA-Z0-9À-ỹ\s]/g, '').trim().substring(0, 40);
    const filename = `LyThuyetHoa${grade}_HK${semester}_Phan${partIndex + 1}.docx`;

    res.setHeader('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.send(buffer);
  } catch (err) {
    console.error('Error generating document:', err);
    res.status(500).json({ error: 'Lỗi khi tạo tài liệu: ' + err.message });
  }
});

// API: get content info
app.get('/api/info', (req, res) => {
  const info = {};
  [10, 11, 12].forEach(grade => {
    info[grade] = {};
    ['hk1', 'hk2'].forEach(sem => {
      if (chemistryContent[grade] && chemistryContent[grade][sem]) {
        info[grade][sem] = {
          title: chemistryContent[grade][sem].title,
          totalParts: chemistryContent[grade][sem].parts.length
        };
      }
    });
  });
  res.json(info);
});

app.listen(PORT, () => {
  console.log(`🧪 Ứng dụng Tài liệu Hóa học đang chạy tại: http://localhost:${PORT}`);
  console.log(`📚 Hỗ trợ: Hóa 10, 11, 12 – HK1 và HK2`);
  console.log(`📄 Mỗi học kỳ chia thành 7 phần tải xuống`);
});
