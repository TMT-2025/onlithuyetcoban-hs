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

  const gradeNum = parseInt(grade);
  const semKey = semester === '1' ? 'hk1' : 'hk2';

  if (!chemistryContent[gradeNum] || !chemistryContent[gradeNum][semKey]) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    return res.end(JSON.stringify({ error: 'Không tìm thấy nội dung' }));
  }

  const content = chemistryContent[gradeNum][semKey];
  const parts = content.parts.map(p => ({
    id: p.id,
    label: p.label
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
