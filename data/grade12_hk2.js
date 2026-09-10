// Dữ liệu lý thuyết chi tiết Hóa học 12 - HK2 chuẩn format Claude docx
module.exports = {
  title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 12 – HỌC KÌ 2",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Nhóm IA, Nhóm IIA, Nước cứng, Kim loại chuyển tiếp & Phức chất",
  parts: [
    {
      id: "hk2_12_p1",
      label: "Phần 1/7: Kim loại nhóm IA (Alkali metals) – Đơn chất & Hợp chất quan trọng (Bài 24, 25)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 7: NGUYÊN TỐ NHÓM IA VÀ NHÓM IIA"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "**Kim loại kiềm (nhóm IA - Li, Na, K)** và hợp chất của chúng là nguyên liệu của công nghiệp xút – clo (sản xuất xà phòng, giấy, chất tẩy rửa), pin lithium-ion cho xe điện và thiết bị di động.",
  "**Muối ăn (NaCl)** là gia vị không thể thiếu của con người, dịch truyền y tế đẳng trương 0,9% và nguyên liệu khởi đầu của hàng trăm hoá chất vô cơ.",
  "**Kim loại kiềm thổ (nhóm IIA - Ca, Mg)** kiến tạo vỏ Trái Đất, san hô, đá vôi, vỏ sò và là khoáng chất xây dựng khung xương, răng của cơ thể sống."
]));
children.push(spacer());

children.push(Bai("Bài 24. Nguyên tố nhóm IA (Kim loại kiềm)"));
children.push(Section("I. Vị trí, cấu tạo nguyên tử nhóm IA"));
children.push(P("Nhóm IA gồm các nguyên tố: **Lithium (Li), Sodium (Na), Potassium (K), Rubidium (Rb), Caesium (Cs)** và Francium (Fr)."));
children.push(...Bullet([
  "Cấu hình electron lớp ngoài cùng: **ns¹** (chỉ có 1 electron hoá trị).",
  "Năng lượng ion hoá thứ nhất (I1) **rất nhỏ** (nhỏ nhất trong mỗi chu kì) → xu hướng nhường 1e rất mạnh: **M → M⁺ + 1e**.",
  "Mạng tinh thể: đều có cấu trúc **lập phương tâm khối** (độ đặc khít chỉ 68%, tương đối xốp)."
]));
children.push(Section("II. Tính chất vật lí"));
children.push(DataTable(
  ["Tính chất", "Đặc điểm của kim loại kiềm", "Nguyên nhân"],
  [
    ["Khối lượng riêng", "Rất nhỏ (nhẹ nhất là Li, D = 0,53 g/cm3; Na, K nổi trên nước)", "Bán kính nguyên tử lớn, cấu trúc tinh thể tương đối rỗng"],
    ["Nhiệt độ nóng chảy", "Rất thấp (Cs nóng chảy ở 28,5 °C)", "Liên kết kim loại yếu do bán kính lớn, chỉ có 1 electron hoá trị tự do"],
    ["Độ cứng", "Rất mềm, có thể cắt dễ dàng bằng dao", "Liên kết kim loại kém bền vững trong mạng tinh thể"]
  ]
));
children.push(spacer());
children.push(Section("III. Tính chất hoá học: Tính khử rất mạnh"));
children.push(P("Kim loại kiềm là những kim loại có **tính khử mạnh nhất**, tính khử tăng dần từ Li đến Cs:"));
children.push(Eq("**Tác dụng với nước (rất mãnh liệt):**  2Na  +  2H₂O  →  2NaOH  +  H₂↑  (toả nhiệt mạnh, nóng chảy thành giọt tròn)"));
children.push(Eq("**Tác dụng với O2:**  4Li + O₂ → 2Li₂O (oxide); 2Na + O₂ →(t°) Na₂O₂ (peroxide); K + O₂ → KO₂ (superoxide)"));
children.push(NoteBox("Bảo quản kim loại kiềm", [
  "Do phản ứng rất mãnh liệt với nước và oxygen trong không khí, kim loại kiềm được **ngâm trong dầu hoả** khan (hoặc đóng kín trong ống chân không)."
]));

children.push(Bai("Bài 25. Một số hợp chất quan trọng của kim loại kiềm"));
children.push(DataTable(
  ["Hợp chất", "Tên gọi", "Tính chất đặc trưng", "Ứng dụng"],
  [
    ["NaOH", "Sodium hydroxide (Xút ăn da)", "Base mạnh, hút ẩm mạnh, tan toả nhiệt", "Sản xuất xà phòng, giấy, tơ nhân tạo, chế biến dầu mỏ"],
    ["NaHCO3", "Sodium hydrogencarbonate (Baking soda)", "Muối lưỡng tính, kém bền nhiệt: 2NaHCO3 →(t°) Na2CO3 + CO2 + H2O", "Bột nở làm bánh, thuốc đau dạ dày (trung hoà bớt acid dịch vị)"],
    ["Na2CO3", "Sodium carbonate (Soda)", "Muối của acid yếu (dung dịch có tính kiềm mạnh)", "Sản xuất thuỷ tinh, xà phòng, chất làm mềm nước cứng"]
  ]
));
children.push(spacer());
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao sodium hydrogencarbonate (NaHCO3) được dùng làm thuốc giảm đau dạ dày do thừa acid?", a: "Vì NaHCO3 phản ứng trung hoà acid hydrochloric trong dạ dày giải phóng khí CO2 không gây hại nếu dùng đúng liều lượng: NaHCO3 + HCl → NaCl + CO2↑ + H2O." }
]));

        return children;
      }
    },
    {
      id: "hk2_12_p2",
      label: "Phần 2/7: Kim loại nhóm IIA – Đơn chất & Hợp chất quan trọng (Đá vôi, Thạch cao) (Bài 26, 27)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 26. Nguyên tố nhóm IIA (Kim loại kiềm thổ)"));
children.push(Section("I. Vị trí, cấu tạo nguyên tử nhóm IIA"));
children.push(P("Nhóm IIA gồm các nguyên tố: **Beryllium (Be), Magnesium (Mg), Calcium (Ca), Strontium (Sr), Barium (Ba)** và Radium (Ra). Cấu hình electron lớp ngoài cùng: **ns²** (2 electron hoá trị)."));
children.push(Section("II. Tính chất vật lí"));
children.push(P("Nhiệt độ nóng chảy, nhiệt độ sôi và độ cứng của kim loại nhóm IIA **cao hơn kim loại nhóm IA** (do có 2 electron hoá trị tham gia liên kết kim loại và mật độ điện tích lớn hơn), nhưng vẫn thuộc loại kim loại nhẹ."));
children.push(Section("III. Tính chất hoá học"));
children.push(P("Kim loại kiềm thổ có **tính khử mạnh** (chỉ sau kim loại kiềm): **M → M²⁺ + 2e**; tính khử tăng dần từ Be đến Ba."));
children.push(Eq("**Tác dụng với nước:** Ca + 2H₂O → Ca(OH)₂ + H₂↑ (Ba, Sr, Ca phản ứng nhanh ở nhiệt độ thường; Mg chỉ phản ứng chậm với nước nóng; Be không phản ứng)"));
children.push(Eq("**Tác dụng với acid:** Mg + 2HCl → MgCl₂ + H₂↑"));

children.push(Bai("Bài 27. Một số hợp chất quan trọng của kim loại kiềm thổ"));
children.push(DataTable(
  ["Hợp chất", "Tên thông thường", "Tính chất", "Ứng dụng"],
  [
    ["Ca(OH)2", "Vôi tôi (nước vôi trong)", "Base mạnh, ít tan trong nước, dung dịch có tính kiềm", "Quét vôi tường, khử chua đất trồng, xử lí nước thải"],
    ["CaCO3", "Đá vôi, đá hoa, phấn", "Bị nhiệt phân ở 900–1000 °C: CaCO3 →(t°) CaO + CO2; tan trong nước có chứa CO2", "Sản xuất xi măng, vôi sống, vật liệu xây dựng"],
    ["CaSO4.2H2O", "Thạch cao sống", "Mất một phần nước ở 160 °C tạo thạch cao nung CaSO4.0,5H2O", "Đúc tượng, bó bột khi gãy xương, phấn viết bảng"]
  ]
));
children.push(spacer());
children.push(Sub("Chu trình đá vôi trong tự nhiên"));
children.push(Eq("**Sự xâm thực núi đá vôi (tạo hang động):**  CaCO₃  +  CO₂  +  H₂O  ⇌  Ca(HCO₃)₂ (tan)"));
children.push(Eq("**Sự hình thành thạch nhũ:**  Ca(HCO₃)₂  →  CaCO₃↓  +  CO₂↑  +  H₂O"));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Giải thích hiện tượng thạch nhũ hình thành trong các hang động núi đá vôi.", a: "Nước mưa hoà tan CO2 chảy qua đá vôi tạo muối Ca(HCO3)2 tan (xâm thực). Khi giọt nước chứa Ca(HCO3)2 nhỏ từ trần hang xuống, CO2 thoát ra và nước bay hơi làm muối bị phân huỷ giải phóng lại CaCO3 rắn tích tụ dần qua hàng nghìn năm tạo thành thạch nhũ." }
]));

        return children;
      }
    },
    {
      id: "hk2_12_p3",
      label: "Phần 3/7: Nước cứng & Phương pháp làm mềm, Nhôm & Hợp chất lưỡng tính (Bài 27B, 28)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 27 (tiếp). Nước cứng và phương pháp làm mềm nước cứng"));
children.push(...Img("hard_water_softening.png", 460, "Phân loại nước cứng và các phương pháp làm mềm nước cứng."));
children.push(Section("I. Khái niệm và phân loại nước cứng"));
children.push(P("**Nước cứng** là nước chứa nhiều ion **Ca²⁺ và Mg²⁺**. Nước chứa ít hoặc không chứa các ion này gọi là nước mềm."));
children.push(DataTable(
  ["Loại nước cứng", "Thành phần anion chứa trong nước", "Cách làm mềm"],
  [
    ["Tạm thời", "Ion HCO3⁻ (chứa Ca(HCO3)2, Mg(HCO3)2)", "Đun sôi, dùng vừa đủ Ca(OH)2, dùng Na2CO3 / Na3PO4"],
    ["Vĩnh cửu", "Ion Cl⁻, SO4²⁻ (chứa CaCl2, MgCl2, CaSO4, MgSO4)", "Dùng hoá chất Na2CO3 / Na3PO4, hoặc trao đổi ion"],
    ["Toàn phần", "Gồm cả tính cứng tạm thời và vĩnh cửu", "Dùng hoá chất Na2CO3 / Na3PO4, hoặc trao đổi ion"]
  ]
));
children.push(spacer());
children.push(Section("II. Tác hại của nước cứng"));
children.push(...Bullet([
  "Gây **đóng cặn** trong nồi hơi, đường ống dẫn nước nóng, ấm đun nước → làm giảm hiệu suất truyền nhiệt, tăng tiêu hao nhiên liệu, dễ gây nổ nồi hơi.",
  "Làm **giảm bọt xà phòng**, tạo cặn kết tủa bám vào sợi vải làm quần áo nhanh mục nát.",
  "Nấu thức ăn làm thức ăn lâu chín, giảm mùi vị trà và cà phê."
]));
children.push(Section("III. Phương pháp làm mềm nước cứng"));
children.push(Sub("1. Phương pháp kết tủa"));
children.push(Eq("**Đun sôi (chỉ làm mềm nước cứng tạm thời):**  Ca(HCO₃)₂  →(t°)  CaCO₃↓  +  CO₂↑  +  H₂O"));
children.push(Eq("**Dùng Na2CO3 / Na3PO4 (làm mềm được TẤT CẢ các loại nước cứng):**  Ca²⁺  +  CO₃²⁻  →  CaCO₃↓"));
children.push(Sub("2. Phương pháp trao đổi ion"));
children.push(P("Cho nước cứng đi qua cột chứa chất dẻo trao đổi ion (cationite). Các ion Ca²⁺ và Mg²⁺ trong nước bị giữ lại trên hạt nhựa và thay thế bằng ion Na⁺ hoặc H⁺ đi vào nước → thu được nước mềm."));

children.push(Bai("Bài 28. Nhôm và hợp chất của nhôm"));
children.push(Section("I. Kim loại Nhôm (Al)"));
children.push(P("Aluminium ở ô 13, nhóm IIIA. Al có màng oxide Al2O3 cực kì mỏng nhưng bền vững bảo vệ bề mặt, ngăn không cho Al phản ứng tiếp với không khí và nước ở nhiệt độ thường."));
children.push(Section("II. Tính chất lưỡng tính của Al2O3 và Al(OH)3"));
children.push(NoteBox("Tính chất lưỡng tính", [
  "Al2O3 và Al(OH)3 là các hợp chất **lưỡng tính**: vừa tan trong dung dịch acid mạnh, vừa tan trong dung dịch base mạnh:",
  "Al(OH)₃  +  3HCl  →  AlCl₃  +  3H₂O",
  "Al(OH)₃  +  NaOH  →  Na[Al(OH)₄] (sodium aluminate, tan)   (hoặc NaAlO2 + 2H2O)"
]));

        return children;
      }
    },
    {
      id: "hk2_12_p4",
      label: "Phần 4/7: Sơ lược kim loại chuyển tiếp dãy thứ nhất & Hợp chất Fe, Cu, Cr (Bài 29, 30)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 8: SƠ LƯỢC VỀ KIM LOẠI CHUYỂN TIẾP DÃY THỨ NHẤT VÀ PHỨC CHẤT"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "**Kim loại chuyển tiếp (Fe, Cu, Cr, Ni, Ti)** là xương sống của công nghiệp luyện kim, chế tạo máy, xây dựng, vũ trụ và điện tử.",
  "**Phức chất** mở ra kỉ nguyên mới của y học hiện đại: thuốc chữa ung thư **cisplatin**, phức chất EDTA giải độc chì, thuỷ ngân trong máu.",
  "Các enzyme thiết yếu duy trì sự sống đều chứa tâm phức chất: **hemoglobin** (chứa phức Fe²⁺ vận chuyển oxygen trong máu), **chlorophyll** (chứa phức Mg²⁺ quang hợp ở cây xanh)."
]));
children.push(spacer());

children.push(Bai("Bài 29. Sơ lược về kim loại chuyển tiếp dãy thứ nhất"));
children.push(Section("I. Đặc điểm cấu hình electron của kim loại chuyển tiếp"));
children.push(P("Kim loại chuyển tiếp dãy thứ nhất gồm 10 nguyên tố từ **Scandium (Sc, Z = 21)** đến **Zinc (Zn, Z = 30)** thuộc chu kì 4. Cấu hình electron nguyên tử tổng quát: **[Ar] 3d¹⁻¹⁰ 4s¹⁻²**."));
children.push(DataTable(
  ["Đặc điểm nổi bật", "Giải thích bản chất khoa học", "Ví dụ"],
  [
    ["Nhiều số oxi hoá khác nhau", "Các phân lớp 3d và 4s có mức năng lượng gần nhau, electron 3d dễ dàng tham gia liên kết", "Mn có số oxi hoá: +2, +3, +4, +6, +7; Fe có +2, +3; Cr có +2, +3, +6"],
    ["Ion và hợp chất có màu sắc phong phú", "Sự chuyển dịch electron giữa các mức d–d hấp thụ một phần ánh sáng nhìn thấy", "Fe²⁺ (xanh nhạt), Fe³⁺ (vàng nâu), Cu²⁺ (xanh lam), CrO4²⁻ (vàng), Cr2O7²⁻ (da cam)"],
    ["Khả năng tạo phức chất mạnh", "Ion kim loại chuyển tiếp có bán kính nhỏ, điện tích lớn và còn nhiều orbital d trống để nhận cặp e", "[Cu(NH3)4]²⁺, [Fe(CN)6]³⁻, [Ag(NH3)2]⁺"]
  ]
));
children.push(spacer());

children.push(Bai("Bài 30. Một số hợp chất của kim loại chuyển tiếp"));
children.push(Section("I. Hợp chất của Sắt (Fe)"));
children.push(...Bullet([
  "**Hợp chất Fe(II):** Vừa có tính oxi hoá vừa có **tính khử** (dễ bị oxi hoá lên Fe(III)):  2FeCl₂ + Cl₂ → 2FeCl₃.",
  "**Hợp chất Fe(III):** Có **tính oxi hoá**:  2FeCl₃ + Cu → 2FeCl₂ + CuCl₂  (dung dịch hoà tan đồng, dùng ăn mòn mạch in điện tử)."
]));
children.push(Section("II. Hợp chất của Chromium (Cr) và sự chuyển dịch cân bằng"));
children.push(P("Trong dung dịch nước, ion chromate (màu vàng) và dichromate (màu da cam) chuyển hoá lẫn nhau theo cân bằng phụ thuộc pH:"));
children.push(Eq("**2CrO₄²⁻ (vàng)  +  2H⁺ (acid)  ⇌  Cr₂O₇²⁻ (da cam)  +  H₂O**"));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Thêm dung dịch NaOH vào dung dịch K2Cr2O7 (màu da cam), hiện tượng gì xảy ra? Giải thích.", a: "Dung dịch chuyển từ màu da cam sang màu vàng chanh, vì ion OH- trung hoà bớt H+, cân bằng chuyển dịch theo chiều nghịch tạo ion CrO4²- có màu vàng." }
]));

        return children;
      }
    },
    {
      id: "hk2_12_p5",
      label: "Phần 5/7: Đại cương về phức chất – Cấu tạo, Phối tử & Dạng hình học (Bài 31)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 31. Đại cương về phức chất"));
children.push(...Img("complex_geometry.png", 460, "Các dạng hình học của phức chất: bát diện, tứ diện, vuông phẳng, thẳng hàng."));
children.push(Section("I. Khái niệm và cấu tạo của phức chất"));
children.push(P("**Phức chất** là hợp chất gồm một **nguyên tử trung tâm** (thường là ion kim loại chuyển tiếp) liên kết phối trí với các **phối tử (ligand)** xung quanh."));
children.push(DataTable(
  ["Thành phần phức chất", "Định nghĩa / Vai trò", "Ví dụ trong phức [Cu(NH3)4]SO4"],
  [
    ["Nguyên tử trung tâm (M)", "Ion hoặc nguyên tử kim loại có orbital trống nhận cặp electron", "Ion Cu²⁺ (nhận 4 cặp electron)"],
    ["Phối tử (L)", "Phân tử hoặc ion có cặp electron tự do cho vào orbital trống", "Phân tử NH3 (nguyên tử N cho cặp e riêng)"],
    ["Số phối trí", "Số liên kết cho–nhận giữa nguyên tử trung tâm với các phối tử", "Bằng 4 (liên kết với 4 phân tử NH3)"],
    ["Cầu nội phức", "Khối gồm nguyên tử trung tâm và các phối tử trong ngoặc vuông", "[Cu(NH3)4]²⁺"],
    ["Cầu ngoại phức", "Các ion nằm ngoài dấu ngoặc vuông cân bằng điện tích", "Ion SO4²⁻"]
  ]
));
children.push(spacer());
children.push(Section("II. Các dạng hình học của phức chất"));
children.push(DataTable(
  ["Số phối trí", "Dạng hình học không gian", "Ví dụ tiêu biểu"],
  [
    ["2", "Đường thẳng (thẳng hàng, góc 180°)", "[Ag(NH3)2]⁺, [Ag(CN)2]⁻"],
    ["4", "Tứ diện (tetrahedral, góc 109,5°)", "[Zn(NH3)4]²⁺, [NiCl4]²⁻"],
    ["4", "Vuông phẳng (square planar, góc 90°)", "Cisplatin [Pt(NH3)2Cl2], [Cu(NH3)4]²⁺"],
    ["6", "Bát diện đều (octahedral, góc 90°)", "[Fe(CN)6]³⁻, [Fe(H2O)6]³⁺, [Co(NH3)6]³⁺"]
  ]
));
children.push(spacer());
children.push(Example("Ví dụ minh hoạ: Xác định các thành phần của phức chất [Fe(CN)6]4-", [
  "Nguyên tử trung tâm: Ion Fe²⁺.",
  "Phối tử: Ion cyanide CN⁻ (phối tử 1 càng).",
  "Số phối trí: 6.",
  "Dạng hình học: Bát diện (octahedral)."
]));

        return children;
      }
    },
    {
      id: "hk2_12_p6",
      label: "Phần 6/7: Sự hình thành phức chất trong dung dịch & Phản ứng thế phối tử (Bài 32, 33)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 32. Sự hình thành phức chất trong dung dịch"));
children.push(Section("I. Quá trình tạo phức trong dung dịch nước"));
children.push(P("Trong dung dịch nước, hầu hết các ion kim loại chuyển tiếp đều tồn tại ở dạng **phức chất aquo** (liên kết với các phân tử nước), ví dụ ion Cu²⁺ tồn tại dưới dạng **[Cu(H2O)6]²⁺ màu xanh lam nhạt**."));
children.push(Section("II. Phản ứng thế phối tử"));
children.push(P("Khi cho các phối tử khác (như NH3, Cl⁻, OH⁻...) có khả năng tạo liên kết bền hơn nước vào dung dịch, xảy ra **phản ứng thế phối tử**, thường kèm theo sự **biến đổi màu sắc rõ rệt hoặc hoà tan kết tủa**:"));
children.push(Eq("**Tạo phức đồng – ammonia (màu xanh lam đậm):**  [Cu(H₂O)₆]²⁺ (xanh nhạt)  +  4NH₃  →  [Cu(NH₃)₄(H₂O)₂]²⁺ (xanh lam đậm)  +  4H₂O"));
children.push(Eq("**Hoà tan kết tủa Cu(OH)2:**  Cu(OH)₂  +  4NH₃  →  [Cu(NH₃)₄](OH)₂ (dung dịch xanh thẫm)"));
children.push(Eq("**Hoà tan kết tủa AgCl:**  AgCl↓ (trắng)  +  2NH₃  →  [Ag(NH₃)₂]Cl (dung dịch trong suốt)"));

children.push(Bai("Bài 33. Dấu hiệu nhận biết và độ bền phức chất"));
children.push(DataTable(
  ["Hiện tượng hoá học", "Dấu hiệu nhận biết", "Phương trình ion rút gọn"],
  [
    ["Hoà tan kết tủa Cu(OH)2 trong NH3", "Kết tủa xanh lam nhạt tan tạo dung dịch màu xanh thẫm", "Cu(OH)2 + 4NH3 → [Cu(NH3)4]²⁺ + 2OH⁻"],
    ["Hoà tan kết tủa AgCl trong NH3", "Kết tủa trắng tan hoàn toàn thành dung dịch không màu", "AgCl + 2NH3 → [Ag(NH3)2]⁺ + Cl⁻"],
    ["Nhận biết ion Fe³⁺ bằng SCN⁻", "Tạo phức chất màu đỏ máu đặc trưng", "Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺ (đỏ máu)"]
  ]
));
children.push(spacer());
children.push(Sub("Hiệu ứng chelate (phối tử nhiều càng)"));
children.push(P("Phối tử nhiều càng (như ethylenediamine 'en', EDTA) khi liên kết với nguyên tử trung tâm tạo thành các **vòng chelate** rất bền vững, bền hơn nhiều so với phức chất tạo bởi phối tử 1 càng tương đương — được gọi là **hiệu ứng chelate**."));

        return children;
      }
    },
    {
      id: "hk2_12_p7",
      label: "Phần 7/7: Ứng dụng thực tiễn của phức chất & Toàn diện Ôn tập Học kì 2 (Bài 34)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 34. Ứng dụng của phức chất & Toàn diện Ôn tập Học kì 2"));
children.push(Section("I. Ứng dụng thực tiễn của phức chất"));
children.push(DataTable(
  ["Lĩnh vực ứng dụng", "Phức chất tiêu biểu", "Vai trò và ý nghĩa"],
  [
    ["Y học – Điều trị ung thư", "Cisplatin: cis-[Pt(NH3)2Cl2] (vuông phẳng)", "Liên kết chéo với 2 mạch DNA tế bào ung thư, ngăn cản sự nhân đôi và tiêu diệt khối u"],
    ["Y học – Giải độc kim loại", "Phức EDTA – Ca / Na", "Tạo phức vòng chelate siêu bền với ion Pb²⁺, Hg²⁺ trong máu để thải ra ngoài qua thận"],
    ["Sinh học – Sự sống", "Hemoglobin (phức Fe²⁺), Chlorophyll (phức Mg²⁺)", "Vận chuyển khí O2 trong máu người; hấp thụ ánh sáng quang hợp ở thực vật"],
    ["Công nghiệp mạ điện", "[Ag(CN)2]⁻, [Au(CN)2]⁻", "Giúp lớp mạ vàng, mạ bạc bám đều, mịn, sáng bóng và bền đẹp trên kim loại"],
    ["Hoá học phân tích", "[Ag(NH3)2]⁺ (thuốc thử Tollens)", "Nhận biết aldehyde, đường khử glucose trong y học và sản xuất gương"]
  ]
));
children.push(spacer());

children.push(Bai("Ôn tập toàn diện Hóa học 12 – Học kì 2"));
children.push(DataTable(
  ["Chủ đề", "Kiến thức trọng tâm", "Phương trình hoá học / Phản ứng tiêu biểu"],
  [
    ["Kim loại nhóm IA", "Tính khử rất mạnh nhất, ns1, mềm, nhẹ", "2Na + 2H2O → 2NaOH + H2↑"],
    ["Kim loại nhóm IIA", "Tính khử mạnh, ns2, hợp chất đá vôi CaCO3, thạch cao", "CaCO3 + CO2 + H2O ⇌ Ca(HCO3)2"],
    ["Nước cứng", "Chứa nhiều Ca²⁺, Mg²⁺; 3 loại: tạm thời, vĩnh cửu, toàn phần", "Làm mềm tất cả: Ca²⁺ + CO3²⁻ → CaCO3↓"],
    ["Nhôm & Hợp chất", "Al2O3 và Al(OH)3 lưỡng tính", "Al(OH)3 + NaOH → Na[Al(OH)4]"],
    ["Kim loại chuyển tiếp", "Cấu hình d, nhiều số oxi hoá (+2, +3...), hợp chất có màu", "Fe²⁺ (khử) ↔ Fe³⁺ (oxi hoá); CrO4²⁻ (vàng) ↔ Cr2O7²⁻ (da cam)"],
    ["Phức chất", "Nguyên tử trung tâm + phối tử; hình học bát diện, vuông phẳng, thẳng", "Cu(OH)2 + 4NH3 → [Cu(NH3)4]²⁺ + 2OH⁻ (xanh thẫm)"]
  ]
));
children.push(spacer());
children.push(NoteBox("Ghi nhớ trọng tâm ôn thi tốt nghiệp THPT", [
  "Nắm vững các phản ứng nhận biết màu sắc: Cu²⁺ xanh lam, Fe³⁺ nâu đỏ, Fe(SCN)²⁺ đỏ máu, CrO4²⁻ vàng, Cr2O7²⁻ da cam.",
  "Phân biệt rõ chất lưỡng tính (Al2O3, Al(OH)3, NaHCO3) tan được trong cả dung dịch acid mạnh và base mạnh."
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Cisplatin là đồng phân hình học cis hay trans của [Pt(NH3)2Cl2]? Tại sao đồng phân trans không có tác dụng chữa ung thư?", a: "Cisplatin là đồng phân cis (hai nhóm Cl ở cùng một phía). Chỉ có đồng phân cis mới có khoảng cách hình học phù hợp để liên kết chéo đồng thời với 2 base guanine cạnh nhau trên cùng một mạch DNA tế bào ung thư, bẻ cong cấu trúc DNA và ức chế phân bào; đồng phân trans không có cấu hình phù hợp này nên không có hoạt tính sinh học chữa bệnh." }
]));

        return children;
      }
    }
  ]
};
