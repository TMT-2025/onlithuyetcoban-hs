// Dữ liệu lý thuyết chi tiết Hóa học 11 - HK1 chuẩn theo Tom_tat_ly_thuyet_Hoa_11_HK1_KNTT
module.exports = {
  title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 11 – HỌC KÌ 1",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Cân bằng hoá học, Nitrogen - Sulfur, Hóa hữu cơ & Toàn bộ Hydrocarbon",
  parts: [
    {
      id: "hk1_11_p1",
      label: "Phần 1/7: Khái niệm cân bằng hoá học, Hằng số Kc & Nguyên lí Le Chatelier (Bài 1)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 1: CÂN BẰNG HOÁ HỌC"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Nguyên lí chuyển dịch cân bằng giúp các nhà công nghiệp **tối ưu hiệu suất phản ứng** — ví dụ chọn điều kiện áp suất, nhiệt độ phù hợp để tổng hợp ammonia (NH₃) với hiệu suất cao nhất trong công nghiệp phân bón.",
  "Cân bằng trong dung dịch nước (pH, sự điện li) là cơ sở để hiểu **cân bằng acid – base trong máu**, kiểm soát độ pH trong nuôi trồng thuỷ sản, xử lí nước, và sản xuất thực phẩm.",
  "Hiểu cân bằng hoá học giúp giải thích nhiều hiện tượng tự nhiên: sự hoà tan CO₂ trong nước biển (ảnh hưởng đến hệ san hô), quá trình tạo thạch nhũ trong hang động.",
]));
children.push(spacer());

children.push(Bai("Bài 1. Khái niệm về cân bằng hoá học"));
children.push(Section("I. Phản ứng thuận nghịch"));
children.push(P("**Phản ứng thuận nghịch** là phản ứng trong đó, ở cùng điều kiện, xảy ra đồng thời theo **hai chiều trái ngược nhau** (chiều thuận và chiều nghịch), kí hiệu bằng mũi tên hai chiều **⇌**."));
children.push(Eq("**Ví dụ:**  H₂ (k)  +  I₂ (k)  ⇌  2HI (k)"));
children.push(Section("II. Cân bằng hoá học"));
children.push(P("**Cân bằng hoá học** là trạng thái của phản ứng thuận nghịch khi **tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch** (v₁ = v₂). Ở trạng thái cân bằng, nồng độ các chất **không đổi theo thời gian**, nhưng phản ứng thuận và nghịch vẫn tiếp diễn — đây là một **cân bằng động**."));
children.push(...Img("01_do_thi_can_bang.png", 440, "Tốc độ phản ứng thuận giảm dần, tốc độ phản ứng nghịch tăng dần cho đến khi bằng nhau — trạng thái cân bằng."));
children.push(Section("III. Hằng số cân bằng Kc"));
children.push(P("Với phản ứng tổng quát: aA + bB ⇌ cC + dD, hằng số cân bằng được biểu diễn:"));
children.push(Eq("**Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ**  (nồng độ mol/L tại trạng thái cân bằng; chất rắn không có mặt trong biểu thức Kc)"));
children.push(NoteBox("Ghi nhớ", [
  "Hằng số cân bằng Kc chỉ phụ thuộc vào **nhiệt độ** và **bản chất phản ứng**, không phụ thuộc vào nồng độ ban đầu các chất.",
  "Kc càng lớn thì cân bằng càng chuyển dịch về phía tạo sản phẩm (chiều thuận chiếm ưu thế).",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Cho phản ứng: N₂ (k) + 3H₂ (k) ⇌ 2NH₃ (k). Viết biểu thức hằng số cân bằng Kc của phản ứng.",
  "Lời giải: Kc = [NH₃]² / ([N₂][H₂]³).",
]));

        return children;
      }
    },
    {
      id: "hk1_11_p2",
      label: "Phần 2/7: Cân bằng trong dung dịch nước, pH, Chuẩn độ & Ôn tập Chương 1 (Bài 2, 3)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 2. Cân bằng trong dung dịch nước"));
children.push(Section("I. Sự điện li"));
children.push(P("**Sự điện li** là quá trình các chất phân li thành ion khi tan trong nước (hoặc nóng chảy)."));
children.push(DataTable(
  ["Loại chất điện li", "Mức độ phân li", "Ví dụ"],
  [
    ["Chất điện li mạnh", "Phân li hoàn toàn (một chiều)", "Acid mạnh (HCl), base mạnh (NaOH), hầu hết muối tan"],
    ["Chất điện li yếu", "Phân li một phần (cân bằng, thuận nghịch)", "CH3COOH, NH3, H2CO3"],
  ],
));
children.push(spacer());
children.push(Eq("**Điện li chất điện li mạnh:**  HCl  →  H⁺  +  Cl⁻"));
children.push(Eq("**Điện li chất điện li yếu (cân bằng):**  CH₃COOH  ⇌  CH₃COO⁻  +  H⁺"));
children.push(Section("II. pH của dung dịch"));
children.push(P("**pH = −log[H⁺]**, dùng để đánh giá độ acid/base của dung dịch (ở 25 °C):"));
children.push(DataTable(
  ["Khoảng pH", "Môi trường", "Chất chỉ thị (quỳ tím)"],
  [
    ["pH < 7", "Acid", "Hoá đỏ"],
    ["pH = 7", "Trung tính", "Không đổi màu"],
    ["pH > 7", "Base (kiềm)", "Hoá xanh"],
  ],
));
children.push(spacer());
children.push(Section("III. Sự chuyển dịch cân bằng — Nguyên lí Le Chatelier"));
children.push(NoteBox("Nguyên lí Le Chatelier", [
  "Khi một hệ đang ở trạng thái cân bằng chịu tác động từ bên ngoài (thay đổi **nồng độ, nhiệt độ, áp suất**), cân bằng sẽ **chuyển dịch theo chiều làm giảm bớt tác động đó**.",
]));
children.push(Sub("Giải thích"));
children.push(P("Nguyên lí này có thể hiểu như một cơ chế **\"tự điều chỉnh\"** của hệ hoá học: khi tăng nồng độ một chất phản ứng, hệ sẽ ưu tiên phản ứng theo chiều **tiêu thụ bớt** chất đó (chiều thuận) để lập lại cân bằng mới; khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều **phản ứng thu nhiệt** (để hấp thụ bớt nhiệt lượng dư); khi tăng áp suất (đối với phản ứng có chất khí), cân bằng chuyển dịch theo chiều làm **giảm số mol khí** (giảm áp suất)."));
children.push(Example("Ví dụ minh hoạ", [
  "Phản ứng tổng hợp ammonia: N₂ (k) + 3H₂ (k) ⇌ 2NH₃ (k)  ΔH < 0 (toả nhiệt). Cân bằng sẽ chuyển dịch theo chiều nào khi tăng áp suất? Khi tăng nhiệt độ?",
  "Lời giải: Tăng áp suất → cân bằng chuyển dịch theo chiều giảm số mol khí, tức chiều thuận (4 mol khí → 2 mol khí) → tạo thêm NH₃. Tăng nhiệt độ → cân bằng chuyển dịch theo chiều thu nhiệt, tức chiều nghịch (vì chiều thuận toả nhiệt) → lượng NH₃ giảm.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao trong công nghiệp, tổng hợp NH₃ thường thực hiện ở áp suất cao nhưng nhiệt độ không quá cao (khoảng 400–450°C)?", a: "Áp suất cao giúp cân bằng chuyển dịch theo chiều thuận (giảm số mol khí) làm tăng hiệu suất NH3. Tuy phản ứng toả nhiệt nên nhiệt độ thấp có lợi cho cân bằng, nhưng nhiệt độ quá thấp làm tốc độ phản ứng quá chậm, nên người ta chọn nhiệt độ vừa phải để cân bằng giữa hiệu suất và tốc độ phản ứng." },
]));

children.push(Bai("Ôn tập Chương 1"));
children.push(...Bullet([
  "Cân bằng hoá học là trạng thái động, khi tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.",
  "Hằng số cân bằng Kc chỉ phụ thuộc nhiệt độ; pH = −log[H⁺] đánh giá môi trường acid/base.",
  "Nguyên lí Le Chatelier: cân bằng luôn chuyển dịch theo chiều làm giảm tác động từ bên ngoài (nồng độ, nhiệt độ, áp suất).",
]));
children.push(spacer());

        return children;
      }
    },
    {
      id: "hk1_11_p3",
      label: "Phần 3/7: Nitrogen, Ammonia và Muối ammonium (Bài 4, 5)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
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

        return children;
      }
    },
    {
      id: "hk1_11_p4",
      label: "Phần 4/7: Oxide của nitrogen, Nitric acid, Chu trình N, Sulfur & Sulfuric acid (Bài 6, 7, 8, 9)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
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

        return children;
      }
    },
    {
      id: "hk1_11_p5",
      label: "Phần 5/7: Đại cương về hoá học hữu cơ (Bài 10, 11, 12, 13)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 3: ĐẠI CƯƠNG VỀ HOÁ HỌC HỮU CƠ"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Hoá học hữu cơ là nền tảng của **hầu hết vật liệu và sản phẩm quanh ta**: nhựa, tơ sợi, thuốc chữa bệnh, mĩ phẩm, nhiên liệu, thực phẩm — tất cả đều là hợp chất hữu cơ.",
  "Hiểu khái niệm **đồng đẳng, đồng phân** giải thích vì sao chỉ với carbon, hydrogen và một vài nguyên tố khác mà tự nhiên tạo ra **hàng triệu hợp chất hữu cơ khác nhau**, kể cả sự đa dạng của sự sống (DNA, protein).",
  "Các phương pháp tách biệt, tinh chế (chưng cất, chiết, sắc kí) là công cụ nền tảng để **sản xuất tinh dầu, chiết xuất dược liệu, tinh chế xăng dầu, kiểm nghiệm thực phẩm**.",
]));
children.push(spacer());

children.push(Bai("Bài 10. Hợp chất hữu cơ và hoá học hữu cơ"));
children.push(Section("I. Khái niệm"));
children.push(P("**Hoá học hữu cơ** là ngành hoá học nghiên cứu về các **hợp chất hữu cơ** — hợp chất của carbon (trừ một số hợp chất đơn giản như CO, CO₂, muối carbonate, cyanide...)."));
children.push(Section("II. Đặc điểm chung của hợp chất hữu cơ"));
children.push(...Bullet([
  "Liên kết hoá học chủ yếu là **liên kết cộng hoá trị**.",
  "Nhiệt độ nóng chảy, nhiệt độ sôi thường **thấp** (dễ bay hơi); phần lớn **không tan hoặc ít tan trong nước**, tan tốt trong dung môi hữu cơ.",
  "Dễ cháy (dễ bị oxi hoá) hơn hợp chất vô cơ.",
  "Phản ứng hoá học của hợp chất hữu cơ thường xảy ra **chậm, theo nhiều hướng khác nhau**, tạo ra hỗn hợp sản phẩm.",
]));
children.push(Section("III. Phân loại hợp chất hữu cơ"));
children.push(P("Chia làm hai loại lớn: **hydrocarbon** (phân tử chỉ chứa C và H) và **dẫn xuất của hydrocarbon** (phân tử có thêm các nguyên tố khác như O, N, halogen... tạo thành các **nhóm chức**)."));
children.push(NoteBox("Nhóm chức", [
  "**Nhóm chức** là nhóm nguyên tử gây ra những tính chất hoá học đặc trưng của hợp chất hữu cơ. Ví dụ: nhóm –OH (alcohol), nhóm –COOH (carboxylic acid), nhóm –CHO (aldehyde).",
]));

children.push(Bai("Bài 11. Phương pháp tách biệt và tinh chế hợp chất hữu cơ"));
children.push(...Img("06_chungcat_chiet.png", 460, "Hai phương pháp tách biệt hợp chất hữu cơ phổ biến: chưng cất và chiết."));
children.push(DataTable(
  ["Phương pháp", "Nguyên tắc", "Ứng dụng thường gặp"],
  [
    ["Chưng cất", "Dựa vào sự khác nhau về nhiệt độ sôi", "Tách rượu (ethanol) ra khỏi hỗn hợp lên men; chưng cất tinh dầu"],
    ["Chiết", "Dựa vào độ tan khác nhau trong hai dung môi không trộn lẫn", "Chiết tinh dầu từ thực vật, chiết dược liệu"],
    ["Kết tinh", "Dựa vào độ tan khác nhau của chất rắn theo nhiệt độ", "Tinh chế muối ăn, đường"],
    ["Sắc kí cột", "Dựa vào khả năng hấp phụ khác nhau trên pha tĩnh", "Phân tích, tách các thành phần trong hỗn hợp phức tạp"],
  ],
));
children.push(spacer());
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Muốn tách tinh dầu sả (không tan trong nước) ra khỏi hỗn hợp sau khi chưng cất lôi cuốn hơi nước, nên dùng phương pháp nào?", a: "Dùng phương pháp chiết, vì tinh dầu và nước là hai chất lỏng không tan lẫn vào nhau (phân lớp), có thể tách riêng bằng phễu chiết." },
]));

children.push(Bai("Bài 12. Công thức phân tử hợp chất hữu cơ"));
children.push(Section("I. Phân tích nguyên tố"));
children.push(...Bullet([
  "**Phân tích định tính:** xác định các nguyên tố có mặt trong hợp chất hữu cơ.",
  "**Phân tích định lượng:** xác định thành phần phần trăm khối lượng mỗi nguyên tố.",
]));
children.push(Section("II. Công thức đơn giản nhất và công thức phân tử"));
children.push(...Bullet([
  "**Công thức đơn giản nhất (CTĐGN):** biểu thị tỉ lệ tối giản về số nguyên tử của các nguyên tố trong phân tử.",
  "**Công thức phân tử (CTPT):** biểu thị đúng số lượng nguyên tử của mỗi nguyên tố trong phân tử. CTPT = (CTĐGN)ₙ, với n xác định dựa vào phân tử khối (thường xác định qua phổ khối lượng MS).",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Một hợp chất hữu cơ có công thức đơn giản nhất là CH2O và phân tử khối bằng 60. Xác định công thức phân tử.",
  "Lời giải: Khối lượng CTĐGN = 12+2+16 = 30. Ta có n = 60/30 = 2. Vậy công thức phân tử là (CH2O)2 = **C2H4O2**.",
]));

children.push(Bai("Bài 13. Cấu tạo hoá học hợp chất hữu cơ"));
children.push(Section("I. Thuyết cấu tạo hoá học"));
children.push(NoteBox("Nội dung thuyết cấu tạo hoá học (Butlerov)", [
  "Trong phân tử hợp chất hữu cơ, các nguyên tử liên kết với nhau theo đúng **hoá trị** và theo một **thứ tự nhất định** — thứ tự liên kết đó gọi là **cấu tạo hoá học**.",
  "**Tính chất của chất phụ thuộc vào thành phần phân tử** (bản chất, số lượng nguyên tử) **và cấu tạo hoá học** (thứ tự liên kết giữa các nguyên tử).",
]));
children.push(Section("II. Đồng đẳng"));
children.push(P("**Đồng đẳng** là các hợp chất có thành phần phân tử **hơn kém nhau một hay nhiều nhóm CH₂** nhưng có **tính chất hoá học tương tự nhau** (do có cấu tạo hoá học tương tự), tạo thành một **dãy đồng đẳng**."));
children.push(Section("III. Đồng phân"));
children.push(P("**Đồng phân** là các hợp chất có **cùng công thức phân tử** nhưng **khác nhau về cấu tạo hoá học**, nên có tính chất khác nhau. Có các loại đồng phân cấu tạo: đồng phân mạch carbon, đồng phân vị trí nhóm chức, đồng phân loại nhóm chức."));
children.push(...Img("05_dongdang_dongphan.png", 460, "Minh hoạ dãy đồng đẳng alkane (trái) và hiện tượng đồng phân của C4H10 (phải)."));
children.push(Sub("Giải thích"));
children.push(P("Sở dĩ chỉ với một số loại nguyên tố (chủ yếu C, H, O, N) mà hoá hữu cơ có **hàng triệu hợp chất khác nhau** là vì nguyên tử carbon có thể liên kết với nhau theo **nhiều cách khác nhau** (mạch thẳng, mạch nhánh, mạch vòng) tạo ra vô số cấu tạo hoá học khác nhau, dù cùng một công thức phân tử — đó chính là hiện tượng đồng phân."));
children.push(Example("Ví dụ minh hoạ", [
  "Vì sao ethanol (CH3-CH2-OH) và dimethyl ether (CH3-O-CH3) đều có công thức phân tử C2H6O nhưng có tính chất vật lí, hoá học rất khác nhau (ethanol là chất lỏng, phản ứng được với Na; dimethyl ether là chất khí, không phản ứng với Na)?",
  "Lời giải: Đây là một cặp đồng phân — tuy cùng CTPT C2H6O nhưng khác cấu tạo hoá học (khác loại nhóm chức: ethanol có nhóm –OH, dimethyl ether có nhóm –O– giữa hai gốc alkyl), theo thuyết cấu tạo hoá học, cấu tạo khác nhau dẫn đến tính chất khác nhau.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Hai chất CH3-CH2-CH2-CH3 (butane) và CH3-CH(CH3)-CH3 (isobutane) có phải là đồng đẳng của nhau không? Vì sao?", a: "Không, đây là đồng phân của nhau (cùng công thức phân tử C4H10 nhưng khác cấu tạo mạch carbon), không phải đồng đẳng (đồng đẳng phải khác nhau về thành phần, hơn kém nhau nhóm CH2)." },
]));

children.push(Bai("Ôn tập Chương 3"));
children.push(...Bullet([
  "Hợp chất hữu cơ có đặc điểm chung: liên kết cộng hoá trị, nhiệt độ sôi/nóng chảy thấp, dễ cháy, phản ứng chậm và theo nhiều hướng.",
  "Công thức phân tử được xác định từ công thức đơn giản nhất và phân tử khối.",
  "Thuyết cấu tạo hoá học: tính chất phụ thuộc cả thành phần phân tử và cấu tạo hoá học — giải thích các hiện tượng đồng đẳng, đồng phân.",
]));

        return children;
      }
    },
    {
      id: "hk1_11_p6",
      label: "Phần 6/7: Hydrocarbon: Alkane, Alkene & Alkyne (Bài 14, 15, 16)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 4: HYDROCARBON"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "**Hydrocarbon** là nguồn năng lượng hóa thạch thiết yếu của nhân loại: than đá, dầu mỏ, khí thiên nhiên, khí dầu mỏ hóa lỏng (LPG), xăng, dầu diesel chạy động cơ.",
  "Là **nguồn nguyên liệu vô giá** của công nghiệp hóa dầu: sản xuất nhựa PE, PP, PVC, cao su buna, tơ tổng hợp, dung môi, hóa chất công nghiệp.",
  "Hiểu về hydrocarbon giúp tìm kiếm **nhiên liệu sạch hơn** (khí sinh học biogas, khí thiên nhiên CNG) và xử lí ô nhiễm khí thải phương tiện giao thông."
]));
children.push(spacer());

children.push(Bai("Bài 14. Alkane"));
children.push(Section("I. Khái niệm, đồng đẳng, đồng phân"));
children.push(P("**Alkane** là những hydrocarbon no, mạch hở, trong phân tử chỉ chứa các liên kết đơn C–C và C–H. Công thức chung: **CnH2n+2** (n ≥ 1)."));
children.push(DataTable(
  ["Tên alkane", "CTPT", "Nhiệt độ sôi (°C)", "Trạng thái (25°C)"],
  [
    ["Methane", "CH4", "-161.6", "Khí"],
    ["Ethane", "C2H6", "-88.6", "Khí"],
    ["Propane", "C3H8", "-42.1", "Khí"],
    ["Butane", "C4H10", "-0.5", "Khí"],
    ["Pentane", "C5H12", "36.1", "Lỏng"],
    ["Hexane", "C6H14", "68.7", "Lỏng"]
  ]
));
children.push(spacer());
children.push(Section("II. Tính chất hoá học"));
children.push(NoteBox("Đặc điểm phản ứng", [
  "Do chỉ có liên kết đơn C–C và C–H bền vững, alkane **kém hoạt động hoá học** ở nhiệt độ thường.",
  "Phản ứng đặc trưng của alkane là **phản ứng thế halogen (phản ứng halogen hóa)**.",
  "Ngoài ra còn có phản ứng **cracking**, phản ứng **reforming** và **phản ứng đốt cháy** (toả nhiệt mạnh)."
]));
children.push(Sub("1. Phản ứng thế halogen (clo hóa, brom hóa)"));
children.push(Eq("CH₄  +  Cl₂  →(ánh sáng)  CH₃Cl  +  HCl"));
children.push(Sub("Quy tắc thế"));
children.push(P("Khi tham gia phản ứng thế halogen, nguyên tử halogen ưu tiên **thế vào nguyên tử hydrogen ở carbon bậc cao hơn** (tạo sản phẩm chính có gốc tự do trung gian bền hơn)."));
children.push(Example("Ví dụ minh hoạ: Monoclo hoá propane", [
  "CH3-CH2-CH3 + Cl2 (ánh sáng, tỉ lệ 1:1) thu được 2 sản phẩm:",
  "Sản phẩm chính (thế vào C bậc II): **CH3-CHCl-CH3 (2-chloropropane)**.",
  "Sản phẩm phụ (thế vào C bậc I): **CH3-CH2-CH2Cl (1-chloropropane)**."
]));
children.push(Sub("2. Phản ứng cracking và reforming"));
children.push(P("**Cracking** là quá trình bẻ gãy mạch carbon dài thành các hydrocarbon mạch ngắn hơn (dùng trong lọc dầu để tăng sản lượng xăng)."));
children.push(Eq("C₄H₁₀  →(t°, xt)  C₂H₆  +  C₂H₄  (hoặc CH₄ + C₃H₆)"));
children.push(Sub("3. Phản ứng đốt cháy"));
children.push(Eq("CnH2n+2  +  (3n+1)/2 O₂  →(t°)  nCO₂  +  (n+1)H₂O  (n_H2O > n_CO2)"));

children.push(Bai("Bài 15. Hydrocarbon không no (Alkene và Alkyne)"));
children.push(Section("I. Cấu tạo và đồng phân"));
children.push(...Bullet([
  "**Alkene:** Hydrocarbon không no mạch hở có 1 liên kết đôi C=C (gồm 1σ bền và 1π kém bền). CTPT chung: **CnH2n** (n ≥ 2).",
  "**Alkyne:** Hydrocarbon không no mạch hở có 1 liên kết ba C≡C (gồm 1σ bền và 2π kém bền). CTPT chung: **CnH2n-2** (n ≥ 2).",
  "**Đồng phân hình học (cis/trans):** xuất hiện ở alkene khi mỗi nguyên tử C của liên kết đôi liên kết với hai nhóm thế khác nhau."
]));
children.push(...Img("organic_structures.png", 460, "Nhóm chức và liên kết không no của hydrocarbon và dẫn xuất."));
children.push(Section("II. Tính chất hoá học đặc trưng: Phản ứng cộng"));
children.push(DataTable(
  ["Tác nhân cộng", "Alkene (CH2=CH2)", "Alkyne (CH≡CH)"],
  [
    ["Cộng H2 (Ni, t°)", "CH2=CH2 + H2 → CH3-CH3", "CH≡CH + 2H2 → CH3-CH3 (xt Pd/PbCO3 tạo CH2=CH2)"],
    ["Cộng Bromine (nước Br2)", "CH2=CH2 + Br2 → CH2Br-CH2Br (mất màu)", "CH≡CH + 2Br2 → CHBr2-CHBr2 (mất màu)"],
    ["Cộng HX (HCl, HBr)", "Tạo dẫn xuất monohalogen", "Cộng 1 hoặc 2 phân tử HX"],
    ["Cộng H2O (H+, t°)", "Tạo alcohol", "CH≡CH + H2O → CH3CHO (acetaldehyde)"]
  ]
));
children.push(spacer());
children.push(Sub("Quy tắc Markovnikov"));
children.push(P("Khi cộng bất đối xứng (HX vào alkene bất đối): **Hydrogen (H)** ưu tiên cộng vào nguyên tử carbon mang nhiều hydrogen hơn (bậc thấp hơn), còn **phần mang điện âm (X)** ưu tiên cộng vào carbon mang ít hydrogen hơn (bậc cao hơn)."));
children.push(Eq("CH₃-CH=CH₂  +  HBr  →  CH₃-CH(Br)-CH₃ (sản phẩm chính: 2-bromopropane)"));
children.push(Sub("Phản ứng thế kim loại của alk-1-yne"));
children.push(P("Các alkyne có liên kết ba đầu mạch (như acetylene, propyne) có nguyên tử H linh động, phản ứng với dung dịch **AgNO3 trong NH3** tạo kết tủa vàng nhạt — đây là **phản ứng đặc trưng dùng để nhận biết alk-1-yne**:"));
children.push(Eq("CH≡CH  +  2AgNO₃  +  2NH₃  →  AgC≡CAg↓ (vàng nhạt)  +  2NH₄NO₃"));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Nêu phương pháp hoá học nhận biết 3 bình khí không nhãn: propane, propene và propyne.", a: "Dùng dd AgNO3/NH3: propyne tạo kết tủa vàng nhạt (AgC≡C-CH3). Hai khí còn lại dẫn qua dd nước bromine: propene làm mất màu dd bromine, propane không hiện tượng." }
]));

        return children;
      }
    },
    {
      id: "hk1_11_p7",
      label: "Phần 7/7: Arene (Hydrocarbon thơm) & Toàn diện Ôn tập Chương 4 (Bài 17, 18)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 17. Arene (Hydrocarbon thơm)"));
children.push(Section("I. Cấu tạo của benzene và các arene"));
children.push(P("**Arene (hydrocarbon thơm)** là hydrocarbon trong phân tử có chứa một hay nhiều **nhân benzene**. Phân tử benzene (C6H6) có cấu trúc lục giác đều phẳng, 6 electron p tạo thành hệ liên hợp pi chung bền vững bao quanh 6 nguyên tử carbon."));
children.push(...Bullet([
  "**Đồng đẳng của benzene (alkylbenzene):** Toluene (C6H5CH3), Ethylbenzene (C6H5C2H5), Xylene (dimethylbenzene)... CTPT chung: **CnH2n-6** (n ≥ 6).",
  "**Styrene (vinylbenzene, C6H5-CH=CH2):** có nhánh không no, vừa có tính chất vòng thơm, vừa có tính chất không no của alkene."
]));
children.push(Section("II. Tính chất hoá học của arene"));
children.push(NoteBox("Tính chất thơm (Huckel)", [
  "Arene có đặc trưng: **dễ tham gia phản ứng thế, khó tham gia phản ứng cộng, bền vững với tác nhân oxi hoá** (tính chất thơm)."
]));
children.push(Sub("1. Phản ứng thế ở nhân thơm"));
children.push(P("**Quy tắc thế vào nhân thơm:** Khi trên vòng benzene đã có nhóm alkyl (nhóm đẩy electron), phản ứng thế tiếp theo diễn ra **dễ dàng hơn** benzene và ưu tiên định hướng vào vị trí **ortho (o-)** và **para (p-)**."));
children.push(Eq("**Halogen hoá:**  C₆H₅CH₃  +  Br₂  →(Fe, t°)  o- hoặc p-bromotoluene  +  HBr"));
children.push(Eq("**Nitro hoá:**  C₆H₅CH₃  +  HNO₃ (đặc)  →(H₂SO₄ đặc, t°)  o- hoặc p-nitrotoluene  +  H₂O"));
children.push(Sub("2. Phản ứng oxi hoá ở mạch nhánh alkyl"));
children.push(P("Benzene không bị oxi hoá bởi KMnO4 kể cả khi đun nóng. Toluene và các alkylbenzene **bị oxi hoá mạch nhánh bởi dung dịch KMnO4 khi đun nóng** tạo muối benzoate:"));
children.push(Eq("C₆H₅CH₃  +  2KMnO₄  →(t°)  C₆H₅COOK  +  2MnO₂↓  +  KOH  +  H₂O"));
children.push(Section("III. Ứng dụng của arene"));
children.push(P("Arene là nguyên liệu quan trọng hàng đầu của công nghiệp hoá chất: toluene sản xuất thuốc nổ TNT, phẩm nhuộm; styrene trùng hợp tạo nhựa PS (polystyrene); benzene và xylene làm dung môi hữu cơ cao cấp."));

children.push(Bai("Bài 18. Ôn tập Chương 4: Toàn diện về Hydrocarbon"));
children.push(DataTable(
  ["Loại hydrocarbon", "Đặc điểm cấu tạo", "Phản ứng đặc trưng", "Thuốc thử nhận biết"],
  [
    ["Alkane", "Chỉ có liên kết đơn C–C, C–H", "Thế halogen (chiếu sáng)", "Không làm mất màu dd Bromine"],
    ["Alkene", "Có 1 liên kết đôi C=C", "Cộng (Br2, HX, H2O), trùng hợp", "Làm mất màu dung dịch Bromine, KMnO4"],
    ["Alkyne-1", "Có liên kết ba đầu mạch C≡C", "Cộng, thế ion kim loại Ag+", "Tạo kết tủa vàng nhạt với dd AgNO3/NH3"],
    ["Arene", "Có vòng benzene thơm", "Thế nhân thơm, oxi hoá mạch nhánh", "KMnO4 đun nóng (mất màu với alkylbenzene)"]
  ]
));
children.push(spacer());
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Viết sơ đồ chuyển hóa điều chế nhựa polystyrene (PS) từ benzene.", a: "C6H6 + C2H4 (H+, t°) → C6H5-C2H5 (ethylbenzene) →(xt, t°, -H2) C6H5-CH=CH2 (styrene) →(trùng hợp) (-CH(C6H5)-CH2-)n (nhựa PS)." }
]));

        return children;
      }
    }
  ]
};
