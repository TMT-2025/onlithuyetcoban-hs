// Dữ liệu lý thuyết chi tiết Chuyên đề học tập Hóa học 10 - Kết nối tri thức với cuộc sống
module.exports = {
  title: "TÀI LIỆU TÓM TẮT TRỌNG TÂM CHUYÊN ĐỀ HỌC TẬP HÓA HỌC 10",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Cơ sở Hóa học, Phòng chống cháy nổ & Thực hành CNTT",
  parts: [
    {
      id: "cd10_p1",
      label: "Chuyên đề 1: Cơ sở Hóa học (Bài 1, 2, 3, 4)",
      desc: "Liên kết hóa học mở rộng, mô hình VSEPR, lai hóa AO; Phản ứng hạt nhân, phóng xạ và định luật bảo toàn; Năng lượng hoạt hóa, phương trình Arrhenius; Entropy và năng lượng tự do Gibbs.",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 1: CƠ SỞ HÓA HỌC"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Định hướng chuyên sâu", [
          "Chuyên đề Cơ sở Hóa học cung cấp **nền tảng lý thuyết lượng tử và nhiệt động học định lượng** giải thích sâu sắc cấu trúc không gian của phân tử, độ bền liên kết và quy luật tự diễn biến của mọi biến đổi vật chất.",
          "**Phản ứng hạt nhân và đồng vị phóng xạ:** Là công cụ then chốt trong y học hạt nhân hiện đại (xạ trị ung thư bằng Co-60, xạ hình cắt lớp positron PET bằng F-18) và khảo cổ học (xác định chính xác niên đại di chỉ bằng đồng vị Carbon-14).",
          "**Động học và nhiệt động học:** Giúp các nhà hóa học và kỹ sư năng lượng tính toán chính xác năng lượng hoạt hóa, tối ưu hóa chất xúc tác và dự đoán chính xác phản ứng có thể tự phát sinh công hay không ở từng khoảng nhiệt độ cụ thể."
        ]));
        children.push(spacer());

        // BÀI 1
        children.push(Bai("Bài 1. Liên kết hoá học"));
        children.push(Section("I. Công thức Lewis và Quy tắc Octet mở rộng"));
        children.push(P("Trong hóa học cơ bản, **quy tắc octet** quy định các nguyên tử phi kim có xu hướng chia sẻ electron để đạt 8 electron lớp ngoài cùng giống khí hiếm. Tuy nhiên, với các nguyên tố từ **chu kì 3 trở đi** (như P, S, Cl), do có sự tham gia của các **orbital phân lớp 3d còn trống**, nguyên tử trung tâm có thể mở rộng lớp vỏ hóa trị chứa **10 hoặc 12 electron** — gọi là **quy tắc octet mở rộng**."));
        children.push(...Bullet([
          "**Hợp chất có vỏ ngoài chưa đủ 8 electron (thiếu octet):** Ví dụ BF₃, BeCl₂ (B chỉ có 6 electron hóa trị quanh nguyên tử trung tâm).",
          "**Hợp chất có vỏ ngoài quá 8 electron (octet mở rộng):** Ví dụ PCl₅ (P có 10 electron hóa trị bao quanh), SF₆ (S có 12 electron hóa trị bao quanh), H₂SO₄, H₃PO₄.",
          "**Phân tử có số electron lẻ:** Ví dụ NO (11 electron hóa trị), NO₂ (17 electron hóa trị), chứa electron độc thân nên rất hoạt động."
        ]));

        children.push(Section("II. Mô hình VSEPR và Dạng hình học phân tử"));
        children.push(P("Thuyết **VSEPR (Valence Shell Electron Pair Repulsion)** – Sự đẩy nhau của các cặp electron vỏ hóa trị: Các cặp electron liên kết và các cặp electron không liên kết (cặp electron tự do) xung quanh nguyên tử trung tâm sẽ định hướng trong không gian sao cho **lực đẩy giữa chúng là nhỏ nhất**."));
        children.push(NoteBox("Thứ tự độ lớn của lực đẩy giữa các cặp electron", [
          "**Lực đẩy: (Cặp e tự do – Cặp e tự do) > (Cặp e tự do – Cặp e liên kết) > (Cặp e liên kết – Cặp e liên kết)**",
          "Do cặp electron tự do chỉ bị giữ bởi 1 hạt nhân nguyên tử trung tâm nên đám mây electron của nó chiếm khoảng không gian lớn hơn, đẩy các liên kết ép sát vào nhau, làm **giảm góc liên kết**."
        ]));

        children.push(DataTable(
          ["Công thức VSEPR", "Dạng hình học phân tử", "Góc liên kết lý thuyết", "Ví dụ thực tế"],
          [
            ["AX₂ (0 cặp e tự do)", "Đường thẳng (Linear)", "180°", "BeCl₂, CO₂, CS₂"],
            ["AX₃ (0 cặp e tự do)", "Tam giác phẳng (Trigonal planar)", "120°", "BF₃, BCl₃, SO₃"],
            ["AX₂E (1 cặp e tự do)", "Dạng góc/Gấp khúc (Bent)", "< 120° (≈ 119°)", "SO₂, O₃, NO₂⁻"],
            ["AX₄ (0 cặp e tự do)", "Tứ diện đều (Tetrahedral)", "109,5°", "CH₄, CCl₄, NH₄⁺, SiF₄"],
            ["AX₃E (1 cặp e tự do)", "Chóp tam giác (Trigonal pyramidal)", "< 109,5° (≈ 107°)", "NH₃, PCl₃, H₃O⁺"],
            ["AX₂E₂ (2 cặp e tự do)", "Dạng góc/Chữ V (Bent)", "< 109,5° (≈ 104,5°)", "H₂O, H₂S, OF₂"]
          ]
        ));
        children.push(spacer());

        children.push(Section("III. Thuyết Lai hoá Orbital nguyên tử (AO)"));
        children.push(P("Lai hóa orbital là sự tổ hợp tuyến tính các orbital nguyên tử khác nhau trong cùng một nguyên tử để tạo thành các **orbital lai hóa hoàn toàn giống nhau về hình dạng và mức năng lượng**, định hướng đối xứng trong không gian để tạo liên kết bền hơn:"));
        children.push(...Bullet([
          "**Lai hóa sp:** Tổ hợp 1 AO s + 1 AO p → 2 AO lai hóa sp hướng thẳng góc **180°** (phân tử dạng thẳng: C₂H₂, BeH₂, CO₂).",
          "**Lai hóa sp²:** Tổ hợp 1 AO s + 2 AO p → 3 AO lai hóa sp² hướng về 3 đỉnh tam giác đều **120°** (phân tử dạng tam giác phẳng: C₂H₄, BF₃, SO₃).",
          "**Lai hóa sp³:** Tổ hợp 1 AO s + 3 AO p → 4 AO lai hóa sp³ hướng về 4 đỉnh hình tứ diện đều **109,5°** (phân tử: CH₄, CCl₄, NH₃, H₂O)."
        ]));

        children.push(Example("Ví dụ mẫu: Giải thích dạng hình học và góc liên kết của phân tử H2O và NH3", [
          "Đề bài: Giải thích vì sao nguyên tử trung tâm N trong NH₃ và O trong H₂O đều ở trạng thái lai hóa sp³ nhưng góc liên kết H–N–H là 107° và H–O–H là 104,5° (nhỏ hơn góc tứ diện chuẩn 109,5°)?",
          "Lời giải từng bước:",
          "1. Trong phân tử CH₄: C lai hóa sp³, cả 4 orbital lai hóa đều liên kết với 4 nguyên tử H (không có cặp e tự do) => Góc H–C–H = 109,5°.",
          "2. Trong phân tử NH₃: N có 5 electron hóa trị, tạo 3 liên kết N–H và còn **1 cặp electron tự do** (dạng AX₃E). Lực đẩy giữa cặp electron tự do và cặp electron liên kết mạnh hơn lực đẩy giữa các cặp liên kết, đẩy 3 liên kết N–H ép lại gần nhau => Góc H–N–H co lại còn **107°**.",
          "3. Trong phân tử H₂O: O có 6 electron hóa trị, tạo 2 liên kết O–H và còn **2 cặp electron tự do** (dạng AX₂E₂). Lực đẩy giữa 2 cặp electron tự do cực mạnh, ép góc liên kết H–O–H co lại sâu hơn, chỉ còn **104,5°**."
        ]));

        // BÀI 2
        children.push(Bai("Bài 2. Phản ứng hạt nhân"));
        children.push(Section("I. Phóng xạ tự nhiên và nhân tạo"));
        children.push(P("**Hiện tượng phóng xạ:** Là quá trình hạt nhân nguyên tử không bền tự động phân rã, biến đổi thành hạt nhân khác đồng thời phát ra các bức xạ ion hóa:"));
        children.push(DataTable(
          ["Loại tia phóng xạ", "Bản chất hạt", "Điện tích và Khối lượng", "Khả năng đâm xuyên"],
          [
            ["Tia alpha (α)", "Hạt nhân nguyên tử He (⁴₂He)", "Điện tích +2, khối lượng ≈ 4 amu", "Bị chặn bởi một tờ giấy mỏng, đi vài cm trong không khí"],
            ["Tia beta trừ (β⁻)", "Dòng electron tốc độ cao (⁰₋₁e)", "Điện tích –1, khối lượng ≈ 0,00055 amu", "Đi xuyên qua giấy, bị chặn bởi tấm nhôm vài mm"],
            ["Tia beta cộng (β⁺)", "Dòng positron (⁰₊₁e - phản hạt)", "Điện tích +1, khối lượng bằng electron", "Bị triệt tiêu khi va chạm với electron tạo tia gamma"],
            ["Tia gamma (γ)", "Sóng điện từ năng lượng cực cao", "Không mang điện tích, không khối lượng", "Đâm xuyên cực mạnh, chỉ bị cản bởi lớp chì dày hoặc bê tông"]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Hai định luật bảo toàn trong phản ứng hạt nhân"));
        children.push(P("Trong mọi phản ứng hạt nhân tổng quát: **ᴬ¹_Z₁X  +  ᴬ²_Z₂Y  →  ᴬ³_Z₃C  +  ᴬ⁴_Z₄D**, luôn luôn tuân theo:"));
        children.push(Eq("**1. Bảo toàn số khối (A):**  A₁  +  A₂  =  A₃  +  A₄"));
        children.push(Eq("**2. Bảo toàn điện tích (Z):**  Z₁  +  Z₂  =  Z₃  +  Z₄"));
        children.push(NoteBox("Lưu ý sống còn về phản ứng hạt nhân", [
          "Phản ứng hạt nhân **KHÔNG bảo toàn khối lượng nghỉ** (do có độ hụt khối Δm chuyển thành năng lượng hạt nhân theo hệ thức Einstein: E = mc²).",
          "Phản ứng hạt nhân **KHÔNG bảo toàn số nguyên tử của các nguyên tố** (nguyên tố này biến đổi hoàn toàn thành nguyên tố khác), khác biệt căn bản với phản ứng hóa học thông thường."
        ]));

        children.push(Section("III. Định luật phóng xạ và Định tuổi bằng Carbon-14"));
        children.push(P("Quá trình phân rã phóng xạ tuân theo quy luật động học bậc 1:"));
        children.push(Eq("**N_t = N₀ × (1/2)^(t / t₁/₂)**  hoặc  **N_t = N₀ × e^(–λ.t)**"));
        children.push(P("Trong đó: N₀ là số hạt nhân ban đầu; N_t là số hạt nhân còn lại tại thời điểm t; t₁/₂ là **chu kì bán rã** (thời gian để một nửa số hạt nhân bị phân rã); hằng số phân rã λ = ln(2) / t₁/₂ ≈ 0,693 / t₁/₂."));

        children.push(Example("Ví dụ mẫu (Bài toán định tuổi cổ vật bằng đồng vị Carbon-14)", [
          "Đề bài: Trong khí quyển, tỉ lệ đồng vị phóng xạ ¹⁴C (t₁/₂ = 5730 năm) trên tổng lượng carbon là không đổi do được tạo thành liên tục từ tia vũ trụ. Khi sinh vật chết đi, quá trình trao đổi carbon dừng lại và lượng ¹⁴C giảm dần do phân rã. Một mẫu gỗ cổ được khai quật tại một di chỉ khảo cổ có hoạt độ phóng xạ của ¹⁴C chỉ bằng 25% so với mẫu gỗ tươi cùng loại. Hãy xác định niên đại của mẫu gỗ cổ đó.",
          "Lời giải từng bước:",
          "1. Tỉ lệ số hạt còn lại so với ban đầu: N_t / N₀ = 25% = 0,25 = (1/2)².",
          "2. Theo định luật phóng xạ: N_t / N₀ = (1/2)^(t / t₁/₂).",
          "   Suy ra: t / t₁/₂ = 2  =>  t = 2 × t₁/₂ = 2 × 5730 = **11 460 năm**.",
          "Kết luận: Cây gỗ này đã bị đốn hạ cách đây khoảng 11 460 năm (thuộc thời kỳ đồ đá mới)."
        ]));

        // BÀI 3
        children.push(Bai("Bài 3. Năng lượng hoạt hoá của phản ứng hoá học"));
        children.push(Section("I. Khái niệm và Ý nghĩa Năng lượng hoạt hóa (Ea)"));
        children.push(P("**Năng lượng hoạt hóa (Ea):** Là năng lượng tối thiểu mà các tiểu phân chất phản ứng phải sở hữu để khi va chạm với nhau có thể vượt qua rào cản năng lượng của trạng thái chuyển tiếp và tạo thành sản phẩm."));
        children.push(...Bullet([
          "Giá trị Ea càng lớn → rào cản năng lượng càng cao → số phân tử vượt qua rào cản càng ít → tốc độ phản ứng càng chậm.",
          "Giá trị Ea càng nhỏ → phản ứng xảy ra càng nhanh và dễ dàng ở nhiệt độ thường."
        ]));

        children.push(Section("II. Phương trình Arrhenius"));
        children.push(P("Mối quan hệ định lượng giữa hằng số tốc độ phản ứng k, năng lượng hoạt hóa Ea và nhiệt độ tuyệt đối T (Kelvin) được mô tả bởi phương trình Svante Arrhenius:"));
        children.push(Eq("**k = A × e^(–Ea / RT)**"));
        children.push(P("Dạng logarit tự nhiên so sánh tốc độ ở 2 nhiệt độ khác nhau:"));
        children.push(Eq("**ln(k₂ / k₁) = (Ea / R) × [(1 / T₁) – (1 / T₂)]**"));
        children.push(P("Trong đó: R = 8,314 J/(mol.K); T là nhiệt độ tuyệt đối (K = °C + 273); A là thừa số tần số va chạm."));

        children.push(Example("Ví dụ mẫu: Tính năng lượng hoạt hóa từ thực nghiệm tốc độ phản ứng", [
          "Đề bài: Một phản ứng phân hủy thuốc có hằng số tốc độ k₁ = 0,02 s⁻¹ ở 25 °C (298 K) và k₂ = 0,08 s⁻¹ ở 35 °C (308 K). Hãy tính năng lượng hoạt hóa Ea của phản ứng.",
          "Lời giải từng bước:",
          "1. Tính tỉ số tốc độ: k₂ / k₁ = 0,08 / 0,02 = 4  =>  ln(4) ≈ 1,3863.",
          "2. Hiệu nhiệt độ nghịch đảo: (1/T₁) – (1/T₂) = (1/298) – (1/308) = (308 – 298) / (298 × 308) = 10 / 91784 ≈ 1,0895 × 10⁻⁴ K⁻¹.",
          "3. Áp dụng công thức: Ea = [R × ln(k₂ / k₁)] / [(1/T₁) – (1/T₂)]",
          "   Ea = [8,314 × 1,3863] / (1,0895 × 10⁻⁴) ≈ 11,526 / (1,0895 × 10⁻⁴) ≈ **105 790 J/mol** = **105,8 kJ/mol**.",
          "Ý nghĩa thực tiễn: Giúp các dược sĩ tính toán thời hạn bảo quản thuốc (hạn sử dụng) ở nhiệt độ phòng và điều kiện mát."
        ]));

        // BÀI 4
        children.push(Bai("Bài 4. Entropy và biến thiên năng lượng tự do Gibbs"));
        children.push(Section("I. Đại lượng Entropy (S)"));
        children.push(P("**Entropy (S):** Là đại lượng nhiệt động học đặc trưng cho **mức độ hỗn loạn (mất trật tự)** của các tiểu phân cấu tạo nên hệ (đơn vị: J/(mol.K))."));
        children.push(...Bullet([
          "Quy luật biến thiên trạng thái: **S(rắn) < S(lỏng) << S(khí)**. Khi chất chuyển từ rắn sang lỏng và khí, các phân tử chuyển động tự do hơn nên Entropy tăng mạnh.",
          "Quá trình hòa tan chất rắn vào nước làm tăng độ mất trật tự của mạng tinh thể: **ΔS > 0**.",
          "Phản ứng sinh ra nhiều phân tử khí hơn: **ΔrS° > 0** (Ví dụ: CaCO₃ (s) → CaO (s) + CO₂ (g))."
        ]));

        children.push(Section("II. Năng lượng tự do Gibbs và Tiêu chuẩn tự phát"));
        children.push(P("Biến thiên năng lượng tự do Gibbs (**ΔrG**) kết hợp cả hai yếu tố: xu hướng giảm enthalpy (tỏa nhiệt, ΔH < 0) và xu hướng tăng entropy (tăng độ hỗn loạn, ΔS > 0):"));
        children.push(Eq("**ΔrG = ΔrH – T × ΔrS**  (ở điều kiện chuẩn: **ΔrG°₂₉₈ = ΔrH°₂₉₈ – T × ΔrS°₂₉₈**)"));
        children.push(DataTable(
          ["Giá trị của ΔrG", "Ý nghĩa nhiệt động học", "Khả năng tự diễn biến của phản ứng"],
          [
            ["ΔrG < 0 (âm)", "Hệ có khả năng sinh công có ích", "Phản ứng **tự diễn biến** (tự phát xảy ra)."],
            ["ΔrG = 0", "Hệ ở trạng thái cân bằng", "Phản ứng ở **trạng thái cân bằng động**."],
            ["ΔrG > 0 (dương)", "Hệ cần cung cấp công từ ngoài", "Phản ứng **không thể tự phát** (chiều ngược lại tự phát)."]
          ]
        ));
        children.push(spacer());

        children.push(Example("Ví dụ mẫu (Bài toán thực tiễn: Xác định nhiệt độ nung vôi tự phát)", [
          "Đề bài: Phản ứng nung đá vôi: CaCO₃ (s) → CaO (s) + CO₂ (g).",
          "Biết ở điều kiện chuẩn: ΔrH°₂₉₈ = +178,5 kJ/mol = +178 500 J/mol (thu nhiệt); ΔrS°₂₉₈ = +160,5 J/(mol.K).",
          "a) Ở nhiệt độ phòng 25 °C (298 K), phản ứng nung vôi có tự diễn biến được không?",
          "b) Để phản ứng bắt đầu tự diễn biến phân hủy đá vôi thì cần nung lò đến nhiệt độ tối thiểu là bao nhiêu °C?",
          "Lời giải từng bước:",
          "a) Ở 298 K: ΔrG°₂₉₈ = ΔrH°₂₉₈ – T.ΔrS°₂₉₈ = 178 500 – (298 × 160,5) = 178 500 – 47 829 = **+130 671 J/mol > 0**.",
          "   Vì ΔrG° > 0 nên ở nhiệt độ thường đá vôi cực kỳ bền vững, **hoàn toàn không tự phân hủy**.",
          "b) Để phản ứng bắt đầu tự phát: ΔrG < 0  <=>  ΔrH – T.ΔrS < 0  <=>  T > ΔrH / ΔrS",
          "   T > 178 500 / 160,5 ≈ **1112,1 K**.",
          "   Chuyển sang độ C: t = 1112,1 – 273 ≈ **839 °C**.",
          "Kết luận: Trong thực tế sản xuất vôi tôi công nghiệp, người ta luôn duy trì nhiệt độ lò nung từ **900 °C – 1000 °C** để phản ứng phân hủy diễn ra nhanh chóng và hoàn toàn."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 1", [
          { q: "Vì sao các phản ứng thu nhiệt (ΔH > 0) vẫn có thể tự xảy ra ở nhiệt độ cao?", a: "Vì ở nhiệt độ cao, đại lượng T.ΔS trở nên rất lớn; nếu phản ứng có ΔS > 0 (tăng độ hỗn loạn) thì số trừ T.ΔS sẽ vượt qua ΔH, làm cho ΔG = ΔH – T.ΔS mang dấu âm, phản ứng tự phát xảy ra." },
          { q: "Viết phương trình hạt nhân: Phóng xạ alpha của nguyên tử Uranium-238 (²³⁸₉₂U) sinh ra hạt nhân X. Tìm X.", a: "Phương trình: ²³⁸₉₂U → ⁴₂He + ᴬ_ZX. Bảo toàn A: 238 = 4 + A => A = 234; bảo toàn Z: 92 = 2 + Z => Z = 90 (Thorium - Th). Hạt nhân con là ²³⁴₉₀Th." }
        ]));

        return children;
      }
    },
    {
      id: "cd10_p2",
      label: "Chuyên đề 2: Hoá học trong việc phòng chống cháy, nổ (Bài 5, 6, 7, 8)",
      desc: "Tam giác lửa, phản ứng cháy và nổ; Điểm chớp cháy, nhiệt độ tự bốc cháy, giới hạn nổ; Động học và nhiệt hóa phản ứng cháy; Nguyên tắc chữa cháy, bình cứu hỏa và kỹ năng thoát nạn.",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 2: HOÁ HỌC TRONG VIỆC PHÒNG CHỐNG CHÁY, NỔ"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Kỹ năng bảo vệ tính mạng", [
          "Cháy, nổ là hiểm họa khốc liệt hàng đầu trong đời sống đô thị và sản xuất công nghiệp, gây thiệt hại nghiêm trọng về người và tài sản hàng năm.",
          "Hiểu biết hóa học về **tam giác lửa, điểm chớp cháy, giới hạn nổ LEL/UEL** giúp mỗi người nhận diện chính xác nguồn nguy hiểm, chủ động phòng ngừa rò rỉ khí gas, chập điện và ngộ độc khí CO.",
          "Nắm vững **nguyên lý dập lửa và phân loại bình chữa cháy** (bình bột ABC, bình bọt Foam, bình khí CO2) trang bị kỹ năng thoát nạn và xử lý tình huống khẩn cấp khoa học, an toàn tuyệt đối."
        ]));
        children.push(spacer());

        // BÀI 5
        children.push(Bai("Bài 5. Sơ lược về phản ứng cháy, nổ"));
        children.push(Section("I. Khái niệm và Đặc điểm của phản ứng cháy"));
        children.push(P("**Phản ứng cháy:** Là phản ứng oxi hoá – khử giữa chất cháy và chất oxi hoá, toả nhiều nhiệt và phát ra ánh sáng."));
        children.push(...Bullet([
          "**Tam giác cháy:** Cần hội tụ đủ 3 yếu tố: **Chất cháy** (than, củi, xăng, gas...), **Chất oxi hóa** (thường là O₂ trong không khí) và **Nguồn nhiệt khơi mào** (tia lửa, ngọn lửa, ma sát).",
          "Nếu thiếu bất kì một yếu tố nào trong 3 yếu tố trên thì đám cháy không thể hình thành hoặc sẽ bị dập tắt ngay lập tức."
        ]));

        children.push(Section("II. Phân loại phản ứng nổ"));
        children.push(DataTable(
          ["Loại phản ứng nổ", "Bản chất vật lí / hóa học", "Đặc điểm nhận diện", "Ví dụ thực tế"],
          [
            ["Nổ vật lí", "Áp suất chất khí/hơi tăng đột ngột vượt quá giới hạn chịu đựng của vỏ bọc", "Không có sự biến đổi hóa học, không có liên kết hóa học mới hình thành", "Nổ săm lốp xe khi trời nắng, nổ nồi áp suất/nồi hơi, nổ bóng bay"],
            ["Nổ hóa học", "Phản ứng hóa học diễn ra với tốc độ cực nhanh, tỏa nhiệt khổng lồ và sinh lượng thể tích khí rất lớn trong khoảnh khắc", "Có sự biến đổi chất sâu sắc, kèm sóng xung kích và tiếng nổ dữ dội", "Nổ thuốc súng đen, nổ hỗn hợp khí gas và không khí, nổ thuốc nổ TNT, nổ bụi mịn than/gỗ"]
          ]
        ));
        children.push(spacer());

        children.push(Section("III. Hiện tượng nổ bụi và Khí độc đám cháy"));
        children.push(P("**Nổ bụi:** Khi các chất rắn dễ cháy (bột than, bột mì, bột ngũ cốc, bột nhôm, bụi gỗ) lơ lửng trong không khí với mật độ đủ lớn, diện tích tiếp xúc với oxygen tăng lên hàng triệu lần. Khi gặp nguồn lửa, phản ứng cháy lan truyền gần như tức thời, sinh nhiệt và áp suất nổ cực lớn."));
        children.push(NoteBox("Khí độc nguy hiểm nhất trong đám cháy", [
          "**Khí CO (Carbon monoxide):** Sinh ra do sự cháy không hoàn toàn trong phòng kín thiếu O₂. Khí không màu, không mùi, kết hợp với Hemoglobin trong hồng cầu mạnh gấp 200–250 lần so với O₂, làm hồng cầu mất khả năng vận chuyển oxy, gây bất tỉnh trong vài chục giây và tử vong do ngạt thở mô bào.",
          "**Khí HCN (Hydro cyanide):** Sinh ra từ sự cháy của nhựa polymer tổng hợp, đệm mút, tơ sợi polyurethane, ức chế enzyme hô hấp tế bào cực độc."
        ]));

        // BÀI 6
        children.push(Bai("Bài 6. Điểm chớp cháy · Nhiệt độ ngọn lửa · Nhiệt độ tự bốc cháy"));
        children.push(Section("I. Các mốc nhiệt độ đặc trưng"));
        children.push(...Bullet([
          "**1. Điểm chớp cháy (Flash point):** Là nhiệt độ thấp nhất (ở 1 atm) mà hơi của chất lỏng tạo với không khí hỗn hợp có thể bốc cháy lóe lên rồi tắt ngay khi gặp ngọn lửa ngoài.",
          "**2. Nhiệt độ bốc cháy (Fire point):** Nhiệt độ mà chất lỏng tiếp tục duy trì sự cháy ít nhất 5 giây sau khi bắt lửa.",
          "**3. Nhiệt độ tự bốc cháy (Auto-ignition temperature):** Nhiệt độ thấp nhất mà chất tự bắt cháy trong không khí **mà KHÔNG cần nguồn lửa khơi mào**."
        ]));

        children.push(DataTable(
          ["Nhiên liệu / Dung môi", "Điểm chớp cháy", "Nhiệt độ tự bốc cháy", "Mức độ nguy hiểm ở nhiệt độ phòng (25 °C)"],
          [
            ["Xăng (Gasoline)", "–43 °C", "≈ 280 °C", "Cực kỳ nguy hiểm! Hơi xăng luôn bay hơi tạo hỗn hợp nổ ở nhiệt độ thường."],
            ["Ethanol (Cồn 96°)", "+13 °C", "≈ 365 °C", "Rất nguy hiểm, dễ bén lửa khi tiếp xúc gần tia lửa điện."],
            ["Dầu hỏa (Kerosene)", "+38 °C đến +45 °C", "≈ 220 °C", "Ít nguy hiểm ở nhiệt độ phòng, nguy hiểm khi đun nóng."],
            ["Dầu Diesel (DO)", "+52 °C đến +65 °C", "≈ 210 °C", "An toàn ở nhiệt độ thường, chỉ cháy khi phun sương áp suất cao."]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Giới hạn nổ của hỗn hợp khí (LEL và UEL)"));
        children.push(P("Hỗn hợp hơi nhiên liệu hoặc khí gas với không khí chỉ có thể bốc nổ khi nồng độ nằm trong một khoảng xác định gọi là **giới hạn nổ** (tính theo % thể tích trong không khí):"));
        children.push(...Bullet([
          "**LEL (Lower Explosive Limit):** Giới hạn nổ dưới — nồng độ nhiên liệu tối thiểu để nổ (dưới ngưỡng này hỗn hợp quá 'nghèo' nhiên liệu, không nổ được).",
          "**UEL (Upper Explosive Limit):** Giới hạn nổ trên — nồng độ nhiên liệu tối đa để nổ (trên ngưỡng này hỗn hợp quá 'giàu' nhiên liệu, thiếu O₂ để nổ).",
          "Ví dụ: Khí methane CH₄ có LEL = 5% và UEL = 15%. Khi nồng độ CH₄ trong hầm lò từ 5% đến 15%, gặp tia lửa sẽ nổ sập hầm lò."
        ]));

        // BÀI 7
        children.push(Bai("Bài 7. Hoá học về phản ứng cháy, nổ"));
        children.push(Section("I. Cơ chế gốc tự do chuỗi của phản ứng cháy"));
        children.push(P("Phản ứng cháy hydrocacbon không xảy ra qua một bước va chạm đơn giản mà theo **cơ chế chuỗi gốc tự do** qua 3 giai đoạn:"));
        children.push(...Bullet([
          "**1. Khơi mào (Initiation):** Nguồn nhiệt bẻ gãy liên kết tạo các gốc tự do mang electron độc thân: RH + O₂ → R• + HOO•.",
          "**2. Phát triển mạch (Propagation):** Các gốc tự do phản ứng dây chuyền sinh sôi cực nhanh: R• + O₂ → ROO•; H• + O₂ → •OH + •O• (phản ứng phân nhánh mạch làm tốc độ bùng nổ theo cấp số nhân).",
          "**3. Đứt mạch (Termination):** Các gốc tự do kết hợp với nhau hoặc va chạm vào thành bình/chất ức chế làm triệt tiêu gốc tự do."
        ]));

        children.push(Example("Ví dụ mẫu (Bài toán tính lượng không khí và nhiệt lượng sinh ra khi cháy gas)", [
          "Đề bài: Khí gas sinh hoạt gia đình chứa hỗn hợp propan (C3H8) và butan (C4H10) theo tỉ lệ mol 1:1. Một bình gas 12 kg được dùng để đun nấu.",
          "Biết nhiệt đốt cháy hoàn toàn: ΔrH°(C3H8) = –2220 kJ/mol; ΔrH°(C4H10) = –2878 kJ/mol; không khí chứa 21% O₂ về thể tích (ở điều kiện chuẩn 25 °C, 1 bar thì 1 mol khí = 24,79 L).",
          "a) Tính nhiệt lượng tỏa ra khi đốt cháy hết bình gas 12 kg.",
          "b) Tính thể tích không khí tối thiểu cần cung cấp để bình gas cháy hoàn toàn.",
          "Lời giải từng bước:",
          "1. Gọi số mol C3H8 là x thì số mol C4H10 là x. Khối lượng bình gas: m = 44x + 58x = 102x = 12 000 g  =>  x ≈ 117,65 mol.",
          "2. Tổng nhiệt lượng tỏa ra khi đốt cháy: Q = 117,65 × (2220 + 2878) = 117,65 × 5098 = **599 779 kJ** (khoảng 600 triệu Joule).",
          "3. Số mol O₂ cần dùng:",
          "   C3H8 + 5O2 → 3CO2 + 4H2O  =>  n(O₂) = 5 × 117,65 = 588,25 mol.",
          "   C4H10 + 6,5O2 → 4CO2 + 5H2O  =>  n(O₂) = 6,5 × 117,65 = 764,725 mol.",
          "   Tổng mol O₂ = 588,25 + 764,725 = 1352,975 mol.",
          "4. Thể tích không khí tối thiểu cần thiết: V(kk) = (1352,975 × 24,79) / 0,21 ≈ **159 715 L** = **159,7 m³**.",
          "Ý nghĩa thực tiễn: Gian bếp đun gas bắt buộc phải thông thoáng khí; nếu đóng kín cửa phòng bếp nhỏ hẹp, lượng O2 sẽ cạn kiệt nhanh chóng sinh khí CO chết người."
        ]));

        // BÀI 8
        children.push(Bai("Bài 8. Phòng chống cháy, nổ"));
        children.push(Section("I. Bốn nguyên tắc dập tắt đám cháy"));
        children.push(...Bullet([
          "**1. Làm lạnh:** Hạ nhiệt độ vùng cháy xuống dưới nhiệt độ bốc cháy (dùng nước phun làm nguội).",
          "**2. Cách ly:** Cách ly chất cháy khỏi chất oxi hóa (phủ cát, phủ chăn chiên ướt, phun bọt foam).",
          "**3. Làm loãng:** Giảm nồng độ chất cháy hoặc O₂ xuống dưới giới hạn cháy (thổi khí trơ CO₂, N₂, hơi nước).",
          "**4. Ức chế hóa học:** Dùng hóa chất phá vỡ chuỗi gốc tự do của phản ứng cháy (bình bột chữa cháy ABC, chất ức chế halogen hóa)."
        ]));

        children.push(Section("II. Phân loại và Cách sử dụng Bình chữa cháy"));
        children.push(DataTable(
          ["Loại bình chữa cháy", "Chất chữa cháy bên trong", "Cơ chế dập lửa", "Phạm vi sử dụng & Chống chỉ định"],
          [
            ["Bình bột (BC hoặc ABC)", "Bột NaHCO₃ hoặc (NH₄)₂HPO₄ kết hợp khí đẩy N₂", "Cách ly và ức chế phản ứng gốc tự do chuỗi", "Chữa cháy chất rắn (A), lỏng (B), khí (C), thiết bị điện hạ thế. Không xịt vào vi mạch điện tử tinh vi vì bột muối gây ăn mòn."],
            ["Bình khí CO₂", "Khí CO₂ hóa lỏng nén ở áp suất cao (–79 °C khi phun)", "Làm lạnh cực nhanh và làm loãng nồng độ oxygen", "Chữa cháy buồng máy, vi mạch điện tử, văn phòng. CẤM dùng cho đám cháy kim loại kiềm, Mg (Mg + CO₂ → MgO + C cháy mạnh hơn)."],
            ["Bình bọt Foam", "Hỗn hợp bọt xà phòng và nước", "Tạo màng bọt nổi phủ kín mặt thoáng chất lỏng, ngăn O₂", "Chuyên dụng cho kho xăng dầu, sơn, dung môi hữu cơ. CẤM dùng cho đám cháy thiết bị điện còn mang dòng điện (gây giật điện)."]
          ]
        ));
        children.push(spacer());

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 2", [
          { q: "Vì sao tuyệt đối không được dùng nước để dập đám cháy xăng dầu hoặc chảo dầu ăn đang sôi trên bếp?", a: "Vì xăng dầu nhẹ hơn nước và không tan trong nước; khi đổ nước vào, nước nặng hơn chìm xuống đáy biến thành hơi nước sôi đột ngột, bắn tung tóe các giọt dầu cháy ra xung quanh, làm ngọn lửa bùng phát lan rộng dữ dội hơn." },
          { q: "Khi phát hiện rò rỉ khí gas trong phòng kín, hành động đầu tiên cần làm là gì?", a: "Tuyệt đối không bật/tắt bất kì công tắc điện hay quẹt lửa nào (kể cả đèn pin hay điện thoại). Lập tức khóa van bình gas, nhẹ nhàng mở toang tất cả các cửa sổ để thông gió tự nhiên làm loãng khí gas ra ngoài." }
        ]));

        return children;
      }
    },
    {
      id: "cd10_p3",
      label: "Chuyên đề 3: Thực hành Hoá học và Công nghệ thông tin (Bài 9, 10, 11)",
      desc: "Phần mềm mô phỏng hóa học ChemSketch, Avogadro; Vẽ cấu trúc phân tử 2D, chuyển đổi mô hình 3D; Thí nghiệm ảo PhET, ChemLab; Tính toán tham số cấu trúc, độ dài liên kết và năng lượng phản ứng.",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 3: THỰC HÀNH HOÁ HỌC VÀ CÔNG NGHỆ THÔNG TIN"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Năng lực số hóa học", [
          "Hóa học tính toán (Computational Chemistry) và mô phỏng phân tử là **công cụ nghiên cứu hiện đại hàng đầu thế giới**, giúp rút ngắn thời gian thiết kế dược phẩm mới từ hàng chục năm xuống còn vài tháng.",
          "Sử dụng thành thạo các phần mềm đồ họa hóa học 2D/3D (ChemSketch, ChemDraw, Avogadro) giúp học sinh trực quan hóa thế giới vi mô, hiểu sâu sắc bản chất không gian của liên kết và tự tin ứng dụng CNTT vào nghiên cứu khoa học."
        ]));
        children.push(spacer());

        children.push(Bai("Bài 9. Thực hành vẽ cấu trúc phân tử"));
        children.push(Section("I. Các phần mềm đồ họa hóa học phổ biến"));
        children.push(...Bullet([
          "**ACD/ChemSketch:** Phần mềm miễn phí kinh điển dùng vẽ công thức cấu tạo 2D, gọi tên IUPAC tự động, chuyển đổi mô hình 3D Viewer.",
          "**Avogadro:** Phần mềm mã nguồn mở chuyên sâu về mô phỏng phân tử 3D, tối ưu hóa cấu trúc hình học (Geometry Optimization) và đo đạc thông số liên kết.",
          "**MolView (molview.org):** Ứng dụng web trực tuyến không cần cài đặt, kết nối cơ sở dữ liệu hóa học PubChem và RCSB Protein Data Bank."
        ]));

        children.push(Section("II. Quy trình xây dựng và tối ưu hóa phân tử 3D"));
        children.push(DataTable(
          ["Bước thực hiện", "Nội dung thao tác kĩ thuật", "Ý nghĩa khoa học"],
          [
            ["Bước 1: Vẽ khung 2D", "Dùng công cụ Draw Normal, gắn các liên kết đơn, đôi, ba và heteroatom (O, N, Cl)", "Xác định đúng thứ tự liên kết và hóa trị các nguyên tử"],
            ["Bước 2: Tự động gắn H", "Sử dụng tính năng Add Hydrogens để hoàn thiện hóa trị", "Đảm bảo đúng công thức phân tử và electron hóa trị"],
            ["Bước 3: Tối ưu 3D (3D Optimization)", "Chạy thuật toán cơ học phân tử (MMFF94 hoặc UFF) tối thiểu hóa năng lượng thế", "Đưa phân tử về dạng cấu hình không gian bền vững nhất trong tự nhiên"],
            ["Bước 4: Xuất dữ liệu", "Xuất file định dạng .mol, .pdb, .cif hoặc ảnh vector", "Phục vụ in ấn, báo cáo khoa học hoặc tính toán lượng tử"]
          ]
        ));
        children.push(spacer());

        children.push(Bai("Bài 10. Thực hành thí nghiệm hoá học ảo"));
        children.push(Section("I. Phòng thí nghiệm ảo (Virtual Lab)"));
        children.push(P("Phòng thí nghiệm ảo giúp mô phỏng chân thực các thí nghiệm nguy hiểm, độc hại hoặc phản ứng quá nhanh/quá chậm mà phòng thí nghiệm trường phổ thông khó thực hiện (như phản ứng kim loại kiềm với nước nổ mạnh, đo pH liên tục, cân bằng hóa học)."));
        children.push(...Bullet([
          "**PhET Interactive Simulations (Đại học Colorado):** Mô phỏng trực quan tương tác phân tử, dung dịch acid–base, độ tan của muối, khuếch tán khí.",
          "**ChemLab (Model ChemLab):** Mô phỏng quy trình chuẩn độ thể tích, đo nhiệt lượng phản ứng nhiệt kế calorimetric."
        ]));

        children.push(Bai("Bài 11. Thực hành tính tham số cấu trúc và năng lượng"));
        children.push(Section("I. Đo đạc tham số cấu trúc vi mô"));
        children.push(...Bullet([
          "**Độ dài liên kết (Bond length):** Khoảng cách giữa hai hạt nhân nguyên tử liên kết (đơn vị: Ångström, 1 Å = 10⁻¹⁰ m = 0,1 nm hoặc pm).",
          "**Góc liên kết (Bond angle):** Góc tạo bởi hai liên kết xuất phát từ cùng một nguyên tử trung tâm (đơn vị: độ °).",
          "Ví dụ đo đạc trên phần mềm phân tử nước: Độ dài liên kết O–H = 0,96 Å; góc liên kết H–O–H = 104,5° (hoàn toàn khớp với thực nghiệm)."
        ]));

        children.push(Example("Ví dụ mẫu: Ứng dụng Excel tự động hóa tính nhiệt động học ΔG cho nhiều phản ứng", [
          "Đề bài: Hướng dẫn thiết lập bảng tính Excel tính giá trị ΔrG° = ΔrH° – T.ΔrS° tại các nhiệt độ từ 300 K đến 1200 K (bước nhảy 100 K) cho phản ứng phân hủy CaCO₃.",
          "Hướng dẫn kỹ thuật:",
          "1. Cột A: Nhập các giá trị nhiệt độ T (K): 300, 400, ..., 1200.",
          "2. Ô B1 nhập ΔH = 178500 J; Ô B2 nhập ΔS = 160.5 J/K.",
          "3. Cột B tính ΔG (J): Nhập công thức `= $B$1 - A4 * $B$2` và kéo thả cho các hàng tiếp theo.",
          "4. Cột C đánh giá tự phát: Dùng hàm logic `=IF(B4 < 0, \"TỰ PHÁT\", \"KHÔNG TỰ PHÁT\")`.",
          "5. Vẽ đồ thị tán xạ Scatter Plot (X: T, Y: ΔG) cắt trục hoành tại T = 1112 K."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 3", [
          { q: "Mục đích của việc 'Tối ưu hóa hình học' (Geometry Optimization) khi dựng mô hình phân tử 3D là gì?", a: "Để thuật toán tính toán lực đẩy - hút tĩnh điện giữa các hạt nhân và electron, tự động điều chỉnh độ dài và góc liên kết sao cho thế năng của phân tử đạt giá trị cực tiểu (trạng thái bền vững nhất trong thực tế)." }
        ]));

        return children;
      }
    }
  ]
};
