const path = require('path');
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, AlignmentType } = require('docx');
const chemistryContent = require('../chemistry-content');
const { createHelpers } = require('../lib/docxhelpers');

function generateDocumentForPart(grade, semester, partIndex) {
  const gradeNum = parseInt(grade);
  const semKey = semester === '1' ? 'hk1' : 'hk2';
  const content = chemistryContent[gradeNum] && chemistryContent[gradeNum][semKey];

  if (!content) return null;
  const part = content.parts[partIndex];
  if (!part) return null;

  const imgDir = path.resolve(__dirname, '..', 'assets', 'images', `grade${gradeNum}`);
  const H = createHelpers(imgDir, {});

  const children = [];

  // Header trang bìa / tiêu đề phần
  children.push(new Paragraph({ text: "", spacing: { after: 200 } }));
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "TÓM TẮT LÝ THUYẾT TRỌNG TÂM", bold: true, size: 36, color: "1F3864" })],
    spacing: { after: 120 },
  }));
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: `HÓA HỌC ${grade} — ${semester === '1' ? 'HỌC KÌ 1' : 'HỌC KÌ 2'}`, bold: true, size: 28, color: "0F6E56" })],
    spacing: { after: 100 },
  }));
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: part.label, bold: true, size: 24, color: "993C1D" })],
    spacing: { after: 120 },
  }));
  children.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Bộ sách Kết nối tri thức với cuộc sống • Tài liệu tự học & ôn thi chuyên sâu", italics: true, size: 20, color: "5F5E5A" })],
    spacing: { after: 280 },
  }));

  // Build the rich pedagogical content
  if (typeof part.builder === 'function') {
    const partChildren = part.builder(H);
    children.push(...partChildren);
  }

  // Footer cuối tài liệu
  children.push(H.spacer());
  children.push(new Paragraph({
    children: [new TextRun({
      text: `Tài liệu ôn tập lý thuyết – Hóa học ${grade} – ${semester === '1' ? 'Học kỳ 1' : 'Học kỳ 2'} – ${part.label}`,
      italics: true,
      size: 18,
      color: "5F5E5A"
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 300, after: 40 }
  }));
  children.push(new Paragraph({
    children: [new TextRun({
      text: "Bộ sách: Kết nối tri thức với cuộc sống – THCS-THPT Phan Văn Trị",
      italics: true,
      size: 18,
      color: "5F5E5A"
    })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 40, after: 40 }
  }));

  return new Document({
    styles: {
      default: {
        document: {
          run: { font: "Times New Roman", size: 22 }
        }
      }
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11907, height: 16840 },
          margin: {
            top: 1134,
            right: 1134,
            bottom: 1134,
            left: 1417
          }
        }
      },
      children
    }]
  });
}

module.exports = { generateDocumentForPart, Packer, chemistryContent };
