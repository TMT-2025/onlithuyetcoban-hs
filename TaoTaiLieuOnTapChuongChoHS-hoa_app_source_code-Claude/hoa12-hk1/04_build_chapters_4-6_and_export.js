const path = require("path");
const fs = require("fs");
const base = require("./03_build_chapter3.js");
const { children, H } = base;
const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel,
  P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions,
  ChapterIntro, DataTable, Img, spacer, Eq } = H;

// ============ CHƯƠNG 4: POLYMER ============
children.push(Chapter("CHƯƠNG 4: POLYMER"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Polymer hiện diện khắp nơi trong đời sống hiện đại: **chất dẻo** (túi nilon, vỏ điện thoại), **tơ sợi** (quần áo), **cao su** (lốp xe) — là một trong những phát minh làm thay đổi hoàn toàn cách con người sản xuất, sinh hoạt.",
  "Việc hiểu cấu trúc polymer giúp giải quyết vấn đề **ô nhiễm rác thải nhựa** toàn cầu — thúc đẩy nghiên cứu polymer phân huỷ sinh học, tái chế nhựa.",
  "Cao su tổng hợp, sợi tổng hợp ra đời đã giúp giảm phụ thuộc vào nguồn cao su, tơ tự nhiên có hạn, đáp ứng nhu cầu sản xuất quy mô lớn.",
]));
children.push(spacer());

children.push(Bai("Bài 12. Đại cương về polymer"));
children.push(Section("I. Khái niệm, phân loại"));
children.push(P("**Polymer** là những hợp chất có phân tử khối rất lớn, do nhiều đơn vị nhỏ (gọi là **mắt xích**, xuất phát từ các **monomer**) liên kết với nhau tạo thành."));
children.push(...Bullet([
  "**Theo nguồn gốc:** polymer thiên nhiên (cao su thiên nhiên, cellulose, tinh bột), polymer tổng hợp (PE, PVC, nylon), polymer bán tổng hợp (tơ visco, tơ acetate).",
  "**Theo cấu trúc mạch:** mạch không phân nhánh, mạch phân nhánh, mạch mạng lưới (không gian).",
]));
children.push(Section("II. Phản ứng điều chế polymer"));
children.push(...Img("06_trunghop_trungnguong.png", 480, "So sánh phản ứng trùng hợp và trùng ngưng."));
children.push(...Img("12_monome_polymer.png", 460, "Một số monomer thường gặp và polymer tương ứng."));
children.push(Eq("**Trùng hợp ethylene:**  nCH₂=CH₂  →(t°, p, xt)  (–CH₂–CH₂–)ₙ  (PE)"));
children.push(Eq("**Trùng ngưng tạo nylon-6,6:**  nH₂N–(CH₂)₆–NH₂  +  nHOOC–(CH₂)₄–COOH  →(t°)  (–HN–(CH₂)₆–NH–CO–(CH₂)₄–CO–)ₙ  +  2nH₂O"));
children.push(DataTable(
  ["Đặc điểm", "Trùng hợp", "Trùng ngưng"],
  [
    ["Monomer", "Có liên kết bội (C=C, C≡C...) hoặc vòng kém bền", "Có ít nhất 2 nhóm chức có khả năng phản ứng"],
    ["Sản phẩm phụ", "Không tạo ra", "Tạo ra (thường là H2O)"],
    ["Ví dụ", "PE từ CH2=CH2", "Nylon-6,6 từ hexamethylenediamine và adipic acid"],
  ],
));
children.push(spacer());
children.push(Section("III. Tính chất vật lí chung của polymer"));
children.push(...Bullet([
  "Là chất **rắn**, không bay hơi.",
  "Không có nhiệt độ nóng chảy xác định mà nóng chảy trong một **khoảng nhiệt độ khá rộng**.",
  "Đa số **không tan** trong các dung môi thông thường; một số tan trong dung môi thích hợp tạo dung dịch keo (dung dịch polymer).",
]));

children.push(Bai("Bài 13. Vật liệu polymer"));
children.push(DataTable(
  ["Loại vật liệu", "Ví dụ tiêu biểu", "Ứng dụng chính"],
  [
    ["Chất dẻo", "PE, PP, PVC, PS, poly(methyl methacrylate)", "Bao bì, ống nước, đồ gia dụng, kính hữu cơ (thuỷ tinh hữu cơ)"],
    ["Tơ tổng hợp", "Nylon-6,6; tơ nitron (olon)", "Dệt vải, bện dây, thảm"],
    ["Tơ bán tổng hợp", "Tơ visco, tơ acetate (từ cellulose)", "Dệt may"],
    ["Cao su", "Cao su thiên nhiên (polyisoprene), cao su buna, buna-S", "Lốp xe, đệm, gioăng cao su"],
    ["Keo dán", "Keo epoxy, keo ure-formaldehyde", "Dán gỗ, kim loại, đồ gia dụng"],
  ],
));
children.push(spacer());
children.push(Eq("**Điều chế PVC:**  nCH₂=CHCl  →(t°, p, xt)  (–CH₂–CHCl–)ₙ"));
children.push(Sub("Phản ứng lưu hoá cao su"));
children.push(P("**Lưu hoá cao su** là quá trình đun nóng cao su thiên nhiên (hoặc tổng hợp) với **lưu huỳnh (sulfur)**, tạo ra các **cầu nối –S–S–** giữa các mạch polymer. Nhờ đó, cao su lưu hoá có **độ bền cơ học, độ đàn hồi và khả năng chịu nhiệt tốt hơn hẳn** cao su chưa lưu hoá — đây là lí do lốp xe làm từ cao su lưu hoá bền hơn nhiều so với cao su thô."));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao túi nilon (PE) rất khó bị phân huỷ trong tự nhiên, gây ô nhiễm môi trường lâu dài?", a: "Vì PE có mạch carbon no, không có nhóm chức dễ bị vi sinh vật hoặc các yếu tố môi trường phân huỷ, nên tồn tại rất lâu (hàng trăm năm) trong tự nhiên." },
]));
children.push(Bai("Ôn tập Chương 4"));
children.push(...Bullet([
  "Polymer được điều chế qua phản ứng trùng hợp (từ monomer có liên kết bội, không tạo sản phẩm phụ) hoặc trùng ngưng (từ monomer đa chức, tạo sản phẩm phụ như H2O).",
  "4 nhóm vật liệu polymer chính: chất dẻo, tơ, cao su, keo dán — mỗi nhóm có cấu trúc và ứng dụng đặc trưng riêng.",
  "Lưu hoá cao su bằng sulfur tạo cầu nối –S–S– giúp tăng độ bền, độ đàn hồi của cao su.",
]));
children.push(spacer());

// ============ CHƯƠNG 5: PIN ĐIỆN VÀ ĐIỆN PHÂN ============
children.push(Chapter("CHƯƠNG 5: PIN ĐIỆN VÀ ĐIỆN PHÂN"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "**Pin và ắc quy** (dựa trên nguyên lí pin điện hoá) cấp nguồn cho hầu hết thiết bị di động, xe điện — một trong những công nghệ then chốt của thời đại hiện nay.",
  "**Điện phân** là phương pháp duy nhất để điều chế các kim loại hoạt động hoá học mạnh như **sodium, potassium, aluminium**, và để sản xuất **NaOH, Cl₂, H₂** — những hoá chất công nghiệp nền tảng.",
  "Công nghệ **mạ điện** (dựa trên điện phân) giúp bảo vệ kim loại khỏi ăn mòn và tạo lớp phủ trang trí (mạ vàng, mạ chrome) cho đồ trang sức, phụ tùng.",
]));
children.push(spacer());

children.push(Bai("Bài 15. Thế điện cực và nguồn điện hoá học"));
children.push(Section("I. Cặp oxi hoá – khử và thế điện cực chuẩn"));
children.push(...Bullet([
  "**Cặp oxi hoá – khử** của kim loại kí hiệu Mⁿ⁺/M (ví dụ Zn²⁺/Zn, Cu²⁺/Cu).",
  "**Thế điện cực chuẩn (E°)** của một cặp oxi hoá – khử được đo bằng cách ghép cặp đó với **điện cực hydrogen chuẩn** (quy ước E°(2H⁺/H₂) = 0,00 V).",
  "Các kim loại được sắp xếp theo chiều **tăng dần thế điện cực chuẩn** tạo thành **dãy thế điện cực chuẩn kim loại**: K, Ba, Ca, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Ag...",
]));
children.push(Section("II. Pin điện hoá (pin Galvani)"));
children.push(...Img("07_pin_galvani.png", 460, "Cấu tạo pin điện hoá Zn – Cu (pin Daniell)."));
children.push(...Bullet([
  "**Cực âm (anode):** xảy ra quá trình **oxi hoá** — kim loại có thế điện cực nhỏ hơn bị tan ra, nhường electron. Ví dụ: Zn → Zn²⁺ + 2e⁻.",
  "**Cực dương (cathode):** xảy ra quá trình **khử** — ion kim loại có thế điện cực lớn hơn nhận electron. Ví dụ: Cu²⁺ + 2e⁻ → Cu.",
  "**Cầu muối** giúp duy trì cân bằng điện tích giữa hai dung dịch, cho phép pin hoạt động liên tục.",
  "**Sức điện động của pin** Epin = E°(cực dương) − E°(cực âm), luôn có giá trị **dương**.",
]));
children.push(Eq("**Phản ứng tổng quát trong pin Zn – Cu:**  Zn  +  Cu²⁺  →  Zn²⁺  +  Cu"));
children.push(Sub("Giải thích"));
children.push(P("Electron luôn di chuyển tự phát từ nơi có thế điện cực **thấp hơn** (dễ nhường electron hơn — tính khử mạnh hơn) sang nơi có thế điện cực **cao hơn** (dễ nhận electron hơn — tính oxi hoá mạnh hơn) qua dây dẫn bên ngoài. Vì vậy kim loại có thế điện cực nhỏ hơn (như Zn) luôn đóng vai trò cực âm (bị oxi hoá), còn kim loại/ion có thế điện cực lớn hơn (như Cu²⁺) đóng vai trò cực dương (bị khử)."));
children.push(Example("Ví dụ minh hoạ", [
  "Biết E°(Zn²⁺/Zn) = −0,76 V và E°(Cu²⁺/Cu) = +0,34 V. Xác định cực âm, cực dương và tính sức điện động chuẩn của pin Zn–Cu.",
  "Lời giải: Vì E°(Zn²⁺/Zn) < E°(Cu²⁺/Cu) nên Zn là cực âm (bị oxi hoá), Cu là cực dương (bị khử). Epin = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = 0,34 − (−0,76) = **1,10 V**.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Trong pin điện hoá, electron di chuyển từ điện cực nào sang điện cực nào qua dây dẫn ngoài?", a: "Electron di chuyển từ cực âm (anode, nơi xảy ra oxi hoá) sang cực dương (cathode, nơi xảy ra khử) qua dây dẫn bên ngoài." },
]));

children.push(Bai("Bài 16. Điện phân"));
children.push(Section("I. Khái niệm"));
children.push(P("**Điện phân** là quá trình oxi hoá – khử xảy ra trên bề mặt các điện cực khi cho dòng điện một chiều đi qua chất điện li ở trạng thái **nóng chảy** hoặc **dung dịch**."));
children.push(Section("II. Điện phân nóng chảy"));
children.push(P("Dùng để điều chế các **kim loại hoạt động hoá học mạnh** (không thể điều chế bằng phương pháp khác) như sodium (điện phân NaCl nóng chảy), aluminium (điện phân Al₂O₃ nóng chảy trong criolite)."));
children.push(Eq("**Điện phân NaCl nóng chảy:**  2NaCl  →(điện phân nóng chảy)  2Na  +  Cl₂"));
children.push(Eq("**Điện phân Al₂O₃ nóng chảy (trong criolite):**  2Al₂O₃  →(điện phân nóng chảy)  4Al  +  3O₂"));
children.push(Section("III. Điện phân dung dịch"));
children.push(...Img("08_dienphan_nacl.png", 460, "Sơ đồ điện phân dung dịch NaCl có màng ngăn, điều chế NaOH, H₂, Cl₂."));
children.push(NoteBox("Thứ tự điện phân ở các điện cực (dung dịch)", [
  "**Ở cathode (khử):** cation kim loại có tính oxi hoá **mạnh hơn** bị khử trước (theo dãy thế điện cực). Nếu là cation kim loại hoạt động rất mạnh (từ Al trở về trước trong dãy), **nước bị khử trước** tạo khí H₂ (kim loại không bị điện phân trong dung dịch).",
  "**Ở anode (oxi hoá):** các anion gốc acid **không có oxi** (Cl⁻, Br⁻, I⁻, S²⁻...) bị oxi hoá trước; nếu là anion gốc acid **có oxi** (SO₄²⁻, NO₃⁻...) hoặc F⁻ thì **nước bị oxi hoá** trước, tạo khí O₂.",
]));
children.push(Eq("**Điện phân dung dịch NaCl có màng ngăn:**  2NaCl  +  2H₂O  →(điện phân dd, màng ngăn)  2NaOH  +  H₂↑  +  Cl₂↑"));
children.push(Example("Ví dụ minh hoạ", [
  "Viết sơ đồ điện phân dung dịch CuSO₄ với điện cực trơ.",
  "Lời giải: Ở cathode, Cu²⁺ có tính oxi hoá mạnh nên bị khử trước: Cu²⁺ + 2e⁻ → Cu. Ở anode, gốc SO₄²⁻ có oxi nên nước bị oxi hoá: 2H₂O → O₂ + 4H⁺ + 4e⁻. Phương trình điện phân tổng quát: 2CuSO₄ + 2H₂O → 2Cu + O₂ + 2H₂SO₄.",
]));
children.push(Section("IV. Ứng dụng của điện phân"));
children.push(...Bullet([
  "**Điều chế kim loại** hoạt động mạnh (Na, K, Ca, Mg, Al) bằng điện phân nóng chảy.",
  "**Mạ điện:** phủ một lớp kim loại mỏng (Cr, Ni, Au, Ag...) lên bề mặt vật cần mạ để chống ăn mòn hoặc trang trí.",
  "**Tinh luyện kim loại:** làm sạch kim loại thô (ví dụ tinh luyện đồng bằng điện phân).",
  "**Sản xuất hoá chất công nghiệp:** NaOH, Cl₂, H₂ từ điện phân dung dịch NaCl.",
]));
children.push(Bai("Ôn tập Chương 5"));
children.push(...Bullet([
  "Dãy thế điện cực chuẩn cho phép dự đoán chiều phản ứng oxi hoá – khử và tính sức điện động của pin.",
  "Pin điện hoá: cực âm xảy ra oxi hoá (kim loại thế điện cực nhỏ), cực dương xảy ra khử (kim loại/ion thế điện cực lớn); Epin luôn dương.",
  "Điện phân là quá trình oxi hoá – khử cưỡng bức nhờ dòng điện; là phương pháp chủ yếu điều chế kim loại mạnh và nhiều hoá chất công nghiệp quan trọng.",
]));
children.push(spacer());

// ============ CHƯƠNG 6: ĐẠI CƯƠNG VỀ KIM LOẠI (phần học kì 1: Bài 18–20) ============
children.push(Chapter("CHƯƠNG 6: ĐẠI CƯƠNG VỀ KIM LOẠI"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Kim loại là vật liệu **xương sống của nền văn minh công nghiệp**: từ dụng cụ, máy móc, phương tiện giao thông đến kết cấu xây dựng, đường dây điện — tất cả đều dựa vào các tính chất đặc trưng của kim loại (dẻo, dẫn điện, dẫn nhiệt).",
  "Hiểu tính chất hoá học của kim loại giúp giải thích và **phòng chống ăn mòn kim loại** — vấn đề gây thiệt hại hàng trăm tỉ USD mỗi năm trên toàn cầu.",
  "Việc lựa chọn đúng **phương pháp tách kim loại** (nhiệt luyện, thuỷ luyện, điện phân) giúp khai thác kim loại từ quặng một cách hiệu quả, tiết kiệm năng lượng và giảm tác động môi trường.",
]));
children.push(NoteBox("Lưu ý về phạm vi chương trình", [
  "Theo PPCT, **học kì 1 chính thức học đến hết Bài 20** (trước khi kiểm tra cuối kì ở tiết 52–53); các Bài 21, 22, 23 thuộc **chương trình học kì 2**.",
  "Để kiến thức Chương 6 được **liền mạch, trọn vẹn**, tài liệu này trình bày thêm cả Bài 21–23 ngay sau đây. Khi ôn thi cuối học kì 1, em chỉ cần tập trung vào Bài 18–20 ở trên.",
]));
children.push(spacer());

children.push(Bai("Bài 18. Cấu tạo và liên kết trong tinh thể kim loại"));
children.push(Section("I. Vị trí của kim loại trong bảng tuần hoàn"));
children.push(P("Kim loại chiếm phần lớn các nguyên tố trong bảng tuần hoàn, gồm: nhóm **IA, IIA** (trừ H), nhóm **IIIA** (trừ B), một phần các nhóm IVA, VA, VIA; toàn bộ các **nhóm B** (kim loại chuyển tiếp) và họ **lanthanide, actinide**."));
children.push(Section("II. Liên kết kim loại"));
children.push(P("Nguyên tử kim loại có **bán kính tương đối lớn**, số electron hoá trị ít (1, 2 hoặc 3 electron), nên **dễ nhường electron**. Trong tinh thể kim loại, các electron hoá trị tách khỏi nguyên tử, trở thành **electron tự do di chuyển** trong toàn bộ mạng tinh thể, còn lại các **ion dương kim loại** nằm ở các nút mạng."));
children.push(...Img("13_lienket_kimloai.png", 400, "Mô hình liên kết kim loại: các ion dương nằm ở nút mạng, bao quanh bởi \"biển\" electron tự do."));
children.push(NoteBox("Định nghĩa", [
  "**Liên kết kim loại** là liên kết được hình thành bởi lực hút tĩnh điện giữa các **electron hoá trị tự do** và các **ion dương kim loại** ở nút mạng tinh thể.",
]));
children.push(Sub("Giải thích"));
children.push(P("Chính nhờ các electron tự do **không bị giữ cố định** mà có thể di chuyển dễ dàng trong toàn khối kim loại, nên kim loại có được các tính chất vật lí đặc trưng (dẫn điện, dẫn nhiệt, tính dẻo, ánh kim) — sẽ được trình bày rõ ở Bài 19."));

children.push(Bai("Bài 19. Tính chất vật lí và tính chất hoá học của kim loại"));
children.push(Section("I. Tính chất vật lí chung"));
children.push(NoteBox("Bốn tính chất vật lí chung của kim loại (do có electron tự do)", [
  "**Tính dẻo:** dễ rèn, dát mỏng, kéo sợi (các lớp ion trượt lên nhau mà không làm đứt liên kết kim loại).",
  "**Tính dẫn điện:** electron tự do chuyển động thành dòng khi có điện trường.",
  "**Tính dẫn nhiệt:** electron tự do truyền năng lượng va chạm nhanh trong mạng tinh thể.",
  "**Có ánh kim:** electron tự do phản xạ tốt phần lớn ánh sáng chiếu tới.",
]));
children.push(P("Ngoài ra, các kim loại khác nhau có tính chất vật lí **riêng** rất khác nhau: khối lượng riêng (Li nhẹ nhất, Os nặng nhất), nhiệt độ nóng chảy (Hg lỏng ở điều kiện thường, W nóng chảy ở nhiệt độ cao nhất ≈ 3410°C), độ cứng (Cs rất mềm, Cr rất cứng)."));
children.push(Section("II. Tính chất hoá học chung"));
children.push(P("Kim loại có **tính khử** (dễ nhường electron):  **M → Mⁿ⁺ + ne**"));
children.push(Sub("1. Tác dụng với phi kim"));
children.push(Eq("2Na  +  Cl₂  →  2NaCl"));
children.push(Eq("3Fe  +  2O₂  →(t°)  Fe₃O₄"));
children.push(Eq("Fe  +  S  →(t°)  FeS"));
children.push(Sub("2. Tác dụng với dung dịch acid"));
children.push(Eq("**Với HCl, H2SO4 loãng (kim loại đứng trước H):**  Fe  +  2HCl  →  FeCl₂  +  H₂↑"));
children.push(Eq("**Với HNO3, H2SO4 đặc (oxi hoá mạnh, trừ Au, Pt):**  Cu  +  2H₂SO₄ (đặc)  →(t°)  CuSO₄  +  SO₂↑  +  2H₂O"));
children.push(Sub("3. Tác dụng với nước"));
children.push(P("Kim loại kiềm và kiềm thổ (trừ Be, Mg) phản ứng được với nước ở nhiệt độ thường:"));
children.push(Eq("2Na  +  2H₂O  →  2NaOH  +  H₂↑"));
children.push(Sub("4. Tác dụng với dung dịch muối"));
children.push(P("Kim loại **mạnh hơn** đẩy được kim loại **yếu hơn** ra khỏi dung dịch muối của nó:"));
children.push(Eq("Fe  +  CuSO₄  →  FeSO₄  +  Cu"));
children.push(Example("Ví dụ minh hoạ", [
  "Nhúng một thanh sắt vào dung dịch CuSO4. Nêu hiện tượng và viết phương trình phản ứng.",
  "Lời giải: Có một lớp đồng màu đỏ bám vào thanh sắt, đồng thời dung dịch nhạt màu xanh dần (do Cu2+ bị khử thành Cu, còn Fe bị oxi hoá thành Fe2+ tan vào dung dịch): Fe + CuSO4 → FeSO4 + Cu.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao kim loại có tính dẻo, có thể dát mỏng, kéo sợi mà không bị gãy vỡ như tinh thể ion?", a: "Vì trong tinh thể kim loại, các electron tự do di chuyển linh hoạt trong toàn mạng, khi các lớp ion kim loại trượt lên nhau (do tác động cơ học) thì liên kết kim loại vẫn được duy trì (không bị đứt gãy như tinh thể ion, nơi các ion cùng dấu bị đẩy ra xa nhau khi trượt lớp)." },
]));

children.push(Bai("Bài 20. Kim loại trong tự nhiên và phương pháp tách kim loại"));
children.push(Section("I. Trạng thái tự nhiên của kim loại"));
children.push(P("Hầu hết kim loại tồn tại trong tự nhiên ở dạng **hợp chất** (oxide, sulfide, carbonate, silicate...) trong các mỏ quặng. Chỉ một số kim loại **kém hoạt động** (Au, Ag, Pt...) tồn tại ở dạng **đơn chất (tự do)**."));
children.push(Section("II. Nguyên tắc và phương pháp tách kim loại"));
children.push(NoteBox("Nguyên tắc chung", [
  "Tách kim loại ra khỏi hợp chất thực chất là quá trình **khử ion kim loại thành nguyên tử kim loại**:  **Mⁿ⁺ + ne → M**.",
]));
children.push(...Img("14_tachkimloai.png", 460, "Ba phương pháp tách kim loại, lựa chọn theo mức độ hoạt động hoá học của kim loại."));
children.push(Sub("1. Phương pháp nhiệt luyện"));
children.push(P("Dùng chất khử (C, CO, H₂, Al...) khử oxide kim loại ở **nhiệt độ cao**. Áp dụng cho kim loại có độ hoạt động **trung bình** (Zn, Fe, Sn, Pb...)."));
children.push(Eq("Fe₂O₃  +  3CO  →(t°)  2Fe  +  3CO₂"));
children.push(Sub("2. Phương pháp thuỷ luyện"));
children.push(P("Dùng dung dịch thích hợp (như acid, base) hoà tan hợp chất kim loại, sau đó dùng **kim loại có tính khử mạnh hơn** để khử ion kim loại cần tách. Áp dụng cho kim loại **kém hoạt động** (Cu, Ag, Au...)."));
children.push(Eq("Fe  +  CuSO₄  →  FeSO₄  +  Cu"));
children.push(Sub("3. Phương pháp điện phân"));
children.push(P("Dùng dòng điện một chiều để khử ion kim loại. **Điện phân nóng chảy** áp dụng cho kim loại **hoạt động mạnh** (Na, K, Ca, Mg, Al); **điện phân dung dịch** áp dụng cho kim loại hoạt động **trung bình, yếu**."));
children.push(Eq("2NaCl  →(điện phân nóng chảy)  2Na  +  Cl₂"));
children.push(Sub("Giải thích"));
children.push(P("Việc lựa chọn phương pháp tách phù hợp dựa trên **mức độ hoạt động hoá học** (tính khử) của kim loại: kim loại có tính khử càng **mạnh** thì ion kim loại của nó càng **khó bị khử**, đòi hỏi phương pháp có \"sức khử\" mạnh hơn (điện phân); ngược lại, kim loại có tính khử **yếu** thì ion kim loại dễ bị khử, có thể dùng chất khử thông thường hoặc kim loại khác (thuỷ luyện, nhiệt luyện)."));
children.push(Example("Ví dụ minh hoạ", [
  "Nên dùng phương pháp nào để điều chế kim loại nhôm (Al) và kim loại đồng (Cu) từ hợp chất của chúng?",
  "Lời giải: Al là kim loại hoạt động mạnh → dùng phương pháp điện phân nóng chảy (điện phân Al2O3 nóng chảy trong criolite). Cu là kim loại hoạt động yếu → có thể dùng phương pháp nhiệt luyện hoặc thuỷ luyện (ví dụ dùng Fe để khử Cu2+ trong dung dịch muối đồng).",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao không thể dùng phương pháp nhiệt luyện (khử bằng CO, C, H2) để điều chế kim loại sodium (Na) từ NaCl?", a: "Vì Na là kim loại hoạt động hoá học rất mạnh, ion Na+ rất khó bị khử bởi các chất khử thông thường như C, CO, H2 — chỉ có thể khử bằng dòng điện (phương pháp điện phân nóng chảy) mới đủ 'mạnh' để khử được Na+ thành Na." },
]));

children.push(NoteBox("Ranh giới chương trình học kì 1", [
  "Nội dung ôn tập cho **bài kiểm tra cuối học kì 1** dừng lại ở đây (hết Bài 20). Phần tiếp theo (Bài 21–23) là nội dung bổ sung của **học kì 2**, được trình bày liền mạch để em nắm trọn vẹn Chương 6.",
]));
children.push(spacer());

children.push(Bai("Bài 21. Hợp kim"));
children.push(Section("I. Khái niệm"));
children.push(P("**Hợp kim** là vật liệu kim loại chứa một kim loại cơ bản và một số kim loại hoặc phi kim khác được trộn lẫn vào nhau (thường bằng cách nấu chảy hỗn hợp rồi để nguội)."));
children.push(Section("II. Đặc điểm cấu tạo và tính chất"));
children.push(P("Do có thêm các nguyên tử khác xen vào hoặc thay thế trong mạng tinh thể kim loại cơ bản, hợp kim thường có tính chất **khác biệt** so với kim loại nguyên chất tạo nên nó."));
children.push(Sub("Giải thích"));
children.push(P("Sự có mặt của các nguyên tử \"lạ\" (khác kích thước, bản chất) làm **biến dạng mạng tinh thể**, cản trở sự chuyển động tự do của electron và sự trượt lên nhau giữa các lớp ion kim loại. Vì vậy, so với kim loại nguyên chất, hợp kim thường **cứng hơn, giòn hơn**, có nhiệt độ nóng chảy thường **thấp hơn**, và độ dẫn điện, dẫn nhiệt **kém hơn**."));
children.push(NoteBox("Một số hợp kim quan trọng", [
  "**Thép** (Fe + C, hàm lượng C < 2%): cứng, bền hơn sắt nguyên chất — dùng trong xây dựng, chế tạo máy.",
  "**Gang** (Fe + C, hàm lượng C > 2%): cứng, giòn — dùng đúc các chi tiết máy, ống nước.",
  "**Duralumin** (Al + Cu + Mg + Mn): nhẹ, bền — dùng trong công nghiệp hàng không, chế tạo khung máy bay.",
  "**Đồng thau** (Cu + Zn): cứng hơn đồng nguyên chất — dùng chế tạo chi tiết máy, đồ trang trí.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao dao, kéo làm bằng thép không gỉ (hợp kim) thường bền và cứng hơn dao làm bằng sắt nguyên chất?", a: "Vì các nguyên tử khác (như Cr, Ni, C) xen vào mạng tinh thể sắt làm biến dạng mạng, cản trở sự trượt của các lớp nguyên tử, khiến hợp kim cứng hơn và bền hơn kim loại nguyên chất." },
]));

children.push(Bai("Bài 22. Sự ăn mòn kim loại"));
children.push(Section("I. Khái niệm"));
children.push(P("**Sự ăn mòn kim loại** là sự phá huỷ kim loại hoặc hợp kim do tác dụng của các chất trong môi trường xung quanh."));
children.push(Section("II. Hai dạng ăn mòn kim loại"));
children.push(DataTable(
  ["Đặc điểm", "Ăn mòn hoá học", "Ăn mòn điện hoá"],
  [
    ["Bản chất", "Phản ứng oxi hoá – khử trực tiếp giữa kim loại và chất oxi hoá trong môi trường", "Kim loại tiếp xúc với dung dịch chất điện li, hình thành các cặp điện cực (như pin điện hoá mini)"],
    ["Điều kiện", "Thường xảy ra ở nhiệt độ cao", "Có 2 điện cực khác bản chất tiếp xúc nhau, cùng tiếp xúc dung dịch chất điện li"],
    ["Mức độ phổ biến, nghiêm trọng", "Ít phổ biến hơn", "Phổ biến và nghiêm trọng hơn nhiều (như gỉ sắt)"],
  ],
));
children.push(spacer());
children.push(...Img("15_anmon_baove.png", 460, "Cơ chế ăn mòn điện hoá của gang, thép trong không khí ẩm (trái) và phương pháp bảo vệ bằng anode hi sinh (phải)."));
children.push(Sub("Cơ chế ăn mòn điện hoá (ví dụ gỉ sắt)"));
children.push(P("Trong gang, thép có lẫn tạp chất carbon. Khi tiếp xúc với không khí ẩm (có hoà tan O₂, CO₂ tạo thành lớp dung dịch chất điện li trên bề mặt), hình thành vô số cặp điện cực **Fe – C** siêu nhỏ:"));
children.push(Eq("**Cực âm (Fe, bị oxi hoá):**  Fe  →  Fe²⁺  +  2e⁻"));
children.push(Eq("**Cực dương (C, xảy ra khử oxygen hoà tan):**  O₂  +  2H₂O  +  4e⁻  →  4OH⁻"));
children.push(P("Fe²⁺ tiếp tục bị oxi hoá và kết hợp với OH⁻, O₂ tạo thành **gỉ sắt** (chủ yếu là Fe₂O₃.nH₂O)."));
children.push(Sub("Giải thích"));
children.push(P("Ăn mòn điện hoá nghiêm trọng hơn ăn mòn hoá học vì nó tạo ra một **dòng electron liên tục** chảy từ kim loại có tính khử mạnh hơn (đóng vai trò cực âm, bị ăn mòn dần) sang điện cực còn lại, giống như một pin điện hoá đang hoạt động — quá trình ăn mòn diễn ra **liên tục, không dừng lại** cho đến khi kim loại bị phá huỷ hoàn toàn hoặc mạch bị ngắt."));
children.push(Section("III. Các phương pháp chống ăn mòn kim loại"));
children.push(...Bullet([
  "**Phương pháp bảo vệ bề mặt:** sơn, mạ, tráng một lớp kim loại hoặc chất khác lên bề mặt kim loại cần bảo vệ để cách li kim loại khỏi môi trường (sơn chống gỉ, mạ kẽm, mạ chrome, bôi dầu mỡ).",
  "**Phương pháp điện hoá (dùng \"anode hi sinh\"):** gắn một kim loại có tính khử **mạnh hơn** (như Zn) vào kim loại cần bảo vệ (như vỏ tàu thép); kim loại hoạt động mạnh hơn sẽ bị ăn mòn (oxi hoá) **thay thế**, bảo vệ kim loại chính.",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Vì sao người ta thường gắn các tấm kẽm (Zn) vào phần vỏ tàu biển bằng thép ở dưới mực nước?",
  "Lời giải: Zn có tính khử mạnh hơn Fe, nên khi tiếp xúc với nước biển (chất điện li), Zn đóng vai trò cực âm và bị oxi hoá (ăn mòn) thay cho Fe, còn Fe đóng vai trò cực dương được bảo vệ. Đây là phương pháp bảo vệ điện hoá bằng \"anode hi sinh\".",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao đinh sắt để trong không khí ẩm bị gỉ nhanh hơn nhiều so với để trong không khí khô?", a: "Vì trong không khí ẩm, hơi nước tạo thành lớp dung dịch chất điện li mỏng trên bề mặt kim loại, cùng với tạp chất carbon tạo thành cặp điện cực Fe–C, gây ra ăn mòn điện hoá (nhanh và nghiêm trọng hơn nhiều so với ăn mòn hoá học đơn thuần khi không khí khô)." },
]));

children.push(Bai("Bài 23. Ôn tập chương 6"));
children.push(...Bullet([
  "**Liên kết kim loại** (Bài 18): lực hút tĩnh điện giữa electron tự do và ion dương kim loại ở nút mạng — quyết định các tính chất vật lí chung của kim loại.",
  "**Tính chất kim loại** (Bài 19): tính chất vật lí chung (dẻo, dẫn điện, dẫn nhiệt, ánh kim); tính chất hoá học chung là tính khử (M → Mⁿ⁺ + ne), thể hiện qua phản ứng với phi kim, acid, nước, dung dịch muối.",
  "**Kim loại trong tự nhiên** (Bài 20): tồn tại chủ yếu ở dạng hợp chất trong quặng; 3 phương pháp tách kim loại (nhiệt luyện, thuỷ luyện, điện phân) lựa chọn theo mức độ hoạt động hoá học.",
  "**Hợp kim** (Bài 21): thường cứng hơn, giòn hơn, nhiệt độ nóng chảy thấp hơn kim loại nguyên chất do mạng tinh thể bị biến dạng bởi các nguyên tử khác.",
  "**Ăn mòn kim loại** (Bài 22): ăn mòn hoá học (phản ứng trực tiếp) và ăn mòn điện hoá (qua các cặp điện cực, phổ biến và nghiêm trọng hơn); chống ăn mòn bằng bảo vệ bề mặt hoặc phương pháp điện hoá (anode hi sinh).",
]));
children.push(spacer());


// ---- assemble document ----
const doc = new Document({
  styles: { default: { document: { run: { font: "Times New Roman", size: 22 } } } },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11907, height: 16840 },
          margin: { top: 1134, bottom: 1134, left: 1417, right: 1134 },
        },
      },
      children,
    },
  ],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("./output/Tom_tat_ly_thuyet_Hoa_12_HK1_KNTT.docx", buf);
  console.log("done, bytes=", buf.length);
});
