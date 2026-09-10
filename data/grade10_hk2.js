// Dữ liệu lý thuyết chi tiết Hóa học 10 - HK2 chuẩn format Claude docx
module.exports = {
  title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 10 – HỌC KÌ 2",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Năng lượng hóa học, Tốc độ phản ứng & Nhóm Halogen",
  parts: [
    {
      id: "hk2_10_p1",
      label: "Phần 1/7: Năng lượng hóa học, Phản ứng tỏa nhiệt & thu nhiệt, Enthalpy chuẩn (Bài 17)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 5: NĂNG LƯỢNG HÓA HỌC"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Mọi phản ứng hóa học đều gắn liền với **sự biến đổi năng lượng** — cung cấp năng lượng cho sự sống, vận hành động cơ, chạy nhà máy nhiệt điện.",
  "Ứng dụng thiết thực trong y học và đời sống: **túi chườm nóng/lạnh** (dùng phản ứng tỏa/thu nhiệt của muối vô cơ), điều chế nhiên liệu hiệu suất cao.",
  "Hiểu về nhiệt phản ứng giúp các kĩ sư **tính toán lượng nhiệt tỏa ra** để kiểm soát an toàn lò phản ứng, tránh nguy cơ cháy nổ trong sản xuất công nghiệp."
]));
children.push(spacer());

children.push(Bai("Bài 17. Biến thiên enthalpy trong các phản ứng hóa học"));
children.push(Section("I. Phản ứng tỏa nhiệt và phản ứng thu nhiệt"));
children.push(DataTable(
  ["Đặc điểm", "Phản ứng tỏa nhiệt (Exothermic)", "Phản ứng thu nhiệt (Endothermic)"],
  [
    ["Khái niệm", "Giải phóng năng lượng dưới dạng nhiệt ra môi trường", "Hấp thụ năng lượng dưới dạng nhiệt từ môi trường"],
    ["Dấu của biến thiên enthalpy (ΔrH)", "ΔrH < 0 (giá trị âm)", "ΔrH > 0 (giá trị dương)"],
    ["Nhiệt độ môi trường xung quanh", "Tăng lên (nóng lên)", "Giảm xuống (lạnh đi)"],
    ["Ví dụ thực tiễn", "Đốt cháy than, cồn, phản ứng tôi vôi", "Nung vôi (CaCO3), nhiệt phân Cu(OH)2, quang hợp"]
  ]
));
children.push(spacer());
children.push(...Img("enthalpy_diagram.png", 460, "Giản đồ năng lượng của phản ứng toả nhiệt (trái) và phản ứng thu nhiệt (phải)."));
children.push(Section("II. Biến thiên enthalpy chuẩn và nhiệt tạo thành chuẩn"));
children.push(...Bullet([
  "**Điều kiện chuẩn:** áp suất 1 bar (đối với chất khí), nồng độ 1 mol/L (đối với chất tan) và nhiệt độ 25 °C (298 K).",
  "**Nhiệt tạo thành chuẩn (ΔfH°298):** là biến thiên enthalpy của phản ứng tạo thành 1 mol chất đó từ các đơn chất bền nhất ở điều kiện chuẩn.",
  "**Quy ước:** Nhiệt tạo thành chuẩn của các đơn chất bền nhất bằng **0 kJ/mol** (Ví dụ: O2(g), N2(g), C(graphite), H2(g)...)."
]));
children.push(NoteBox("Ghi nhớ", [
  "Giá trị ΔfH°298 càng âm thì hợp chất đó **càng bền vững về mặt nhiệt động** so với các đơn chất cấu tạo nên nó."
]));
children.push(Sub("Phương trình nhiệt hóa học minh họa"));
children.push(Eq("C (graphite)  +  O₂ (k)  →  CO₂ (k)   ΔrH°₂₉₈ = –393,5 kJ  (toả nhiệt)"));
children.push(Eq("CaCO₃ (r)  →(t°)  CaO (r)  +  CO₂ (k)   ΔrH°₂₉₈ = +178,5 kJ  (thu nhiệt)"));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao khi hòa tan viên sủi C vào nước, cốc nước có cảm giác mát lạnh?", a: "Vì phản ứng hòa tan và phản ứng giữa acid hữu cơ với muối hydrogen carbonate trong viên sủi là quá trình thu nhiệt (ΔH > 0), hấp thụ nhiệt từ nước và thành cốc khiến nhiệt độ giảm." }
]));

        return children;
      }
    },
    {
      id: "hk2_10_p2",
      label: "Phần 2/7: Tính biến thiên enthalpy theo nhiệt tạo thành & năng lượng liên kết (Bài 18)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 18. Tính biến thiên enthalpy của phản ứng hóa học"));
children.push(Section("I. Tính theo nhiệt tạo thành chuẩn (ΔfH°298)"));
children.push(P("Biến thiên enthalpy chuẩn của phản ứng bằng tổng nhiệt tạo thành của các chất sản phẩm trừ đi tổng nhiệt tạo thành của các chất phản ứng (nhân với hệ số tỉ lượng):"));
children.push(Eq("**ΔrH°₂₉₈ = ∑ ΔfH°₂₉₈ (sản phẩm)  –  ∑ ΔfH°₂₉₈ (chất đầu)**"));
children.push(Section("II. Tính theo năng lượng liên kết (Eb)"));
children.push(P("Áp dụng cho các phản ứng mà tất cả các chất phản ứng và sản phẩm đều ở **thể khí**:"));
children.push(Eq("**ΔrH°₂₉₈ = ∑ Eb (chất đầu)  –  ∑ Eb (sản phẩm)**"));
children.push(Sub("Giải thích"));
children.push(P("Sở dĩ khi tính theo năng lượng liên kết Eb lại lấy **chất đầu trừ sản phẩm** (ngược với nhiệt tạo thành) là vì: để phản ứng xảy ra, trước hết cần **cung cấp năng lượng phá vỡ các liên kết** trong chất đầu (quá trình thu nhiệt, dấu +), sau đó năng lượng được **giải phóng khi hình thành các liên kết mới** trong sản phẩm (quá trình toả nhiệt, dấu –)."));
children.push(Example("Ví dụ minh hoạ: Tính ΔrH° của phản ứng đốt cháy khí methane", [
  "Phương trình: CH4 (k) + 2O2 (k) → CO2 (k) + 2H2O (k).",
  "Biết Eb(C–H) = 413 kJ/mol; Eb(O=O) = 498 kJ/mol; Eb(C=O) = 745 kJ/mol; Eb(O–H) = 467 kJ/mol.",
  "Lời giải: Phá vỡ: 4 liên kết C–H và 2 liên kết O=O → ∑Eb(chất đầu) = 4×413 + 2×498 = 2648 kJ.",
  "Tạo thành: 2 liên kết C=O và 4 liên kết O–H → ∑Eb(sản phẩm) = 2×745 + 4×467 = 3358 kJ.",
  "ΔrH°298 = 2648 – 3358 = **–710 kJ** (phản ứng toả nhiệt mạnh, phù hợp thực tế methane là nhiên liệu sạch)."
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Cho phản ứng: N2(k) + 3H2(k) ⇌ 2NH3(k). Biết ΔfH°298(NH3) = –45,9 kJ/mol. Tính biến thiên enthalpy chuẩn của phản ứng trên.", a: "ΔrH°298 = 2×ΔfH°298(NH3) – [ΔfH°298(N2) + 3×ΔfH°298(H2)] = 2×(–45,9) – [0 + 0] = –91,8 kJ (phản ứng toả nhiệt)." }
]));
children.push(Bai("Ôn tập Chương 5"));
children.push(...Bullet([
  "Phản ứng toả nhiệt (ΔrH < 0) giải phóng nhiệt; phản ứng thu nhiệt (ΔrH > 0) hấp thụ nhiệt.",
  "Tính ΔrH° theo nhiệt tạo thành: Sản phẩm trừ Chất đầu; theo năng lượng liên kết khí: Chất đầu trừ Sản phẩm."
]));

        return children;
      }
    },
    {
      id: "hk2_10_p3",
      label: "Phần 3/7: Tốc độ phản ứng hóa học & Định luật tác dụng khối lượng (Bài 19)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 6: TỐC ĐỘ PHẢN ỨNG HÓA HỌC"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Kiểm soát tốc độ phản ứng là yếu tố cốt lõi trong đời sống: **làm chậm phản ứng có hại** (bảo quản thực phẩm trong tủ lạnh, chống gỉ kim loại) và **tăng tốc phản ứng có lợi** (nấu thức ăn trong nồi áp suất, sản xuất công nghiệp).",
  "Chất xúc tác đóng vai trò quyết định trong hơn 90% quy trình sản xuất hóa chất công nghiệp hiện đại và **hàng triệu phản ứng sinh hóa** trong cơ thể sống (enzyme).",
  "Hiểu về tốc độ phản ứng giúp phòng tránh nguy cơ **cháy nổ bụi** trong hầm lò than, nhà máy xay bột, kho chứa ngũ cốc."
]));
children.push(spacer());

children.push(Bai("Bài 19. Tốc độ phản ứng hóa học"));
children.push(Section("I. Khái niệm và tốc độ trung bình"));
children.push(P("**Tốc độ phản ứng** đặc trưng cho mức độ diễn ra nhanh hay chậm của một phản ứng hoá học, được xác định bằng độ biến thiên nồng độ của một chất phản ứng hoặc sản phẩm trong một đơn vị thời gian."));
children.push(Eq("**v_tb = – (1/a) × (ΔC_A / Δt) = (1/c) × (ΔC_C / Δt)**"));
children.push(Section("II. Định luật tác dụng khối lượng"));
children.push(P("Đối với các phản ứng đơn giản: **aA  +  bB  →  sản phẩm**, tốc độ phản ứng tỉ lệ thuận với tích nồng độ các chất phản ứng nâng lên luỹ thừa bằng hệ số tỉ lượng:"));
children.push(Eq("**v = k × (C_A)ᵃ × (C_B)ᵇ**"));
children.push(NoteBox("Hằng số tốc độ k", [
  "Hằng số tốc độ k phụ thuộc vào **nhiệt độ và bản chất của chất phản ứng**, không phụ thuộc vào nồng độ các chất.",
  "Khi nồng độ các chất đều bằng 1 mol/L thì v = k → k chính là **tốc độ riêng** của phản ứng."
]));
children.push(Example("Ví dụ minh hoạ", [
  "Cho phản ứng: 2NO (k) + O2 (k) → 2NO2 (k). Tốc độ phản ứng thay đổi như thế nào nếu tăng nồng độ NO lên gấp đôi và giữ nguyên nồng độ O2?",
  "Lời giải: Biểu thức tốc độ: v = k [NO]² [O2]. Khi [NO] tăng 2 lần: v' = k (2[NO])² [O2] = 4 × v. Vậy tốc độ phản ứng **tăng lên 4 lần**."
]));

        return children;
      }
    },
    {
      id: "hk2_10_p4",
      label: "Phần 4/7: Các yếu tố ảnh hưởng tốc độ phản ứng & Hệ số Van t Hoff (Bài 20)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 20. Các yếu tố ảnh hưởng đến tốc độ phản ứng hóa học"));
children.push(...Img("rate_factors.png", 460, "5 yếu tố ảnh hưởng đến tốc độ phản ứng: nồng độ, áp suất, nhiệt độ, diện tích tiếp xúc, chất xúc tác."));
children.push(DataTable(
  ["Yếu tố", "Ảnh hưởng đến tốc độ phản ứng", "Cơ chế theo thuyết va chạm", "Ví dụ thực tiễn"],
  [
    ["Nồng độ", "Nồng độ tăng → tốc độ tăng", "Tăng số lượng phân tử/thể tích → tăng số va chạm hiệu quả", "Que đóm cháy bùng trong bình chứa khí O2 nguyên chất"],
    ["Áp suất", "Áp suất chất khí tăng → tốc độ tăng", "Khoảng cách giữa các phân tử khí giảm → tăng mật độ va chạm", "Tổng hợp NH3 thực hiện ở áp suất cao (200 bar)"],
    ["Nhiệt độ", "Nhiệt độ tăng → tốc độ tăng", "Các phân tử chuyển động nhanh hơn, tăng tỉ lệ va chạm có đủ năng lượng hoạt hoá", "Bảo quản thức ăn trong tủ lạnh để làm chậm ôi thiu"],
    ["Diện tích tiếp xúc", "Diện tích tăng (chia nhỏ) → tốc độ tăng", "Tăng số lượng va chạm đồng thời giữa các chất", "Than tổ ong đục nhiều lỗ để dễ bắt lửa và cháy đều"],
    ["Chất xúc tác", "Làm tăng tốc độ phản ứng", "Mở ra con đường phản ứng mới có năng lượng hoạt hoá thấp hơn", "Men bánh mì giúp bột nở nhanh, enzyme tiêu hoá thức ăn"]
  ]
));
children.push(spacer());
children.push(Section("Quy tắc kinh nghiệm Van 't Hoff về nhiệt độ"));
children.push(P("Khi nhiệt độ tăng thêm 10 °C, tốc độ phản ứng hoá học tăng từ **2 đến 4 lần** (kí hiệu γ là hệ số nhiệt độ Van 't Hoff):"));
children.push(Eq("**v₂ = v₁ × γ^((T₂ – T₁) / 10)**"));
children.push(Example("Ví dụ minh hoạ", [
  "Một phản ứng có hệ số nhiệt độ γ = 3. Hỏi tốc độ phản ứng tăng lên bao nhiêu lần khi nâng nhiệt độ từ 30 °C lên 60 °C?",
  "Lời giải: Δt = 60 – 30 = 30 °C. Tỉ số tốc độ: v2 / v1 = 3^(30/10) = 3³ = **27 lần**."
]));
children.push(Bai("Ôn tập Chương 6"));
children.push(...Bullet([
  "Tốc độ phản ứng đo bằng độ biến thiên nồng độ theo thời gian; biểu thức định luật tác dụng khối lượng: v = k [A]^a [B]^b.",
  "5 yếu tố làm tăng tốc độ: tăng nồng độ, tăng áp suất chất khí, tăng nhiệt độ, tăng diện tích tiếp xúc, sử dụng chất xúc tác thích hợp."
]));

        return children;
      }
    },
    {
      id: "hk2_10_p5",
      label: "Phần 5/7: Đơn chất Halogen – Tính chất vật lí, hóa học & Ứng dụng (Bài 21)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 7: NGUYÊN TỐ NHÓM HALOGEN"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "**Chlorine (Cl2)** bảo vệ sức khỏe cộng đồng: xử lí vô trùng hơn 98% nguồn nước sinh hoạt trên toàn cầu, sản xuất chất tẩy rửa, khử trùng y tế.",
  "**Iodine (I2)** là vi chất sinh học tối quan trọng: bổ sung vào muối ăn phòng chống bệnh bướu cổ và thiểu năng trí tuệ.",
  "**Fluorine (F2)** tạo ra hợp chất polymer siêu bền Teflon (chống dính chảo) và kem đánh răng chứa fluoride chống sâu răng hiệu quả."
]));
children.push(spacer());

children.push(Bai("Bài 21. Nhóm Halogen"));
children.push(Section("I. Vị trí, cấu tạo nguyên tử nhóm VIIA"));
children.push(P("Nhóm Halogen gồm các nguyên tố: **Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I)** và Astatine (At)."));
children.push(...Bullet([
  "Cấu hình electron lớp ngoài cùng: **ns² np⁵** (có 7 electron hoá trị) → xu hướng **nhận thêm 1 electron** để đạt cấu hình bền khí hiếm: **X + 1e → X⁻**.",
  "Ở trạng thái tự do, hai nguyên tử góp chung 1 cặp electron tạo phân tử dạng **X₂**."
]));
children.push(...Img("halogen_trend.png", 460, "Quy luật biến đổi tính chất vật lí và tính oxi hoá trong nhóm Halogen."));
children.push(DataTable(
  ["Nguyên tố", "Trạng thái (25°C)", "Màu sắc", "Nhiệt độ sôi (°C)", "Độ âm điện"],
  [
    ["F2", "Khí", "Lục nhạt", "-188.1", "3.98 (lớn nhất)"],
    ["Cl2", "Khí", "Vàng lục", "-34.0", "3.16"],
    ["Br2", "Lỏng", "Nâu đỏ (dễ bay hơi)", "58.8", "2.96"],
    ["I2", "Rắn", "Tím đen (thăng hoa khi đun)", "184.3", "2.66"]
  ]
));
children.push(spacer());
children.push(Sub("Giải thích sự biến đổi nhiệt độ sôi"));
children.push(P("Từ F2 đến I2, khối lượng phân tử và kích thước nguyên tử tăng dần, làm cho **tương tác van der Waals giữa các phân tử tăng lên rõ rệt** → nhiệt độ nóng chảy và nhiệt độ sôi **tăng dần** từ khí sang lỏng rồi rắn."));
children.push(Section("II. Tính chất hoá học: Tính oxi hoá mạnh"));
children.push(P("Tính oxi hoá giảm dần theo thứ tự: **F₂  >  Cl₂  >  Br₂  >  I₂**."));
children.push(Eq("**Tác dụng kim loại (lên hoá trị cao nhất):**  2Fe  +  3Cl₂  →(t°)  2FeCl₃"));
children.push(Eq("**Tác dụng với Fe (tính oxi hoá yếu hơn của I2):**  Fe  +  I₂  →(t°)  FeI₂"));
children.push(Eq("**Halogen mạnh đẩy halogen yếu ra khỏi dung dịch muối:**  Cl₂  +  2NaBr  →  2NaCl  +  Br₂"));
children.push(Eq("Br₂  +  2NaI  →  2NaBr  +  I₂"));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao sắt tác dụng với khí Cl2 tạo FeCl3 nhưng tác dụng với I2 chỉ tạo FeCl2?", a: "Vì Cl2 có tính oxi hoá rất mạnh (độ âm điện lớn) nên oxi hoá Fe lên mức oxi hoá cao nhất (+3), trong khi I2 có tính oxi hoá yếu hơn nhiều nên chỉ oxi hoá được Fe lên mức (+2)." }
]));

        return children;
      }
    },
    {
      id: "hk2_10_p6",
      label: "Phần 6/7: Hydrogen halide, Hydrohalic acid & Nhận biết ion halide (Bài 22)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 22. Hydrogen halide và một số phản ứng của ion halide"));
children.push(Section("I. Tính chất của Hydrogen halide và Hydrohalic acid"));
children.push(DataTable(
  ["Hợp chất", "Nhiệt độ sôi (°C)", "Tính acid của dung dịch trong nước", "Tính khử của ion halide"],
  [
    ["HF", "19.5 (bất thường, cao)", "Acid yếu", "Không thể hiện tính khử"],
    ["HCl", "-85.1", "Acid mạnh", "Tính khử yếu"],
    ["HBr", "-66.7", "Acid rất mạnh", "Tính khử mạnh"],
    ["HI", "-35.4", "Acid mạnh nhất trong dãy", "Tính khử rất mạnh"]
  ]
));
children.push(spacer());
children.push(Sub("Giải thích"));
children.push(P("1. **Nhiệt độ sôi bất thường của HF:** Do nguyên tử F có độ âm điện rất lớn và bán kính nhỏ, giữa các phân tử HF hình thành **liên kết hydrogen liên phân tử bền vững**, làm tăng nhiệt độ sôi vượt trội so với các HX khác."));
children.push(P("2. **Quy luật tăng tính acid từ HF đến HI:** Độ dài liên kết H–X tăng dần từ HF đến HI, năng lượng liên kết giảm dần → liên kết H–X **càng dễ bị phân cắt** trong nước giải phóng H⁺ → **tính acid tăng dần**: HF < HCl < HBr < HI."));
children.push(NoteBox("Phản ứng đặc biệt của HF", [
  "Acid hydrofluoric (HF) có khả năng **hoà tan silicon dioxide (SiO2) trong thuỷ tinh** — được dùng để khắc chữ lên thuỷ tinh và không bao giờ được đựng trong bình thuỷ tinh:",
  "SiO₂  +  4HF  →  SiF₄↑  +  2H₂O"
]));
children.push(Section("II. Nhận biết các ion halide bằng dung dịch AgNO3"));
children.push(DataTable(
  ["Ion halide", "Hiện tượng với dd AgNO3", "Phương trình hoá học"],
  [
    ["F⁻", "Không có kết tủa (AgF tan)", "Không phản ứng"],
    ["Cl⁻", "Kết tủa trắng (AgCl)", "Ag⁺  +  Cl⁻  →  AgCl↓ (trắng)"],
    ["Br⁻", "Kết tủa vàng nhạt (AgBr)", "Ag⁺  +  Br⁻  →  AgBr↓ (vàng nhạt)"],
    ["I⁻", "Kết tủa vàng đậm (AgI)", "Ag⁺  +  I⁻  →  AgI↓ (vàng đậm)"]
  ]
));
children.push(spacer());
children.push(Example("Ví dụ minh hoạ: Phân biệt 4 dung dịch NaF, NaCl, NaBr, NaI", [
  "Thuốc thử duy nhất: Dung dịch AgNO3.",
  "Hiện tượng: Không kết tủa → NaF; Kết tủa trắng → NaCl; Kết tủa vàng nhạt → NaBr; Kết tủa vàng đậm → NaI."
]));

        return children;
      }
    },
    {
      id: "hk2_10_p7",
      label: "Phần 7/7: Hợp chất chứa oxygen của chlorine & Toàn diện Ôn tập Chương 7 (Bài 23, 24)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 23. Hợp chất chứa oxygen của chlorine"));
children.push(Section("I. Nước Javel (Gia-ven)"));
children.push(P("Nước Javel là dung dịch chứa hỗn hợp muối **NaCl** và **NaClO** (sodium hypochlorite), điều chế bằng cách sục khí chlorine vào dung dịch NaOH loãng ở nhiệt độ thường:"));
children.push(Eq("Cl₂  +  2NaOH  →  NaCl  +  NaClO  +  H₂O"));
children.push(Sub("Giải thích"));
children.push(P("Muối NaClO có tính **oxi hoá rất mạnh** (nguyên tử Cl có số oxi hoá +1), ion ClO⁻ dễ giải phóng oxygen nguyên tử có tính sát trùng và tẩy trắng mạnh → nước Javel được dùng để **tẩy trắng vải sợi và khử trùng nước sinh hoạt, chuồng trại**; để lâu trong không khí phản ứng với CO2 giải phóng HClO."));

children.push(Section("II. Clorua vôi (CaOCl2)"));
children.push(P("Clorua vôi là muối hỗn tạp của kim loại calcium với hai gốc acid Cl⁻ và ClO⁻, điều chế bằng phản ứng giữa Cl2 với vôi tôi ẩm ở 30 °C:"));
children.push(Eq("Cl₂  +  Ca(OH)₂ (vôi tôi ẩm)  →  CaOCl₂  +  H₂O"));
children.push(P("Clorua vôi có tính tẩy màu, sát trùng mạnh tương tự nước Javel nhưng rẻ tiền hơn, dễ vận chuyển ở dạng bột khô."));

children.push(Bai("Ôn tập Chương 7: Toàn diện nhóm Halogen"));
children.push(DataTable(
  ["Nguyên tố", "Đơn chất", "Tính oxi hoá", "Tính acid của HX", "Phản ứng Ag+"],
  [
    ["Fluorine (F)", "F2 (khí)", "Mạnh nhất (oxi hoá cả H2O)", "HF: acid yếu, khắc thuỷ tinh", "AgF: tan trong nước"],
    ["Chlorine (Cl)", "Cl2 (khí)", "Mạnh", "HCl: acid mạnh, thông dụng", "AgCl: kết tủa trắng"],
    ["Bromine (Br)", "Br2 (lỏng)", "Trung bình", "HBr: acid rất mạnh, tính khử", "AgBr: kết tủa vàng nhạt"],
    ["Iodine (I)", "I2 (rắn)", "Yếu nhất", "HI: acid mạnh nhất, tính khử mạnh", "AgI: kết tủa vàng đậm"]
  ]
));
children.push(spacer());
children.push(NoteBox("Nhận biết hồ tinh bột", [
  "Dung dịch iodine (I2) phản ứng với hồ tinh bột tạo **hợp chất màu xanh tím đặc trưng** (khi đun nóng màu biến mất, để nguội xuất hiện trở lại) — đây là phép thử đặc trưng nhận biết nhau giữa I2 và tinh bột."
]));

        return children;
      }
    }
  ]
};
