const { generateDocumentForPart, Packer, chemistryContent } = require('./generator');

async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition, Content-Length');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const url = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
  const pathname = url.pathname;
  const searchParams = url.searchParams;

  const grade = searchParams.get('grade') || (req.query && req.query.grade);
  const semester = searchParams.get('semester') || (req.query && req.query.semester);
  const part = searchParams.get('part') || (req.query && req.query.part);

  const isDownload = pathname.includes('/download') || (part !== undefined && part !== null);
  const isParts = !isDownload && (pathname.includes('/parts') || (grade !== undefined && grade !== null));

  // 1. Download endpoint
  if (isDownload) {
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
  }

  // 2. Parts endpoint
  if (isParts) {
    const gradeNum = parseInt(grade);
    const semKey = semester === '1' ? 'hk1' : 'hk2';

    if (!chemistryContent[gradeNum] || !chemistryContent[gradeNum][semKey]) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      return res.end(JSON.stringify({ error: 'Không tìm thấy nội dung' }));
    }

    const content = chemistryContent[gradeNum][semKey];
    const parts = content.parts.map(p => ({ id: p.id, label: p.label }));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({
      title: content.title,
      subtitle: content.subtitle,
      totalParts: parts.length,
      parts
    }));
  }

  // 3. Info endpoint
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
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify(info));
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  return res.end(JSON.stringify({ status: 'ok', message: 'API Ôn tập Lý thuyết Hóa học THPT' }));
}

handler.generateDocumentForPart = generateDocumentForPart;
module.exports = handler;
