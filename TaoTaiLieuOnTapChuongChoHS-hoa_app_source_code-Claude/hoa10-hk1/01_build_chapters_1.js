const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle,
  convertInchesToTwip, PageBreak, LevelFormat, Numbering, ImageRun
} = require("docx");
const fs = require("fs");
const path = require("path");
const { PNG } = (() => { try { return require("pngjs"); } catch (e) { return {}; } })();

const IMG_DIMS = {
  "01_mohinh_nguyentu.png": [830, 848],
  "02_tyle_kichthuoc.png": [1142, 586],
  "03_dongvi_hydrogen.png": [1455, 637],
  "04_orbital_s_p.png": [1295, 614],
  "05_thutu_mucnangluong.png": [1190, 628],
  "06_o_luongtu_oxygen.png": [1521, 429],
  "07_khoi_nguyento.png": [1269, 776],
  "08_xuhuong_bienoi.png": [1067, 963],
  "09_lienket_ion.png": [1238, 583],
  "10_lewis_phanttu.png": [1610, 548],
  "11_sigma_pi.png": [1300, 406],
  "12_lienket_hydrogen.png": [1145, 614],
  "13_oxihoa_khu.png": [1238, 552],
};
const IMG_DIR = path.join(__dirname, "img");

const NAVY = "1F3864";
const TEAL = "0F6E56";
const CORAL = "993C1D";
const GRAY = "5F5E5A";
const NOTEBG = "EAF3DE";
const NOTEBORDER = "97C459";
const TABLEHEADBG = "1F3864";

// ---- inline bold parser: **bold** -> bold run ----
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

function NoteBox(title, items) {
  const children = [
    new Paragraph({
      children: [new TextRun({ text: title, bold: true, size: 22, color: TEAL })],
      spacing: { after: 60 },
    }),
    ...items.map(t => new Paragraph({
      children: runs(t),
      bullet: { level: 0 },
      spacing: { after: 40, line: 280 },
    })),
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: NOTEBORDER },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: NOTEBORDER },
      left: { style: BorderStyle.SINGLE, size: 6, color: NOTEBORDER },
      right: { style: BorderStyle.SINGLE, size: 6, color: NOTEBORDER },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: NOTEBG },
            margins: { top: 100, bottom: 100, left: 150, right: 150 },
            children,
          }),
        ],
      }),
    ],
  });
}

function Img(filename, widthPx, caption) {
  const dims = IMG_DIMS[filename];
  const w = widthPx || 420;
  const h = Math.round(dims[1] * (w / dims[0]));
  const data = fs.readFileSync(path.join(IMG_DIR, filename));
  const imgPara = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: caption ? 40 : 160 },
    children: [
      new ImageRun({
        data,
        transformation: { width: w, height: h },
        type: "png",
      }),
    ],
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

function Example(title, items) {
  const children = [
    new Paragraph({
      children: [new TextRun({ text: title, bold: true, size: 22, color: NAVY })],
      spacing: { after: 60 },
    }),
    ...items.map(t => new Paragraph({
      children: runs(t, { size: 20 }),
      spacing: { after: 50, line: 280 },
    })),
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: "85B7EB" },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "85B7EB" },
      left: { style: BorderStyle.SINGLE, size: 6, color: "85B7EB" },
      right: { style: BorderStyle.SINGLE, size: 6, color: "85B7EB" },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: "E6F1FB" },
            margins: { top: 100, bottom: 100, left: 150, right: 150 },
            children,
          }),
        ],
      }),
    ],
  });
}

function CheckQuestions(title, qas) {
  const children = [
    new Paragraph({
      children: [new TextRun({ text: title, bold: true, size: 22, color: CORAL })],
      spacing: { after: 60 },
    }),
  ];
  qas.forEach((qa, i) => {
    children.push(new Paragraph({
      children: runs(`**Câu ${i + 1}.** ${qa.q}`),
      spacing: { after: 30, line: 280 },
    }));
    children.push(new Paragraph({
      children: runs(`**Đáp án:** ${qa.a}`, { italics: true }),
      spacing: { after: 100, line: 280 },
      indent: { left: 300 },
    }));
  });
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: "F0997B" },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "F0997B" },
      left: { style: BorderStyle.SINGLE, size: 6, color: "F0997B" },
      right: { style: BorderStyle.SINGLE, size: 6, color: "F0997B" },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: "FAECE7" },
            margins: { top: 100, bottom: 100, left: 150, right: 150 },
            children,
          }),
        ],
      }),
    ],
  });
}

function ChapterIntro(title, items) {
  const children = [
    new Paragraph({
      children: [new TextRun({ text: title, bold: true, size: 22, color: "534AB7" })],
      spacing: { after: 60 },
    }),
    ...items.map(t => new Paragraph({
      children: runs(t),
      bullet: { level: 0 },
      spacing: { after: 60, line: 280 },
    })),
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: "AFA9EC" },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "AFA9EC" },
      left: { style: BorderStyle.SINGLE, size: 6, color: "AFA9EC" },
      right: { style: BorderStyle.SINGLE, size: 6, color: "AFA9EC" },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            shading: { type: ShadingType.CLEAR, fill: "EEEDFE" },
            margins: { top: 100, bottom: 100, left: 150, right: 150 },
            children,
          }),
        ],
      }),
    ],
  });
}

function spacer() {
  return new Paragraph({ text: "", spacing: { after: 60 } });
}

function DataTable(headers, rows, colWidths) {
  const total = 9350;
  const widths = colWidths || headers.map(() => Math.floor(total / headers.length));
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: { type: ShadingType.CLEAR, fill: TABLEHEADBG },
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: h, bold: true, color: "FFFFFF", size: 20 })],
      })],
    })),
  });
  const bodyRows = rows.map((r, ri) => new TableRow({
    children: r.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      shading: ri % 2 === 1 ? { type: ShadingType.CLEAR, fill: "F1EFE8" } : undefined,
      margins: { top: 60, bottom: 60, left: 100, right: 100 },
      children: [new Paragraph({
        alignment: AlignmentType.LEFT,
        children: runs(c, { size: 20 }),
      })],
    })),
  }));
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    rows: [headerRow, ...bodyRows],
  });
}

function TitlePage() {
  return [
    new Paragraph({ text: "", spacing: { after: 1200 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "TÓM TẮT LÝ THUYẾT TRỌNG TÂM", bold: true, size: 44, color: NAVY })],
      spacing: { after: 200 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "HÓA HỌC 10 — HỌC KÌ 1", bold: true, size: 36, color: TEAL })],
      spacing: { after: 100 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "Bộ sách Kết nối tri thức với cuộc sống", italics: true, size: 24, color: GRAY })],
      spacing: { after: 600 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "Nội dung: Mở đầu • Chương 1: Cấu tạo nguyên tử • Chương 2: Bảng tuần hoàn các nguyên tố hoá học • Chương 3: Liên kết hoá học • Chương 4: Phản ứng oxi hoá – khử", size: 22, color: GRAY })],
      spacing: { after: 1600 },
    }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

const numbering = {
  config: [
    {
      reference: "default-bullets",
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 260 } } } },
      ],
    },
  ],
};

const children = [];
children.push(...TitlePage());

// ================= MỞ ĐẦU =================
children.push(Chapter("MỞ ĐẦU: NHẬP MÔN HÓA HỌC"));
children.push(Section("I. Đối tượng nghiên cứu của hoá học"));
children.push(P("Hoá học là ngành khoa học thuộc lĩnh vực khoa học tự nhiên, nghiên cứu về **thành phần, cấu trúc, tính chất và sự biến đổi của chất**, đồng thời nghiên cứu **ứng dụng của chúng** trong đời sống."));
children.push(P("Đối tượng nghiên cứu của hoá học là **chất** và **sự biến đổi của chất** (biến đổi vật lí, biến đổi hoá học)."));
children.push(Section("II. Vai trò của hoá học đối với đời sống và sản xuất"));
children.push(...Bullet([
  "Là cơ sở của nhiều ngành công nghiệp: hoá chất, dược phẩm, phân bón, vật liệu, năng lượng, thực phẩm...",
  "Gắn bó mật thiết với đời sống hằng ngày: y tế, nông nghiệp, môi trường, mĩ phẩm...",
  "Có mối liên hệ chặt chẽ với các ngành khoa học khác: Vật lí, Sinh học, Y – Dược, Nông nghiệp, Khoa học Trái Đất...",
]));
children.push(Section("III. Phương pháp học tập và nghiên cứu hoá học"));
children.push(...Bullet([
  "**Phương pháp học tập:** quan sát – mô tả; phân loại – hệ thống hoá; mô hình hoá.",
  "**Phương pháp nghiên cứu:** nghiên cứu lí thuyết; nghiên cứu thực nghiệm; nghiên cứu ứng dụng (kết hợp lí thuyết và thực nghiệm).",
]));
children.push(spacer());

// ================= CHƯƠNG 1 =================
children.push(Chapter("CHƯƠNG 1: CẤU TẠO NGUYÊN TỬ"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Hiểu cấu tạo nguyên tử là **nền tảng để giải thích mọi tính chất hoá học** — từ vì sao muối ăn có vị mặn đến vì sao vàng không bị gỉ.",
  "**Đồng vị phóng xạ** được dùng để chẩn đoán và điều trị ung thư (I-131, Co-60), khử trùng thiết bị y tế, và xác định niên đại cổ vật, hoá thạch bằng phương pháp **carbon-14**.",
  "Việc khám phá electron, proton, neutron đã mở đường cho công nghệ hạt nhân (nhà máy điện hạt nhân), vật liệu bán dẫn trong chip điện tử, và các thiết bị chẩn đoán hình ảnh y khoa (PET, MRI).",
]));
children.push(spacer());

children.push(Bai("Bài 1. Thành phần của nguyên tử"));
children.push(Section("I. Các loại hạt cơ bản cấu tạo nên nguyên tử"));
children.push(P("Nguyên tử gồm **hạt nhân** (ở tâm, chứa proton và neutron) và **lớp vỏ electron** (các electron chuyển động xung quanh hạt nhân)."));
children.push(DataTable(
  ["Loại hạt", "Kí hiệu", "Khối lượng (amu)", "Điện tích tương đối", "Vị trí"],
  [
    ["Electron", "e", "≈ 0,00055", "–1", "Lớp vỏ"],
    ["Proton", "p", "≈ 1", "+1", "Hạt nhân"],
    ["Neutron", "n", "≈ 1", "0", "Hạt nhân"],
  ],
));
children.push(spacer());
children.push(...Img("01_mohinh_nguyentu.png", 320, "Mô hình cấu tạo nguyên tử: hạt nhân ở tâm, các electron chuyển động trên các lớp xung quanh."));
children.push(NoteBox("Kết luận", [
  "Nguyên tử có cấu tạo rỗng, gồm hạt nhân mang điện dương ở tâm và lớp vỏ electron mang điện âm chuyển động xung quanh.",
  "Nguyên tử trung hoà về điện: **số proton (p) = số electron (e)**.",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Nguyên tử aluminium (nhôm) có 13 proton và 14 neutron trong hạt nhân. Hỏi nguyên tử này có bao nhiêu electron?",
  "Lời giải: Vì nguyên tử trung hoà về điện nên số electron = số proton = 13.",
]));
children.push(Section("II. Kích thước và khối lượng nguyên tử"));
children.push(...Bullet([
  "Đường kính nguyên tử cỡ **10⁻¹⁰ m**; đường kính hạt nhân nhỏ hơn đường kính nguyên tử khoảng **10 000 – 100 000 lần** → nguyên tử có cấu tạo rỗng.",
  "Đơn vị khối lượng nguyên tử **amu**: 1 amu = 1/12 khối lượng một nguyên tử đồng vị carbon-12 ≈ 1,6605.10⁻²⁴ g.",
  "Khối lượng nguyên tử tập trung hầu như toàn bộ ở **hạt nhân** vì khối lượng electron rất nhỏ so với proton, neutron.",
]));
children.push(...Img("02_tyle_kichthuoc.png", 380, "So sánh tỉ lệ kích thước giữa nguyên tử và hạt nhân — vì sao nói nguyên tử có cấu tạo rỗng."));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao nói nguyên tử có cấu tạo rỗng?", a: "Vì đường kính hạt nhân rất nhỏ so với đường kính nguyên tử (nhỏ hơn khoảng 10 000 – 100 000 lần), phần không gian còn lại là nơi các electron chuyển động." },
  { q: "Khối lượng của nguyên tử tập trung chủ yếu ở đâu? Vì sao?", a: "Ở hạt nhân, vì khối lượng electron rất nhỏ (≈ 0,00055 amu) so với proton và neutron (≈ 1 amu mỗi hạt)." },
]));

children.push(Bai("Bài 2. Nguyên tố hoá học"));
children.push(Section("I. Hạt nhân nguyên tử"));
children.push(...Bullet([
  "**Điện tích hạt nhân** = số đơn vị điện tích hạt nhân = **Z** (số proton).",
  "**Số khối A = Z + N** (N: số neutron). Số khối không có đơn vị.",
]));
children.push(Section("II. Nguyên tố hoá học"));
children.push(...Bullet([
  "**Số hiệu nguyên tử (Z)**: là số đơn vị điện tích hạt nhân, đặc trưng cho một nguyên tố hoá học.",
  "**Nguyên tố hoá học** là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng Z).",
  "**Kí hiệu nguyên tử:** ᴬZX, trong đó X là kí hiệu nguyên tố, A là số khối, Z là số hiệu nguyên tử (viết ở góc trên trái và góc dưới trái của X).",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Xác định số proton, neutron, electron và số khối của nguyên tử potassium (K), biết kí hiệu nguyên tử là ³⁹₁₉K.",
  "Lời giải: Z = 19 → số proton = số electron = 19. Số khối A = 39 → số neutron N = A − Z = 39 − 19 = 20.",
]));
children.push(Section("III. Đồng vị"));
children.push(P("**Đồng vị** là những nguyên tử có cùng số proton (cùng Z) nhưng khác số neutron (khác số khối A)."));
children.push(P("Ví dụ: Hydrogen có 3 đồng vị bền là ¹H (protium), ²H (deuterium – D), ³H (tritium – T)."));
children.push(...Img("03_dongvi_hydrogen.png", 440, "Ba đồng vị bền của nguyên tố hydrogen — cùng 1 proton nhưng khác số neutron."));
children.push(Section("IV. Nguyên tử khối trung bình"));
children.push(P("Nguyên tử khối trung bình của một nguyên tố (kí hiệu **A̅**) được tính theo phần trăm số nguyên tử của các đồng vị:"));
children.push(P("**A̅ = (A₁.x₁ + A₂.x₂ + ... )/100**  (x: phần trăm số nguyên tử mỗi đồng vị)", { align: AlignmentType.CENTER }));
children.push(Example("Ví dụ minh hoạ", [
  "Nguyên tố chlorine có 2 đồng vị bền: ³⁵Cl chiếm 75,77% và ³⁷Cl chiếm 24,23% số nguyên tử. Tính nguyên tử khối trung bình của chlorine.",
  "Lời giải: A̅ = (35 × 75,77 + 37 × 24,23)/100 ≈ **35,48**.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Hai nguyên tử có cùng số proton nhưng khác số neutron thì có phải là hai đồng vị của cùng một nguyên tố không?", a: "Đúng, vì đồng vị được định nghĩa là các nguyên tử cùng Z (cùng số proton), khác N (khác số khối A)." },
  { q: "Vì sao nguyên tử khối ghi trong bảng tuần hoàn thường là số thập phân (không nguyên)?", a: "Vì đó là nguyên tử khối trung bình, được tính theo tỉ lệ phần trăm số nguyên tử của các đồng vị tồn tại trong tự nhiên." },
]));

children.push(Bai("Bài 3. Cấu trúc lớp vỏ electron của nguyên tử"));
children.push(Section("I. Sự chuyển động của electron trong nguyên tử"));
children.push(P("Theo mô hình hiện đại, electron chuyển động rất nhanh quanh hạt nhân, không theo quỹ đạo xác định, tạo thành **đám mây electron**. **Orbital nguyên tử (AO)** là vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron khoảng 90%."));
children.push(...Bullet([
  "Orbital **s**: có dạng hình cầu.",
  "Orbital **p**: có dạng hình số 8 nổi, gồm 3 orbital pₓ, p_y, p_z định hướng theo 3 trục toạ độ.",
  "Mỗi ô orbital chứa tối đa **2 electron** có chiều tự quay ngược nhau (được kí hiệu bằng hai mũi tên ngược chiều).",
]));
children.push(...Img("04_orbital_s_p.png", 400, "Hình dạng orbital s (hình cầu) và orbital p (hình số 8 nổi)."));
children.push(Section("II. Lớp và phân lớp electron"));
children.push(DataTable(
  ["Lớp (n)", "1", "2", "3", "4"],
  [
    ["Tên lớp", "K", "L", "M", "N"],
    ["Số electron tối đa (2n²)", "2", "8", "18", "32"],
  ],
));
children.push(spacer());
children.push(P("Mỗi lớp electron chia thành các **phân lớp** kí hiệu s, p, d, f. Số electron tối đa: phân lớp s chứa **2e**, phân lớp p chứa **6e**, phân lớp d chứa **10e**, phân lớp f chứa **14e**."));
children.push(Section("III. Cấu hình electron nguyên tử"));
children.push(Sub("1. Ba nguyên lí, quy tắc cơ bản"));
children.push(...Bullet([
  "**Nguyên lí vững bền:** ở trạng thái cơ bản, electron chiếm lần lượt các orbital có mức năng lượng từ thấp đến cao: 1s 2s 2p 3s 3p 4s 3d 4p 5s...",
  "**Nguyên lí Pauli:** mỗi orbital chỉ chứa tối đa 2 electron và có chiều tự quay ngược nhau.",
  "**Quy tắc Hund:** trong cùng một phân lớp, các electron được phân bố sao cho số electron độc thân là tối đa và có chiều tự quay giống nhau, trước khi ghép đôi.",
]));
children.push(...Img("05_thutu_mucnangluong.png", 480, "Trật tự mức năng lượng các orbital — cơ sở của nguyên lí vững bền."));
children.push(Sub("2. Cách viết cấu hình electron nguyên tử"));
children.push(P("Bước 1: Xác định số electron (bằng số proton Z). Bước 2: Điền electron theo mức năng lượng tăng dần. Bước 3: Sắp xếp lại các phân lớp theo đúng thứ tự lớp (1, 2, 3...) để viết cấu hình chính thức."));
children.push(P("Ví dụ: Nguyên tử Na (Z = 11): 1s² 2s² 2p⁶ 3s¹."));
children.push(Sub("3. Biểu diễn cấu hình electron theo ô orbital"));
children.push(P("Ô orbital giúp thể hiện rõ số electron độc thân — áp dụng quy tắc Hund khi điền các electron cuối cùng vào một phân lớp chưa bão hoà."));
children.push(...Img("06_o_luongtu_oxygen.png", 480, "Cấu hình electron theo ô orbital của nguyên tử oxygen (Z = 8): 1s² 2s² 2p⁴, có 2 electron độc thân."));
children.push(Example("Ví dụ minh hoạ", [
  "Viết cấu hình electron của nguyên tử chlorine (Z = 17) và cho biết chlorine có bao nhiêu electron độc thân.",
  "Lời giải: Điền theo mức năng lượng tăng dần: 1s² 2s² 2p⁶ 3s² 3p⁵ → sắp xếp lại theo lớp (đã đúng thứ tự). Phân lớp 3p⁵ có 5 electron trong 3 ô orbital (chứa tối đa 6) nên có **1 electron độc thân**.",
]));
children.push(Section("IV. Đặc điểm của lớp electron ngoài cùng"));
children.push(NoteBox("Ghi nhớ", [
  "Lớp electron ngoài cùng có tối đa **8 electron** (riêng lớp K tối đa 2 electron).",
  "Nguyên tử có **8e** ở lớp ngoài cùng (hoặc 2e đối với He) là khí hiếm, bền vững, không hoạt động hoá học.",
  "Nguyên tử có 1, 2, 3 electron lớp ngoài cùng thường là **kim loại** (trừ H, He, B).",
  "Nguyên tử có 5, 6, 7 electron lớp ngoài cùng thường là **phi kim**.",
  "Nguyên tử có 4 electron lớp ngoài cùng có thể là kim loại hoặc phi kim.",
]));

children.push(Bai("Ôn tập Chương 1"));
children.push(...Bullet([
  "Nguyên tử gồm hạt nhân (p, n) và vỏ electron (e); nguyên tử trung hoà điện nên số p = số e.",
  "Số khối A = Z + N; kí hiệu nguyên tử ᴬZX; đồng vị là các nguyên tử cùng Z khác A.",
  "Electron được phân bố vào các lớp, phân lớp, orbital theo nguyên lí vững bền, nguyên lí Pauli và quy tắc Hund.",
  "Số electron lớp ngoài cùng quyết định nhiều tính chất hoá học cơ bản của nguyên tố.",
]));
children.push(spacer());

fs.writeFileSync("chapter1_partA.json", "ok");
console.log("Part A built, continuing...");
module.exports = { children, Chapter, Bai, Section, Sub, P, Bullet, NoteBox, DataTable, spacer, runs, numbering, Document, Packer, TextRun, Paragraph, AlignmentType, HeadingLevel, convertInchesToTwip, Img, Example, CheckQuestions, ChapterIntro };
