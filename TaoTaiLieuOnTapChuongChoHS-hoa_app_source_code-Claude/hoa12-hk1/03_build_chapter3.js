const base = require("./02_build_chapter2.js");
const { children, H } = base;
const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions,
  ChapterIntro, DataTable, Img, spacer, Eq } = H;

children.push(Chapter("CHƯƠNG 3: HỢP CHẤT CHỨA NITROGEN"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "**Amine** là nguyên liệu tổng hợp phẩm nhuộm, thuốc chữa bệnh (thuốc kháng histamine, gây tê...), và là monomer để sản xuất tơ tổng hợp (nylon).",
  "**Amino acid và protein** là thành phần cấu trúc cơ bản của sự sống — cơ bắp, da, tóc, kháng thể, hormone (insulin) đều là protein; một số amino acid được dùng làm **gia vị (mì chính – sodium glutamate)**, thực phẩm chức năng.",
  "**Enzyme** (bản chất protein) là chất xúc tác sinh học được ứng dụng rộng rãi trong công nghiệp thực phẩm (làm bánh, ủ rượu bia), sản xuất bột giặt sinh học, y học chẩn đoán.",
]));
children.push(spacer());

children.push(Bai("Bài 8. Amine"));
children.push(Section("I. Khái niệm, phân loại, danh pháp"));
children.push(P("**Amine** là hợp chất hữu cơ được tạo ra khi thay thế một, hai hoặc ba nguyên tử H trong phân tử ammonia (NH₃) bằng gốc hydrocarbon."));
children.push(DataTable(
  ["Bậc amine", "Cấu tạo", "Ví dụ"],
  [
    ["Bậc I", "R–NH2 (1 nguyên tử H bị thay thế)", "CH3NH2 (methylamine)"],
    ["Bậc II", "R–NH–R' (2 nguyên tử H bị thay thế)", "CH3–NH–CH3 (dimethylamine)"],
    ["Bậc III", "R–N(R')–R'' (3 nguyên tử H bị thay thế)", "(CH3)3N (trimethylamine)"],
  ],
));
children.push(spacer());
children.push(Section("II. Tính chất vật lí"));
children.push(P("Các amine mạch ngắn (methylamine, dimethylamine, trimethylamine, ethylamine) là **chất khí, mùi khai** giống ammonia, tan tốt trong nước. Amine có phân tử khối lớn hơn thường là chất lỏng hoặc rắn. **Aniline (C₆H₅NH₂)** là chất lỏng, ít tan trong nước, độc."));
children.push(Section("III. Tính chất hoá học"));
children.push(...Bullet([
  "**Tính base:** do nguyên tử N còn cặp electron chưa liên kết, amine thể hiện tính base giống ammonia — làm quỳ tím ẩm hoá xanh (với amine béo), phản ứng với acid tạo muối. Ví dụ: CH₃NH₂ + HCl → CH₃NH₃Cl.",
  "**Amine thơm (aniline)** có tính base **yếu hơn** ammonia và amine béo, hầu như không làm đổi màu quỳ tím.",
]));
children.push(...Img("11_amine_structure.png", 460, "So sánh cấu trúc electron của methylamine (amine béo) và aniline (amine thơm)."));
children.push(Sub("Giải thích"));
children.push(P("Ở aniline, cặp electron chưa liên kết trên nguyên tử N bị **hút vào vòng benzene** (do hiệu ứng liên hợp), làm giảm khả năng cặp electron này nhận proton (H⁺) → tính base của aniline yếu hơn so với amine béo (nơi các nhóm alkyl đẩy electron về phía N, làm tăng tính base) và yếu hơn cả ammonia."));
children.push(Eq("**Aniline vẫn phản ứng được với acid mạnh:**  C₆H₅NH₂  +  HCl  →  C₆H₅NH₃Cl"));
children.push(Eq("**Nhận biết aniline bằng nước bromine:**  C₆H₅NH₂  +  3Br₂ (dd)  →  C₆H₂Br₃NH₂↓ (trắng)  +  3HBr"));
children.push(Example("Ví dụ minh hoạ", [
  "So sánh tính base của: ammonia (NH₃), methylamine (CH₃NH₂) và aniline (C₆H₅NH₂).",
  "Lời giải: Nhóm alkyl (–CH₃) đẩy electron làm tăng mật độ electron trên N → methylamine có tính base mạnh hơn ammonia. Vòng benzene hút electron làm giảm mật độ electron trên N → aniline có tính base yếu hơn ammonia. Vậy thứ tự tính base: **CH₃NH₂ > NH₃ > C₆H₅NH₂**.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao có thể dùng giấm ăn (chứa acetic acid) để khử mùi tanh của cá (do các amine bay hơi gây ra)?", a: "Vì amine có tính base, phản ứng được với acid acetic (acid yếu trong giấm) tạo thành muối không bay hơi, làm mất mùi tanh." },
]));

children.push(Bai("Bài 9. Amino acid và peptide"));
children.push(Section("I. Amino acid"));
children.push(P("**Amino acid** là hợp chất hữu cơ tạp chức, trong phân tử chứa đồng thời nhóm **amino (–NH₂)** và nhóm **carboxyl (–COOH)**. Có khoảng 20 loại **α-amino acid** (nhóm –NH₂ gắn ở carbon α, liền kề nhóm –COOH) là đơn vị cấu tạo nên protein trong cơ thể sống."));
children.push(...Img("10_aminoacid_structure.png", 460, "Amino acid tồn tại ở dạng phân tử trung hoà và dạng ion lưỡng cực (zwitterion) trong dung dịch."));
children.push(NoteBox("Tính chất lưỡng tính", [
  "Do có cả nhóm **–NH₂ (base)** và nhóm **–COOH (acid)**, amino acid thể hiện **tính lưỡng tính**: phản ứng được với cả acid mạnh và base mạnh.",
  "Trong dung dịch, amino acid thường tồn tại ở dạng **ion lưỡng cực (zwitterion)**: H₃N⁺–CHR–COO⁻, do nhóm –COOH nhường proton cho nhóm –NH₂ ngay trong phân tử.",
]));
children.push(Eq("**Phản ứng với acid:**  H₂N–CH₂–COOH  +  HCl  →  ClH₃N–CH₂–COOH"));
children.push(Eq("**Phản ứng với base:**  H₂N–CH₂–COOH  +  NaOH  →  H₂N–CH₂–COONa  +  H₂O"));
children.push(Section("II. Peptide"));
children.push(P("**Peptide** là hợp chất chứa từ 2 đến 50 gốc **α-amino acid** liên kết với nhau qua **liên kết peptide (–CO–NH–)**."));
children.push(...Img("05_lienket_peptide.png", 460, "Sự hình thành liên kết peptide giữa hai phân tử amino acid, giải phóng một phân tử nước."));
children.push(Eq("**Phương trình tổng quát:**  H₂N–CHR₁–COOH  +  H₂N–CHR₂–COOH  →  H₂N–CHR₁–CO–NH–CHR₂–COOH  +  H₂O"));
children.push(...Bullet([
  "Phân loại theo số gốc amino acid: **đipeptide** (2 gốc), **tripeptide** (3 gốc), **polypeptide** (nhiều gốc).",
  "**Phản ứng thuỷ phân** (nhờ acid, base hoặc enzyme) cắt các liên kết peptide, tạo lại các amino acid ban đầu.",
  "**Phản ứng màu biuret:** peptide có từ 2 liên kết peptide trở lên phản ứng với Cu(OH)₂ tạo phức chất màu **tím đặc trưng** — dùng để nhận biết peptide, protein.",
]));

children.push(Bai("Bài 10. Protein và enzyme"));
children.push(Section("I. Protein"));
children.push(P("**Protein** là những polypeptide cao phân tử, có phân tử khối từ vài chục nghìn đến hàng triệu đvC, được cấu tạo từ nhiều gốc α-amino acid."));
children.push(...Bullet([
  "**Tính chất hoá học:** bị **thuỷ phân** hoàn toàn tạo hỗn hợp α-amino acid (nhờ acid, base hoặc enzyme); tham gia **phản ứng màu biuret** (tạo màu tím với Cu(OH)₂) — đặc trưng để nhận biết protein.",
  "**Sự đông tụ:** protein bị **đông tụ** (kết tủa, mất hoạt tính sinh học) khi đun nóng, hoặc khi tác dụng với acid, base mạnh, muối kim loại nặng. Đây là lí do vì sao đun sôi làm biến tính protein trong trứng, sữa.",
]));
children.push(Section("II. Vai trò sinh học và enzyme"));
children.push(...Bullet([
  "Protein đảm nhiệm nhiều vai trò: xây dựng **cấu trúc tế bào, mô** (collagen, keratin); **vận chuyển** (hemoglobin vận chuyển oxygen); **bảo vệ** (kháng thể); **xúc tác sinh học** (enzyme); điều hoà (hormone như insulin).",
  "**Enzyme** là chất xúc tác sinh học có bản chất protein, có **tính đặc hiệu rất cao** (mỗi enzyme thường chỉ xúc tác một phản ứng hoặc một loại phản ứng nhất định) và làm tăng tốc độ phản ứng gấp nhiều lần trong điều kiện nhẹ nhàng (nhiệt độ cơ thể, pH sinh lí) so với xúc tác hoá học thông thường.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao khi bị sốt cao kéo dài, cơ thể người có thể gặp nguy hiểm đến các enzyme và protein quan trọng?", a: "Vì nhiệt độ cao làm protein (trong đó có enzyme) bị đông tụ, biến đổi cấu trúc không gian và mất hoạt tính sinh học, ảnh hưởng đến các phản ứng sinh hoá cần thiết cho cơ thể." },
]));

children.push(Bai("Ôn tập Chương 3"));
children.push(...Bullet([
  "Amine có tính base (do cặp electron tự do trên N); amine thơm có tính base yếu hơn amine béo do ảnh hưởng của vòng benzene.",
  "Amino acid có tính lưỡng tính, tồn tại dạng ion lưỡng cực; các amino acid liên kết với nhau qua liên kết peptide tạo thành peptide, protein.",
  "Protein bị đông tụ bởi nhiệt, acid, base, muối kim loại nặng; tham gia phản ứng màu biuret; là thành phần và enzyme thiết yếu của sự sống.",
]));
children.push(spacer());

module.exports = { children, H };
