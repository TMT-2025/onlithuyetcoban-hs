// Dữ liệu lý thuyết chi tiết Hóa học 11 - HK2 chuẩn format Claude docx
module.exports = {
  title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 11 – HỌC KÌ 2",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Dẫn xuất halogen, Alcohol, Phenol, Carbonyl & Carboxylic acid",
  parts: [
    {
      id: "hk2_11_p1",
      label: "Phần 1/7: Dẫn xuất halogen của hydrocarbon & Quy tắc Zaitsev (Bài 19)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 5: DẪN XUẤT HALOGEN – ALCOHOL – PHENOL"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Dẫn xuất halogen, alcohol và phenol là **cầu nối then chốt** giữa hydrocarbon đơn giản và các hợp chất hữu cơ phức tạp trong dược phẩm, mĩ phẩm, hương liệu.",
  "**Alcohol (ethanol)** là nhiên liệu sinh học E5, dung môi sát trùng y tế 70°, nguyên liệu trong ngành đồ uống và tổng hợp hữu cơ.",
  "**Phenol** là nguyên liệu sản xuất nhựa bakelite (vỏ thiết bị điện), thuốc nổ acid picric, dược phẩm aspirin giảm đau hạ sốt."
]));
children.push(spacer());

children.push(Bai("Bài 19. Dẫn xuất halogen của hydrocarbon"));
children.push(Section("I. Khái niệm, đồng phân, danh pháp"));
children.push(P("Khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử hydrocarbon bằng một hay nhiều nguyên tử halogen, ta được **dẫn xuất halogen của hydrocarbon**. Công thức chung: **R–X** (X là F, Cl, Br, I)."));
children.push(DataTable(
  ["Hợp chất", "Công thức cấu tạo", "Tên thay thế IUPAC", "Tên thông thường"],
  [
    ["CH3Cl", "CH3-Cl", "Chloromethane", "Methyl chloride"],
    ["C2H5Br", "CH3-CH2-Br", "Bromoethane", "Ethyl bromide"],
    ["CH2=CH-Cl", "CH2=CH-Cl", "Chloroethene", "Vinyl chloride (trùng hợp tạo PVC)"],
    ["C6H5Br", "C6H5-Br", "Bromobenzene", "Phenyl bromide"]
  ]
));
children.push(spacer());
children.push(Section("II. Tính chất hoá học"));
children.push(Sub("1. Phản ứng thế nhóm -OH (thuỷ phân trong môi trường kiềm)"));
children.push(P("Dẫn xuất halogen tác dụng với dung dịch kiềm (NaOH/KOH) đun nóng tạo thành alcohol:"));
children.push(Eq("CH₃-CH₂-Br  +  NaOH  →(t°)  CH₃-CH₂-OH  +  NaBr"));
children.push(Sub("2. Phản ứng tách hydrogen halide (Quy tắc Zaitsev)"));
children.push(P("Khi đun nóng dẫn xuất halogen với dung dịch KOH trong ethanol, xảy ra phản ứng tách HX tạo alkene:"));
children.push(Sub("Quy tắc Zaitsev"));
children.push(P("Khi tách HX khỏi dẫn xuất halogen, nguyên tử halogen X ưu tiên **tách ra cùng với nguyên tử H ở nguyên tử carbon bên cạnh có bậc cao hơn** (mang ít H hơn), tạo thành alkene có nhiều nhóm thế hơn (bền hơn) là **sản phẩm chính**."));
children.push(Example("Ví dụ minh hoạ: Tách HBr từ 2-bromobutane", [
  "Phương trình: CH3-CH(Br)-CH2-CH3 + KOH (ethanol, t°) thu được 2 sản phẩm:",
  "Sản phẩm chính (tách H ở C bậc II): **CH3-CH=CH-CH3 (but-2-ene)**.",
  "Sản phẩm phụ (tách H ở C bậc I): **CH2=CH-CH2-CH3 (but-1-ene)**."
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Nêu quy tắc Zaitsev và xác định sản phẩm chính khi đun nóng 2-chloropropane với KOH/ethanol.", a: "2-chloropropane có cấu tạo đối xứng CH3-CH(Cl)-CH3, tách HCl chỉ tạo 1 alkene duy nhất là propene: CH2=CH-CH3." }
]));

        return children;
      }
    },
    {
      id: "hk2_11_p2",
      label: "Phần 2/7: Alcohol – Cấu tạo, Liên kết H, Tính chất hoá học & Ứng dụng (Bài 20)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 20. Alcohol"));
children.push(Section("I. Cấu trúc phân tử và tính chất vật lí"));
children.push(P("**Alcohol** là hợp chất hữu cơ trong phân tử có nhóm hydroxyl (**–OH**) liên kết trực tiếp với nguyên tử carbon no. Công thức chung của alcohol no, đơn chức, mạch hở: **CnH2n+1OH** (n ≥ 1)."));
children.push(...Bullet([
  "**Bậc của alcohol:** bằng bậc của nguyên tử carbon liên kết với nhóm –OH (Alcohol bậc I, bậc II, bậc III).",
  "**Liên kết hydrogen:** Do nguyên tử O có độ âm điện lớn, nhóm –OH phân cực mạnh tạo **liên kết hydrogen liên phân tử** giữa các phân tử alcohol và giữa alcohol với nước."
]));
children.push(Sub("Giải thích"));
children.push(P("Nhờ có liên kết hydrogen liên phân tử bền vững, alcohol có **nhiệt độ sôi cao hơn nhiều** so với các hydrocarbon, dẫn xuất halogen hoặc ether có phân tử khối tương đương. Các alcohol đầu dãy (methanol, ethanol) **tan vô hạn trong nước** do tạo được liên kết hydrogen với phân tử nước."));
children.push(Section("II. Tính chất hoá học của alcohol"));
children.push(Sub("1. Phản ứng thế nguyên tử H của nhóm –OH"));
children.push(Eq("2C₂H₅OH  +  2Na  →  2C₂H₅ONa (sodium ethoxide)  +  H₂↑"));
children.push(Sub("2. Phản ứng tách nước (tạo alkene hoặc ether)"));
children.push(Eq("**Tạo ether (ở 140 °C, H2SO4 đặc):**  2C₂H₅OH  →(140°C, H2SO4 đặc)  C₂H₅-O-C₂H₅ (diethyl ether)  +  H₂O"));
children.push(Eq("**Tạo alkene (ở 170 °C, H2SO4 đặc):**  CH₃-CH₂-OH  →(170°C, H2SO4 đặc)  CH₂=CH₂  +  H₂O"));
children.push(Sub("3. Phản ứng oxi hoá không hoàn toàn"));
children.push(DataTable(
  ["Bậc của alcohol", "Sản phẩm oxi hoá bởi CuO (t°)", "Ví dụ"],
  [
    ["Alcohol bậc I", "Aldehyde (–CHO)", "CH3-CH2-OH + CuO →(t°) CH3-CHO + Cu + H2O"],
    ["Alcohol bậc II", "Ketone (>C=O)", "CH3-CH(OH)-CH3 + CuO →(t°) CH3-CO-CH3 + Cu + H2O"],
    ["Alcohol bậc III", "Khó bị oxi hoá ở điều kiện thường", "Không phản ứng với CuO ở điều kiện êm dịu"]
  ]
));
children.push(spacer());
children.push(NoteBox("Tính chất đặc biệt của polyalcohol (như glycerol, ethylene glycol)", [
  "Các polyalcohol có **từ hai nhóm –OH kề nhau trở lên** có khả năng hoà tan Cu(OH)2 tạo **dung dịch phức chất màu xanh lam đậm đặc trưng** — dùng để nhận biết glycerol, ethylene glycol:",
  "2C₃H₅(OH)₃  +  Cu(OH)₂  →  [C₃H₅(OH)₂O]₂Cu (dung dịch xanh lam thẫm)  +  2H₂O"
]));

        return children;
      }
    },
    {
      id: "hk2_11_p3",
      label: "Phần 3/7: Phenol – Tính acid, Phản ứng thế nhân thơm & Ôn tập Chương 5 (Bài 21, 22)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 21. Phenol"));
children.push(Section("I. Cấu tạo phân tử"));
children.push(P("**Phenol** là những hợp chất hữu cơ trong phân tử có nhóm hydroxyl (**–OH**) liên kết **trực tiếp với nguyên tử carbon của vòng benzene**. Phân tử phenol đơn giản nhất: **C6H5OH**."));
children.push(Sub("Giải thích tương tác giữa nhóm –OH và vòng benzene"));
children.push(P("Cặp electron tự do trên nguyên tử oxygen liên hợp với hệ electron pi của vòng benzene, làm mật độ electron dịch chuyển về phía vòng (đặc biệt ở các vị trí ortho và para). Kết quả là: **liên kết O–H phân cực mạnh hơn** (dễ phân li H⁺ hơn alcohol → phenol có tính acid yếu); đồng thời **mật độ electron trên vòng benzene tăng lên** (phản ứng thế vào nhân thơm của phenol diễn ra dễ dàng hơn benzene rất nhiều)."));
children.push(Section("II. Tính chất hoá học"));
children.push(Sub("1. Tính acid của phenol"));
children.push(P("Phenol có tính acid yếu (lực acid mạnh hơn alcohol nhưng **yếu hơn acid carbonic H2CO3**), làm quỳ tím không đổi màu nhưng phản ứng được với dung dịch kiềm:"));
children.push(Eq("C₆H₅OH  +  NaOH  →  C₆H₅ONa (sodium phenolate, tan)  +  H₂O"));
children.push(Eq("C₆H₅ONa  +  CO₂  +  H₂O  →  C₆H₅OH (vẩn đục)  +  NaHCO₃  (H2CO3 đẩy phenol ra khỏi muối)"));
children.push(Sub("2. Phản ứng thế ở nhân thơm (tác dụng với nước bromine và HNO3)"));
children.push(P("Do ảnh hưởng của nhóm –OH, phản ứng thế vào nhân thơm xảy ra rất dễ dàng ở nhiệt độ thường, ưu tiên vào các vị trí **2, 4, 6 (ortho và para)**:"));
children.push(Eq("C₆H₅OH  +  3Br₂  →  2,4,6-tribromophenol↓ (kết tủa trắng)  +  3HBr   (phản ứng nhận biết phenol)"));
children.push(Eq("C₆H₅OH  +  3HNO₃ (đặc)  →(H2SO4 đặc, t°)  2,4,6-trinitrophenol (picric acid↓ vàng)  +  3H₂O"));

children.push(Bai("Bài 22. Ôn tập Chương 5"));
children.push(DataTable(
  ["Hợp chất", "Cấu tạo nhóm chức", "Phản ứng với Na", "Phản ứng với NaOH", "Phản ứng với nước Br2"],
  [
    ["Alcohol (C2H5OH)", "–OH liên kết C no", "Có (giải phóng H2)", "Không phản ứng", "Không làm mất màu"],
    ["Phenol (C6H5OH)", "–OH liên kết vòng thơm", "Có (giải phóng H2)", "Có (tạo C6H5ONa)", "Tạo kết tủa trắng 2,4,6-tribromophenol"]
  ]
));
children.push(spacer());
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Nêu phương pháp phân biệt 3 chất lỏng không màu: benzene, ethanol và phenol.", a: "Dùng nước bromine: phenol tạo kết tủa trắng. Hai chất còn lại cho tác dụng với Na kim loại: ethanol có sủi bọt khí H2, benzene không có hiện tượng." }
]));

        return children;
      }
    },
    {
      id: "hk2_11_p4",
      label: "Phần 4/7: Hợp chất Carbonyl – Cấu tạo nhóm C=O & Phản ứng cộng nucleophile (Bài 23A)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 6: HỢP CHẤT CARBONYL – CARBOXYLIC ACID"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "**Hợp chất carbonyl (formaldehyde, acetaldehyde, acetone)** là nguyên liệu sản xuất sơn, keo dán công nghiệp, chất dẻo formandehit và dung môi tẩy rửa móng tay.",
  "**Carboxylic acid (acetic acid - giấm ăn)** là gia vị ẩm thực, chất bảo quản thực phẩm, nguyên liệu sản xuất tơ nhân tạo tơ axetat và dược phẩm aspirin.",
  "Mùi thơm đặc trưng của nhiều loại hoa quả, bơ sữa lên men là sản phẩm kết hợp giữa carboxylic acid và alcohol."
]));
children.push(spacer());

children.push(Bai("Bài 23. Hợp chất Carbonyl (Phần 1: Cấu tạo và Phản ứng cộng)"));
children.push(Section("I. Khái niệm và cấu tạo nhóm carbonyl"));
children.push(P("**Hợp chất carbonyl** là các hợp chất hữu cơ trong phân tử có chứa nhóm carbonyl (**>C=O**)."));
children.push(...Bullet([
  "**Aldehyde:** nhóm –CH=O liên kết trực tiếp với nguyên tử C hoặc H (Ví dụ: HCHO, CH3CHO).",
  "**Ketone:** nhóm >C=O liên kết trực tiếp với hai gốc hydrocarbon (Ví dụ: CH3-CO-CH3, CH3-CO-C6H5)."
]));
children.push(Sub("Giải thích tính phân cực của nhóm carbonyl"));
children.push(P("Liên kết đôi C=O gồm 1 liên kết σ bền và 1 liên kết π kém bền. Do nguyên tử oxygen có độ âm điện lớn hơn carbon rất nhiều (3,44 so với 2,55), cặp electron liên kết bị hút mạnh về phía oxygen, làm cho **nguyên tử carbon mang một phần điện tích dương (δ+)** và **nguyên tử oxygen mang một phần điện tích âm (δ–)**. Do đó, nhóm carbonyl rất **dễ bị tấn công bởi các tác nhân nucleophile** (mang điện âm) vào nguyên tử carbon."));
children.push(Section("II. Phản ứng cộng nucleophile vào nhóm C=O"));
children.push(Eq("**Cộng HCN tạo cyanohydrin:**  CH₃-CHO  +  HCN  →  CH₃-CH(OH)-CN"));
children.push(Eq("**Cộng NaHSO3:**  CH₃-CHO  +  NaHSO₃  →  CH₃-CH(OH)-SO₃Na (kết tủa tinh thể trắng, dùng tinh chế aldehyde)"));
children.push(Section("III. Phản ứng tạo iodoform (Phản ứng haloform)"));
children.push(P("Các hợp chất có nhóm **CH3-C=O** (acetaldehyde và methyl ketone) phản ứng với I2 trong dung dịch kiềm (NaOH) tạo **kết tủa màu vàng iodoform (CHI3)** có mùi sát trùng đặc trưng:"));
children.push(Eq("CH₃-CO-CH₃  +  3I₂  +  4NaOH  →  CHI₃↓ (vàng nhạt)  +  CH₃COONa  +  3NaI  +  3H₂O"));
children.push(NoteBox("Ý nghĩa", [
  "Phản ứng tạo iodoform là phép thử đặc trưng dùng để **nhận biết các hợp chất có chứa nhóm CH3–CO–** (như acetaldehyde, acetone...)."
]));

        return children;
      }
    },
    {
      id: "hk2_11_p5",
      label: "Phần 5/7: Aldehyde & Ketone – Phản ứng tráng bạc, Cu(OH)2 & Iodoform (Bài 23B)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 23. Hợp chất Carbonyl (Phần 2: Tính oxi hoá, Tính khử & Nhận biết)"));
children.push(Section("I. Phản ứng oxi hoá aldehyde"));
children.push(NoteBox("Đặc điểm quan trọng", [
  "Aldehyde có nguyên tử H liên kết trực tiếp với nhóm C=O nên **rất dễ bị oxi hoá** thành carboxylic acid.",
  "Ketone không có H gắn vào C=O nên **rất khó bị oxi hoá** bởi các tác nhân oxi hoá thông thường — đây là cơ sở để phân biệt aldehyde và ketone."
]));
children.push(Sub("1. Phản ứng tráng bạc (tác dụng với thuốc thử Tollens [Ag(NH3)2]OH)"));
children.push(P("Dung dịch AgNO3 trong NH3 oxi hoá aldehyde thành muối ammonium, giải phóng kim loại Ag bám sáng bóng vào thành ống nghiệm:"));
children.push(Eq("R-CHO  +  2[Ag(NH₃)₂]OH  →(t°)  R-COONH₄  +  2Ag↓ (sáng bóng như gương)  +  3NH₃  +  H₂O"));
children.push(P("Riêng formaldehyde (HCHO) phản ứng theo tỉ lệ tạo **4Ag**:  HCHO + 4[Ag(NH3)2]OH → (NH4)2CO3 + 4Ag↓ + 6NH3 + 2H2O."));
children.push(Sub("2. Phản ứng với Cu(OH)2 trong môi trường kiềm khi đun nóng"));
children.push(P("Aldehyde khử Cu(OH)2 màu xanh lam thành **kết tủa đỏ gạch Cu2O**:"));
children.push(Eq("R-CHO  +  2Cu(OH)₂  +  NaOH  →(t°)  R-COONa  +  Cu₂O↓ (đỏ gạch)  +  3H₂O"));
children.push(Section("II. Phản ứng khử (hydro hoá)"));
children.push(P("Cả aldehyde và ketone đều bị khử bởi H2 (xúc tác Ni, t°) tạo thành alcohol tương ứng:"));
children.push(Eq("**Aldehyde bị khử tạo alcohol bậc I:**  R-CHO  +  H₂  →(Ni, t°)  R-CH₂-OH"));
children.push(Eq("**Ketone bị khử tạo alcohol bậc II:**  R-CO-R'  +  H₂  →(Ni, t°)  R-CH(OH)-R'"));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao thuốc thử Tollens và Cu(OH)2/OH- được dùng làm thuốc thử nhận biết aldehyde mà không nhận biết được ketone?", a: "Vì aldehyde có liên kết C-H ở nhóm carbonyl nên có tính khử mạnh, dễ bị oxi hoá bởi thuốc thử Tollens (tạo Ag) và Cu(OH)2 (tạo Cu2O đỏ gạch), trong khi ketone không có H gắn vào carbonyl nên bền vững, không phản ứng." }
]));

        return children;
      }
    },
    {
      id: "hk2_11_p6",
      label: "Phần 6/7: Carboxylic acid – Cấu tạo, Tính acid & Phản ứng ester hóa (Bài 24)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 24. Carboxylic acid"));
children.push(Section("I. Cấu tạo nhóm carboxyl và tính chất vật lí"));
children.push(P("**Carboxylic acid** là hợp chất hữu cơ trong phân tử có chứa nhóm carboxyl (**–COOH**) liên kết trực tiếp với nguyên tử C hoặc H. Công thức chung acid no, đơn chức, mạch hở: **CnH2n+1COOH** (n ≥ 0)."));
children.push(Sub("Giải thích nhiệt độ sôi cao của Carboxylic acid"));
children.push(P("Trong nhóm –COOH, nhóm C=O hút electron làm cho liên kết O–H phân cực mạnh hơn cả trong alcohol. Giữa các phân tử carboxylic acid hình thành **liên kết hydrogen liên phân tử dạng dimer (nhị hợp) rất bền**. Vì vậy, carboxylic acid có **nhiệt độ sôi cao hơn hẳn alcohol có cùng phân tử khối** (Ví dụ: CH3COOH sôi ở 118 °C, trong khi C2H5OH có cùng M = 46/60 chỉ sôi ở 78,3 °C)."));
children.push(Section("II. Tính chất hoá học"));
children.push(Sub("1. Tính acid"));
children.push(P("Carboxylic acid là các acid yếu nhưng mang đầy đủ tính chất của một acid: làm **quỳ tím hoá đỏ**, phản ứng với kim loại trước H, oxide base, base và muối của acid yếu hơn:"));
children.push(Eq("2CH₃COOH  +  Mg  →  (CH₃COO)₂Mg  +  H₂↑"));
children.push(Eq("CH₃COOH  +  NaOH  →  CH₃COONa  +  H₂O"));
children.push(Eq("2CH₃COOH  +  CaCO₃  →  (CH₃COO)₂Ca  +  CO₂↑  +  H₂O  (sủi bọt khí CO2)"));
children.push(Sub("2. Phản ứng ester hoá (với alcohol)"));
children.push(P("Carboxylic acid phản ứng với alcohol khi có mặt xúc tác H2SO4 đặc đun nóng tạo thành ester:"));
children.push(Eq("CH₃COOH  +  C₂H₅OH  ⇌(H2SO4 đặc, t°)  CH₃COOC₂H₅ (ethyl acetate, mùi thơm)  +  H₂O"));
children.push(Example("Ví dụ minh hoạ", [
  "Nêu hiện tượng khi cho giấm ăn (chứa khoảng 5% CH3COOH) vào vỏ trứng gà (chứa chủ yếu CaCO3).",
  "Lời giải: Có hiện tượng sủi bọt khí CO2 không màu thoát ra và vỏ trứng tan dần: 2CH3COOH + CaCO3 → (CH3COO)2Ca + CO2↑ + H2O."
]));

        return children;
      }
    },
    {
      id: "hk2_11_p7",
      label: "Phần 7/7: So sánh toàn diện Alcohol, Phenol, Acid & Ôn tập Chương 6 (Bài 25)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 25. Ôn tập Chương 6 & So sánh toàn diện Dẫn xuất chứa Oxygen"));
children.push(DataTable(
  ["Hợp chất", "Nhóm chức", "Tính acid", "Nhiệt độ sôi so sánh (cùng số C)", "Thuốc thử nhận biết đặc trưng"],
  [
    ["Alcohol", "–OH (gắn C no)", "Rất yếu (không làm đổi màu quỳ)", "Thấp hơn carboxylic acid", "Na (sủi bọt khí H2); Cu(OH)2 (polyalcol xanh lam)"],
    ["Phenol", "–OH (gắn vòng thơm)", "Yếu (không đổi màu quỳ, tan trong NaOH)", "Cao", "Nước bromine (kết tủa trắng 2,4,6-tribromophenol)"],
    ["Aldehyde", "–CHO", "Trung tính", "Thấp hơn alcohol (không có liên kết H)", "Thuốc thử Tollens (tráng bạc Ag); Cu(OH)2/OH- (đỏ gạch)"],
    ["Carboxylic acid", "–COOH", "Acid yếu (quỳ tím hoá đỏ, tan CaCO3)", "Cao nhất (liên kết H liên phân tử bền dimer)", "Quỳ tím hoá đỏ; sủi bọt khí CO2 với Na2CO3/CaCO3"]
  ]
));
children.push(spacer());
children.push(NoteBox("Thứ tự nhiệt độ sôi của các hợp chất có phân tử khối tương đương", [
  "**Carboxylic acid  >  Alcohol  >  Aldehyde / Ketone  >  Ether  >  Hydrocarbon**",
  "Nguyên nhân: Acid và alcohol tạo được liên kết hydrogen liên phân tử (acid bền hơn do tạo dimer); aldehyde/ketone phân cực nhưng không tạo được liên kết H liên phân tử; hydrocarbon không phân cực chỉ có lực van der Waals yếu."
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Sắp xếp theo thứ tự tính acid tăng dần của 3 chất: C2H5OH, C6H5OH và CH3COOH. Giải thích ngắn gọn.", a: "Thứ tự tính acid tăng dần: C2H5OH < C6H5OH < CH3COOH. Giải thích: C2H5OH không tác dụng NaOH; C6H5OH tác dụng được NaOH nhưng không tác dụng Na2CO3; CH3COOH tác dụng được cả NaOH và giải phóng khí CO2 từ muối Na2CO3." }
]));

        return children;
      }
    }
  ]
};
