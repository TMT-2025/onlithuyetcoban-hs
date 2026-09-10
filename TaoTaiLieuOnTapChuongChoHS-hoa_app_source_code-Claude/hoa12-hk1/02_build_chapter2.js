const base = require("./01_build_chapter1.js");
const { children, H } = base;
const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions,
  ChapterIntro, DataTable, Img, spacer, Eq } = H;

children.push(Chapter("CHƯƠNG 2: CARBOHYDRATE"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Carbohydrate (glucose, tinh bột, cellulose...) là **nguồn cung cấp năng lượng chính** cho cơ thể người và động vật, đồng thời là vật liệu cấu trúc của thực vật (cellulose trong thành tế bào, gỗ, bông).",
  "**Glucose** được truyền trực tiếp vào tĩnh mạch để cấp cứu bệnh nhân suy nhược, hạ đường huyết trong y tế.",
  "**Tinh bột** là lương thực chủ yếu của loài người (gạo, ngô, khoai, sắn); **cellulose** là nguyên liệu sản xuất giấy, tơ sợi (tơ visco, tơ acetate), thuốc súng không khói.",
]));
children.push(spacer());

children.push(Bai("Bài 4. Giới thiệu về carbohydrate. Glucose và fructose"));
children.push(Section("I. Khái niệm và phân loại carbohydrate"));
children.push(P("**Carbohydrate** là những hợp chất hữu cơ tạp chức, đa số có công thức chung Cₙ(H₂O)ₘ. Dựa vào số đơn vị monosaccharide cấu thành, carbohydrate được chia thành 3 nhóm chính."));
children.push(...Img("04_phanloai_carbohydrate.png", 460, "Phân loại carbohydrate theo số đơn vị monosaccharide."));
children.push(Section("II. Glucose"));
children.push(...Bullet([
  "Công thức phân tử: **C₆H₁₂O₆**. Ở dạng mạch hở, glucose là hợp chất tạp chức **polyhydroxy aldehyde** (chứa 5 nhóm –OH và 1 nhóm –CHO): CH₂OH–[CHOH]₄–CHO.",
  "Trong dung dịch, glucose chủ yếu tồn tại ở **dạng mạch vòng** (α-glucose và β-glucose) do nhóm –OH ở C5 cộng vào nhóm –CHO.",
]));
children.push(...Img("09_glucose_structure.png", 480, "Cấu trúc phân tử glucose: dạng mạch hở (polyhydroxy aldehyde) và dạng mạch vòng."));
children.push(Sub("Tính chất hoá học"));
children.push(DataTable(
  ["Tính chất", "Phản ứng đặc trưng", "Hiện tượng / ứng dụng"],
  [
    ["Tính chất của polyalcohol (đa chức –OH)", "Hoà tan Cu(OH)2 ở nhiệt độ thường", "Tạo dung dịch màu xanh lam"],
    ["Tính chất của aldehyde (–CHO)", "Phản ứng tráng bạc (dd AgNO3/NH3)", "Tạo lớp bạc sáng bám vào thành ống nghiệm"],
    ["Tính chất của aldehyde", "Phản ứng với Cu(OH)2/OH⁻, đun nóng", "Tạo kết tủa đỏ gạch Cu2O"],
    ["Lên men rượu", "Xúc tác enzyme (men rượu)", "C6H12O6 → 2C2H5OH + 2CO2"],
  ],
));
children.push(spacer());
children.push(Sub("Phương trình phản ứng minh hoạ"));
children.push(Eq("**Hoà tan Cu(OH)₂:**  2C₆H₁₂O₆  +  Cu(OH)₂  →  (C₆H₁₁O₆)₂Cu  +  2H₂O"));
children.push(Eq("**Phản ứng tráng bạc:**  CH₂OH[CHOH]₄CHO  +  2AgNO₃  +  3NH₃  +  H₂O  →(t°)  CH₂OH[CHOH]₄COONH₄  +  2Ag↓  +  2NH₄NO₃"));
children.push(Eq("**Lên men rượu:**  C₆H₁₂O₆  →(enzyme)  2C₂H₅OH  +  2CO₂"));
children.push(Example("Ví dụ minh hoạ", [
  "Vì sao glucose vừa phản ứng được với Cu(OH)2 ở nhiệt độ thường (tạo dung dịch xanh lam) vừa phản ứng tráng bạc?",
  "Lời giải: Glucose có nhiều nhóm –OH liền kề nên thể hiện tính chất của polyalcohol (hoà tan Cu(OH)2 ở nhiệt độ thường); đồng thời glucose có nhóm chức –CHO nên thể hiện tính khử, tham gia phản ứng tráng bạc như một aldehyde.",
]));
children.push(Section("III. Fructose"));
children.push(P("**Fructose** là đồng phân của glucose (cùng công thức phân tử C₆H₁₂O₆), ở dạng mạch hở là **polyhydroxy ketone**. Trong môi trường **base (kiềm)**, fructose có thể chuyển hoá thành glucose, do đó fructose **vẫn tham gia được phản ứng tráng bạc** dù không có nhóm –CHO."));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Fructose không có nhóm –CHO nhưng vẫn tham gia phản ứng tráng bạc. Giải thích vì sao?", a: "Vì trong môi trường kiềm (NH3) của thuốc thử Tollens, fructose bị chuyển hoá thành glucose (có nhóm –CHO), nên vẫn xảy ra phản ứng tráng bạc." },
]));

children.push(Bai("Bài 5. Saccharose và maltose"));
children.push(Section("I. Saccharose"));
children.push(...Bullet([
  "Công thức phân tử **C₁₂H₂₂O₁₁**; do 1 gốc **α-glucose** và 1 gốc **β-fructose** liên kết với nhau qua nguyên tử oxygen (liên kết glycoside).",
  "**Không có nhóm –OH hemiacetal tự do** (nhóm này đã tham gia liên kết glycoside) nên saccharose **không có tính khử**, không tham gia phản ứng tráng bạc.",
  "Vẫn có tính chất của **polyalcohol** (hoà tan Cu(OH)2).",
  "Bị **thuỷ phân** trong môi trường acid hoặc nhờ enzyme tạo hỗn hợp glucose và fructose.",
]));
children.push(Eq("**Thuỷ phân saccharose:**  C₁₂H₂₂O₁₁  +  H₂O  →(H⁺, t°)  C₆H₁₂O₆ (glucose)  +  C₆H₁₂O₆ (fructose)"));
children.push(Section("II. Maltose"));
children.push(P("**Maltose** gồm 2 gốc **α-glucose** liên kết với nhau qua nguyên tử oxygen, nhưng vẫn còn **1 nhóm –OH hemiacetal tự do** → maltose **có tính khử**, tham gia được phản ứng tráng bạc. Thuỷ phân maltose tạo 2 phân tử glucose."));
children.push(Eq("**Thuỷ phân maltose:**  C₁₂H₂₂O₁₁  +  H₂O  →(H⁺, t°)  2C₆H₁₂O₆ (glucose)"));
children.push(Sub("Giải thích"));
children.push(P("Sự khác biệt về tính khử giữa saccharose và maltose xuất phát từ **cấu trúc liên kết glycoside**: ở saccharose, liên kết glycoside hình thành giữa 2 nhóm –OH hemiacetal của cả glucose và fructose nên không còn nhóm hemiacetal tự do; ở maltose, liên kết glycoside chỉ dùng nhóm –OH hemiacetal của 1 gốc glucose, gốc glucose còn lại vẫn còn nhóm –OH hemiacetal tự do, do đó vẫn thể hiện tính khử."));

children.push(Bai("Bài 6. Tinh bột và cellulose"));
children.push(Section("I. Tinh bột"));
children.push(...Bullet([
  "Công thức chung **(C₆H₁₀O₅)ₙ**, gồm hai thành phần: **amylose** (mạch không phân nhánh, xoắn thành lò xo) và **amylopectin** (mạch phân nhánh).",
  "**Phản ứng thuỷ phân** (nhờ acid hoặc enzyme) tạo glucose.",
  "**Phản ứng màu với iodine:** tinh bột tạo phức màu **xanh tím đặc trưng** với dung dịch iodine — dùng để nhận biết tinh bột (và ngược lại, nhận biết I₂ bằng hồ tinh bột).",
]));
children.push(Eq("**Thuỷ phân tinh bột:**  (C₆H₁₀O₅)ₙ  +  nH₂O  →(H⁺, t°)  nC₆H₁₂O₆"));
children.push(Section("II. Cellulose"));
children.push(...Bullet([
  "Công thức chung **(C₆H₁₀O₅)ₙ**, mạch **không phân nhánh**; mỗi gốc glucose còn **3 nhóm –OH tự do** → cellulose có công thức viết chi tiết hơn là [C₆H₇O₂(OH)₃]ₙ.",
  "Do có nhiều nhóm –OH, cellulose tham gia được **phản ứng ester hoá**: với HNO₃ đặc/H₂SO₄ đặc tạo **cellulose trinitrate** (dùng làm thuốc súng không khói); với anhydride acetic tạo **cellulose triacetate** (dùng làm tơ acetate, phim ảnh).",
  "Bị **thuỷ phân** (nhờ acid mạnh hoặc enzyme cellulase — con người không có enzyme này nên không tiêu hoá được cellulose) tạo glucose.",
]));
children.push(Eq("**Ester hoá với HNO₃ đặc:**  [C₆H₇O₂(OH)₃]ₙ  +  3nHNO₃  ⇌(H₂SO₄ đặc)  [C₆H₇O₂(ONO₂)₃]ₙ  +  3nH₂O"));
children.push(Eq("**Thuỷ phân cellulose:**  (C₆H₁₀O₅)ₙ  +  nH₂O  →(H⁺, t°)  nC₆H₁₂O₆"));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao con người không tiêu hoá được cellulose (như trong rau, gỗ) nhưng lại tiêu hoá được tinh bột (như cơm, bánh mì)?", a: "Vì cơ thể người có enzyme amylase để thuỷ phân tinh bột thành glucose, nhưng không có enzyme cellulase để thuỷ phân liên kết trong cellulose." },
]));

children.push(Bai("Ôn tập Chương 2"));
children.push(...Bullet([
  "Glucose (aldehyde đa chức) và fructose (ketone đa chức) là monosaccharide, có tính khử (tráng bạc) và tính chất polyalcohol.",
  "Saccharose không có tính khử (không còn OH hemiacetal tự do); maltose có tính khử (còn 1 OH hemiacetal tự do).",
  "Tinh bột và cellulose đều là polysaccharide (C6H10O5)n nhưng khác cấu trúc mạch (phân nhánh/không phân nhánh) dẫn tới khác biệt về tính chất và khả năng tiêu hoá.",
]));
children.push(spacer());

module.exports = { children, H };
