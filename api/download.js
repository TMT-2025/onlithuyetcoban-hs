const { generateDocumentForPart, Packer, chemistryContent } = require('./generator');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition, Content-Length');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const url = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
  const grade = url.searchParams.get('grade') || (req.query && req.query.grade);
  const semester = url.searchParams.get('semester') || (req.query && req.query.semester);
  const part = url.searchParams.get('part') || (req.query && req.query.part);

  const gradeNum = parseInt(grade);
  const semKey = semester === '1' ? 'hk1' : 'hk2';
  const partIndex = parseInt(part) || 0;

  if (!chemistryContent[gradeNum] || !chemistryContent[gradeNum][semKey]) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({ error: 'Không tìm thấy nội dung khối lớp hoặc học kì' }));
  }

  const content = chemistryContent[gradeNum][semKey];
  if (partIndex >= content.parts.length) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({ error: 'Phần không tồn tại' }));
  }

  try {
    const doc = generateDocumentForPart(grade, semester, partIndex);
    if (!doc) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      return res.end(JSON.stringify({ error: 'Không thể tạo tài liệu' }));
    }

    const buffer = await Packer.toBuffer(doc);
    const filename = 'LyThuyetHoa' + grade + '_HK' + semester + '_Phan' + (partIndex + 1) + '.docx';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', 'attachment; filename="' + filename + '"; filename*=UTF-8\'\'' + encodeURIComponent(filename));
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Cache-Control', 'no-cache');
    return res.end(buffer);
  } catch (err) {
    console.error('Lỗi khi tạo docx:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({ error: 'Lỗi máy chủ khi tạo file: ' + err.message }));
  }
};
