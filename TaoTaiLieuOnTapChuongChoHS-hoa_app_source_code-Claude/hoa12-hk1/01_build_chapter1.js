const path = require("path");
const { createHelpers } = require("../lib/docxhelpers.js");

const IMG_DIR = path.join(__dirname, "img");
const IMG_DIMS = {
  "01_este_hoa.png": [1235, 437],
  "02_chatbeo.png": [1428, 554],
  "03_giatrua_mixen.png": [1286, 606],
  "04_phanloai_carbohydrate.png": [1235, 495],
  "05_lienket_peptide.png": [1321, 437],
  "06_trunghop_trungnguong.png": [1455, 525],
  "07_pin_galvani.png": [1254, 682],
  "08_dienphan_nacl.png": [1235, 634],
  "09_glucose_structure.png": [1377, 583],
  "10_aminoacid_structure.png": [1235, 495],
  "11_amine_structure.png": [1259, 592],
  "12_monome_polymer.png": [1308, 583],
  "13_lienket_kimloai.png": [1014, 700],
  "14_tachkimloai.png": [1308, 671],
  "15_anmon_baove.png": [1414, 612],
};

const H = createHelpers(IMG_DIR, IMG_DIMS);
const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel,
  P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions,
  ChapterIntro, DataTable, Img, spacer, TitlePage, Eq } = H;

const children = [];
children.push(...TitlePage(
  "TÓM TẮT LÝ THUYẾT TRỌNG TÂM",
  "HÓA HỌC 12 — HỌC KÌ 1",
  "Bộ sách Kết nối tri thức với cuộc sống",
  "Nội dung: Chương 1: Ester – Lipid • Chương 2: Carbohydrate • Chương 3: Hợp chất chứa Nitrogen • Chương 4: Polymer • Chương 5: Pin điện và điện phân • Chương 6: Đại cương về kim loại (Bài 18–20 thuộc HK1; Bài 21–23 bổ sung để liền mạch kiến thức)"
));

// ============ CHƯƠNG 1: ESTER - LIPID ============
children.push(Chapter("CHƯƠNG 1: ESTER – LIPID"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Ester tạo nên **hương thơm đặc trưng của hoa quả** (chuối, dứa, táo...) — được dùng làm hương liệu thực phẩm, mĩ phẩm, nước hoa.",
  "**Chất béo** là thành phần dinh dưỡng thiết yếu, dự trữ năng lượng cho cơ thể; hiểu về chất béo no/không no giúp lựa chọn chế độ ăn hợp lí, tốt cho tim mạch.",
  "Phản ứng xà phòng hoá là cơ sở sản xuất **xà phòng** — một trong những phát minh hoá học lâu đời và quan trọng nhất của loài người trong vệ sinh, y tế.",
]));
children.push(spacer());

children.push(Bai("Bài 1. Ester – Lipid"));
children.push(Section("I. Ester"));
children.push(P("**Ester** là hợp chất hữu cơ thu được khi thay nhóm **–OH** ở nhóm carboxyl của acid carboxylic bằng nhóm **–OR'**. Công thức cấu tạo chung: **R–COO–R'**."));
children.push(...Bullet([
  "**Danh pháp:** tên gốc hydrocarbon R' + tên gốc acid RCOOH (đổi đuôi \"ic\" thành \"at\"). Ví dụ: CH₃COOC₂H₅ là ethyl acetate.",
  "**Tính chất vật lí:** đa số là chất lỏng hoặc rắn dễ bay hơi, có **mùi thơm đặc trưng** (mùi hoa quả); ít tan hoặc không tan trong nước, nhẹ hơn nước.",
]));
children.push(...Img("01_este_hoa.png", 460, "Phản ứng ester hoá (thuận nghịch, xúc tác H2SO4 đặc) và phản ứng thuỷ phân ester."));
children.push(Section("II. Tính chất hoá học và điều chế ester"));
children.push(DataTable(
  ["Phản ứng", "Điều kiện", "Đặc điểm"],
  [
    ["Thuỷ phân trong môi trường acid", "H⁺, đun nóng", "Thuận nghịch: tạo lại acid + alcohol"],
    ["Thuỷ phân trong môi trường base (xà phòng hoá)", "dd NaOH/KOH, đun nóng", "Một chiều: tạo muối (RCOONa) + alcohol"],
    ["Ester hoá (điều chế ester)", "acid + alcohol, xúc tác H2SO4 đặc, t°", "Thuận nghịch"],
  ],
));
children.push(spacer());
children.push(Sub("Phương trình phản ứng minh hoạ"));
children.push(Eq("**Ester hoá:**  CH₃COOH  +  C₂H₅OH  ⇌(H₂SO₄ đặc, t°)  CH₃COOC₂H₅  +  H₂O"));
children.push(Eq("**Thuỷ phân trong acid:**  CH₃COOC₂H₅  +  H₂O  ⇌(H⁺, t°)  CH₃COOH  +  C₂H₅OH"));
children.push(Eq("**Thuỷ phân trong base (xà phòng hoá):**  CH₃COOC₂H₅  +  NaOH  →(t°)  CH₃COONa  +  C₂H₅OH"));
children.push(Sub("Giải thích"));
children.push(P("Phản ứng ester hoá là phản ứng **thuận nghịch** vì ester sinh ra cũng có thể bị nước (sinh ra đồng thời) thuỷ phân trở lại acid và alcohol. Trong khi đó, phản ứng xà phòng hoá là **một chiều** vì ion carboxylate (RCOO⁻) trong môi trường base rất bền, không phản ứng ngược lại với alcohol để tái tạo ester."));
children.push(Section("III. Lipid – Chất béo"));
children.push(P("**Lipid** là những hợp chất hữu cơ có trong tế bào sống, không hoà tan trong nước nhưng tan tốt trong dung môi hữu cơ không cực (ether, chloroform...). **Chất béo** là **triester (triglyceride)** của glycerol với các acid béo (acid monocarboxylic mạch dài, không phân nhánh)."));
children.push(...Img("02_chatbeo.png", 420, "Cấu tạo chất béo: glycerol liên kết ester với 3 gốc acid béo."));
children.push(...Bullet([
  "**Chất béo no** (từ acid béo no như acid stearic, palmitic): thường ở thể **rắn** ở nhiệt độ thường (mỡ động vật).",
  "**Chất béo không no** (từ acid béo không no như acid oleic, linoleic): thường ở thể **lỏng** (dầu thực vật).",
]));
children.push(Section("IV. Tính chất hoá học của chất béo"));
children.push(...Bullet([
  "**Phản ứng thuỷ phân** (môi trường acid hoặc xà phòng hoá bằng base) tạo glycerol và các acid béo (hoặc muối của chúng).",
  "**Phản ứng hydro hoá** chất béo lỏng (có gốc acid béo không no) với H₂ (xúc tác Ni, t°) chuyển thành chất béo rắn — dùng sản xuất **bơ thực vật (margarine)**.",
  "**Phản ứng oxi hoá chậm** trong không khí làm dầu mỡ để lâu bị **ôi, có mùi khó chịu** (do liên kết đôi C=C bị oxi hoá).",
]));
children.push(Sub("Phương trình phản ứng minh hoạ"));
children.push(Eq("**Xà phòng hoá chất béo:**  (RCOO)₃C₃H₅  +  3NaOH  →(t°)  3RCOONa  +  C₃H₅(OH)₃"));
children.push(Eq("**Thuỷ phân trong acid:**  (RCOO)₃C₃H₅  +  3H₂O  ⇌(H⁺, t°)  3RCOOH  +  C₃H₅(OH)₃"));
children.push(Eq("**Hydro hoá chất béo lỏng (triolein → tristearin):**  (C₁₇H₃₃COO)₃C₃H₅  +  3H₂  →(Ni, t°)  (C₁₇H₃₅COO)₃C₃H₅"));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao dầu ăn (chất béo không no) thường ở thể lỏng còn mỡ động vật (chất béo no) thường ở thể rắn?", a: "Vì gốc acid béo không no có liên kết đôi C=C làm mạch carbon bị 'gãy khúc', các phân tử khó xếp khít nhau, làm giảm lực tương tác van der Waals giữa các phân tử → nhiệt độ nóng chảy thấp hơn, tồn tại ở thể lỏng." },
]));

children.push(Bai("Bài 2. Xà phòng và chất giặt rửa"));
children.push(Section("I. Xà phòng"));
children.push(P("**Xà phòng** là hỗn hợp muối sodium hoặc potassium của các acid béo (RCOONa/RCOOK), được sản xuất chủ yếu bằng phản ứng **xà phòng hoá chất béo**."));
children.push(Section("II. Chất giặt rửa tổng hợp"));
children.push(P("Là các hợp chất có cấu tạo tương tự xà phòng (một đầu ưa nước, một đuôi kị nước dài) nhưng không phải muối của acid béo, ví dụ muối sodium của acid alkylbenzenesulfonic."));
children.push(Section("III. Cơ chế hoạt động của xà phòng và chất giặt rửa"));
children.push(...Img("03_giatrua_mixen.png", 460, "Cơ chế giặt rửa: phân tử xà phòng bao quanh vết bẩn dầu mỡ tạo thành mixen, giúp kéo vết bẩn ra khỏi bề mặt vải."));
children.push(Sub("Giải thích"));
children.push(P("Phân tử xà phòng có cấu tạo **\"lưỡng tính\" về độ phân cực**: đầu **–COO⁻Na⁺ ưa nước** (phân cực, tan trong nước) và đuôi **hydrocarbon dài kị nước** (không phân cực, tan trong dầu mỡ). Khi giặt, đuôi kị nước chui vào và hoà tan trong các hạt dầu mỡ bám trên vải, còn đầu ưa nước quay ra ngoài tiếp xúc với nước, tạo thành các hạt hình cầu li ti gọi là **mixen (micelle)**. Nhờ tác động cơ học (vò, giũ), các mixen mang theo vết bẩn tách ra khỏi bề mặt vải và phân tán vào nước, bị rửa trôi."));
children.push(NoteBox("So sánh xà phòng và chất giặt rửa tổng hợp", [
  "**Xà phòng:** dễ phân huỷ sinh học (thân thiện môi trường hơn) nhưng tạo kết tủa với ion Ca²⁺, Mg²⁺ trong **nước cứng**, làm giảm tác dụng giặt rửa.",
  "**Chất giặt rửa tổng hợp:** vẫn dùng tốt trong nước cứng (muối calcium, magnesium của chúng vẫn tan) nhưng khó phân huỷ sinh học hơn, có thể gây ô nhiễm nguồn nước nếu dùng quá nhiều.",
]));
children.push(Bai("Ôn tập Chương 1"));
children.push(...Bullet([
  "Ester (R–COO–R') được điều chế từ phản ứng ester hoá (thuận nghịch); bị thuỷ phân trong môi trường acid (thuận nghịch) hoặc base (một chiều – xà phòng hoá).",
  "Chất béo là triester của glycerol với acid béo; chất béo không no thường lỏng, chất béo no thường rắn.",
  "Xà phòng và chất giặt rửa hoạt động nhờ cấu tạo phân tử có đầu ưa nước – đuôi kị nước, tạo mixen bao lấy vết bẩn dầu mỡ.",
]));
children.push(spacer());

module.exports = { children, H };
