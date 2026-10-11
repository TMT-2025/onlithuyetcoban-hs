// Dữ liệu lý thuyết chi tiết Hóa học 12 - HK2 chuẩn format Claude docx
module.exports = {
  title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 12 – HỌC KÌ 2",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Nguyên tố nhóm IA, IIA, Nước cứng & Kim loại chuyển tiếp, Phức chất",
  parts: [
    {
      id: "hk2_12_p1",
      label: "Chương 7 (Phần 1): Kim loại nhóm IA (Kim loại kiềm) & Nhóm IIA (Kiềm thổ) (Bài 24, 25)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
        children.push(Chapter("CHƯƠNG 7: NGUYÊN TỐ NHÓM IA VÀ NHÓM IIA – NƯỚC CỨNG"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Ứng dụng đời sống", [
          "Các nguyên tố nhóm IA và IIA là những **kim loại có tính khử mạnh nhất** trên Trái Đất, đóng vai trò sống còn trong hoạt động sinh học tế bào, nông nghiệp, xây dựng và công nghiệp vật liệu hiện đại.",
          "**Trong cơ thể sống:** Bơm ion Na+/K+ duy trì điện thế màng tế bào, dẫn truyền xung thần kinh và giữ cân bằng nước; Ion Ca2+ và Mg2+ là thành phần chính cấu tạo nên xương, răng, vỏ sò huyết, tham gia đông máu và hoạt hóa hàng trăm enzyme trao đổi chất.",
          "**Trong xây dựng & Công nghiệp:** Đá vôi (CaCO3) và vôi tôi Ca(OH)2 là nền móng của ngành sản xuất xi măng, vữa xây dựng; Thạch cao (CaSO4) dùng đúc tượng, làm trần thạch cao, bó bột y tế; Muối ăn NaCl là nguyên liệu khởi đầu sản xuất xút (NaOH), khí clo (Cl2) và baking soda (NaHCO3)."
        ]));
        children.push(spacer());

        children.push(Bai("Bài 24. Nguyên tố nhóm IA (Kim loại kiềm)"));
        children.push(Section("I. Vị trí trong bảng tuần hoàn và Cấu tạo nguyên tử"));
        children.push(P("Nhóm IA (Alkali metals) gồm các nguyên tố: **Lithium (Li), Sodium (Na), Potassium (K), Rubidium (Rb), Caesium (Cs)** và nguyên tố phóng xạ Francium (Fr)."));
        children.push(...Bullet([
          "Cấu hình electron lớp ngoài cùng: **ns¹** (chỉ có 1 electron hoá trị ở phân lớp s).",
          "Số oxi hoá duy nhất trong tất cả các hợp chất là **+1**.",
          "Bán kính nguyên tử **lớn nhất** so với các nguyên tố khác trong cùng chu kì; Năng lượng ion hoá thứ nhất (I1) **nhỏ nhất** trong chu kì và giảm dần từ Li đến Cs.",
          "Mạng tinh thể kim loại: đều có cấu trúc **lập phương tâm khối (bcc)** với độ đặc khít thấp (chỉ 68%)."
        ]));

        children.push(Section("II. Tính chất vật lí"));
        children.push(...Bullet([
          "Có màu trắng bạc, có ánh kim lấp lánh khi mới cắt, nhưng bị mờ đục rất nhanh trong không khí do bị oxy hóa.",
          "**Khối lượng riêng nhỏ (rất nhẹ):** Li, Na, K đều nhẹ hơn nước và nổi trên mặt nước (khối lượng riêng Li = 0,53 g/cm³ là kim loại nhẹ nhất).",
          "**Nhiệt độ nóng chảy và nhiệt độ sôi thấp:** giảm dần từ Li đến Cs (nhiệt độ nóng chảy của Cs chỉ 28,5 °C, chảy lỏng trong lòng bàn tay).",
          "**Độ cứng rất thấp (mềm):** có thể dễ dàng cắt bằng dao gọt hoa quả."
        ]));
        children.push(Sub("Giải thích bản chất tính chất vật lí"));
        children.push(P("Các kim loại kiềm có bán kính nguyên tử lớn, mỗi nguyên tử chỉ đóng góp 1 electron hoá trị để tạo liên kết kim loại trong khi cấu trúc mạng tinh thể lập phương tâm khối lại có độ đặc khít thấp (68%). Do đó, **mật độ điện tích nhỏ và liên kết kim loại rất yếu**, dẫn đến nhiệt độ nóng chảy thấp, nhiệt độ sôi thấp và độ cứng rất mềm."));

        children.push(Section("III. Tính chất hoá học: Tính khử rất mạnh"));
        children.push(P("Kim loại kiềm là những chất khử mạnh nhất trong các kim loại. Tính khử **tăng dần từ Li đến Cs** (thế điện cực chuẩn E° rất âm: E°_Na = –2,71 V; E°_K = –2,93 V; E°_Li = –3,04 V)."));

        children.push(Sub("1. Tác dụng với phi kim (O2, Cl2)"));
        children.push(Eq("2Na  +  Cl₂  →(t°)  2NaCl  (Cháy sáng chói với ngọn lửa màu vàng đặc trưng)"));
        children.push(P("Khi đốt trong không khí khô: Li tạo oxide thông thường (Li2O); Na tạo chủ yếu peroxide (Na2O2 có chứa ion O2^2–); K, Rb, Cs tạo superoxide (KO2, RbO2, CsO2 có chứa ion O2^–)."));

        children.push(Sub("2. Tác dụng mãnh liệt với nước ở nhiệt độ thường"));
        children.push(P("Kim loại kiềm phản ứng mãnh liệt với nước ngay ở nhiệt độ thường, tỏa nhiều nhiệt, giải phóng khí H2 và tạo dung dịch hydroxide kiềm mạnh:"));
        children.push(Eq("2Na  +  2H₂O  →  2NaOH  +  H₂↑  (Na nóng chảy vo tròn thành viên bi chạy trên mặt nước)"));
        children.push(Eq("2K  +  2H₂O  →  2KOH  +  H₂↑  (Phản ứng mãnh liệt, khí H2 tự bốc cháy với ngọn lửa màu tím)"));
        children.push(NoteBox("Bảo quản kim loại kiềm trong phòng thí nghiệm", [
          "Do kim loại kiềm phản ứng rất nhanh với O2 và hơi nước trong không khí, người ta phải **ngâm ngập các kim loại kiềm (Na, K) trong dầu hỏa khan** trong lọ thủy tinh đậy nút kín."
        ]));

        children.push(Sub("3. Màu ngọn lửa đặc trưng"));
        children.push(P("Khi đốt các hợp chất hoặc kim loại kiềm trên ngọn lửa đèn khí không màu, các electron bị kích thích nhảy lên mức năng lượng cao rồi quay trở về mức cơ bản, phát ra các photon có bước sóng đặc trưng:"));
        children.push(DataTable(
          ["Kim loại kiềm", "Màu ngọn lửa đặc trưng", "Ứng dụng"],
          [
            ["Lithium (Li)", "**Màu đỏ tía (đỏ carmine)**", "Sản xuất pháo hoa màu đỏ rực"],
            ["Sodium (Na)", "**Màu vàng tươi (vàng chói)**", "Đèn chiếu sáng hơi natri, pháo hoa vàng"],
            ["Potassium (K)", "**Màu tím nhạt (tím hoa cà)**", "Nhận biết muối kali, pháo hoa tím"],
            ["Rubidium (Rb)", "**Màu đỏ thẫm**", "Đồng hồ nguyên tử rubidium"],
            ["Caesium (Cs)", "**Màu xanh lam**", "Tế bào quang điện, chuẩn giây quốc tế"]
          ]
        ));
        children.push(spacer());

        children.push(Bai("Bài 25. Nguyên tố nhóm IIA (Kim loại kiềm thổ)"));
        children.push(Section("I. Vị trí và Cấu tạo nguyên tử"));
        children.push(P("Nhóm IIA (Alkaline earth metals) gồm: **Beryllium (Be), Magnesium (Mg), Calcium (Ca), Strontium (Sr), Barium (Ba)** và Radium (Ra)."));
        children.push(...Bullet([
          "Cấu hình electron lớp ngoài cùng: **ns²** (có 2 electron hoá trị).",
          "Số oxi hoá duy nhất trong các hợp chất là **+2**.",
          "So với kim loại kiềm cùng chu kì: bán kính nguyên tử nhỏ hơn, điện tích hạt nhân lớn hơn, liên kết kim loại bền hơn nên nhiệt độ nóng chảy, nhiệt độ sôi và độ cứng **cao hơn kim loại kiềm** (nhưng vẫn thuộc loại kim loại nhẹ và tương đối mềm)."
        ]));

        children.push(Section("II. Tính chất hoá học của Kim loại kiềm thổ"));
        children.push(P("Kim loại kiềm thổ có **tính khử mạnh**, tính khử tăng dần từ Be đến Ba:"));
        children.push(Sub("1. Tác dụng với nước"));
        children.push(...Bullet([
          "**Beryllium (Be):** Không phản ứng với nước ở bất kì nhiệt độ nào (do có màng BeO bền bảo vệ).",
          "**Magnesium (Mg):** Phản ứng rất chậm với nước ở nhiệt độ thường, phản ứng nhanh hơn với nước nóng tạo Mg(OH)2 ít tan: Mg + 2H2O →(t°) Mg(OH)2↓ + H2↑.",
          "**Ca, Sr, Ba:** Phản ứng mãnh liệt với nước ở nhiệt độ thường tương tự kim loại kiềm, tạo dung dịch base mạnh:",
          "Ca  +  2H₂O  →  Ca(OH)₂  +  H₂↑  (Nước vôi trong, dung dịch kiềm mạnh)",
          "Ba  +  2H₂O  →  Ba(OH)₂  +  H₂↑  (Phản ứng tỏa nhiệt mạnh, dung dịch base rất mạnh)"
        ]));

        children.push(Section("III. Một số hợp chất quan trọng của kim loại kiềm và kiềm thổ"));
        children.push(DataTable(
          ["Hợp chất", "Tên gọi thông dụng", "Tính chất đặc trưng", "Ứng dụng thực tiễn"],
          [
            ["NaOH", "Xút ăn da (Caustic soda)", "Base mạnh, hút ẩm mạnh, ăn mòn thủy tinh và da", "Sản xuất xà phòng, giấy, tơ nhân tạo, chế biến dầu mỏ"],
            ["NaHCO3", "Baking soda (Thuốc muối)", "Muối lưỡng tính, dễ bị nhiệt phân sinh ra CO2", "Bột nở làm bánh, thuốc đau dạ dày (trung hòa HCl), bình chữa cháy"],
            ["Na2CO3", "Soda (Soda ash)", "Muối tạo môi trường kiềm trong nước, bền nhiệt", "Công nghiệp sản xuất thủy tinh, chất tẩy rửa, xử lý nước"],
            ["Ca(OH)2", "Vôi tôi, nước vôi trong", "Base rẻ tiền, tác dụng với CO2 tạo kết tủa CaCO3", "Xử lý đất chua phèn trong nông nghiệp, vữa xây dựng, khử trùng"],
            ["CaCO3", "Đá vôi, đá hoa, phấn viết", "Chất rắn trắng không tan, bị nhiệt phân ở 900 °C", "Sản xuất xi măng, vôi sống (CaO), làm bột đá tráng giấy"],
            ["CaSO4.2H2O", "Thạch cao sống (tự nhiên)", "Dạng khoáng vật sulfate ngậm nước", "Sản xuất thạch cao nung, phụ gia làm chậm đông kết xi măng"],
            ["CaSO4.0,5H2O", "Thạch cao nung", "Khi nhào với nước nở thể tích và đông cứng nhanh", "Đúc khuôn tượng, nặn phù điêu trang trí, bó bột xương gãy y tế"]
          ]
        ));
        children.push(spacer());

        children.push(Example("Ví dụ mẫu: Phản ứng nhiệt phân muối carbonate và hydrogencarbonate", [
          "Đề bài: Nêu hiện tượng và viết phương trình hóa học khi:",
          "a) Đun nóng dung dịch NaHCO3.",
          "b) Nung nóng mẩu đá vôi CaCO3 ở 1000 °C.",
          "Lời giải từng bước:",
          "a) Hiện tượng: Xuất hiện bọt khí không màu sủi lên liên tục trong dung dịch.",
          "   Phương trình: 2NaHCO3 →(t°) Na2CO3 + CO2↑ + H2O.",
          "   (Lưu ý: Muối Na2CO3 rất bền nhiệt, nung nóng không bị phân hủy).",
          "b) Hiện tượng: Khối lượng chất rắn giảm đi, sinh ra khí CO2 không màu làm đục nước vôi trong; chất rắn thu được là vôi sống CaO phản ứng tỏa nhiệt dữ dội khi cho vào nước (tôi vôi).",
          "   Phương trình: CaCO3 →(1000°C) CaO + CO2↑  (ΔH > 0, phản ứng thu nhiệt)."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Bài 24, 25", [
          {
            q: "Vì sao người ta không dùng nước để dập tắt đám cháy kim loại kiềm (Na, K) hoặc kim loại magnesium (Mg)?",
            a: "Vì kim loại kiềm phản ứng mãnh liệt với nước sinh ra khí H2 dễ cháy nổ (2Na + 2H2O → 2NaOH + H2); còn Mg cháy phản ứng với hơi nước ở nhiệt độ cao (Mg + H2O → MgO + H2) và thậm chí khử cả khí CO2 của bình chữa cháy (2Mg + CO2 → 2MgO + C). Để dập đám cháy kim loại kiềm và Mg, người ta phải dùng cát khô hoặc bột hóa chất chữa cháy chuyên dụng lớp D."
          },
          {
            q: "Nhỏ từ từ dung dịch HCl vào dung dịch Na2CO3. Nêu hiện tượng theo từng giai đoạn.",
            a: "Giai đoạn 1: Ban đầu chưa thấy sủi bọt khí vì HCl chuyển Na2CO3 thành NaHCO3 (H+ + CO3^2– → HCO3^–). Giai đoạn 2: Tiếp tục nhỏ HCl dư, bắt đầu sủi bọt khí CO2 mãnh liệt (H+ + HCO3^– → CO2↑ + H2O)."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_12_p2",
      label: "Chương 7 (Phần 2): Nước cứng & Phương pháp làm mềm nước cứng toàn diện (Bài 26)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Bai("Bài 26. Nước cứng và Phương pháp làm mềm nước cứng"));
        children.push(Section("I. Khái niệm và Phân loại nước cứng"));
        children.push(P("**Nước cứng (Hard water)** là nước chứa hàm lượng cao các ion **Ca²⁺ và Mg²⁺** (thường trên 3 mEq/L hay 100 mg/L quy đổi theo CaCO3). Nước mềm (Soft water) là nước chứa rất ít hoặc không chứa các ion Ca²⁺ và Mg²⁺ (ví dụ: nước mưa, nước cất)."));

        children.push(DataTable(
          ["Loại nước cứng", "Thành phần các anion có trong nước", "Các muối chủ yếu gây nên", "Đặc điểm nhận diện"],
          [
            ["1. Nước cứng tạm thời (Temporary hardness)", "Chứa anion **HCO₃⁻ (hydrogencarbonate)** cùng với Ca²⁺, Mg²⁺", "Ca(HCO3)2 và Mg(HCO3)2", "Mất tính cứng (kết tủa) khi **đun sôi đơn giản**."],
            ["2. Nước cứng vĩnh cửu (Permanent hardness)", "Chứa các anion **Cl⁻ (chloride) và SO₄²⁻ (sulfate)** cùng Ca²⁺, Mg²⁺", "CaCl2, MgCl2, CaSO4, MgSO4", "**Không mất tính cứng** khi đun sôi thông thường."],
            ["3. Nước cứng toàn phần (Total hardness)", "Chứa **cả ion HCO₃⁻ cùng các ion Cl⁻, SO₄²⁻** với Ca²⁺, Mg²⁺", "Gồm cả muối hydrogencarbonate, chloride và sulfate", "Là tổng hợp của độ cứng tạm thời và độ cứng vĩnh cửu."]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Tác hại nghiêm trọng của nước cứng trong đời sống và sản xuất"));
        children.push(...Bullet([
          "**Trong sinh hoạt gia đình:**",
          "• Khi giặt giũ, ion Ca²⁺ và Mg²⁺ tác dụng với muối sodium stearate trong xà phòng tạo kết tủa insoluble calcium stearate: Ca²⁺ + 2C17H35COO⁻ → (C17H35COO)2Ca↓. Kết tủa này làm **tiêu hao nhiều xà phòng, giảm bọt, bám vào sợi vải làm quần áo ố vàng, thô ráp và nhanh mục nát**.",
          "• Đun nước bằng ấm nhôm/bình nóng lạnh lâu ngày bị đóng một lớp cặn dày (chủ yếu là CaCO3 và Mg(OH)2) ở đáy, làm **chậm sôi, tốn điện, tốn ga, dễ cháy nổ rơ-le nhiệt**.",
          "• Pha trà, cà phê bằng nước cứng làm giảm hương vị thơm ngon đặc trưng và làm trà đổi màu thẫm; nấu thức ăn làm thịt rau lâu nhừ và giảm vị ngọt tự nhiên.",
          "**Trong sản xuất công nghiệp:**",
          "• Trong các nồi hơi (nồi súp-de), tháp giải nhiệt và đường ống dẫn nhiệt của nhà máy, cặn vôi bám dày cách nhiệt gấp 100 lần kim loại. Hậu quả: **lãng phí hàng tấn than đá/dầu đốt, làm vách kim loại quá nhiệt bị rạn nứt dẫn tới nguy cơ nổ tung nồi hơi thảm khốc**.",
          "• Trong công nghiệp dệt may, nhuộm sợi, nước cứng làm vải loang lổ không đều màu."
        ]));

        children.push(Section("III. Các phương pháp làm mềm nước cứng"));
        children.push(P("Nguyên tắc chung của việc làm mềm nước cứng là **làm giảm nồng độ các ion Ca²⁺ và Mg²⁺** trong nước xuống mức cho phép."));
        children.push(...Img("hard_water_softening.png", 460, "Hình 7.2. Các phương pháp xử lý và làm mềm nước cứng (Kết tủa và Trao đổi ion)."));
        children.push(spacer());

        children.push(Sub("1. Phương pháp kết tủa"));
        children.push(P("Chuyển các ion Ca²⁺, Mg²⁺ hòa tan thành các hợp chất kết tủa không tan rồi lọc bỏ:"));
        children.push(...Bullet([
          "**Đun sôi nước (Chỉ làm mềm nước cứng tạm thời):** Khi đun nóng, các muối hydrogencarbonate bị phân hủy nhiệt tạo kết tủa CaCO3 và MgCO3:",
          "Ca(HCO₃)₂  →(t°)  CaCO₃↓  +  CO₂↑  +  H₂O",
          "Mg(HCO₃)₂  →(t°)  MgCO₃↓ (hoặc Mg(OH)₂↓)  +  CO₂↑  +  H₂O",
          "**Dùng dung dịch vôi tôi Ca(OH)2 vừa đủ (Chỉ làm mềm nước cứng tạm thời):**",
          "Ca(HCO₃)₂  +  Ca(OH)₂  →  2CaCO₃↓  +  2H₂O",
          "Mg(HCO₃)₂  +  2Ca(OH)₂  →  2CaCO₃↓  +  Mg(OH)₂↓  +  2H₂O",
          "(Lưu ý: Nếu cho Ca(OH)2 dư thì lượng ion Ca2+ dư lại làm nước cứng trở lại).",
          "**Dùng Na2CO3 (Soda) hoặc Na3PO4 (Làm mềm ĐƯỢC TẤT CẢ CÁC LOẠI NƯỚC CỨNG):**",
          "Ion CO3^2– và PO4^3– kết tủa hoàn toàn cả Ca²⁺ và Mg²⁺ của cả nước cứng tạm thời và vĩnh cửu:",
          "Ca²⁺  +  CO₃²⁻  →  CaCO₃↓",
          "3Mg²⁺  +  2PO₄³⁻  →  Mg₃(PO₄)₂↓"
        ]));

        children.push(Sub("2. Phương pháp trao đổi ion"));
        children.push(P("Cho nước cứng đi qua cột chứa các vật liệu trao đổi ion (chất zeolite vô cơ hoặc hạt nhựa trao đổi ion hữu cơ cationite chứa ion Na⁺ hoặc H⁺):"));
        children.push(...Bullet([
          "Các hạt nhựa cationite sẽ **hấp phụ giữ chặt các ion Ca²⁺ và Mg²⁺** trên bề mặt và **giải phóng tương đương các ion Na⁺ (hoặc H⁺)** vào trong dòng nước.",
          "Nước sau khi qua cột trở thành nước mềm không còn Ca²⁺, Mg²⁺.",
          "**Tái sinh hạt nhựa:** Sau một thời gian hoạt động, cột nhựa bão hòa ion Ca²⁺, Mg²⁺. Người ta rửa cột bằng dung dịch muối ăn NaCl bão hòa nồng độ cao để đẩy Ca²⁺, Mg²⁺ ra ngoài và nạp lại ion Na⁺ cho hạt nhựa tiếp tục chu trình mới."
        ]));

        children.push(Example("Ví dụ mẫu: Bài toán làm mềm nước cứng", [
          "Đề bài: Một mẫu nước cứng chứa 0,02 mol Ca²⁺; 0,01 mol Mg²⁺; 0,04 mol HCO3⁻; 0,01 mol Cl⁻ và 0,005 mol SO4²⁻ trong 1 lít nước.",
          "a) Mẫu nước trên thuộc loại nước cứng gì?",
          "b) Tính khối lượng Na2CO3 tối thiểu cần thêm vào để làm mềm hoàn toàn 100 lít mẫu nước trên.",
          "Lời giải từng bước:",
          "a) Mẫu nước chứa cả ion HCO3⁻ (tính cứng tạm thời) và các ion Cl⁻, SO4²⁻ (tính cứng vĩnh cửu) nên thuộc loại **nước cứng toàn phần**.",
          "b) Tổng số mol (Ca²⁺ + Mg²⁺) trong 1 lít: n = 0,02 + 0,01 = 0,03 mol.",
          "   Trong 100 lít nước, tổng số mol Ca²⁺ và Mg²⁺ cần kết tủa là: n_kết tủa = 0,03 × 100 = 3 mol.",
          "   Phương trình ion: Ca²⁺ + CO3²⁻ → CaCO3↓ ; Mg²⁺ + CO3²⁻ → MgCO3↓.",
          "   Số mol Na2CO3 cần dùng = số mol CO3²⁻ = n_kết tủa = 3 mol.",
          "   Khối lượng Na2CO3 cần dùng: m = 3 × 106 = **318 gam**."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Bài 26", [
          {
            q: "Có thể dùng chất nào sau đây để làm mềm nước cứng có tính cứng vĩnh cửu: (A) Đun sôi, (B) Ca(OH)2 vừa đủ, (C) Na3PO4, (D) HCl?",
            a: "Đáp án đúng là (C) Na3PO4. Vì ion PO4^3– kết tủa Ca2+ và Mg2+ dưới dạng Ca3(PO4)2 và Mg3(PO4)2. Đun sôi và Ca(OH)2 chỉ làm mềm được nước cứng tạm thời; HCl không làm mềm nước cứng."
          },
          {
            q: "Để tẩy sạch lớp cặn vôi bám trắng dưới đáy ấm đun nước gia đình, người ta thường dùng giấm ăn hoặc nước cốt chanh đun sôi nhẹ. Hãy giải thích bằng phương trình hóa học.",
            a: "Lớp cặn vôi đáy ấm chủ yếu là CaCO3 và Mg(OH)2. Acetic acid trong giấm ăn (hoặc citric acid trong chanh) phản ứng hòa tan cặn vôi thành muối tan và giải phóng khí CO2: 2CH3COOH + CaCO3 → (CH3COO)2Ca (tan) + CO2↑ + H2O."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_12_p3",
      label: "Chương 8 (Phần 1): Kim loại chuyển tiếp dãy thứ nhất & Đại cương về Phức chất (Bài 27, 28, 29)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHƯƠNG 8: KIM LOẠI CHUYỂN TIẾP DÃY THỨ NHẤT – PHỨC CHẤT"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Ứng dụng đời sống", [
          "**Kim loại chuyển tiếp và Phức chất** là đỉnh cao của hóa học hiện đại — chìa khóa của ngành vật liệu thông minh, công nghệ xúc tác nano và y học phân tử.",
          "**Cội nguồn của sự sống:** Phân tử Hemoglobin trong hồng cầu máu người mang ion sắt Fe²⁺ ở trung tâm phức chất heme, đảm nhận sứ mệnh vận chuyển oxy nuôi sống toàn bộ cơ thể; Diệp lục tố (Chlorophyll) trong lá cây là phức chất của ion Mg²⁺ hấp thụ ánh sáng mặt trời thực hiện quang hợp nuôi dưỡng sự sống Trái Đất.",
          "**Y dược cứu người:** Phức chất Cisplatin [Pt(NH3)2Cl2] là loại thuốc hóa trị ung thư kinh điển điều trị thành công ung thư tinh hoàn, buồng trứng; Phức chất EDTA dùng giải độc cấp cứu ngộ độc chì, thủy ngân.",
          "**Màu sắc lộng lẫy:** Hầu hết đá quý tự nhiên (Ruby đỏ thắm chứa ion Cr³⁺, Sapphire xanh thẳm chứa ion Fe²⁺/Ti⁴⁺, Ngọc lục bảo Emerald chứa Cr³⁺) và các loại sơn, men gốm rực rỡ đều bắt nguồn từ phức chất của kim loại chuyển tiếp."
        ]));
        children.push(spacer());

        children.push(Bai("Bài 27, 28. Sơ lược về Kim loại chuyển tiếp dãy thứ nhất"));
        children.push(Section("I. Vị trí và Cấu hình electron"));
        children.push(P("Kim loại chuyển tiếp dãy thứ nhất gồm **10 nguyên tố thuộc chu kì 4, từ nhóm IIIB đến nhóm IIB**: **Scandium (Sc), Titanium (Ti), Vanadium (V), Chromium (Cr), Manganese (Mn), Iron (Fe), Cobalt (Co), Nickel (Ni), Copper (Cu), Zinc (Zn)**."));
        children.push(...Bullet([
          "Cấu hình electron nguyên tử chung: **[Ar] 3d¹⁻¹⁰ 4s¹⁻²**.",
          "**Hai trường hợp đặc biệt bán bão hòa và bão hòa d:**",
          "• Chromium (Cr, Z = 24): [Ar] 3d⁵ 4s¹ (thay vì 3d⁴ 4s² để đạt trạng thái bán bão hòa d⁵ bền vững).",
          "• Copper (Cu, Z = 29): [Ar] 3d¹⁰ 4s¹ (thay vì 3d⁹ 4s² để đạt trạng thái bão hòa d¹⁰ bền vững)."
        ]));

        children.push(Section("II. Đặc điểm hoá học nổi bật"));
        children.push(...Bullet([
          "**Có nhiều trạng thái oxi hoá:** Do năng lượng của phân lớp 3d và 4s rất gần nhau, các electron ở cả 4s và 3d đều có thể tham gia tạo liên kết hóa học. Ví dụ: Mn có các mức oxi hoá từ +2 đến +7; Fe có +2, +3, +6; Cr có +2, +3, +6.",
          "**Các hợp chất có màu sắc phong phú, rực rỡ:** Khi có phối tử bao quanh, các orbital d bị tách mức năng lượng. Sự chuyển mức d–d của electron khi hấp thụ một phần ánh sáng khả kiến làm cho hợp chất có màu bù trừ: ion Cu²⁺ có màu xanh lam, Fe³⁺ màu vàng nâu, Fe²⁺ màu xanh nhạt, Cr³⁺ màu xanh lục, CrO4²⁻ màu vàng, Cr2O7²⁻ màu da cam, MnO4⁻ màu tím.",
          "**Hoạt tính xúc tác tuyệt vời:** Kim loại chuyển tiếp và hợp chất của chúng là chất xúc tác cho hầu hết các quy trình công nghiệp lớn (Fe trong tổng hợp NH3, V2O5 trong sản xuất H2SO4, Ni trong hydro hóa dầu ăn)."
        ]));

        children.push(Bai("Bài 29. Đại cương về Phức chất"));
        children.push(Section("I. Khái niệm và Thành phần cấu tạo của Phức chất"));
        children.push(P("**Phức chất (Coordination complex)** là hợp chất có chứa nguyên tử hoặc ion trung tâm liên kết với các phối tử xung quanh bằng liên kết cho – nhận (liên kết phối trí)."));
        children.push(DataTable(
          ["Thành phần phức chất", "Bản chất hóa học", "Đặc điểm nhận diện", "Ví dụ cụ thể"],
          [
            ["1. Nguyên tử / Ion trung tâm (Central atom/ion)", "Thường là cation kim loại chuyển tiếp (Cu²⁺, Fe³⁺, Ag⁺, Pt²⁺, Ni²⁺...)", "Có các **orbital trống** (AO d, s, p trống) sẵn sàng nhận cặp electron.", "Ion Cu²⁺ trong phức chất đồng"],
            ["2. Phối tử (Ligand)", "Là các anion (OH⁻, Cl⁻, CN⁻, F⁻...) hoặc phân tử trung hòa (H2O, NH3, CO...)", "Có chứa **cặp electron tự do chưa liên kết** để cho vào AO trống.", "Phân tử NH3 (có đôi e tự do trên N), H2O"],
            ["3. Liên kết phối trí (Dative bond)", "Liên kết cho – nhận", "Cặp electron liên kết do **phối tử đóng góp hoàn toàn**.", "N(của NH3) : → Cu²⁺"],
            ["4. Cầu nội phức (Coordination sphere)", "Toàn bộ ion trung tâm và các phối tử", "Được đặt trong **dấu ngoặc vuông [ ]**.", "[Cu(NH3)4]²⁺"],
            ["5. Cầu ngoại phức (Outer sphere)", "Các ion trái dấu bù trừ điện tích", "Nằm ngoài dấu ngoặc vuông.", "Ion SO4²⁻ trong [Cu(NH3)4]SO4"]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Số phối trí và Hình học của Phức chất"));
        children.push(P("**Số phối trí (Coordination number):** là tổng số liên kết sigma mà nguyên tử trung tâm tạo được với các phối tử xung quanh. Các số phối trí phổ biến nhất là 2, 4 và 6:"));
        children.push(...Img("complex_geometry.png", 460, "Hình 8.1. Dạng hình học không gian của phức chất (Thẳng hàng, Vuông phẳng, Tứ diện, Bát diện)."));
        children.push(spacer());
        children.push(DataTable(
          ["Số phối trí", "Dạng hình học không gian", "Ví dụ tiêu biểu", "Màu sắc dung dịch"],
          [
            ["2", "**Thẳng hàng (Linear)**", "[Ag(NH3)2]⁺ (thuốc thử Tollens)", "Không màu"],
            ["4", "**Vuông phẳng (Square planar)**", "[Pt(NH3)2Cl2] (Cisplatin)", "Màu vàng cam"],
            ["4", "**Tứ diện (Tetrahedral)**", "[Zn(NH3)4]²⁺, [CoCl4]²⁻", "[Zn(NH3)4]²⁺ không màu; [CoCl4]²⁻ xanh lam"],
            ["6", "**Bát diện (Octahedral)**", "[Cu(H2O)6]²⁺, [Fe(CN)6]³⁻, [Ni(NH3)6]²⁺", "[Cu(H2O)6]²⁺ xanh lam; [Ni(NH3)6]²⁺ tím than"]
          ]
        ));
        children.push(spacer());

        children.push(Section("III. Phân loại phối tử: Phối tử một càng và nhiều càng (Chelate)"));
        children.push(...Bullet([
          "**Phối tử một càng (Monodentate ligand):** là phối tử chỉ tạo được **1 liên kết phối trí** với nguyên tử trung tâm (chỉ cho 1 cặp electron). Ví dụ: H2O, NH3, Cl⁻, OH⁻, CN⁻.",
          "**Phối tử nhiều càng (Polydentate ligand / Phối tử vòng càng / Chelate):** là phối tử trong cùng một phân tử có chứa từ hai nguyên tử cho trở lên, có thể đồng thời tạo hai hoặc nhiều liên kết phối trí với cùng một nguyên tử trung tâm, khép thành vòng kín (vòng chelate).",
          "• Phối tử hai càng: Oxalate (C2O4²⁻), Ethylenediamine (en: H2N–CH2–CH2–NH2).",
          "• Phối tử sáu càng siêu việt: EDTA⁴⁻ (Ethylenediaminetetraacetate) ôm trọn ion kim loại Ca²⁺, Pb²⁺, Cu²⁺ trong một lồng bát diện siêu bền."
        ]));
        children.push(NoteBox("Hiệu ứng Chelate (Vòng càng)", [
          "Phức chất vòng càng (chelate) có **độ bền nhiệt động cao hơn rất nhiều** so với phức chất tương ứng tạo bởi các phối tử một càng. Nguyên nhân là do quá trình tạo phức chelate làm tăng mạnh độ hỗn loạn (entropy ΔS > 0) của hệ thống dung dịch."
        ]));

        children.push(Example("Ví dụ mẫu: Xác định thành phần phức chất", [
          "Đề bài: Cho phức chất có công thức hóa học: [Co(NH3)5Cl]Cl2. Hãy xác định:",
          "a) Ion trung tâm và số oxi hóa của ion trung tâm.",
          "b) Các phối tử và số phối trí của ion trung tâm.",
          "c) Cầu nội và cầu ngoại của phức chất.",
          "Lời giải từng bước:",
          "a) Cầu ngoại chứa 2 ion Cl⁻ mang điện tích –2. Do đó cầu nội [Co(NH3)5Cl] mang điện tích +2.",
          "   Trong cầu nội, NH3 là phân tử trung hòa (điện tích 0), Cl mang điện tích –1. Gọi số oxh của Co là x:",
          "   x + 5×(0) + (–1) = +2 → x = **+3**. Vậy ion trung tâm là **Co³⁺**.",
          "b) Phối tử gồm: 5 phân tử **NH3** và 1 ion **Cl⁻**. Cả hai đều là phối tử một càng. Số phối trí của Co³⁺ là: 5 + 1 = **6** (cấu trúc bát diện).",
          "c) Cầu nội là: **[Co(NH3)5Cl]²⁺**; Cầu ngoại là: **2 ion Cl⁻**."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Bài 27, 28, 29", [
          {
            q: "Viết cấu hình electron của nguyên tử Đồng (Cu, Z = 29) và ion Cu²⁺. Vì sao dung dịch muối Cu²⁺ lại có màu xanh lam?",
            a: "Cu (Z = 29): [Ar] 3d¹⁰ 4s¹. Ion Cu²⁺: [Ar] 3d⁹. Dung dịch Cu²⁺ có màu xanh lam vì ion Cu²⁺ trong nước tạo phức aqua [Cu(H2O)6]²⁺ có phân lớp 3d chưa bão hòa (d⁹); khi có ánh sáng chiếu vào, electron chuyển mức năng lượng d-d hấp thụ vùng ánh sáng đỏ-cam và phản xạ lại ánh sáng vùng xanh lam đến mắt người."
          },
          {
            q: "Phức chất Cisplatin [Pt(NH3)2Cl2] có cấu trúc hình học gì và có ứng dụng y học như thế nào?",
            a: "Cisplatin có cấu trúc vuông phẳng (số phối trí 4) với hai nhóm NH3 ở cùng một phía (dạng đồng phân cis). Ứng dụng: Là thuốc hóa trị ung thư đặc hiệu liên kết chéo với chuỗi DNA của tế bào ác tính, ngăn chặn sự nhân đôi tế bào ung thư."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_12_p4",
      label: "Chương 8 (Phần 2): Sự hình thành phức chất, Cân bằng & Tổng ôn thi Tốt nghiệp THPT (Bài 30)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Bai("Bài 30. Sự hình thành phức chất trong dung dịch & Ứng dụng"));
        children.push(Section("I. Sự tạo phức Aqua trong dung dịch nước"));
        children.push(P("Khi hòa tan muối của kim loại chuyển tiếp vào nước, các cation kim loại không tồn tại tự do mà bị các phân tử nước bao quanh tạo thành **phức chất aqua**:"));
        children.push(Eq("CuSO₄ (khan, màu trắng)  +  6H₂O  →  [Cu(H₂O)₆]²⁺ (dung dịch màu xanh lam)  +  SO₄²⁻"));
        children.push(Eq("FeCl₃  +  6H₂O  →  [Fe(H₂O)₆]³⁺ (dung dịch màu vàng nâu)  +  3Cl⁻"));
        children.push(Eq("NiSO₄  +  6H₂O  →  [Ni(H₂O)₆]²⁺ (dung dịch màu xanh lá cây)  +  SO₄²⁻"));

        children.push(Section("II. Phản ứng thế phối tử (Ligand substitution)"));
        children.push(P("Phối tử trong phức chất có thể bị thay thế bởi các phối tử khác có lực liên kết mạnh hơn:"));
        children.push(Sub("1. Thí nghiệm hòa tan kết tủa Cu(OH)2 bằng dung dịch NH3 (Tạo nước Schweizer)"));
        children.push(...Bullet([
          "Ban đầu khi nhỏ từ từ dung dịch NH3 vào dung dịch CuSO4, sinh ra kết tủa màu xanh nhạt Cu(OH)2:",
          "Cu²⁺  +  2NH₃  +  2H₂O  →  Cu(OH)₂↓ (xanh nhạt)  +  2NH₄⁺",
          "Tiếp tục nhỏ dung dịch NH3 đến dư, kết tủa Cu(OH)2 tan hoàn toàn tạo **dung dịch phức chất màu xanh lam thẫm (xanh sapphire)** đặc trưng:",
          "Cu(OH)₂  +  4NH₃  →  [Cu(NH₃)₄(H₂O)₂]²⁺ (dung dịch xanh lam thẫm)  +  2OH⁻",
          "Dung dịch phức chất này có khả năng hòa tan cellulose của bông vải gỗ, được ứng dụng trong công nghiệp sản xuất sợi tơ nhân tạo (sợi cupro)."
        ]));

        children.push(Sub("2. Thí nghiệm hòa tan kết tủa AgCl bằng dung dịch NH3"));
        children.push(P("Kết tủa trắng AgCl không tan trong acid mạnh nhưng tan dễ dàng trong dung dịch NH3 do tạo phức diamminesilver(I):"));
        children.push(Eq("AgCl↓ (trắng)  +  2NH₃  →  [Ag(NH₃)₂]⁺ (dung dịch không màu)  +  Cl⁻"));

        children.push(Section("III. Cân bằng tạo phức và Hằng số bền (β)"));
        children.push(P("Sự tạo thành phức chất trong dung dịch là một quá trình cân bằng thuận nghịch có hằng số cân bằng đặc trưng gọi là **hằng số bền (Stability constant, kí hiệu β)**:"));
        children.push(Eq("M  +  nL  ⇌  [MLn]     β = [MLn] / ([M] × [L]^n)"));
        children.push(NoteBox("Ý nghĩa của Hằng số bền β", [
          "• Giá trị **hằng số bền β càng lớn** thì phức chất hình thành **càng bền vững**, nồng độ ion kim loại tự do trong dung dịch càng nhỏ.",
          "• Nếu cho một phối tử mới tạo phức có hằng số bền lớn hơn nhiều, phản ứng thế phối tử sẽ xảy ra theo chiều tạo thành phức chất bền hơn."
        ]));

        children.push(Section("IV. Ứng dụng to lớn của Phức chất"));
        children.push(DataTable(
          ["Lĩnh vực ứng dụng", "Phức chất tiêu biểu", "Vai trò và Cơ chế hoạt động"],
          [
            ["1. Y học & Sức khỏe", "**Hemoglobin** (phức Fe²⁺)", "Vận chuyển khí O2 từ phổi đến các mô tế bào và mang CO2 về phổi."],
            ["2. Điều trị ung thư", "**Cisplatin** [Pt(NH3)2Cl2]", "Thuốc hóa trị gắn vào chuỗi DNA ức chế khối u phát triển."],
            ["3. Cấp cứu giải độc", "**Na2[Ca(EDTA)]**", "Liên kết càng chelate với ion chì Pb²⁺, thủy ngân Hg²⁺ trong máu tạo phức bền tan được để đào thải qua nước tiểu."],
            ["4. Quang hợp thực vật", "**Diệp lục (Chlorophyll)** (phức Mg²⁺)", "Hấp thụ năng lượng photon mặt trời chuyển hóa CO2 và H2O thành glucose."],
            ["5. Hóa học phân tích", "**Phức EDTA**", "Chuẩn độ xác định chính xác độ cứng của nước (hàm lượng Ca²⁺, Mg²⁺)."],
            ["6. Nhiếp ảnh truyền thống", "**[Ag(S2O3)2]³⁻**", "Dung dịch thiosulfate hòa tan rửa trôi AgBr thừa trên phim ảnh để cố định hình ảnh."]
          ]
        ));
        children.push(spacer());

        children.push(Bai("Ôn tập tổng kết toàn diện lý thuyết Hóa học THPT"));
        children.push(NoteBox("Hệ thống kiến thức trọng tâm ôn thi tốt nghiệp THPT", [
          "**1. Kim loại kiềm & kiềm thổ:** Cấu hình ns¹ và ns². Tính khử rất mạnh. Phản ứng với nước (Li, Na, K, Rb, Cs, Ca, Sr, Ba). Nhớ tính chất của NaOH, NaHCO3 (lưỡng tính), Na2CO3, Ca(OH)2, CaCO3, CaSO4.",
          "**2. Nước cứng:** Cứng tạm thời (HCO3–), cứng vĩnh cửu (Cl–, SO4^2–), cứng toàn phần. Làm mềm: Đun sôi (chỉ tạm thời), Ca(OH)2 vừa đủ (chỉ tạm thời); Na2CO3 và Na3PO4 (làm mềm TẤT CẢ các loại nước cứng); Trao đổi ion.",
          "**3. Kim loại chuyển tiếp & Phức chất:** Cấu hình d (Cr: 3d5 4s1; Cu: 3d10 4s1). Phức chất: Ion trung tâm + Phối tử + Số phối trí (2, 4, 6). Phản ứng hòa tan Cu(OH)2 trong NH3 dư tạo [Cu(NH3)4]2+ xanh thẫm; AgCl tan trong NH3 tạo [Ag(NH3)2]+."
        ]));

        children.push(Example("Ví dụ mẫu: Bài toán tổng hợp nhận biết", [
          "Đề bài: Bằng phương pháp hóa học, hãy nhận biết 4 dung dịch mất nhãn: NaCl, Na2SO4, CuCl2, Al(NO3)3.",
          "Lời giải từng bước:",
          "1. Nhỏ từ từ dung dịch Ba(OH)2 vào từng mẫu thử:",
          "   • Mẫu thử xuất hiện kết tủa màu xanh lam Cu(OH)2 là **CuCl2** (sau đó Cu(OH)2 tan trong NH3 tạo phức xanh thẫm).",
          "   • Mẫu thử xuất hiện kết tủa trắng keo Al(OH)3 rồi kết tủa tan dần khi Ba(OH)2 dư là **Al(NO3)3**.",
          "   • Mẫu thử chỉ xuất hiện kết tủa trắng BaSO4 không tan trong acid là **Na2SO4**.",
          "   • Mẫu thử không có hiện tượng gì là **NaCl**.",
          "2. Viết các phương trình phản ứng minh họa:\n   CuCl2 + Ba(OH)2 → Cu(OH)2↓ (xanh lam) + BaCl2\n   2Al(NO3)3 + 3Ba(OH)2 → 2Al(OH)3↓ + 3Ba(NO3)2; 2Al(OH)3 + Ba(OH)2 → Ba(AlO2)2 + 4H2O\n   Na2SO4 + Ba(OH)2 → BaSO4↓ (trắng) + 2NaOH"
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Bài 30", [
          {
            q: "Nhỏ từ từ dung dịch NH3 vào ống nghiệm chứa dung dịch CuSO4 cho đến dư. Nêu hiện tượng chi tiết theo 2 giai đoạn và viết phương trình hóa học.",
            a: "Giai đoạn 1: Xuất hiện kết tủa màu xanh nhạt Cu(OH)2: Cu2+ + 2NH3 + 2H2O → Cu(OH)2↓ + 2NH4+. Giai đoạn 2: Khi NH3 dư, kết tủa tan dần tạo thành dung dịch màu xanh lam thẫm (xanh sapphire) đặc trưng của phức chất: Cu(OH)2 + 4NH3 → [Cu(NH3)4(H2O)2]2+ + 2OH–."
          },
          {
            q: "Tại sao khí carbon monoxide (CO) lại cực kỳ độc hại đối với con người khi hít phải?",
            a: "Vì phân tử CO là một phối tử trường mạnh liên kết với ion Fe2+ trong phân tử Hemoglobin tạo thành phức chất Carboxyhemoglobin có hằng số bền β lớn gấp hơn 200 lần so với phức chất Oxyhemoglobin của khí O2. Khi CO gắn chặt vào Fe2+, Hemoglobin mất hoàn toàn khả năng gắn và vận chuyển O2, khiến não bộ và các cơ quan bị ngạt oxy dẫn đến tử vong nhanh chóng."
          }
        ]));

        return children;
      }
    }
  ]
};
