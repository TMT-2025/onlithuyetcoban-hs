const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  PageBreak, ImageRun,
} = require("docx");
const fs = require("fs");
const path = require("path");

const NAVY = "1F3864";
const TEAL = "0F6E56";
const CORAL = "993C1D";
const GRAY = "5F5E5A";

function createHelpers(imgDir, imgDims) {
  function runs(text, opts = {}) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(x => x !== "");
    return parts.map(p => {
      if (p.startsWith("**") && p.endsWith("**")) {
        return new TextRun({ text: p.slice(2, -2), bold: true, size: opts.size || 22, color: opts.color });
      }
      return new TextRun({ text: p, size: opts.size || 22, italics: opts.italics, color: opts.color });
    });
  }

  function P(text, opts = {}) {
    return new Paragraph({
      children: runs(text, opts),
      spacing: { after: 120, line: 300 },
      alignment: opts.align || AlignmentType.JUSTIFIED,
    });
  }

  function Chapter(text) {
    return new Paragraph({
      children: [new TextRun({ text, bold: true, size: 30, color: "FFFFFF" })],
      shading: { type: ShadingType.CLEAR, fill: NAVY },
      spacing: { before: 400, after: 240 },
      alignment: AlignmentType.CENTER,
      heading: HeadingLevel.HEADING_1,
      outlineLevel: 0,
    });
  }

  function Bai(text) {
    return new Paragraph({
      children: [new TextRun({ text, bold: true, size: 26, color: TEAL })],
      border: { bottom: { color: TEAL, space: 4, style: BorderStyle.SINGLE, size: 8 } },
      spacing: { before: 320, after: 160 },
      heading: HeadingLevel.HEADING_2,
      outlineLevel: 1,
    });
  }

  function Section(text) {
    return new Paragraph({
      children: [new TextRun({ text, bold: true, size: 23, color: NAVY })],
      spacing: { before: 220, after: 100 },
      heading: HeadingLevel.HEADING_3,
      outlineLevel: 2,
    });
  }

  function Sub(text) {
    return new Paragraph({
      children: [new TextRun({ text, bold: true, italics: true, size: 22, color: CORAL })],
      spacing: { before: 140, after: 80 },
    });
  }

  function Bullet(items) {
    return items.map(t => new Paragraph({
      children: runs(t),
      bullet: { level: 0 },
      spacing: { after: 80, line: 300 },
    }));
  }

  function boxTable(fill, border, children) {
    return new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 6, color: border },
        bottom: { style: BorderStyle.SINGLE, size: 6, color: border },
        left: { style: BorderStyle.SINGLE, size: 6, color: border },
        right: { style: BorderStyle.SINGLE, size: 6, color: border },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 100, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.CLEAR, fill },
              margins: { top: 100, bottom: 100, left: 150, right: 150 },
              children,
            }),
          ],
        }),
      ],
    });
  }

  function NoteBox(title, items) {
    const children = [
      new Paragraph({ children: [new TextRun({ text: title, bold: true, size: 22, color: TEAL })], spacing: { after: 60 } }),
      ...items.map(t => new Paragraph({ children: runs(t), bullet: { level: 0 }, spacing: { after: 40, line: 280 } })),
    ];
    return boxTable("EAF3DE", "97C459", children);
  }

  function Example(title, items) {
    const children = [
      new Paragraph({ children: [new TextRun({ text: title, bold: true, size: 22, color: NAVY })], spacing: { after: 60 } }),
      ...items.map(t => new Paragraph({ children: runs(t, { size: 20 }), spacing: { after: 50, line: 280 } })),
    ];
    return boxTable("E6F1FB", "85B7EB", children);
  }

  function CheckQuestions(title, qas) {
    const children = [
      new Paragraph({ children: [new TextRun({ text: title, bold: true, size: 22, color: CORAL })], spacing: { after: 60 } }),
    ];
    qas.forEach((qa, i) => {
      children.push(new Paragraph({ children: runs(`**Câu ${i + 1}.** ${qa.q}`), spacing: { after: 30, line: 280 } }));
      children.push(new Paragraph({ children: runs(`**Đáp án:** ${qa.a}`, { italics: true }), spacing: { after: 100, line: 280 }, indent: { left: 300 } }));
    });
    return boxTable("FAECE7", "F0997B", children);
  }

  function ChapterIntro(title, items) {
    const children = [
      new Paragraph({ children: [new TextRun({ text: title, bold: true, size: 22, color: "534AB7" })], spacing: { after: 60 } }),
      ...items.map(t => new Paragraph({ children: runs(t), bullet: { level: 0 }, spacing: { after: 60, line: 280 } })),
    ];
    return boxTable("EEEDFE", "AFA9EC", children);
  }

  function DataTable(headers, rows, colWidths) {
    const total = 9350;
    const widths = colWidths || headers.map(() => Math.floor(total / headers.length));
    const headerRow = new TableRow({
      tableHeader: true,
      children: headers.map((h, i) => new TableCell({
        width: { size: widths[i], type: WidthType.DXA },
        shading: { type: ShadingType.CLEAR, fill: NAVY },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: h, bold: true, color: "FFFFFF", size: 20 })] })],
      })),
    });
    const bodyRows = rows.map((r, ri) => new TableRow({
      children: r.map((c, i) => new TableCell({
        width: { size: widths[i], type: WidthType.DXA },
        shading: ri % 2 === 1 ? { type: ShadingType.CLEAR, fill: "F1EFE8" } : undefined,
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ alignment: AlignmentType.LEFT, children: runs(c, { size: 20 }) })],
      })),
    }));
    return new Table({ width: { size: total, type: WidthType.DXA }, columnWidths: widths, rows: [headerRow, ...bodyRows] });
  }

  function Img(filename, widthPx, caption) {
    let fullPath = path.join(imgDir, filename);
    if (!fs.existsSync(fullPath)) {
      const candidates = [
        path.resolve(__dirname, '..', 'assets/images/grade10', filename),
        path.resolve(__dirname, '..', 'assets/images/grade11', filename),
        path.resolve(__dirname, '..', 'assets/images/grade12', filename),
        path.resolve(process.cwd(), 'assets/images/grade10', filename),
        path.resolve(process.cwd(), 'assets/images/grade11', filename),
        path.resolve(process.cwd(), 'assets/images/grade12', filename)
      ];
      for (const cand of candidates) {
        if (fs.existsSync(cand)) {
          fullPath = cand;
          break;
        }
      }
    }

    if (!fs.existsSync(fullPath)) {
      console.warn('Image not found:', filename);
      return [];
    }

    const dims = (imgDims && imgDims[filename]) || [800, 450];
    const w = widthPx || 420;
    const h = Math.round(dims[1] * (w / dims[0]));
    const data = fs.readFileSync(fullPath);
    const imgPara = new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 120, after: caption ? 40 : 160 },
      children: [new ImageRun({ data, transformation: { width: w, height: h }, type: "png" })],
    });
    const out = [imgPara];
    if (caption) {
      out.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 160 },
        children: [new TextRun({ text: caption, italics: true, size: 18, color: GRAY })],
      }));
    }
    return out;
  }

  function Eq(text) {
    return new Paragraph({
      children: runs(text, { size: 22 }),
      alignment: AlignmentType.CENTER,
      spacing: { before: 60, after: 120 },
    });
  }

  function spacer() {
    return new Paragraph({ text: "", spacing: { after: 60 } });
  }

  function TitlePage(title1, title2, sub, contentLine) {
    return [
      new Paragraph({ text: "", spacing: { after: 1200 } }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: title1, bold: true, size: 44, color: NAVY })], spacing: { after: 200 } }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: title2, bold: true, size: 36, color: TEAL })], spacing: { after: 100 } }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: sub, italics: true, size: 24, color: GRAY })], spacing: { after: 600 } }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: contentLine, size: 22, color: GRAY })], spacing: { after: 1600 } }),
      new Paragraph({ children: [new PageBreak()] }),
    ];
  }

  return {
    Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel,
    runs, P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions,
    ChapterIntro, DataTable, Img, spacer, TitlePage, Eq,
  };
}

module.exports = { createHelpers };
