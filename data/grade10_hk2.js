// Dữ liệu lý thuyết chi tiết Hóa học 10 - HK2 chuẩn format Claude docx
module.exports = {
  title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 10 – HỌC KÌ 2",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Năng lượng hóa học, Tốc độ phản ứng & Nhóm Halogen",
  parts: [
    {
      id: "hk2_10_p1",
      label: "Chương 5 (Phần 1): Năng lượng hóa học – Phản ứng tỏa nhiệt, thu nhiệt & Enthalpy chuẩn (Bài 17)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
        children.push(Chapter("CHƯƠNG 5: NĂNG LƯỢNG HÓA HỌC"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Ứng dụng đời sống", [
          "Mọi phản ứng hóa học trong tự nhiên và công nghiệp đều gắn liền với **sự biến đổi năng lượng** (nhiệt, quang, điện, cơ) — cung cấp năng lượng nuôi sống tế bào, vận hành động cơ xe cộ, nhà máy nhiệt điện.",
          "**Ứng dụng y học và thể thao:** Các **túi chườm nóng** (sử dụng phản ứng tỏa nhiệt khi hòa tan CaCl2 hoặc oxy hóa bột sắt) và **túi chườm lạnh cấp cứu** (dùng quá trình thu nhiệt khi hòa tan NH4NO3 vào nước) giúp giảm đau, hạ sốt, xử lý chấn thương cấp tốc.",
          "**An toàn kỹ thuật và môi trường:** Kiểm soát nhiệt phản ứng giúp kỹ sư thiết kế hệ thống làm mát lò phản ứng hóa chất, phòng ngừa thảm họa cháy nổ công nghiệp và tối ưu hóa hiệu suất nhiên liệu sinh học thân thiện với môi trường."
        ]));
        children.push(spacer());

        children.push(Bai("Bài 17. Biến thiên enthalpy trong các phản ứng hóa học"));
        children.push(Section("I. Phản ứng tỏa nhiệt và phản ứng thu nhiệt"));
        children.push(P("Trong quá trình xảy ra phản ứng hóa học, liên kết giữa các nguyên tử trong chất đầu bị phá vỡ và các liên kết mới trong sản phẩm được hình thành. Sự chênh lệch năng lượng giữa quá trình phá vỡ và hình thành liên kết dẫn đến sự trao đổi nhiệt giữa hệ phản ứng và môi trường xung quanh."));
        children.push(DataTable(
          ["Đặc điểm so sánh", "Phản ứng tỏa nhiệt (Exothermic)", "Phản ứng thu nhiệt (Endothermic)"],
          [
            ["Khái niệm cơ bản", "Phản ứng giải phóng năng lượng dưới dạng nhiệt ra môi trường xung quanh.", "Phản ứng hấp thụ năng lượng dưới dạng nhiệt từ môi trường xung quanh."],
            ["Dấu của biến thiên enthalpy (ΔrH)", "**ΔrH < 0** (mang giá trị âm).", "**ΔrH > 0** (mang giá trị dương)."],
            ["Năng lượng của hệ (chất)", "Năng lượng của sản phẩm **thấp hơn** năng lượng của chất phản ứng.", "Năng lượng của sản phẩm **cao hơn** năng lượng của chất phản ứng."],
            ["Nhiệt độ môi trường ngoài", "Nhiệt độ môi trường xung quanh **tăng lên** (nóng lên).", "Nhiệt độ môi trường xung quanh **giảm xuống** (lạnh đi)."],
            ["Độ bền nhiệt động của sản phẩm", "Sản phẩm bền vững hơn chất phản ứng về mặt năng lượng.", "Sản phẩm kém bền hơn chất phản ứng, cần tiếp tục cấp nhiệt để duy trì."],
            ["Ví dụ thực tiễn", "• Đốt cháy than (C + O2 → CO2)\n• Phản ứng tôi vôi (CaO + H2O → Ca(OH)2)\n• Hòa tan H2SO4 đặc vào nước\n• Phản ứng hô hấp tế bào sinh vật", "• Nung vôi (CaCO3 → CaO + CO2 ở 900 °C)\n• Hòa tan phân đạm urea hoặc NH4NO3 vào nước\n• Nhiệt phân Cu(OH)2, KMnO4, KClO3\n• Quá trình quang hợp của cây xanh"]
          ]
        ));
        children.push(spacer());
        children.push(...Img("enthalpy_diagram.png", 460, "Hình 5.1. Giản đồ năng lượng phản ứng tỏa nhiệt (trái) và phản ứng thu nhiệt (phải)."));
        children.push(spacer());

        children.push(Sub("Giải thích bản chất nhiệt động học"));
        children.push(P("Sở dĩ phản ứng tỏa nhiệt làm môi trường nóng lên là vì tổng năng lượng liên kết được giải phóng khi hình thành sản phẩm **lớn hơn** tổng năng lượng cần cung cấp để phá vỡ liên kết trong chất phản ứng. Phần năng lượng dư thừa được giải phóng ra ngoài dưới dạng nhiệt động năng của các hạt, làm tăng chuyển động nhiệt của môi trường. Ngược lại, phản ứng thu nhiệt đòi hỏi hấp thu nhiệt lượng từ môi trường để bù đắp năng lượng phá vỡ liên kết, khiến các phân tử xung quanh bị mất nhiệt động năng và nhiệt độ giảm xuống."));

        children.push(Section("II. Điều kiện chuẩn và Biến thiên Enthalpy chuẩn"));
        children.push(...Bullet([
          "**Biến thiên enthalpy của phản ứng (kí hiệu ΔrH):** là lượng nhiệt tỏa ra hoặc thu vào của một phản ứng hóa học ở điều kiện áp suất không đổi.",
          "**Điều kiện chuẩn:** áp suất danh nghĩa là **1 bar** (với chất khí), nồng độ **1 mol/L** (với chất tan trong dung dịch) và thường xét ở nhiệt độ **25 °C (hay 298 K)**.",
          "**Biến thiên enthalpy chuẩn (kí hiệu ΔrH°298):** là biến thiên enthalpy của phản ứng được xác định ở điều kiện chuẩn.",
          "**Nhiệt tạo thành chuẩn (Enthalpy tạo thành chuẩn, kí hiệu ΔfH°298):** là biến thiên enthalpy của phản ứng tạo thành **1 mol chất đó từ các đơn chất bền nhất** ở điều kiện chuẩn (đơn vị: kJ/mol).",
          "**Quy ước quốc tế:** Nhiệt tạo thành chuẩn của các **đơn chất bền nhất ở điều kiện chuẩn bằng 0 kJ/mol** (Ví dụ: O2(g), N2(g), H2(g), C(graphite), Fe(s), Na(s)...)."
        ]));
        children.push(NoteBox("Ghi nhớ quy luật về nhiệt tạo thành chuẩn", [
          "Hợp chất có **ΔfH°298 càng âm** thì hợp chất đó **càng bền vững về mặt nhiệt động** (khó bị phân hủy thành các đơn chất cấu tạo nên nó).",
          "Hợp chất có **ΔfH°298 > 0** là hợp chất kém bền nhiệt động, dễ bị phân hủy tỏa nhiệt khi bị kích thích (ví dụ acetylene C2H2, ozone O3, nitrogen monoxide NO)."
        ]));

        children.push(Section("III. Phương trình nhiệt hóa học"));
        children.push(P("Phương trình nhiệt hóa học là phương trình hóa học có ghi rõ **trạng thái của các chất** (s: rắn/solid, l: lỏng/liquid, g: khí/gas, aq: dung dịch nước/aqueous) và **giá trị biến thiên enthalpy chuẩn ΔrH°298** ở cuối phương trình."));
        children.push(Eq("C (graphite, s)  +  O₂ (g)  →  CO₂ (g)   ΔrH°₂₉₈ = –393,5 kJ  (Phản ứng tỏa nhiệt mạnh)"));
        children.push(Eq("CaCO₃ (s)  →(t°)  CaO (s)  +  CO₂ (g)   ΔrH°₂₉₈ = +178,5 kJ  (Phản ứng thu nhiệt)"));
        children.push(Eq("N₂ (g)  +  O₂ (g)  ⇌  2NO (g)   ΔrH°₂₉₈ = +180,6 kJ  (Phản ứng thu nhiệt, chỉ xảy ra khi có tia lửa điện)"));

        children.push(Example("Ví dụ mẫu: Đọc và phân tích phương trình nhiệt hóa học", [
          "Đề bài: Cho phương trình nhiệt hóa học: 2H2 (g) + O2 (g) → 2H2O (l)   ΔrH°298 = –571,6 kJ.",
          "a) Phản ứng trên tỏa nhiệt hay thu nhiệt? Lượng nhiệt tỏa ra khi đốt cháy hoàn toàn 1 mol H2 là bao nhiêu?",
          "b) Tính lượng nhiệt tỏa ra khi đốt cháy hoàn toàn 1 gam khí H2 ở điều kiện chuẩn.",
          "Lời giải từng bước:",
          "a) Do ΔrH°298 = –571,6 kJ < 0 nên phản ứng tỏa nhiệt. Theo phương trình, đốt cháy 2 mol H2 tỏa ra 571,6 kJ. Do đó, đốt cháy 1 mol H2 tỏa ra: 571,6 / 2 = 285,8 kJ.",
          "b) Số mol H2 trong 1 gam: n = 1 / 2 = 0,5 mol. Lượng nhiệt tỏa ra khi đốt cháy 1 gam H2 là: 0,5 × 285,8 = 142,9 kJ (H2 là nhiên liệu có năng lượng giải phóng rất cao trên mỗi đơn vị khối lượng)."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh kiến thức Bài 17", [
          {
            q: "Khi hòa tan một lượng muối ammonium nitrate (NH4NO3) vào nước trong cốc thủy tinh, sờ tay vào thành cốc ta thấy lạnh buốt. Quá trình hòa tan này tỏa nhiệt hay thu nhiệt? Biến thiên enthalpy của quá trình mang dấu gì?",
            a: "Quá trình hòa tan này là quá trình thu nhiệt vì nó hấp thu nhiệt lượng từ môi trường (nước và thành cốc), làm nhiệt độ giảm xuống. Biến thiên enthalpy mang dấu dương (ΔH > 0)."
          },
          {
            q: "Biết nhiệt tạo thành chuẩn của CO(g) là –110,5 kJ/mol và của CO2(g) là –393,5 kJ/mol. Hợp chất nào bền vững hơn về mặt nhiệt động?",
            a: "CO2 bền vững hơn CO về mặt nhiệt động vì nhiệt tạo thành chuẩn của CO2 âm hơn rất nhiều so với CO (–393,5 kJ/mol < –110,5 kJ/mol), nghĩa là khi hình thành CO2 hệ giải phóng nhiều năng lượng hơn, phân tử đạt trạng thái năng lượng thấp hơn."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_10_p2",
      label: "Chương 5 (Phần 2): Phương pháp tính biến thiên Enthalpy chuẩn & Ôn tập Chương 5 (Bài 18)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Bai("Bài 18. Tính biến thiên enthalpy của phản ứng hóa học"));
        children.push(Section("I. Phương pháp 1: Tính theo nhiệt tạo thành chuẩn (ΔfH°298)"));
        children.push(P("Biến thiên enthalpy chuẩn của một phản ứng hóa học bằng **tổng nhiệt tạo thành chuẩn của các chất sản phẩm trừ đi tổng nhiệt tạo thành chuẩn của các chất phản ứng**, có nhân với hệ số tỉ lượng tương ứng trong phương trình:"));
        children.push(Eq("**ΔrH°₂₉₈ = ∑ (m × ΔfH°₂₉₈ [sản phẩm])  –  ∑ (n × ΔfH°₂₉₈ [chất đầu])**"));
        children.push(P("Trong đó m, n lần lượt là hệ số tỉ lượng của từng chất sản phẩm và chất phản ứng trong phương trình hóa học đã cân bằng. Lưu ý: các đơn chất bền nhất có ΔfH°298 = 0."));

        children.push(Section("II. Phương pháp 2: Tính theo năng lượng liên kết (Eb)"));
        children.push(P("Phương pháp này áp dụng đối với các phản ứng mà **tất cả các chất phản ứng và chất sản phẩm đều ở thể khí (gas)**:"));
        children.push(Eq("**ΔrH°₂₉₈ = ∑ (n × Eb [chất đầu])  –  ∑ (m × Eb [sản phẩm])**"));
        children.push(P("Trong đó Eb là năng lượng liên kết (năng lượng cần thiết để phá vỡ 1 mol liên kết ở thể khí thành các nguyên tử riêng rẽ)."));

        children.push(Sub("Giải thích bản chất khoa học vì sao có sự đảo ngược công thức"));
        children.push(P("Học sinh rất dễ nhầm lẫn giữa hai công thức. Bản chất sự khác biệt:"));
        children.push(...Bullet([
          "Khi tính theo **nhiệt tạo thành (ΔfH°298)**: ΔfH° là năng lượng tỏa ra/thu vào khi *hình thành* chất từ đơn chất. Do đó, muốn tìm biến thiên của phản ứng, ta lấy trạng thái cuối (sản phẩm) trừ trạng thái đầu (chất đầu) theo định luật Hess: **Sản phẩm – Chất đầu**.",
          "Khi tính theo **năng lượng liên kết (Eb)**: Eb là năng lượng cần *cung cấp để bẻ gãy* liên kết (thu nhiệt, dấu dương +Eb). Để phản ứng diễn ra, trước tiên ta phải tốn năng lượng bẻ gãy toàn bộ liên kết của chất đầu (+∑Eb[chất đầu]), sau đó khi hình thành liên kết mới ở sản phẩm hệ sẽ giải phóng năng lượng ra ngoài (–∑Eb[sản phẩm]). Do đó: **ΔrH°298 = Chất đầu – Sản phẩm**."
        ]));

        children.push(DataTable(
          ["Liên kết", "Eb (kJ/mol)", "Liên kết", "Eb (kJ/mol)", "Liên kết", "Eb (kJ/mol)"],
          [
            ["H – H", "436", "C – H", "413", "O – H", "467"],
            ["C – C", "347", "C = C", "614", "C ≡ C", "839"],
            ["C = O (trong CO2)", "745", "O = O", "498", "N ≡ N", "945"],
            ["C – Cl", "339", "H – Cl", "431", "Cl – Cl", "242"]
          ]
        ));
        children.push(spacer());

        children.push(Example("Ví dụ mẫu 1: Tính theo nhiệt tạo thành chuẩn", [
          "Đề bài: Cho phản ứng nhiệt nhôm: 2Al (s) + Fe2O3 (s) → Al2O3 (s) + 2Fe (s).",
          "Biết nhiệt tạo thành chuẩn: ΔfH°298(Fe2O3) = –824,2 kJ/mol; ΔfH°298(Al2O3) = –1675,7 kJ/mol; Al và Fe là đơn chất bền nên ΔfH°298 = 0.",
          "Lời giải từng bước:",
          "Áp dụng công thức: ΔrH°298 = [1 × ΔfH°298(Al2O3) + 2 × ΔfH°298(Fe)] – [2 × ΔfH°298(Al) + 1 × ΔfH°298(Fe2O3)]",
          "ΔrH°298 = [–1675,7 + 0] – [0 + (–824,2)] = –1675,7 + 824,2 = **–851,5 kJ**.",
          "Kết luận: Phản ứng tỏa một lượng nhiệt khổng lồ (–851,5 kJ), đủ làm sắt nóng chảy ở hơn 1500 °C để hàn đường ray xe lửa."
        ]));

        children.push(Example("Ví dụ mẫu 2: Tính theo năng lượng liên kết", [
          "Đề bài: Cho phản ứng đốt cháy hoàn toàn methane: CH4 (g) + 2O2 (g) → CO2 (g) + 2H2O (g).",
          "Biết năng lượng liên kết: Eb(C–H) = 413 kJ/mol; Eb(O=O) = 498 kJ/mol; Eb(C=O) = 745 kJ/mol; Eb(O–H) = 467 kJ/mol.",
          "Lời giải từng bước:",
          "1. Bẻ gãy liên kết ở chất đầu: trong 1 mol CH4 có 4 liên kết C–H; trong 2 mol O2 có 2 liên kết O=O.",
          "   ∑Eb(chất đầu) = 4 × 413 + 2 × 498 = 1652 + 996 = **2648 kJ**.",
          "2. Hình thành liên kết ở sản phẩm: trong 1 mol CO2 có 2 liên kết C=O; trong 2 mol H2O có 2 × 2 = 4 liên kết O–H.",
          "   ∑Eb(sản phẩm) = 2 × 745 + 4 × 467 = 1490 + 1868 = **3358 kJ**.",
          "3. Áp dụng công thức: ΔrH°298 = ∑Eb(chất đầu) – ∑Eb(sản phẩm) = 2648 – 3358 = **–710 kJ**.",
          "Kết luận: Phản ứng tỏa ra 710 kJ nhiệt lượng cho mỗi mol methane bị đốt cháy."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh kiến thức Bài 18", [
          {
            q: "Cho phản ứng tổng hợp ammonia: N2 (g) + 3H2 (g) ⇌ 2NH3 (g). Biết Eb(N≡N) = 945 kJ/mol, Eb(H–H) = 436 kJ/mol, Eb(N–H) = 391 kJ/mol. Hãy tính biến thiên enthalpy chuẩn của phản ứng.",
            a: "∑Eb(chất đầu) = 1×945 + 3×436 = 2253 kJ. Trong 2 mol NH3 có 2×3 = 6 liên kết N–H, ∑Eb(sản phẩm) = 6×391 = 2346 kJ. ΔrH°298 = 2253 – 2346 = –93 kJ (phản ứng tỏa nhiệt)."
          },
          {
            q: "Vì sao không thể áp dụng công thức tính theo năng lượng liên kết Eb cho phản ứng: C(graphite, s) + O2(g) → CO2(g)?",
            a: "Vì carbon ở dạng graphite là chất rắn (thể rắn), có cấu trúc mạng tinh thể lớp phức tạp liên kết bởi tương tác van der Waals giữa các lớp, không phải hoàn toàn ở thể khí; công thức tính theo Eb chỉ áp dụng chặt chẽ khi tất cả các chất đầu và sản phẩm đều ở thể khí."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_10_p3",
      label: "Chương 6: Tốc độ phản ứng hóa học & Các yếu tố ảnh hưởng (Bài 19, 20)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHƯƠNG 6: TỐC ĐỘ PHẢN ỨNG HÓA HỌC"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Ứng dụng đời sống", [
          "**Kiểm soát thời gian phản ứng** là chìa khóa của nền văn minh hiện đại: kìm hãm tối đa các phản ứng có hại (chống ôi thiu thức ăn, ức chế gỉ sét cầu cống sắt thép) và gia tốc cực đại các phản ứng có lợi (sản xuất phân bón, dược phẩm, nhiên liệu).",
          "**Ứng dụng sinh học & y học:** Hàng triệu enzyme trong cơ thể người hoạt động như những chất xúc tác sinh học siêu việt, tăng tốc độ phản ứng chuyển hóa tế bào lên hàng triệu lần ở nhiệt độ êm dịu 37 °C; nếu không có enzyme, quá trình tiêu hóa một bữa ăn có thể mất cả đời người.",
          "**An toàn lao động & phòng cháy chữa cháy:** Hiểu biết về diện tích tiếp xúc và nồng độ giúp ngăn chặn các vụ nổ bụi thảm khốc tại hầm mỏ than, xưởng gỗ, nhà máy xay xát lúa gạo và kho chứa bột mì."
        ]));
        children.push(spacer());

        children.push(Bai("Bài 19. Tốc độ phản ứng hóa học"));
        children.push(Section("I. Khái niệm và Công thức tính tốc độ trung bình"));
        children.push(P("**Tốc độ phản ứng hóa học** là đại lượng đặc trưng cho sự biến thiên nồng độ của một trong các chất phản ứng hoặc chất sản phẩm trong một đơn vị thời gian (giây, phút, giờ...)."));
        children.push(P("Xét phản ứng tổng quát: aA + bB → cC + dD. Tốc độ trung bình (v_tb) của phản ứng trong khoảng thời gian từ t1 đến t2 được tính theo công thức:"));
        children.push(Eq("**v_tb = – (1/a) × (ΔC_A / Δt) = – (1/b) × (ΔC_B / Δt) = +(1/c) × (ΔC_C / Δt) = +(1/d) × (ΔC_D / Δt)**"));
        children.push(P("Trong đó: ΔC = C2 – C1 là độ biến thiên nồng độ; Δt = t2 – t1 là khoảng thời gian. Dấu trừ (–) đặt trước biến thiên nồng độ của chất phản ứng để đảm bảo giá trị tốc độ luôn là một số dương (vì nồng độ chất phản ứng giảm dần theo thời gian, C2 < C1 nên ΔC < 0)."));

        children.push(Section("II. Định luật tác dụng khối lượng"));
        children.push(P("Năm 1864, hai nhà hóa học Guldberg và Waage đã tìm ra định luật: Ở nhiệt độ không đổi, **tốc độ phản ứng tỉ lệ thuận với tích số nồng độ của các chất phản ứng lũy thừa với số mũ thích hợp**."));
        children.push(P("Đối với các phản ứng đơn giản (phản ứng một giai đoạn): aA + bB → sản phẩm:"));
        children.push(Eq("**v = k × [A]^a × [B]^b**"));
        children.push(...Bullet([
          "**[A], [B]:** nồng độ mol của chất phản ứng A và B tại thời điểm xét.",
          "**k:** hằng số tốc độ phản ứng, chỉ phụ thuộc vào bản chất của chất phản ứng và nhiệt độ, không phụ thuộc vào nồng độ. Khi [A] = [B] = 1 M thì v = k (k chính là tốc độ riêng của phản ứng).",
          "Đối với chất rắn nguyên chất, nồng độ được coi là hằng số và không xuất hiện trong biểu thức tốc độ phản ứng."
        ]));

        children.push(Section("III. Năng lượng hoạt hóa và Thuyết va chạm hoạt động"));
        children.push(P("Để phản ứng xảy ra, các phân tử chất phản ứng phải **va chạm vào nhau**. Tuy nhiên, không phải va chạm nào cũng sinh ra phản ứng. Chỉ những va chạm giữa các tiểu phân có đủ năng lượng cần thiết và hướng va chạm thích hợp mới làm đứt gãy liên kết cũ và tạo thành liên kết mới — gọi là **va chạm hiệu quả** (va chạm hoạt động)."));
        children.push(NoteBox("Khái niệm Năng lượng hoạt hóa (Ea)", [
          "**Năng lượng hoạt hóa (Ea):** là năng lượng tối thiểu mà các tiểu phân chất phản ứng cần phải có để vượt qua rào cản năng lượng và tạo thành sản phẩm khi va chạm vào nhau (đơn vị: kJ/mol).",
          "Năng lượng hoạt hóa Ea **càng nhỏ** thì số phân tử có đủ năng lượng va chạm hiệu quả càng nhiều → phản ứng diễn ra **càng nhanh** và ngược lại."
        ]));

        children.push(Bai("Bài 20. Các yếu tố ảnh hưởng đến tốc độ phản ứng"));
        children.push(...Img("rate_factors.png", 460, "Hình 6.1. Các yếu tố ảnh hưởng đến tốc độ phản ứng hóa học."));
        children.push(spacer());

        children.push(DataTable(
          ["Yếu tố ảnh hưởng", "Quy luật biến đổi", "Giải thích bản chất khoa học", "Ứng dụng thực tiễn điển hình"],
          [
            ["1. Nồng độ", "Tăng nồng độ chất phản ứng → tốc độ phản ứng tăng.", "Nồng độ tăng làm mật độ hạt trong 1 đơn vị thể tích dày đặc hơn → tần số va chạm giữa các hạt tăng lên → số va chạm hiệu quả tăng.", "Thổi oxy nguyên chất vào lò luyện thép giúp than cháy mãnh liệt và nhiệt độ cao hơn nhiều so với dùng không khí."],
            ["2. Áp suất (chất khí)", "Tăng áp suất của hệ có chất khí → tốc độ phản ứng tăng.", "Tăng áp suất tương đương với việc nén thể tích khí lại, làm tăng nồng độ mol của các phân tử khí → tần số va chạm tăng.", "Tổng hợp ammonia (N2 + 3H2 ⇌ 2NH3) được thực hiện ở áp suất cực cao (150 – 200 atm) để tăng tốc độ phản ứng."],
            ["3. Nhiệt độ", "Tăng nhiệt độ → tốc độ phản ứng tăng rất nhanh.", "Tăng nhiệt độ làm động năng phân tử tăng, chuyển động hỗn loạn nhanh hơn VÀ làm tăng vọt tỉ lệ phân tử có năng lượng vượt ngưỡng Ea.", "• Nấu thức ăn trong nồi áp suất nhanh chín (nhiệt độ sôi đạt 120 °C).\n• Bảo quản thực phẩm trong tủ lạnh ngăn đông (làm chậm thối rữa)."],
            ["4. Diện tích tiếp xúc (chất rắn)", "Tăng diện tích bề mặt chất rắn → tốc độ phản ứng tăng.", "Chất rắn chỉ phản ứng trên bề mặt tiếp xúc. Khi đập nhỏ, nghiền mịn chất rắn, số lượng nguyên tử/ion lộ ra ngoài bề mặt tăng vọt.", "• Chẻ củi nhỏ để dễ nhóm bếp lửa.\n• Than tổ ong có nhiều lỗ thông để tăng diện tích tiếp xúc với oxy."],
            ["5. Chất xúc tác", "Chất xúc tác làm tăng tốc độ phản ứng nhưng không bị tiêu hao.", "Chất xúc tác mở ra một cơ chế phản ứng mới có **năng lượng hoạt hóa Ea thấp hơn nhiều**, giúp số va chạm hiệu quả tăng vọt.", "• Men rượu, men tiêu hóa, enzyme trong cơ thể sống.\n• Xúc tác V2O5 trong sản xuất H2SO4; xúc tác Pt/Rh trong ống xả ô tô."]
          ]
        ));
        children.push(spacer());

        children.push(Sub("Quy tắc kinh nghiệm Van 't Hoff về ảnh hưởng của nhiệt độ"));
        children.push(P("Nhà hóa học Van 't Hoff đã đúc kết quy tắc: Khi nhiệt độ tăng thêm 10 °C, tốc độ phản ứng hóa học tăng từ 2 đến 4 lần. Giá trị từ 2 đến 4 được gọi là **hệ số nhiệt độ Van 't Hoff (kí hiệu γ - gamma)**:"));
        children.push(Eq("**v₂ / v₁ = γ ^ [(T₂ – T₁) / 10]**"));

        children.push(Example("Ví dụ mẫu: Áp dụng quy tắc Van 't Hoff", [
          "Đề bài: Một phản ứng hóa học có hệ số nhiệt độ Van 't Hoff γ = 3. Ở 30 °C, phản ứng kết thúc sau thời gian 18 phút. Hỏi ở 60 °C, phản ứng đó kết thúc sau bao nhiêu thời gian?",
          "Lời giải từng bước:",
          "1. Độ chênh lệch nhiệt độ: ΔT = 60 – 30 = 30 °C.",
          "2. Tỉ số tốc độ phản ứng tăng lên: v(60°C) / v(30°C) = γ^(30/10) = 3^3 = **27 lần**.",
          "3. Vì tốc độ phản ứng tỉ lệ nghịch với thời gian phản ứng (v càng nhanh thì t càng ngắn):",
          "   t(60°C) = t(30°C) / 27 = 18 phút / 27 = 18/27 = 2/3 phút = **40 giây**.",
          "Kết luận: Khi nâng nhiệt độ từ 30 °C lên 60 °C, phản ứng diễn ra nhanh gấp 27 lần và hoàn thành chỉ sau 40 giây."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh kiến thức Chương 6", [
          {
            q: "Vì sao người ta thường rắc men nở (yeast) vào bột mì khi làm bánh mì và ủ ở nơi ấm áp?",
            a: "Men nở chứa các enzyme (chất xúc tác sinh học) giúp thúc đẩy nhanh quá trình lên men tinh bột sinh ra khí CO2 làm bột nở xốp. Việc ủ ở nơi ấm áp (nhiệt độ thích hợp ~35-40 °C) làm tăng tốc độ phản ứng theo quy luật nhiệt độ."
          },
          {
            q: "Cho phản ứng: 2NO (g) + O2 (g) → 2NO2 (g). Nếu tăng nồng độ NO lên 3 lần và giữ nguyên nồng độ O2 thì tốc độ phản ứng thay đổi như thế nào?",
            a: "Biểu thức tốc độ: v = k × [NO]^2 × [O2]. Khi [NO] tăng 3 lần, v tăng: 3^2 = 9 lần."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_10_p4",
      label: "Chương 7: Nhóm VIIA – Nguyên tố Halogen, Hợp chất & Ôn tập Học kì 2 (Bài 21, 22, 23)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHƯƠNG 7: NHÓM VIIA (NGUYÊN TỐ HALOGEN)"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Ứng dụng đời sống", [
          "**Halogen (nguồn gốc tiếng Hy Lạp nghĩa là 'sinh ra muối'):** là nhóm phi kim điển hình bậc nhất trong hóa học, có mặt khắp nơi từ nước biển (muối ăn NaCl, NaBr) đến các khoáng vật quý.",
          "**Bảo vệ sức khỏe & Vệ sinh dịch tễ:** Chlorine (Cl2) và hợp chất nước Javel khử trùng hơn 90% nước sinh hoạt trên thế giới, dập tắt các dịch bệnh tả lị; Fluoride ngừa sâu răng trong kem đánh răng; Dung dịch cồn Povidone-Iodine là thuốc sát trùng vết thương thiết yếu trong y tế; Iod là vi chất bắt buộc để phòng chống bệnh bướu cổ và thiểu năng trí tuệ.",
          "**Công nghiệp & Kỹ thuật cao:** Teflon (chứa polymer flo) làm chảo chống dính, vật liệu trơ trong hàng không vũ trụ; Muối AgBr ứng dụng trong phim ảnh truyền thống; Hợp chất halogen là nguyên liệu sản xuất dược phẩm và thuốc trừ sâu thế hệ mới."
        ]));
        children.push(spacer());

        children.push(Bai("Bài 21. Nhóm halogen"));
        children.push(Section("I. Vị trí trong bảng tuần hoàn và Cấu hình electron"));
        children.push(P("Nhóm VIIA gồm các nguyên tố: **Fluorine (F), Chlorine (Cl), Bromine (Br), Iodine (I)** và hai nguyên tố phóng xạ Astatine (At), Tennessine (Ts)."));
        children.push(...Bullet([
          "Cấu hình electron lớp ngoài cùng chung: **ns² np⁵** (có 7 electron hoá trị).",
          "Xu hướng tạo liên kết: Để đạt cấu hình octet bền vững của khí hiếm ns² np⁶, nguyên tử halogen có xu hướng mạnh mẽ **nhận thêm 1 electron** để tạo anion halide **X⁻**, hoặc **góp chung 1 electron** với nguyên tử khác tạo liên kết cộng hoá trị.",
          "Ở trạng thái đơn chất, 2 nguyên tử halogen góp chung 1 cặp electron hình thành phân tử nhị nguyên tử: **X₂ (F₂, Cl₂, Br₂, I₂)**."
        ]));

        children.push(Section("II. Quy luật biến đổi tính chất vật lí"));
        children.push(...Img("halogen_trend.png", 460, "Hình 7.1. Xu hướng biến đổi màu sắc, trạng thái và nhiệt độ sôi của đơn chất halogen."));
        children.push(spacer());
        children.push(DataTable(
          ["Đơn chất", "Màu sắc & Trạng thái (25 °C)", "Nhiệt độ nóng chảy (°C)", "Nhiệt độ sôi (°C)", "Tương tác van der Waals"],
          [
            ["F₂ (Fluorine)", "Khí màu lục rất nhạt", "–219,6", "–188,1", "Yếu nhất (kích thước phân tử nhỏ)"],
            ["Cl₂ (Chlorine)", "Khí màu vàng lục, mùi hắc độc", "–101,0", "–34,0", "Tăng dần"],
            ["Br₂ (Bromine)", "Chất lỏng màu nâu đỏ, dễ bay hơi độc", "–7,2", "58,8", "Mạnh hơn"],
            ["I₂ (Iodine)", "Chất rắn tím đen, có ánh kim", "113,7", "184,3", "Mạnh nhất (kích thước phân tử lớn)"]
          ]
        ));
        children.push(spacer());
        children.push(Sub("Giải thích hiện tượng thăng hoa của Iodine và nhiệt độ sôi tăng dần"));
        children.push(P("Từ F2 đến I2, khi phân tử khối và bán kính nguyên tử tăng dần, đám mây electron càng lớn và càng dễ bị biến dạng, làm cho **tương tác van der Waals giữa các phân tử X2 tăng mạnh**. Do đó, nhiệt độ nóng chảy và nhiệt độ sôi **tăng dần đều đặn** từ thể khí (F2, Cl2) sang thể lỏng (Br2) và thể rắn (I2). Tinh thể Iodine khi đun nóng nhẹ không nóng chảy mà chuyển thẳng từ thể rắn sang thể hơi màu tím đặc trưng — hiện tượng này gọi là **sự thăng hoa** (dùng để tinh chế iodine)."));

        children.push(Section("III. Tính chất hoá học của đơn chất Halogen"));
        children.push(P("Tính chất hoá học đặc trưng của đơn chất halogen là **tính oxi hoá rất mạnh**. Theo chiều từ F2 đến I2, độ âm điện giảm dần nên **tính oxi hoá giảm dần**:"));
        children.push(Eq("**F₂  >  Cl₂  >  Br₂  >  I₂**"));

        children.push(Sub("1. Tác dụng với kim loại"));
        children.push(P("Halogen oxi hoá hầu hết kim loại tạo muối halide. Fluorine và Chlorine oxi hoá kim loại lên mức oxi hoá cao nhất:"));
        children.push(Eq("2Fe  +  3Cl₂  →(t°)  2FeCl₃  (Muối sắt III, khói màu nâu đỏ)"));
        children.push(Eq("Fe  +  I₂  →(t°)  FeI₂  (Do tính oxi hóa yếu hơn, Iodine chỉ đưa sắt lên mức +2)"));
        children.push(Eq("2Na  +  Cl₂  →(t°)  2NaCl  (Ngọn lửa màu vàng sáng chói)"));

        children.push(Sub("2. Tác dụng với hydrogen"));
        children.push(DataTable(
          ["Halogen", "Phương trình phản ứng", "Điều kiện phản ứng", "Mức độ mãnh liệt"],
          [
            ["F₂", "H₂ + F₂ → 2HF", "Bóng tối, nhiệt độ rất thấp (–252 °C)", "Nổ cực kỳ mãnh liệt ngay trong bóng tối"],
            ["Cl₂", "H₂ + Cl₂ → 2HCl", "Chiếu sáng (h/v) hoặc đun nóng", "Nổ mạnh khi có ánh sáng mặt trời"],
            ["Br₂", "H₂ + Br₂ → 2HBr", "Đun nóng ở 150 – 200 °C", "Phản ứng êm dịu, cần nhiệt độ"],
            ["I₂", "H₂ + I₂ ⇌ 2HI", "Đun nóng 350 – 500 °C, xúc tác Pt", "Phản ứng thuận nghịch, thu nhiệt nhẹ"]
          ]
        ));
        children.push(spacer());

        children.push(Sub("3. Tác dụng với nước và dung dịch kiềm"));
        children.push(...Bullet([
          "**Fluorine bốc cháy trong nước:** 2F2 + 2H2O → 4HF + O2↑ (F2 oxi hoá mãnh liệt nước, không thể tồn tại trong dung dịch nước).",
          "**Chlorine và Bromine phản ứng tự oxi hoá – khử thuận nghịch với nước:** Cl2 + H2O ⇌ HCl + HClO (nước chlorine có tính tẩy màu sát trùng do acid hypochlorous HClO có tính oxi hoá mạnh).",
          "**Tác dụng với dung dịch kiềm NaOH ở nhiệt độ thường (Nước Javel):** Cl2 + 2NaOH → NaCl + NaClO + H2O (hỗn hợp NaCl và sodium hypochlorite NaClO là nước Javel).",
          "**Tác dụng với dung dịch kiềm đun nóng ở 100 °C:** 3Cl2 + 6KOH →(100°C) 5KCl + KClO3 + 3H2O (tạo muối potassium chlorate KClO3 có tính oxi hoá mạnh dùng chế tạo thuốc diêm, pháo hoa)."
        ]));

        children.push(Sub("4. Phản ứng đẩy halogen yếu ra khỏi dung dịch muối"));
        children.push(P("Halogen có tính oxi hoá mạnh hơn (đứng trước) sẽ **đẩy được halogen có tính oxi hoá yếu hơn (đứng sau)** ra khỏi dung dịch muối halide:"));
        children.push(Eq("Cl₂  +  2NaBr (không màu)  →  2NaCl  +  Br₂ (dung dịch chuyển sang màu vàng cam)"));
        children.push(Eq("Br₂  +  2NaI (không màu)  →  2NaBr  +  I₂ (dung dịch hóa nâu, cho hồ tinh bột vào hóa xanh lam đậm)"));
        children.push(NoteBox("Quy tắc đẩy halogen", [
          "F2 không dùng để đẩy các halogen khác ra khỏi dung dịch muối vì F2 phản ứng ngay lập tức với nước trước khi kịp tác dụng với muối.",
          "Thứ tự đẩy trong dung dịch: **Cl2 đẩy được Br– và I–; Br2 đẩy được I–**."
        ]));

        children.push(Bai("Bài 22. Hydrogen halide, Muối halide & Hợp chất chứa oxygen của chlorine"));
        children.push(Section("I. Hydrogen halide và Hydrohalic acid"));
        children.push(P("Hydrogen halide (HF, HCl, HBr, HI) là những chất khí không màu ở điều kiện thường, bốc khói trong không khí ẩm, tan rất tốt trong nước tạo thành dung dịch hydrohalic acid tương ứng."));
        children.push(...Bullet([
          "**Nhiệt độ sôi bất thường của HF:** HF có nhiệt độ sôi cao bất thường (19,5 °C - thể lỏng ở nhiệt độ mát) so với HCl (–85 °C), HBr (–67 °C), HI (–35 °C). **Giải thích:** Do Fluorine có độ âm điện lớn nhất (3,98) và bán kính nhỏ nhất, liên kết H–F phân cực cực mạnh tạo thành **liên kết hydrogen liên phân tử rất bền vững** giữa các phân tử HF.",
          "**Quy luật biến đổi tính acid trong dung dịch nước:** Tính acid tăng dần theo thứ tự: **HF (acid yếu)  <  HCl  <  HBr  <  HI (acid siêu mạnh)**.",
          "**Giải thích bản chất:** Từ F đến I, bán kính nguyên tử halogen tăng dần làm độ dài liên kết H–X tăng lên, năng lượng liên kết H–X giảm mạnh (Eb[H-F] = 565 kJ > Eb[H-Cl] = 431 kJ > Eb[H-Br] = 366 kJ > Eb[H-I] = 299 kJ). Liên kết H–X càng yếu thì trong dung dịch nước nguyên tử H càng dễ phân li tách ra thành ion H⁺ → tính acid càng mạnh."
        ]));

        children.push(Sub("Tính chất đặc biệt của HF: Ăn mòn thủy tinh"));
        children.push(P("Hydrofluoric acid (HF) hòa tan dễ dàng silica (SiO2 - thành phần chính của thủy tinh):"));
        children.push(Eq("SiO₂  +  4HF  →  SiF₄ (silicon tetrafluoride, khí)  +  2H₂O"));
        children.push(P("Ứng dụng: dùng để khắc chữ, hoa văn, thang đo trên nhiệt kế và đồ thủy tinh mỹ nghệ. Lưu ý: không được bảo quản acid HF trong chai thủy tinh (phải dùng chai nhựa chuyên dụng như PE, teflon)."));

        children.push(Section("II. Tính khử của ion Halide (X⁻) và Nhận biết"));
        children.push(P("Do bán kính ion tăng dần và khả năng giữ electron giảm dần từ F⁻ đến I⁻, **tính khử của ion halide tăng dần theo thứ tự: F⁻ < Cl⁻ < Br⁻ < I⁻**."));
        children.push(...Bullet([
          "F⁻ và Cl⁻ không khử được H2SO4 đặc: NaCl(s) + H2SO4(đặc) →(t°) NaHSO4 + HCl↑ (phương pháp sulfate điều chế HCl).",
          "Br⁻ khử được H2SO4 đặc về SO2: 2NaBr + 2H2SO4(đặc) → Na2SO4 + Br2 + SO2↑ + 2H2O.",
          "I⁻ khử được H2SO4 đặc sâu hơn về H2S (mùi trứng thối): 8NaI + 5H2SO4(đặc) → 4Na2SO4 + 4I2 + H2S↑ + 4H2O."
        ]));

        children.push(Sub("Phản ứng nhận biết ion halide bằng dung dịch AgNO3"));
        children.push(DataTable(
          ["Ion Halide", "Thuốc thử AgNO3", "Hiện tượng quan sát", "Phương trình ion rút gọn", "Tính chất kết tủa"],
          [
            ["F⁻ (Fluoride)", "AgNO3", "Không có hiện tượng (không kết tủa)", "Ag⁺ + F⁻ → Không tạo kết tủa", "AgF tan rất tốt trong nước"],
            ["Cl⁻ (Chloride)", "AgNO3", "**Kết tủa màu trắng** (AgCl)", "Ag⁺ + Cl⁻ → AgCl↓ (trắng)", "Không tan trong acid mạnh (HNO3)"],
            ["Br⁻ (Bromide)", "AgNO3", "**Kết tủa màu vàng nhạt** (AgBr)", "Ag⁺ + Br⁻ → AgBr↓ (vàng nhạt)", "Không tan trong HNO3, nhạy cảm ánh sáng"],
            ["I⁻ (Iodide)", "AgNO3", "**Kết tủa màu vàng đậm** (AgI)", "Ag⁺ + I⁻ → AgI↓ (vàng đậm)", "Không tan trong cả HNO3 và NH3 đặc"]
          ]
        ));
        children.push(spacer());

        children.push(Section("III. Hợp chất chứa Oxygen của Chlorine"));
        children.push(...Bullet([
          "**Nước Javel:** Dung dịch chứa hỗn hợp NaCl và NaClO. Ion hypochlorite (ClO⁻) có tính oxi hoá cực mạnh do clo có số oxi hóa +1, dễ bị khử về –1, có khả năng phá hủy các sắc tố hữu cơ và màng tế bào vi khuẩn → dùng để **tẩy trắng vải sợi, giấy và khử trùng nước**.",
          "**Clorua vôi (CaOCl2):** Chất bột màu trắng, xốp, có mùi clo hắc. Là **muối hỗn tạp** của kim loại calcium với hai gốc acid khác nhau: Cl⁻ (chloride, số oxh –1) và ClO⁻ (hypochlorite, số oxh +1). Điều chế: cho Cl2 tác dụng với vôi tôi Ca(OH)2 ở 30 °C. Clorua vôi rẻ tiền, hàm lượng clo hoạt tính cao hơn nước Javel, dùng tẩy uế chuồng trại chăn nuôi, xử lý ao tôm và tẩy trắng.",
          "**Potassium chlorate (KClO3):** Muối chứa Cl(+5), là chất oxi hoá mạnh. Điều chế bằng cách sục Cl2 vào dung dịch KOH ở 100 °C. Dùng chế tạo thuốc súng, pháo hoa, đầu que diêm và điều chế O2 trong phòng thí nghiệm (xúc tác MnO2)."
        ]));

        children.push(Bai("Ôn tập tổng kết toàn diện lý thuyết Hóa học 10 Học kì 2"));
        children.push(NoteBox("Ma trận kiến thức cốt lõi HK2 Hóa học 10", [
          "**1. Năng lượng hóa học:** Phân biệt phản ứng tỏa nhiệt (ΔrH < 0) và thu nhiệt (ΔrH > 0). Thuần thục 2 công thức tính: theo nhiệt tạo thành (Sản phẩm – Chất đầu) và theo năng lượng liên kết khí (Chất đầu – Sản phẩm).",
          "**2. Tốc độ phản ứng:** Định luật tác dụng khối lượng v = k[A]^a[B]^b. Nắm vững 5 yếu tố ảnh hưởng (nồng độ, áp suất, nhiệt độ, diện tích tiếp xúc, chất xúc tác) và quy tắc Van 't Hoff: v2/v1 = γ^[(T2–T1)/10].",
          "**3. Nhóm Halogen:** Cấu hình ns²np⁵. Tính chất đặc trưng: tính oxi hóa mạnh giảm dần từ F2 > Cl2 > Br2 > I2. Nhận biết halide bằng AgNO3: Cl– (trắng), Br– (vàng nhạt), I– (vàng đậm). Nhận biết I2 bằng hồ tinh bột hóa xanh lam."
        ]));

        children.push(Example("Ví dụ mẫu: Phân biệt các dung dịch mất nhãn", [
          "Đề bài: Bằng phương pháp hóa học, hãy phân biệt 4 dung dịch không màu đựng trong các lọ mất nhãn: NaCl, NaBr, NaI, NaF.",
          "Lời giải từng bước:",
          "1. Lấy mỗi dung dịch một ít làm mẫu thử.",
          "2. Nhỏ dung dịch AgNO3 vào từng mẫu thử:",
          "   • Mẫu thử không xuất hiện kết tủa là **NaF** (vì AgF tan trong nước).",
          "   • Mẫu thử xuất hiện kết tủa trắng là **NaCl** (tạo kết tủa AgCl trắng).",
          "   • Mẫu thử xuất hiện kết tủa vàng nhạt là **NaBr** (tạo kết tủa AgBr vàng nhạt).",
          "   • Mẫu thử xuất hiện kết tủa vàng đậm là **NaI** (tạo kết tủa AgI vàng đậm).",
          "3. Viết các phương trình hóa học minh họa:\n   NaCl + AgNO3 → AgCl↓ + NaNO3\n   NaBr + AgNO3 → AgBr↓ + NaNO3\n   NaI + AgNO3 → AgI↓ + NaNO3"
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh toàn diện Chương 7", [
          {
            q: "Tại sao không thể điều chế khí fluorine (F2) bằng phản ứng oxi hóa muối fluoride trong dung dịch nước như phương pháp điều chế Cl2, Br2, I2?",
            a: "Vì Fluorine là chất có tính oxi hóa mạnh nhất trong tất cả các nguyên tố, không có chất hóa học nào oxi hóa được ion F– thành F2; đồng thời F2 vừa sinh ra sẽ phản ứng bốc cháy ngay lập tức với nước (2F2 + 2H2O → 4HF + O2). F2 chỉ được điều chế bằng phương pháp điện phân nóng chảy hỗn hợp KF và HF khan."
          },
          {
            q: "Dẫn khí Cl2 qua dung dịch KI có chứa sẵn vài giọt hồ tinh bột. Nêu hiện tượng quan sát được và giải thích.",
            a: "Hiện tượng: Dung dịch chuyển sang màu xanh lam đậm đặc trưng. Giải thích: Khí Cl2 có tính oxi hóa mạnh hơn I2 nên đẩy ion I– ra khỏi muối tạo thành đơn chất I2 (Cl2 + 2KI → 2KCl + I2). I2 sinh ra kết hợp với các phân tử amylose trong hồ tinh bột tạo phức chất hấp phụ màu xanh lam đậm."
          }
        ]));

        return children;
      }
    }
  ]
};
