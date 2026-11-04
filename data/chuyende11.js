// Dữ liệu lý thuyết chi tiết Chuyên đề học tập Hóa học 11 - Kết nối tri thức với cuộc sống
module.exports = {
  title: "TÀI LIỆU TÓM TẮT TRỌNG TÂM CHUYÊN ĐỀ HỌC TẬP HÓA HỌC 11",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Phân bón, Trải nghiệm thực hành Hóa hữu cơ & Dầu mỏ chế biến",
  parts: [
    {
      id: "cd11_p1",
      label: "Chuyên đề 1: Phân bón (Bài 1, 2, 3)",
      desc: "Vai trò các nguyên tố dinh dưỡng; Phân bón vô cơ (đạm, lân, kali, NPK); Độ dinh dưỡng %N, %P2O5, %K2O; Đất chua, phú dưỡng; Phân bón hữu cơ, vi sinh Trichoderma và nguyên tắc 4 đúng.",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 1: PHÂN BÓN"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Nông nghiệp bền vững", [
          "Phân bón đóng vai trò **quyết định đến hơn 50% năng suất và chất lượng nông sản toàn cầu**, đảm bảo an ninh lương thực cho hơn 8 tỉ người trên Trái Đất.",
          "**Khoa học dinh dưỡng cây trồng:** Việc hiểu rõ nhu cầu của cây trồng theo từng giai đoạn sinh trưởng (bón lót, bón thúc) và bản chất hóa học của từng loại phân bón giúp người nông dân tối ưu hóa chi phí sản xuất, ngăn ngừa hiện tượng chua hóa đất và chống ô nhiễm phú dưỡng nguồn nước sinh hoạt.",
          "**Chuyển đổi xanh:** Xu hướng kết hợp cân đối giữa phân bón vô cơ hiệu quả cao và phân hữu cơ vi sinh tuần hoàn là giải pháp cốt lõi cho nền nông nghiệp công nghệ cao và bền vững."
        ]));
        children.push(spacer());

        // BÀI 1
        children.push(Bai("Bài 1. Giới thiệu chung về phân bón"));
        children.push(Section("I. Khái niệm và Phân loại dinh dưỡng thực vật"));
        children.push(P("**Phân bón** là những hợp chất hoặc hỗn hợp chứa các nguyên tố dinh dưỡng cần thiết cho cây trồng, được bón vào đất hoặc phun trực tiếp lên lá nhằm nâng cao độ phì nhiêu của đất, thúc đẩy sinh trưởng, tăng năng suất và phẩm chất nông sản."));
        children.push(P("Các nguyên tố dinh dưỡng khoáng thiết yếu được phân chia theo hàm lượng nhu cầu của thực vật:"));
        
        children.push(DataTable(
          ["Nhóm nguyên tố", "Các nguyên tố tiêu biểu", "Vai trò sinh học chủ yếu", "Triệu chứng cây trồng khi thiếu hụt"],
          [
            ["Đa lượng (Macro)", "N (Nitrogen)\nP (Phosphorus)\nK (Potassium)", "• N: Cấu tạo protein, nucleic acid, diệp lục, kích thích đẻ nhánh vươn cao.\n• P: Cấu tạo ATP, nucleic acid, kích thích phát triển rễ, trổ hoa tạo hạt.\n• K: Điều tiết đóng mở khí khổng, tổng hợp tinh bột, tăng chống chịu hạn rét sâu bệnh.", "• Thiếu N: Cây còi cọc, lá già ngả vàng từ ngọn dần xuống dưới.\n• Thiếu P: Rễ kém phát triển, lá tím đỏ/tím đồng, hoa rụng nhiều.\n• Thiếu K: Mép lá bị cháy khô màu nâu vàng xém, thân cây yếu dễ đổ ngã."],
            ["Trung lượng (Secondary)", "Ca (Calcium)\nMg (Magnesium)\nS (Sulfur)", "• Ca: Cấu tạo thành tế bào (pectate canxi), giảm độc chua acid.\n• Mg: Nhân trung tâm phân tử diệp lục (chlorophyll), hoạt hóa enzyme.\n• S: Cấu tạo amino acid có lưu huỳnh (cysteine, methionine), tạo mùi thơm tinh dầu.", "• Thiếu Ca: Chồi non bị biến dạng, rụt đọt, thối đít quả cà chua/cam.\n• Thiếu Mg: Lá mất màu xanh giữa các gân lá, gân lá vẫn giữ màu xanh.\n• Thiếu S: Lá non chuyển màu vàng nhạt, lá già vẫn xanh."],
            ["Vi lượng (Micro)", "Fe, Mn, Zn, Cu, B, Mo, Cl", "Chiếm lượng rất nhỏ nhưng là co-factor không thể thay thế của các hệ enzyme chuyển hóa, thụ phấn tạo quả (Boron), cố định đạm (Molybdenum).", "Hoa rụng sớm, quả bị méo mó nứt nẻ (thiếu B), lá non biến màu trắng bạc (thiếu Fe), chùn đọt (thiếu Zn)."]
          ]
        ));
        children.push(spacer());

        // BÀI 2
        children.push(Bai("Bài 2. Phân bón vô cơ"));
        children.push(Section("I. Phân đạm (Cung cấp Nitrogen sinh dưỡng)"));
        children.push(P("**Độ dinh dưỡng của phân đạm** được đánh giá bằng **hàm lượng %N theo khối lượng** trong phân."));
        children.push(...Bullet([
          "**Phân đạm Urê [CO(NH₂)₂]:** Có độ dinh dưỡng cao nhất trong các loại phân đạm (khoảng 46% N). Trong đất, nhờ enzyme urease vi sinh vật, urê thủy phân nhanh chóng thành ammonium carbonate: CO(NH₂)₂ + 2H₂O → (NH₄)₂CO₃ → 2NH₄⁺ + CO₃²⁻. Dễ hút ẩm, thích hợp cho nhiều loại đất nhưng bón nhiều có thể gây kiềm nhẹ tạm thời rồi làm chua hóa đất.",
          "**Phân đạm Ammonium (NH₄Cl, (NH₄)₂SO₄, NH₄NO₃):** Cung cấp ion NH₄⁺ cho cây hấp thụ ngay. Do ion NH₄⁺ trong đất bị vi khuẩn nitrate hóa oxi hóa sinh ra H⁺: NH₄⁺ + 2O₂ → NO₃⁻ + 2H⁺ + H₂O => **Làm chua đất**, không thích hợp cho đất phèn, đất chua nếu không bón kèm vôi khử chua.",
          "**Phân đạm Nitrate (NaNO₃, Ca(NO₃)₂):** Cung cấp ion NO₃⁻ hòa tan rất nhanh trong nước, cây hấp thụ ngay, thích hợp cho đất chua mặn vì gốc NO₃⁻ không làm chua đất, tuy nhiên ion NO₃⁻ dễ bị nước mưa rửa trôi gây ô nhiễm nguồn nước."
        ]));

        children.push(Section("II. Phân lân (Cung cấp Phosphorus kích thích rễ)"));
        children.push(P("**Độ dinh dưỡng của phân lân** được đánh giá bằng **hàm lượng %P₂O₅ tương đương** theo khối lượng."));
        children.push(DataTable(
          ["Loại phân lân", "Thành phần hóa học chính", "Quy trình điều chế hóa học", "Đặc điểm ứng dụng"],
          [
            ["Supephotphat đơn (Superphosphate đơn)", "Hỗn hợp Ca(H₂PO₄)₂ và CaSO₄ (~14 - 20% P₂O₅)", "Cho quặng apatite hoặc phosphorite tác dụng với H₂SO₄ đặc: Ca₃(PO₄)₂ + 2H₂SO₄ → Ca(H₂PO₄)₂ + 2CaSO₄↓", "Chứa CaSO₄ ít tan làm chai đất nếu dùng lâu, giá thành rẻ, thích hợp vùng đất cần bổ sung cả S và Ca."],
            ["Supephotphat kép (Double superphosphate)", "Chủ yếu là Ca(H₂PO₄)₂ tan hoàn toàn (~40 - 50% P₂O₅)", "Giai đoạn 1: Ca₃(PO₄)₂ + 3H₂SO₄ → 2H₃PO₄ + 3CaSO₄↓ (lọc bỏ CaSO₄)\nGiai đoạn 2: Ca₃(PO₄)₂ + 4H₃PO₄ → 3Ca(H₂PO₄)₂", "Độ dinh dưỡng cao gấp đôi loại đơn, tan hoàn toàn trong nước, hiệu lực nhanh, không gây chai đất."],
            ["Phân lân nung chảy (Thermophosphate)", "Hỗn hợp phức hợp Ca, Mg silicate và phosphate (không tan trong nước)", "Nung quặng apatite với than cốc và quặng sa thạch/dolomite ở 1450°C rồi làm nguội đột ngột bằng tia nước", "Không tan trong nước nhưng tan tốt trong acid yếu của rễ cây tiết ra; có tính kiềm khử chua rất tốt cho đất đồi núi phèn chua."]
          ]
        ));
        children.push(spacer());

        children.push(Section("III. Phân kali và Phân hỗn hợp NPK"));
        children.push(...Bullet([
          "**Phân kali:** Được đánh giá bằng **%K₂O tương đương**. Phổ biến nhất là KCl (kali clorua, màu đỏ gạch hoặc trắng, ~60% K₂O) và K₂SO₄ (kali sunfat, ~50% K₂O, thích hợp cho cây trồng mẫn cảm với clo như thuốc lá, chè, sầu riêng).",
          "**Phân hỗn hợp NPK:** Chứa cả 3 nguyên tố dinh dưỡng thiết yếu. Kí hiệu trên bao bì ba số: **%N - %P₂O₅ - %K₂O** (ví dụ NPK 16-16-8, NPK 20-20-15). Phân phức hợp tiêu biểu: DAP (Diammonium phosphate: (NH₄)₂HPO₄, độ dinh dưỡng 18% N và 46% P₂O₅)."
        ]));

        children.push(NoteBox("Tác hại của việc lạm dụng phân bón vô cơ", [
          "**Chua hóa đất:** Sử dụng phân ammonium kéo dài làm cạn kiệt lượng cation Ca²⁺, Mg²⁺ trong đất, làm tăng nồng độ H⁺ và Al³⁺ tự do gây độc cho rễ cây.",
          "**Hiện tượng phú dưỡng (Eutrophication):** Dư thừa phân đạm nitrate (NO₃⁻) và phân lân (PO₄³⁻) bị nước mưa rửa trôi ra sông hồ, kích thích tảo và vi khuẩn lam bùng phát dữ dội; khi tảo chết đi, quá trình phân hủy kị khí làm cạn kiệt oxy hòa tan (DO), cá chết hàng loạt và nguồn nước bốc mùi hôi thối."
        ]));

        // BÀI 3
        children.push(Bai("Bài 3. Phân bón hữu cơ và Nông nghiệp tuần hoàn"));
        children.push(Section("I. Phân loại phân bón hữu cơ"));
        children.push(...Bullet([
          "**Phân hữu cơ truyền thống (phân chuồng, phân xanh, phân rác):** Giàu mùn, cải tạo kết cấu đất tơi xốp, nhưng tỉ lệ dinh dưỡng khoáng thấp, phân giải chậm, cần ủ hoai mục kĩ để tiêu diệt mầm bệnh và hạt cỏ dại.",
          "**Phân hữu cơ sinh học & phân hữu cơ khoáng:** Được chế biến công nghiệp từ nguyên liệu than bùn, phế phẩm nông nghiệp bổ sung các muối khoáng N, P, K và humic acid giúp kích thích rễ cực mạnh.",
          "**Phân vi sinh vật:** Chứa các chủng vi sinh vật sống hữu ích đã được tuyển chọn: vi sinh vật cố định đạm tự do/cộng sinh (Rhizobium, Azotobacter), vi sinh vật phân giải lân khó tan, nấm đối kháng Trichoderma tiêu diệt nấm bệnh trong đất."
        ]));

        children.push(Section("II. Nguyên tắc '4 đúng' trong bón phân"));
        children.push(P("Để đạt hiệu quả kinh tế tối ưu và bảo vệ môi trường sinh thái, người sản xuất phải tuyệt đối tuân thủ nguyên tắc 4 đúng:"));
        children.push(...Bullet([
          "**1. Đúng loại phân:** Bón loại phân phù hợp với nhu cầu sinh lý từng thời kỳ của cây và đặc tính hóa - lý của đất (đất chua không bón đạm sulfate, cây lấy củ bón nhiều kali, cây lấy hạt bón nhiều lân).",
          "**2. Đúng lúc (Đúng thời điểm):** Bón đúng giai đoạn cây cần dinh dưỡng nhiều nhất (bón lót trước khi gieo trồng; bón thúc đẻ nhánh, bón thúc đón đòng hoặc nuôi quả). Không bón khi trời mưa to làm trôi phân hoặc nắng gắt làm bay hơi.",
          "**3. Đúng liều lượng:** Cân đối theo công thức khuyến cáo cho từng vùng sinh thái, tránh bón thừa gây lãng phí, cháy rễ, ngộ độc phân và ô nhiễm đất nước.",
          "**4. Đúng cách:** Bón vùi vào đất, rạch hàng quanh tán lá nơi rễ non hoạt động mạnh nhất, kết hợp tưới nước giữ ẩm để phân tan và rễ hấp thụ tối đa."
        ]));

        children.push(Example("Bài toán định lượng 1: Tính độ dinh dưỡng của phân đạm Urê tinh khiết và thương phẩm", [
          "Đề bài:",
          "a) Tính độ dinh dưỡng (hàm lượng %N) của phân đạm urê tinh khiết [CO(NH₂)₂].",
          "b) Một mẫu phân urê thương phẩm có độ dinh dưỡng là 46%. Giả sử tạp chất không chứa nitrogen, hãy tính độ tinh khiết (phần trăm khối lượng của CO(NH₂)₂) trong mẫu phân urê thương phẩm đó.",
          "Lời giải từng bước:",
          "a) Phân tử khối của CO(NH₂)₂: M = 12 + 16 + 2 × (14 + 2) = 60 g/mol.",
          "Khối lượng của nguyên tố N trong 1 mol urê là 2 × 14 = 28 g.",
          "=> Độ dinh dưỡng của urê tinh khiết: %N = (28 / 60) × 100% = **46,67%**.",
          "b) Gọi m là khối lượng phân đạm thương phẩm (giả sử m = 100 g).",
          "Khối lượng N có trong mẫu phân là: m_N = 100 × 46% = 46 g.",
          "Số mol N = 46 / 14 = 3,2857 mol => Số mol CO(NH₂)₂ = 3,2857 / 2 = 1,6428 mol.",
          "Khối lượng CO(NH₂)₂ nguyên chất: m_urê = 1,6428 × 60 = 98,57 g.",
          "=> Độ tinh khiết của mẫu phân bón: (98,57 / 100) × 100% = **98,57%**."
        ]));

        children.push(Example("Bài toán định lượng 2: Tính toán khối lượng phân bón đơn cần phối trộn bón cho 1 ha lúa", [
          "Đề bài: Để đạt năng suất cao cho 1 hecta (ha) ruộng lúa vụ Đông - Xuân, một kĩ sư nông nghiệp tính toán nhu cầu dinh dưỡng khoáng nguyên chất bổ sung từ phân bón là: 92 kg N; 46 kg P₂O₅ và 60 kg K₂O. Nhà nông hiện có các loại phân đơn: Phân đạm urê (độ dinh dưỡng 46% N); Phân supephotphat kép (độ dinh dưỡng 46% P₂O₅) và Phân kali clorua (độ dinh dưỡng 60% K₂O). Hãy tính khối lượng (kg) của từng loại phân bón mà người nông dân cần mua để bón đủ cho 1 ha ruộng lúa đó.",
          "Lời giải từng bước:",
          "1. Khối lượng phân đạm urê cần dùng:",
          "m_urê = (Khối lượng N cần / Độ dinh dưỡng %N) = 92 / 46% = **200 kg** (tương đương 4 bao 50kg).",
          "2. Khối lượng phân supephotphat kép cần dùng:",
          "m_supe = (Khối lượng P₂O₅ cần / Độ dinh dưỡng %P₂O₅) = 46 / 46% = **100 kg** (tương đương 2 bao 50kg).",
          "3. Khối lượng phân kali clorua cần dùng:",
          "m_KCl = (Khối lượng K₂O cần / Độ dinh dưỡng %K₂O) = 60 / 60% = **100 kg** (tương đương 2 bao 50kg).",
          "=> Tổng khối lượng phân đơn cần mua cho 1 ha lúa là: 200 + 100 + 100 = **400 kg**."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 1", [
          { q: "Tại sao không nên bón phân đạm ammonium (như đạm sulfate, đạm chloride) chung với vôi sống (CaO) hoặc tro bếp?", a: "Vì tro bếp chứa K₂CO₃ (môi trường kiềm) và vôi sống tác dụng với nước tạo Ca(OH)₂ kiềm mạnh. Khi trộn chung, OH⁻ sẽ tác dụng với ion NH₄⁺ giải phóng khí ammonia (NH₃↑): NH₄⁺ + OH⁻ → NH₃↑ + H₂O, làm thất thoát nghiêm trọng hàm lượng đạm bay hơi vào không khí." },
          { q: "Giải thích cơ chế gây ra hiện tượng phú dưỡng (eutrophication) ở các ao hồ nhận nước thải nông nghiệp?", a: "Khi dư thừa ion nitrate (NO₃⁻) và phosphate (PO₄³⁻) từ phân bón vô cơ trôi vào ao hồ, các loài vi tảo và thực vật thủy sinh hấp thụ dinh dưỡng phát triển bùng phát vượt bậc (tảo nở hoa). Khi lớp tảo dày đặc che khuất ánh sáng mặt trời rồi chết đi hàng loạt, vi sinh vật hiếu khí phân hủy xác tảo sẽ tiêu thụ cạn kiệt lượng oxy hòa tan trong nước (DO giảm mạnh về 0), khiến các loài thủy sản (tôm, cá) ngạt thở chết hàng loạt và quá trình phân hủy kị khí sinh khí độc H₂S, NH₃, CH₄ làm hỏng toàn bộ hệ sinh thái nước ngọt." }
        ]));

        return children;
      }
    },
    {
      id: "cd11_p2",
      label: "Chuyên đề 2: Trải nghiệm, thực hành Hoá học hữu cơ (Bài 4, 5, 6)",
      desc: "Tách tinh dầu thảo mộc (chưng cất lôi cuốn hơi nước sả chanh, bưởi); Chuyển hóa chất béo thành xà phòng handmade (vai trò NaCl bão hòa, cơ chế mixen); Điều chế glucosamine HCl từ phế phẩm vỏ tôm trị khớp.",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 2: TRẢI NGHIỆM, THỰC HÀNH HOÁ HỌC HỮU CƠ"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Hóa học ứng dụng cuộc sống", [
          "Thực hành hóa hữu cơ gắn kết chặt chẽ các khái niệm lý thuyết về liên kết, độ tan, phản ứng thủy phân và este hóa với các **sản phẩm thương mại giá trị cao** trong đời sống hàng ngày: mỹ phẩm tinh dầu thiên nhiên, xà phòng sinh học và dược phẩm hỗ trợ xương khớp.",
          "**Hóa học xanh & Kinh tế tuần hoàn (Circular Economy):** Chuyển hóa hàng triệu tấn phụ phẩm thủy sản (vỏ tôm, vỏ cua) thành hoạt chất y dược cao cấp Glucosamine là minh chứng xuất sắc cho việc khai thác thông minh tài nguyên sinh học Việt Nam."
        ]));
        children.push(spacer());

        // BÀI 4
        children.push(Bai("Bài 4. Tách tinh dầu từ các nguồn thảo mộc tự nhiên"));
        children.push(Section("I. Khái niệm và Đặc tính của Tinh dầu"));
        children.push(P("**Tinh dầu (Essential oil)** là hỗn hợp phức tạp của nhiều chất hữu cơ thơm dễ bay hơi, chủ yếu thuộc nhóm **terpenoid** và dẫn xuất chứa oxygen của terpene (như alcohol, aldehyde, ketone, ester). Tinh dầu có mùi thơm đặc trưng của loài thảo mộc, nhẹ hơn nước và hầu như không tan trong nước, nhưng tan tốt trong các dung môi hữu cơ (cồn ethanol, diethyl ether)."));
        children.push(...Bullet([
          "**Tinh dầu sả chanh (Lemongrass oil):** Chứa hoạt chất chủ yếu là **citral** (chiếm 65 - 85%), có tác dụng xua đuổi côn trùng, kháng khuẩn, giảm stress.",
          "**Tinh dầu bạc hà (Peppermint oil):** Chứa chủ yếu là **menthol** (40 - 50%) và menthone, tạo cảm giác the mát sảng khoái, giảm đau.",
          "**Tinh dầu vỏ bưởi / cam:** Chứa hoạt chất chủ yếu là **limonene** (chiếm tới 90%), chống oxy hóa, kích thích mọc tóc, hương thơm thư giãn."
        ]));

        children.push(Section("II. Phương pháp chưng cất lôi cuốn hơi nước"));
        children.push(P("**Nguyên lý khoa học:** Hỗn hợp hai chất lỏng hoàn toàn không tan lẫn vào nhau (nước và tinh dầu) sẽ sôi ở nhiệt độ **thấp hơn nhiệt độ sôi của từng cấu tử nguyên chất** (luôn nhỏ hơn 100°C ở áp suất khí quyển 1 atm). Do đó, hơi nước bốc lên sẽ kéo theo các phân tử tinh dầu bay lên cùng mà **không làm phân hủy nhiệt** các hợp chất tinh dầu nhạy cảm."));
        
        children.push(DataTable(
          ["Bước thực hiện", "Thao tác kĩ thuật thực nghiệm", "Hiện tượng và Mục đích"],
          [
            ["1. Tiền xử lý nguyên liệu", "Cắt nhỏ thân sả hoặc gọt lấy lớp vỏ ngoài quả bưởi, đập dập nhẹ", "Phá vỡ các túi chứa tinh dầu trên mô thực vật, tăng diện tích tiếp xúc với hơi nước."],
            ["2. Nạp liệu và cấp nhiệt", "Cho nguyên liệu vào bình cầu/nồi cất cùng với nước, lắp ống dẫn hơi sang ống sinh hàn làm lạnh", "Nước sôi sinh hơi nước mang theo tinh dầu bay qua sinh hàn ngưng tụ thành chất lỏng đục."],
            ["3. Phân tách tinh dầu", "Thu hồi dịch ngưng vào phễu chiết (hoặc bình hứng), để yên 15 - 30 phút", "Do tinh dầu không tan và có khối lượng riêng d < 1 g/mL nên nổi lên trên mặt nước thành lớp váng dầu trong suốt; xả lớp nước bên dưới thu lấy tinh dầu thô."],
            ["4. Làm khan tinh dầu", "Thêm một lượng nhỏ muối khan hút ẩm (Na₂SO₄ khan hoặc MgSO₄ khan)", "Loại bỏ hoàn toàn các giọt nước li ti còn sót lại, thu tinh dầu nguyên chất, bảo quản trong lọ thủy tinh tối màu."]
          ]
        ));
        children.push(spacer());

        // BÀI 5
        children.push(Bai("Bài 5. Chuyển hoá chất béo thành xà phòng"));
        children.push(Section("I. Phản ứng xà phòng hóa chất béo"));
        children.push(P("**Xà phòng** là hỗn hợp muối sodium (hoặc potassium) của các acid béo mạch dài (thường từ C12 đến C18 như palmitic acid C₁₅H₃₁COOH, stearic acid C₁₇H₃₅COOH, oleic acid C₁₇H₃₃COOH) kết hợp với các chất phụ gia tạo bọt, tạo hương."));
        children.push(Eq("**(RCOO)₃C₃H₅ (Chất béo/Triglyceride) + 3NaOH  ——(t°)——>  3RCOONa (Xà phòng) + C₃H₅(OH)₃ (Glycerol)**"));
        children.push(...Bullet([
          "**Muối Sodium (RCOONa):** Tạo xà phòng bánh (xà phòng cứng).",
          "**Muối Potassium (RCOOK):** Tạo xà phòng dạng lỏng, sữa tắm, bọt cạo râu mềm mại."
        ]));

        children.push(Section("II. Vai trò của dung dịch NaCl bão hòa và Cơ chế tẩy rửa"));
        children.push(NoteBox("Tại sao phải thêm dung dịch NaCl bão hòa sau khi nấu xà phòng?", [
          "**Hiện tượng muối kết (Salting out):** Sau khi đun sôi hỗn hợp dầu thực vật với kiềm NaOH dư, hỗn hợp là một dung dịch keo đồng nhất khó tách. Khi rót thêm dung dịch **NaCl bão hòa nóng**, nồng độ ion Na⁺ trong dung dịch tăng vọt làm tích số tan của muối natri của acid béo vượt quá giới hạn hòa tan, đồng thời làm tăng tỉ trọng của dung dịch nước muối bên dưới.",
          "=> Xà phòng (RCOONa) giảm độ tan đột ngột và **nổi lên trên mặt dung dịch** thành từng mảng xốp màu trắng ngà, giúp người sản xuất vớt xà phòng ra khuôn đóng bánh dễ dàng."
        ]));

        children.push(P("**Cơ chế tẩy rửa của phân tử xà phòng:**"));
        children.push(...Bullet([
          "Cấu tạo phân tử xà phòng RCOONa gồm 2 phần đối nghịch nhau: Đầu ion **–COO⁻Na⁺ ưa nước** (hướng ra ngoài môi trường nước) và Đuôi hydrocarbon dài **–R kị nước (ưa dầu)** (hướng vào bên trong bám chặt vào vết bẩn dầu mỡ).",
          "Nhiều phân tử xà phòng bao quanh vết dầu mỡ tạo thành các hạt cầu keo vi mô gọi là **mixen (micelle)**, phân tán dầu mỡ thành các hạt nhũ tương li ti lơ lửng trong nước và dễ dàng bị dòng nước xả cuốn trôi."
        ]));
        children.push(spacer());

        // BÀI 6
        children.push(Bai("Bài 6. Điều chế glucosamine hydrochloride từ vỏ tôm"));
        children.push(Section("I. Nguồn nguyên liệu Chitin và Ý nghĩa của Glucosamine"));
        children.push(P("**Chitin** là một polysaccharide mạch thẳng cấu tạo từ các mắt xích **N-acetylglucosamine** liên kết với nhau qua liên kết β-1,4-glycoside. Chitin là thành phần cấu trúc chính tạo nên lớp vỏ cứng của động vật giáp xác (tôm, cua, ghẹ), chiếm khoảng 20 - 30% khối lượng vỏ khô."));
        children.push(P("**Glucosamine hydrochloride (C₆H₁₃NO₅·HCl):** Là dẫn xuất amino monosaccharide tự nhiên, là thành phần thiết yếu tổng hợp glycosaminoglycan và proteoglycan cấu tạo nên mô sụn khớp, được sử dụng rộng rãi trên thế giới làm dược phẩm hỗ trợ điều trị viêm xương khớp, thoái hóa khớp."));

        children.push(Section("II. Quy trình 3 bước chuyển hóa vỏ tôm thành Glucosamine HCl"));
        children.push(DataTable(
          ["Giai đoạn", "Tác nhân hóa học & Điều kiện", "Mục đích khoa học của phản ứng"],
          [
            ["1. Khử khoáng (Demineralization)", "Ngâm vỏ tôm trong dung dịch HCl loãng (4 - 7%) ở nhiệt độ phòng", "Hòa tan toàn bộ muối khoáng vô cơ CaCO₃: CaCO₃ + 2HCl → CaCl₂ + CO₂↑ + H₂O, thu được màng chitin-protein dẻo mềm."],
            ["2. Khử protein (Deproteinization)", "Đun nóng nhẹ với dung dịch NaOH loãng (4 - 10%) ở 60 - 80°C", "Thủy phân và hòa tan toàn bộ các chuỗi liên kết protein và sắc tố astaxanthin, rửa sạch bằng nước đến pH trung tính, thu được **Chitin tinh khiết màu trắng**."],
            ["3. Thủy phân sâu tạo Glucosamine HCl", "Đun sôi hồi lưu Chitin với dung dịch **HCl đậm đặc (30 - 36%)** ở 90 - 100°C trong 4 - 6 giờ", "Cắt đứt đồng thời liên kết β-1,4-glycoside và nhóm acetyl (-NHCOCH₃ → -NH₃⁺Cl⁻ + CH₃COOH). Tẩy màu bằng than hoạt tính, cô đặc làm lạnh kết tinh thu được **tinh thể trắng Glucosamine Hydrochloride**."]
          ]
        ));
        children.push(spacer());

        children.push(Example("Bài toán định lượng: Tính hiệu suất chiết xuất tinh dầu sả chanh", [
          "Đề bài: Một nhóm học sinh tiến hành chưng cất lôi cuốn hơi nước 5 kg thân lá sả chanh tươi đã được băm nhỏ. Sau khi thu dịch ngưng tụ, tách chiết và làm khan bằng Na₂SO₄, nhóm thu được 37,5 mL tinh dầu sả chanh nguyên chất. Biết khối lượng riêng của tinh dầu sả chanh đo được là d = 0,89 g/mL và theo tài liệu lý thuyết, hàm lượng tinh dầu tối đa có trong mẫu sả tươi này là 0,85% theo khối lượng. Hãy tính hiệu suất thu hồi tinh dầu của nhóm thực hành.",
          "Lời giải từng bước:",
          "1. Khối lượng tinh dầu thực tế thu được:",
          "m_thực tế = V × d = 37,5 mL × 0,89 g/mL = **33,375 g**.",
          "2. Khối lượng tinh dầu có trong 5 kg (5000 g) sả tươi theo lý thuyết:",
          "m_lý thuyết = 5000 g × 0,85% = **42,5 g**.",
          "3. Hiệu suất thu hồi tinh dầu sả chanh:",
          "H = (m_thực tế / m_lý thuyết) × 100% = (33,375 / 42,5) × 100% = **78,53%**."
        ]));

        children.push(Example("Bài toán định lượng: Tính khối lượng xà phòng bánh thu được từ phản ứng xà phòng hóa", [
          "Đề bài: Tiến hành xà phòng hóa hoàn toàn 8,9 kg tristearin [(C₁₇H₃₅COO)₃C₃H₅, M = 890 g/mol] bằng dung dịch NaOH vừa đủ, đun nóng. Sau khi phản ứng kết thúc, thêm dung dịch NaCl bão hòa để tách toàn bộ lượng muối sodium stearate (C₁₇H₃₅COONa, M = 306 g/mol). Lượng muối natri này được sấy ráo và phối trộn thêm chất phụ gia tạo hương, chất giữ ẩm để đóng thành các bánh xà phòng thương phẩm (trong đó muối sodium stearate chiếm 75% khối lượng bánh xà phòng, phần còn lại là phụ gia và nước). Biết hiệu suất phản ứng xà phòng hóa đạt 95%. Hãy tính khối lượng xà phòng thương phẩm thu được.",
          "Lời giải từng bước:",
          "1. Số mol tristearin phản ứng:",
          "n_tristearin = 8,9 kg / 890 kg/kmol = 0,01 kmol = 10 mol.",
          "2. Phương trình hóa học:",
          "(C₁₇H₃₅COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₅COONa + C₃H₅(OH)₃",
          "Theo phương trình, số mol muối C₁₇H₃₅COONa theo lý thuyết = 3 × n_tristearin = 3 × 10 = 30 mol.",
          "Khối lượng muối C₁₇H₃₅COONa theo lý thuyết = 30 mol × 306 g/mol = 9180 g = 9,18 kg.",
          "3. Khối lượng muối thực tế thu được (với H = 95%):",
          "m_muối thực tế = 9,18 kg × 95% = **8,721 kg**.",
          "4. Khối lượng bánh xà phòng thương phẩm thành phẩm (chứa 75% muối):",
          "m_xà phòng = 8,721 kg / 75% = **11,628 kg**."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 2", [
          { q: "Tại sao khi rửa bát đĩa hoặc giặt quần áo dính dầu mỡ bằng nước lạnh thông thường thì không sạch, nhưng khi dùng xà phòng hoặc nước rửa chén thì sạch hoàn toàn?", a: "Dầu mỡ là hydrocarbon hoặc lipid không phân cực nên hoàn toàn không tan trong nước và có sức căng bề mặt lớn. Phân tử xà phòng là chất hoạt động bề mặt lưỡng tính: đuôi hydrocarbon kị nước cắm sâu vào giọt dầu mỡ, còn đầu ion carboxylate phân cực ưa nước hướng ra ngoài tương tác mạnh với các phân tử nước. Nhờ chuyển động cơ học (vò xát), xà phòng xé nhỏ mảng dầu mỡ thành các vi hạt nhũ tương mixen lơ lửng trong nước và bị dòng nước cuốn trôi sạch sẽ." }
        ]));

        return children;
      }
    },
    {
      id: "cd11_p3",
      label: "Chuyên đề 3: Dầu mỏ và chế biến dầu mỏ (Bài 7, 8, 9)",
      desc: "Nguồn gốc và thành phần hydrocarbon dầu mỏ (paraffin, naphthene, arene, dầu Bạch Hổ); Chưng cất CDU, VDU, Cracking, Reforming xúc tác; Chỉ số octane RON; Xăng sinh học E5, E10 và Net Zero 2050.",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 3: DẦU MỎ VÀ CHẾ BIẾN DẦU MỎ"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & An ninh năng lượng quốc gia", [
          "Dầu mỏ được mệnh danh là **'Vàng đen' của nền kinh tế thế giới**, vừa là nguồn cung cấp hơn 80% nhiên liệu cho giao thông vận tải toàn cầu, vừa là nguồn nguyên liệu khởi đầu sống còn cho ngành công nghiệp hóa dầu sản xuất polymer, nhựa, sợi tổng hợp, phân bón và dược phẩm.",
          "**Khoa học lọc - hóa dầu:** Nắm vững công nghệ lọc dầu (chưng cất phân đoạn, cracking, reforming) giúp tối ưu hóa sản lượng xăng chất lượng cao, nâng cao chỉ số chống kích nổ octane RON và chủ động chuyển dịch sang năng lượng sinh học (xăng E5, diesel sinh học B5) giảm phát thải khí nhà kính."
        ]));
        children.push(spacer());

        // BÀI 7
        children.push(Bai("Bài 7. Nguồn gốc dầu mỏ. Thành phần và phân loại dầu mỏ"));
        children.push(Section("I. Nguồn gốc và Thành phần hóa học"));
        children.push(P("**Thuyết nguồn gốc hữu cơ sinh vật:** Dầu mỏ được hình thành từ xác các sinh vật phù du (phiêu sinh vật và tảo biển) lắng đọng dưới đáy đại dương hàng trăm triệu năm trước. Dưới các lớp trầm tích dày đặc, trong điều kiện kị khí (thiếu oxy), nhiệt độ và áp suất cao của lòng đất, các hợp chất hữu cơ bị phân hủy nhiệt biến đổi thành hỗn hợp hydrocarbon phức tạp tích tụ trong các túi dầu (mỏ dầu)."));
        children.push(P("**Thành phần hóa học của dầu mỏ thô:**"));
        children.push(...Bullet([
          "**Nhóm Hydrocarbon (chiếm 80 - 90% khối lượng):**\n• Alkane (paraffin): Dạng mạch thẳng và phân nhánh từ C₁ đến C₄₀+.\n• Cycloalkane (naphthene): Chủ yếu là vòng cyclopentane và cyclohexane.\n• Arene (aromatic): Hợp chất thơm chứa vòng benzen (benzene, toluene, xylene).",
          "**Nhóm Phi Hydrocarbon (hợp chất chứa dị tố):** Hợp chất chứa lưu huỳnh (mercaptan R-SH, thiophene), nitrogen (pyridine, quinoline), oxygen (acid hữu cơ naphthenic), và các vết kim loại nặng độc hại (Vanadium, Nickel)."
        ]));

        children.push(Section("II. Phân loại dầu mỏ"));
        children.push(DataTable(
          ["Tiêu chí phân loại", "Phân loại cụ thể", "Đặc điểm và Giá trị thương mại"],
          [
            ["Theo độ nhớt và tỉ trọng (Độ API)", "• Dầu nhẹ: API > 31,1°\n• Dầu trung bình: 22,3° < API ≤ 31,1°\n• Dầu nặng: API ≤ 22,3°", "Độ API càng cao thì dầu càng nhẹ, càng chứa nhiều phân đoạn xăng và dầu nhẹ có giá trị kinh tế cao, dễ khai thác và chế biến."],
            ["Theo hàm lượng Lưu huỳnh (%S)", "• Dầu ngọt (Sweet crude): %S < 0,5%\n• Dầu chua (Sour crude): %S ≥ 0,5%", "Dầu ngọt có giá bán cao hơn rất nhiều vì ít gây ăn mòn đường ống thiết bị lọc dầu và giảm phát thải khí độc hại SO₂ khi đốt cháy nhiên liệu."],
            ["Đặc thù Dầu thô Việt Nam", "Mỏ Bạch Hổ (Bồn trũng Cửu Long)", "Là loại **dầu nhẹ, ngọt** (hàm lượng lưu huỳnh cực thấp < 0,05%), nhưng có đặc điểm **hàm lượng paraffin rất cao (chứa nhiều sáp paraffin)** nên nhiệt độ đông đặc tương đối cao (~32°C), cần hệ thống gia nhiệt đường ống khi vận chuyển."]
          ]
        ));
        children.push(spacer());

        // BÀI 8
        children.push(Bai("Bài 8. Chế biến dầu mỏ"));
        children.push(Section("I. Chế biến vật lí: Chưng cất phân đoạn dầu mỏ"));
        children.push(P("Dầu thô sau khi được tách nước và muối khoáng tại giàn khoan sẽ được đưa vào tháp chưng cất phân đoạn:"));
        children.push(...Bullet([
          "**Chưng cất khí quyển (CDU - Crude Distillation Unit):** Đun nóng dầu ở áp suất thường thu các phân đoạn theo nhiệt độ sôi tăng dần: Khí hóa lỏng LPG (C₁ - C₄, sôi < 40°C), Phân đoạn xăng naphta (C₅ - C₁₁, sôi 40 - 180°C), Dầu hỏa/nhiên liệu phản lực Jet-A1 (C₁₁ - C₁₂, sôi 180 - 250°C), Dầu diesel DO (C₁₃ - C₂₀, sôi 250 - 350°C), và Cặn cất khí quyển (mazut, sôi > 350°C).",
          "**Chưng cất chân không (VDU - Vacuum Distillation Unit):** Đem cặn mazut chưng cất ở áp suất giảm (chân không) để hạ nhiệt độ sôi, tránh hiện tượng nhiệt phân cặn dầu thành than cốc, thu hồi dầu nhờn bôi trơn và cặn nhựa đường (asphalt/bitumen)."
        ]));

        children.push(Section("II. Chế biến hóa học: Cracking và Reforming"));
        children.push(DataTable(
          ["Quá trình hóa học", "Bản chất phản ứng", "Mục đích & Sản phẩm ứng dụng"],
          [
            ["Cracking nhiệt & Cracking xúc tác (FCC)", "Bẻ gãy liên kết C–C của các phân tử alkane mạch dài (nhiệt độ sôi cao, ít giá trị) thành các alkane và alkene mạch ngắn hơn:\nC₁₆H₃₄ ——(xt Zeolite, t°)——> C₈H₁₈ (xăng) + C₈H₁₆ (alkene)", "Gia tăng mạnh mẽ sản lượng xăng động cơ từ các phân đoạn dầu nặng; đồng thời cung cấp nguyên liệu ethylene, propylene quý giá cho công nghiệp hóa nhựa polymer."],
            ["Reforming xúc tác (Catalytic Reforming)", "Chuyển hóa cấu trúc phân tử alkane mạch thẳng thành **alkane mạch nhánh (isoparaffin)** hoặc đóng vòng tạo **arene (nhân thơm)**:\nn-heptane ——(Pt, t°)——> toluene + 4H₂\nn-octane ——(Pt, t°)——> 2,2,4-trimethylpentane", "Nâng cao vượt bậc **chỉ số octane (chỉ số chống kích nổ)** của phân đoạn xăng; đồng thời là nguồn cung cấp chính BTX (benzene, toluene, xylene) và khí hydrogen H₂ cho nhà máy."]
          ]
        ));
        children.push(spacer());

        children.push(Section("III. Chỉ số Octane (RON) của Xăng"));
        children.push(P("**Chỉ số octane** là thước đo quy chuẩn đặc trưng cho **khả năng chống kích nổ** của nhiên liệu xăng khi nén trong buồng đốt động cơ đốt trong. Hiện tượng kích nổ tự phát trước thời điểm bugi đánh lửa gây rung giật dữ dội, làm giảm công suất và có thể phá hủy động cơ xe."));
        children.push(...Bullet([
          "Quy ước thang đo Octane: **n-heptane** (alkane mạch thẳng dễ kích nổ nhất) quy ước có chỉ số octane = **0**; **2,2,4-trimethylpentane (isooctane)** (alkane phân nhánh chống kích nổ hoàn hảo) quy ước có chỉ số octane = **100**.",
          "Xăng **RON 95** có khả năng chống kích nổ tương đương một hỗn hợp chuẩn chứa **95% isooctane và 5% n-heptane** về thể tích."
        ]));

        // BÀI 9
        children.push(Bai("Bài 9. Ngành sản xuất dầu mỏ trên thế giới và ở Việt Nam"));
        children.push(Section("I. Ngành lọc - hóa dầu Việt Nam"));
        children.push(...Bullet([
          "**Nhà máy Lọc dầu Dung Quất (Quảng Ngãi):** Công trình lọc dầu đầu tiên của Việt Nam với công suất thiết kế 6,5 triệu tấn dầu thô/năm, đáp ứng khoảng 30 - 35% nhu cầu xăng dầu trong nước, sử dụng nguồn dầu ngọt mỏ Bạch Hổ.",
          "**Liên hợp Lọc hóa dầu Nghi Sơn (Thanh Hóa):** Công suất 10 triệu tấn dầu thô/năm, thiết kế chế biến dầu thô nhập khẩu từ Kuwait, góp phần bảo đảm an ninh năng lượng quốc gia.",
          "**Tổ hợp Hóa dầu Long Sơn (Bà Rịa - Vũng Tàu):** Tổ hợp hóa dầu tích hợp quy mô hàng tỉ USD chuyên sản xuất hạt nhựa PE, PP phục vụ công nghiệp chế biến."
        ]));

        children.push(Section("II. Nhiên liệu sinh học và Lộ trình Chuyển dịch Năng lượng"));
        children.push(...Bullet([
          "**Xăng sinh học E5 / E10:** Hỗn hợp chứa 95% (hoặc 90%) xăng khoáng truyền thống pha trộn với 5% (hoặc 10%) cồn sinh học bio-ethanol (C₂H₅OH biến tính sản xuất từ sắn lát, ngô lên men). Ethanol có chỉ số octane rất cao (RON ≈ 108 - 110) giúp tăng chỉ số octane của xăng hỗn hợp và giảm thiểu khí thải CO, hydrocarbon chưa cháy.",
          "**Diesel sinh học (Biodiesel B5):** Nhiên liệu tạo thành từ phản ứng trao đổi ester (transesterification) giữa dầu thực vật phế thải / mỡ cá tra basa với methanol, pha 5% vào dầu diesel khoáng.",
          "**Lộ trình Net Zero 2050:** Chuyển đổi dần từ năng lượng hóa thạch sang điện gió ngoài khơi, điện mặt trời và nghiên cứu sản xuất **Hydro xanh (Green Hydrogen)** từ điện phân nước để khử carbon trong công nghiệp nặng."
        ]));

        children.push(Example("Bài toán định lượng 1: Cracking alkane và tính khối lượng mol trung bình của hỗn hợp khí", [
          "Đề bài: Tiến hành cracking hoàn toàn một lượng alkane X (thể khí) thu được hỗn hợp khí Y gồm các alkane và alkene có tỉ khối hơi so với H₂ là 14,5. Biết phản ứng cracking xảy ra với hiệu suất 100% theo phương trình tổng quát: C_nH_{2n+2} → C_aH_{2a+2} + C_bH_{2b} (với n = a + b). Xác định công thức phân tử của alkane X ban đầu.",
          "Lời giải từng bước:",
          "1. Khối lượng mol trung bình của hỗn hợp khí Y: M_Y = 14,5 × 2 = 29 g/mol.",
          "2. Áp dụng định luật bảo toàn khối lượng: m_X = m_Y.",
          "Theo phương trình phản ứng cracking: Cứ 1 mol alkane X bẻ gãy tạo thành 2 mol khí (1 mol alkane ngắn hơn + 1 mol alkene).",
          "Do đó: n_Y = 2 × n_X.",
          "3. Ta có mối liên hệ khối lượng mol: M_X = m_X / n_X = m_Y / (0,5 × n_Y) = 2 × M_Y.",
          "=> M_X = 2 × 29 = 58 g/mol.",
          "4. Công thức phân tử của X có dạng C_nH_{2n+2}: 14n + 2 = 58  => 14n = 56 => n = 4.",
          "Vậy công thức phân tử của alkane X là **Butane (C₄H₁₀)**."
        ]));

        children.push(Example("Bài toán định lượng 2: Tính chỉ số octane RON của xăng sinh học E5 pha chế", [
          "Đề bài: Một trạm phân phối pha chế xăng sinh học E5 bằng cách phối trộn 5% thể tích cồn sinh học ethanol khan (chỉ số octane RON = 108) với 95% thể tích xăng nền khoáng RON 92. Giả sử chỉ số octane của hỗn hợp biến thiên tuyến tính theo phần trăm thể tích của các cấu tử thành phần. Hãy tính chỉ số octane RON của loại xăng E5 thu được.",
          "Lời giải từng bước:",
          "1. Công thức tính chỉ số octane hỗn hợp theo thể tích:",
          "RON_E5 = (% thể tích Ethanol × RON_Ethanol) + (% thể tích Xăng nền × RON_xăng nền)",
          "2. Thay các số liệu vào công thức:",
          "RON_E5 = (0,05 × 108) + (0,95 × 92)",
          "RON_E5 = 5,4 + 87,4 = **92,8**.",
          "Nhận xét: Việc pha thêm 5% cồn sinh học ethanol đã giúp nâng chỉ số octane của xăng từ 92 lên 92,8, giúp động cơ xe vận hành êm ái hơn và hạn chế hiện tượng kích nổ."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 3", [
          { q: "Phân biệt bản chất và mục đích cốt lõi giữa hai quá trình công nghệ Lọc dầu: Cracking và Reforming xúc tác?", a: "• Cracking là quá trình bẻ gãy các liên kết C–C của hydrocarbon mạch dài có nhiệt độ sôi cao thành các hydrocarbon mạch ngắn hơn, nhằm gia tăng sản lượng xăng và cung cấp nguồn nguyên liệu alkene (ethylene, propylene) cho tổng hợp hữu cơ.\n• Reforming không làm thay đổi số nguyên tử carbon trong phân tử mà chủ yếu tái sắp xếp lại cấu trúc phân tử (đồng phân hóa mạch thẳng thành mạch nhánh hoặc đóng vòng thơm arene), nhằm mục đích chính là tăng vọt chỉ số octane (khả năng chống kích nổ) của phân đoạn xăng." }
        ]));

        return children;
      }
    }
  ]
};
