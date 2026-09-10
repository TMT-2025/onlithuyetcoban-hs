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
    const filename = `LyThuyetHoa${grade}_HK${semester}_Phan${partIndex + 1}.docx`;

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`);
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
  res.json(info);
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🧪 Ứng dụng Tài liệu Hóa học đang chạy tại: http://localhost:${PORT}`);
    console.log(`📚 Hỗ trợ: Hóa 10, 11, 12 – HK1 và HK2`);
    console.log(`📄 Mỗi học kỳ chia thành tối đa 7 phần tải xuống`);
  });
}

module.exports = app;
