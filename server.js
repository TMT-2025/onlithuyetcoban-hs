const express = require('express');
const path = require('path');
const { generateDocumentForPart, Packer, chemistryContent } = require('./api/generator');

const app = express();
const PORT = process.env.PORT || 3007;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API: get available parts for a grade and semester
app.get('/api/parts', (req, res) => {
  const { grade, semester, type = 'sgk' } = req.query;
  const gradeNum = parseInt(grade);
  const isChuyenDe = type === 'chuyende';

  let content = null;
  if (isChuyenDe) {
    if (chemistryContent.chuyende && chemistryContent.chuyende[gradeNum]) {
      content = chemistryContent.chuyende[gradeNum];
    }
  } else {
    const semKey = semester === '1' ? 'hk1' : 'hk2';
    if (chemistryContent[gradeNum] && chemistryContent[gradeNum][semKey]) {
      content = chemistryContent[gradeNum][semKey];
    }
  }

  if (!content) {
    return res.status(404).json({ error: 'Không tìm thấy nội dung' });
  }

  const parts = content.parts.map(p => ({
    id: p.id,
    label: p.label,
    desc: p.desc || ''
  }));

  res.json({
    title: content.title,
    subtitle: content.subtitle,
    totalParts: parts.length,
    parts
  });
});

// API: generate and download DOCX for a specific part or all parts
app.get('/api/download', async (req, res) => {
  const { grade, semester, part, type = 'sgk' } = req.query;
  const gradeNum = parseInt(grade);
  const isChuyenDe = type === 'chuyende';
  const isAll = part === 'all' || part === '-1';
  const partIndex = isAll ? 'all' : (parseInt(part) || 0);

  let content = null;
  if (isChuyenDe) {
    if (chemistryContent.chuyende && chemistryContent.chuyende[gradeNum]) {
      content = chemistryContent.chuyende[gradeNum];
    }
  } else {
    const semKey = semester === '1' ? 'hk1' : 'hk2';
    if (chemistryContent[gradeNum] && chemistryContent[gradeNum][semKey]) {
      content = chemistryContent[gradeNum][semKey];
    }
  }

  if (!content) {
    return res.status(404).json({ error: 'Không tìm thấy nội dung' });
  }

  if (!isAll && partIndex >= content.parts.length) {
    return res.status(404).json({ error: 'Phần không tồn tại' });
  }

  try {
    const doc = generateDocumentForPart(grade, semester, partIndex, type);
    if (!doc) {
      return res.status(500).json({ error: 'Không thể tạo tài liệu' });
    }

    const buffer = await Packer.toBuffer(doc);
    let asciiFilename, utf8Filename;

    if (isChuyenDe) {
      asciiFilename = isAll 
        ? `ChuyenDe_Hoa${grade}_TronBo3ChuyenDe.docx`
        : `ChuyenDe_Hoa${grade}_ChuyenDe${partIndex + 1}.docx`;

      utf8Filename = isAll 
        ? `ChuyenDe_Hoa${grade}_TronBo3ChuyenDe.docx`
        : (content.parts[partIndex] && content.parts[partIndex].label 
            ? content.parts[partIndex].label.replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, '_') + '.docx'
            : asciiFilename);
    } else {
      asciiFilename = isAll 
        ? `LyThuyetHoa${grade}_HK${semester}_TronBoTatCaCacChuong.docx`
        : `LyThuyetHoa${grade}_HK${semester}_Chuong${partIndex + 1}.docx`;

      utf8Filename = isAll 
        ? `LyThuyetHoa${grade}_HK${semester}_TronBoTatCaCacChuong.docx`
        : (content.parts[partIndex] && content.parts[partIndex].label 
            ? content.parts[partIndex].label.replace(/[\\/:*?"<>|]/g, '_').replace(/\s+/g, '_') + '.docx'
            : asciiFilename);
    }

    res.setHeader('Content-Disposition', `attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodeURIComponent(utf8Filename)}`);
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition, Content-Length');
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
  info.chuyende = {};
  [10, 11, 12].forEach(grade => {
    if (chemistryContent.chuyende && chemistryContent.chuyende[grade]) {
      info.chuyende[grade] = {
        title: chemistryContent.chuyende[grade].title,
        totalParts: chemistryContent.chuyende[grade].parts.length
      };
    }
  });
  res.json(info);
});

// Start server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server chạy tại: http://localhost:${PORT}`);
  });
}

module.exports = app;
