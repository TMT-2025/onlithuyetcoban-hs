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
  const semester = url.searchParams.get('semester') || url.searchParams.get('term') || (req.query && (req.query.semester || req.query.term));
  const part = url.searchParams.get('part') || (req.query && req.query.part);
  const type = url.searchParams.get('type') || (req.query && req.query.type) || 'sgk';

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
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({ error: 'Không tìm thấy nội dung khối lớp hoặc chuyên đề' }));
  }

  if (!isAll && partIndex >= content.parts.length) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({ error: 'Phần không tồn tại' }));
  }

  try {
    const doc = generateDocumentForPart(grade, semester, partIndex, type);
    if (!doc) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      return res.end(JSON.stringify({ error: 'Không thể tạo tài liệu' }));
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

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    res.setHeader('Content-Disposition', `attachment; filename="${asciiFilename}"; filename*=UTF-8''${encodeURIComponent(utf8Filename)}`);
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Cache-Control', 'no-cache');

    if (typeof res.send === 'function') {
      return res.send(buffer);
    }
    return res.end(buffer);
  } catch (err) {
    console.error('Lỗi khi tạo docx:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({ error: 'Lỗi máy chủ khi tạo file: ' + err.message }));
  }
};
