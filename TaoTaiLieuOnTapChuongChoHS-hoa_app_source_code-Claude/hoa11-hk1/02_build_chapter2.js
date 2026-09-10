const base = require("./01_build_chapter1.js");
const { children, H } = base;
const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions,
  ChapterIntro, DataTable, Img, spacer, Eq } = H;

children.push(Chapter("CHƯƠNG 2: NITROGEN – SULFUR"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "**Nitrogen và ammonia** là nguyên liệu sản xuất **phân đạm** — yếu tố then chốt của cuộc \"Cách mạng Xanh\" giúp tăng năng suất nông nghiệp toàn cầu, nuôi sống hàng tỉ người.",
  "**Sulfuric acid (H₂SO₄)** được mệnh danh là \"máu của công nghiệp hoá chất\" vì được dùng trong sản xuất phân bón, chất tẩy rửa, thuốc nhuộm, pin ắc quy, luyện kim.",
  "Hiểu về NOₓ, SO₂ giúp giải thích và kiểm soát **ô nhiễm không khí, mưa acid** — những vấn đề môi trường cấp bách hiện nay.",
]));
children.push(spacer());

children.push(Bai("Bài 4. Nitrogen"));
children.push(Section("I. Vị trí, cấu tạo phân tử"));
children.push(P("Nitrogen (N) ở **ô 7, chu kì 2, nhóm VA**; cấu hình electron 1s²2s²2p³, có **5 electron hoá trị**. Phân tử N₂ gồm hai nguyên tử N liên kết với nhau bằng **liên kết ba (N≡N)** rất bền."));
children.push(...Img("02_n2_nh3.png", 440, "Cấu tạo phân tử N2 (liên kết ba) và NH3 (hình chóp tam giác)."));
children.push(Section("II. Tính chất vật lí"));
children.push(P("N₂ là khí không màu, không mùi, không duy trì sự cháy và sự hô hấp, nhẹ hơn không khí, ít tan trong nước."));
children.push(Section("III. Tính chất hoá học"));
children.push(NoteBox("Ghi nhớ", [
  "Do có liên kết ba rất bền (năng lượng liên kết lớn), N₂ **trơ về mặt hoá học** ở nhiệt độ thường; chỉ phản ứng ở nhiệt độ cao hoặc có xúc tác.",
  "N₂ thể hiện **cả tính oxi hoá và tính khử** tuỳ chất phản ứng cùng.",
]));
children.push(Eq("**Tính oxi hoá (tác dụng với H2, kim loại mạnh):**  N₂  +  3H₂  ⇌(t°, p, xt Fe)  2NH₃"));
children.push(Eq("**Tính oxi hoá (với kim loại mạnh):**  N₂  +  6Li  →  2Li₃N"));
children.push(Eq("**Tính khử (với O2 ở nhiệt độ rất cao):**  N₂  +  O₂  ⇌(3000°C hoặc tia lửa điện)  2NO"));
children.push(Sub("Giải thích"));
children.push(P("Phản ứng N₂ với O₂ chỉ xảy ra ở nhiệt độ rất cao (như trong tia sét, động cơ đốt trong) vì cần cung cấp năng lượng đủ lớn để **phá vỡ liên kết ba bền vững** trong phân tử N₂. Đây cũng là một nguồn phát sinh NOₓ tự nhiên trong khí quyển."));
children.push(Section("IV. Ứng dụng"));
children.push(P("N₂ được dùng làm nguyên liệu sản xuất **ammonia, phân đạm**; tạo môi trường trơ (bảo quản thực phẩm, linh kiện điện tử); nitrogen lỏng dùng làm chất làm lạnh trong y học, bảo quản mẫu sinh học."));

children.push(Bai("Bài 5. Ammonia – Muối ammonium"));
children.push(Section("I. Ammonia (NH3)"));
children.push(P("Phân tử NH₃ có cấu tạo **hình chóp tam giác**, nguyên tử N còn **1 cặp electron chưa liên kết**. NH₃ là khí không màu, **mùi khai xốc**, tan rất nhiều trong nước."));
children.push(Sub("Tính base"));
children.push(Eq("NH₃  +  H₂O  ⇌  NH₄⁺  +  OH⁻   (dung dịch NH3 là base yếu, làm quỳ tím hoá xanh)"));
children.push(Eq("**Nhận biết khí NH3 (tạo khói trắng):**  NH₃  +  HCl  →  NH₄Cl"));
children.push(Sub("Tính khử"));
children.push(Eq("**Không xúc tác:**  4NH₃  +  3O₂  →(t°)  2N₂  +  6H₂O"));
children.push(Eq("**Có xúc tác Pt (sản xuất HNO3):**  4NH₃  +  5O₂  →(t°, xt Pt)  4NO  +  6H₂O"));
children.push(Sub("Khả năng tạo phức"));
children.push(Eq("**Nhận biết ion Cu2+ (tạo dung dịch xanh lam đậm):**  Cu²⁺  +  4NH₃  →  [Cu(NH₃)₄]²⁺"));
children.push(Section("II. Muối ammonium"));
children.push(P("Muối ammonium (chứa ion NH₄⁺) đều **tan tốt** trong nước, là chất điện li mạnh."));
children.push(Eq("**Phản ứng với base mạnh (nhận biết ion NH4+):**  NH₄Cl  +  NaOH  →(t°)  NaCl  +  NH₃↑  +  H₂O"));
children.push(Eq("**Nhiệt phân muối ammonium chứa gốc acid dễ bay hơi:**  NH₄Cl  →(t°)  NH₃  +  HCl"));
children.push(Eq("**Nhiệt phân muối ammonium chứa gốc acid có tính oxi hoá:**  NH₄NO₃  →(t°)  N₂O  +  2H₂O"));
children.push(Example("Ví dụ minh hoạ", [
  "Làm thế nào để nhận biết một dung dịch có chứa ion ammonium (NH₄⁺)?",
  "Lời giải: Cho dung dịch base mạnh (như NaOH) vào và đun nhẹ; nếu có khí mùi khai thoát ra (làm xanh quỳ tím ẩm) thì dung dịch có chứa ion NH₄⁺: NH4⁺ + OH⁻ →(t°) NH3↑ + H2O.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao dung dịch NH3 làm quỳ tím hoá xanh dù NH3 không chứa nhóm OH?", a: "Vì NH3 phản ứng với nước theo cân bằng NH3 + H2O ⇌ NH4+ + OH−, sinh ra ion OH− làm môi trường có tính base, khiến quỳ tím hoá xanh." },
]));

children.push(Bai("Bài 6. Một số hợp chất của nitrogen với oxygen"));
children.push(Section("I. Các oxide của nitrogen (NOx)"));
children.push(P("**NO** là khí không màu, dễ bị oxi hoá trong không khí thành **NO₂ màu nâu đỏ**:"));
children.push(Eq("2NO  +  O₂  →  2NO₂"));
children.push(P("NOₓ (NO, NO2) là các khí độc, gây ô nhiễm không khí và là một trong những tác nhân chính gây **mưa acid**."));
children.push(Section("II. Nitric acid (HNO3)"));
children.push(P("HNO₃ là acid mạnh, vừa có **tính acid** thông thường, vừa có **tính oxi hoá mạnh** đặc trưng."));
children.push(Eq("**Tính acid (thông thường):**  CuO  +  2HNO₃  →  Cu(NO₃)₂  +  H₂O"));
children.push(Eq("**Tác dụng kim loại (HNO3 đặc, nóng):**  Cu  +  4HNO₃ (đặc)  →(t°)  Cu(NO₃)₂  +  2NO₂↑  +  2H₂O"));
children.push(Eq("**Tác dụng kim loại (HNO3 loãng):**  3Cu  +  8HNO₃ (loãng)  →  3Cu(NO₃)₂  +  2NO↑  +  4H₂O"));
children.push(Eq("**Tác dụng phi kim (HNO3 đặc):**  C  +  4HNO₃ (đặc)  →(t°)  CO₂  +  4NO₂↑  +  2H₂O"));
children.push(NoteBox("Lưu ý", [
  "HNO₃ **đặc, nguội** làm **thụ động hoá** Al, Fe, Cr (tạo lớp oxide bền bảo vệ bề mặt kim loại, ngăn phản ứng tiếp diễn) — vì vậy có thể dùng bình nhôm, sắt để chứa HNO₃ đặc nguội.",
  "Sản phẩm khử của HNO₃ (NO₂, NO, N₂O, N₂, NH₄NO₃) phụ thuộc vào **nồng độ acid** và **độ hoạt động của kim loại**: acid càng loãng, kim loại càng mạnh thì N thường bị khử xuống mức oxi hoá càng thấp.",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Vì sao có thể dùng thùng làm bằng nhôm hoặc thép để vận chuyển HNO₃ đặc, nguội?",
  "Lời giải: Vì HNO3 đặc, nguội làm Al và Fe bị thụ động hoá — tạo ra một lớp màng oxide kim loại rất mỏng, bền, bám chắc trên bề mặt, ngăn không cho kim loại tiếp tục phản ứng với acid.",
]));

children.push(Bai("Bài 7. Sulfur và sulfur dioxide"));
children.push(Section("I. Sulfur (S)"));
children.push(P("Sulfur là phi kim, tồn tại ở một số **dạng thù hình** (sulfur tà phương, sulfur đơn tà). Trong phản ứng hoá học, S thể hiện **cả tính oxi hoá và tính khử**."));
children.push(Eq("**Tính oxi hoá (với H2, kim loại):**  S  +  H₂  →(t°)  H₂S"));
children.push(Eq("**Tính oxi hoá (với Hg ở nhiệt độ thường):**  S  +  Hg  →  HgS"));
children.push(Eq("**Tính khử (với O2, F2):**  S  +  O₂  →(t°)  SO₂"));
children.push(Section("II. Sulfur dioxide (SO2)"));
children.push(P("SO₂ là khí không màu, **mùi hắc**, độc, tan nhiều trong nước."));
children.push(Eq("**Là oxide acid:**  SO₂  +  H₂O  ⇌  H₂SO₃"));
children.push(Eq("**Tác dụng với base:**  SO₂  +  2NaOH  →  Na₂SO₃  +  H₂O   (hoặc tạo NaHSO3 nếu dư SO2)"));
children.push(Eq("**Tính khử (làm mất màu nước bromine — nhận biết SO2):**  SO₂  +  Br₂  +  2H₂O  →  H₂SO₄  +  2HBr"));
children.push(Eq("**Tính khử (trong sản xuất H2SO4):**  2SO₂  +  O₂  ⇌(t°, xt V₂O₅)  2SO₃"));
children.push(Eq("**Tính oxi hoá (với H2S):**  SO₂  +  2H₂S  →  3S↓  +  2H₂O"));
children.push(P("**Ứng dụng:** tẩy trắng giấy, bột giấy; chất bảo quản thực phẩm (chống nấm mốc trong một số loại quả sấy khô); nguyên liệu sản xuất H₂SO₄."));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao có thể dùng dung dịch nước bromine để phân biệt khí SO2 với khí CO2 (cả hai đều làm đục nước vôi trong)?", a: "Vì SO2 có tính khử, làm mất màu nước bromine (SO2 + Br2 + 2H2O → H2SO4 + 2HBr), trong khi CO2 không có phản ứng này nên không làm mất màu nước bromine." },
]));

children.push(Bai("Bài 8. Sulfuric acid và muối sulfate"));
children.push(Section("I. Tính chất hoá học của H2SO4 loãng"));
children.push(P("H₂SO₄ loãng là acid mạnh, có đầy đủ tính chất chung của acid: đổi màu quỳ tím, tác dụng với kim loại (đứng trước H), base, oxide base, muối."));
children.push(Eq("Fe  +  H₂SO₄ (loãng)  →  FeSO₄  +  H₂↑"));
children.push(Section("II. Tính chất hoá học của H2SO4 đặc"));
children.push(NoteBox("Hai tính chất đặc trưng của H2SO4 đặc", [
  "**Tính oxi hoá mạnh:** oxi hoá được hầu hết kim loại (kể cả kim loại đứng sau H như Cu, Ag), tạo muối sulfate với kim loại ở **hoá trị cao**, không giải phóng khí H₂.",
  "**Tính háo nước:** hút nước rất mạnh, có thể làm than hoá (rút nước ra khỏi) các hợp chất hữu cơ như đường, giấy, vải.",
]));
children.push(Eq("**Tác dụng với kim loại (Cu):**  Cu  +  2H₂SO₄ (đặc)  →(t°)  CuSO₄  +  SO₂↑  +  2H₂O"));
children.push(Eq("**Tính háo nước (với đường saccharose):**  C₁₂H₂₂O₁₁  →(H₂SO₄ đặc)  12C  +  11H₂O"));
children.push(P("Tương tự HNO₃ đặc, **H₂SO₄ đặc nguội** cũng làm thụ động hoá Al, Fe."));
children.push(Section("III. Sản xuất H2SO4 — Phương pháp tiếp xúc"));
children.push(...Img("04_sanxuat_h2so4.png", 460, "Sơ đồ 3 giai đoạn sản xuất sulfuric acid theo phương pháp tiếp xúc."));
children.push(Eq("**Giai đoạn 1:**  4FeS₂  +  11O₂  →(t°)  2Fe₂O₃  +  8SO₂"));
children.push(Eq("**Giai đoạn 2:**  2SO₂  +  O₂  ⇌(t°, xt V₂O₅)  2SO₃"));
children.push(Eq("**Giai đoạn 3:**  SO₃  +  H₂O  →  H₂SO₄"));
children.push(Section("IV. Nhận biết ion sulfate"));
children.push(Eq("**Thuốc thử BaCl2 (kết tủa trắng, không tan trong acid mạnh):**  BaCl₂  +  Na₂SO₄  →  BaSO₄↓ (trắng)  +  2NaCl"));
children.push(P("**Ứng dụng H₂SO₄:** sản xuất phân bón (superphosphate, ammonium sulfate), chất tẩy rửa, thuốc nhuộm, chế biến dầu mỏ, sản xuất ắc quy chì."));
children.push(Example("Ví dụ minh hoạ", [
  "Trình bày cách phân biệt hai dung dịch mất nhãn: Na2SO4 và NaCl.",
  "Lời giải: Nhỏ dung dịch BaCl2 vào cả hai mẫu thử. Mẫu nào xuất hiện kết tủa trắng (BaSO4) là dung dịch Na2SO4; mẫu không có hiện tượng là NaCl.",
]));

children.push(Bai("Ôn tập Chương 2"));
children.push(...Bullet([
  "N2 trơ ở điều kiện thường do liên kết ba bền; NH3 có tính base và tính khử; muối ammonium tan tốt, tác dụng base mạnh giải phóng NH3.",
  "HNO3 vừa có tính acid vừa có tính oxi hoá mạnh; bị thụ động hoá bởi Al, Fe, Cr khi đặc nguội.",
  "S vừa có tính oxi hoá vừa tính khử; SO2 là oxide acid có tính khử (mất màu nước bromine) và tính oxi hoá.",
  "H2SO4 đặc có tính oxi hoá mạnh và tính háo nước; sản xuất theo phương pháp tiếp xúc qua 3 giai đoạn.",
]));
children.push(spacer());

module.exports = { children, H };
