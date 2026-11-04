const chemistryContent = require('../chemistry-content');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const url = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
  const grade = url.searchParams.get('grade') || (req.query && req.query.grade);
  const semester = url.searchParams.get('semester') || (req.query && req.query.semester);
  const type = url.searchParams.get('type') || (req.query && req.query.type) || 'sgk';

  const gradeNum = parseInt(grade);

  let content = null;
  if (type === 'chuyende') {
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
    return res.end(JSON.stringify({ error: 'Không tìm thấy nội dung' }));
  }

  const parts = content.parts.map(p => ({
    id: p.id,
    label: p.label,
    desc: p.desc || ''
  }));

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  return res.end(JSON.stringify({
    title: content.title,
    subtitle: content.subtitle,
    totalParts: parts.length,
    parts
  }));
};
