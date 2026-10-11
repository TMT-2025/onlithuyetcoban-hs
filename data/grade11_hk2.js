// Dữ liệu lý thuyết chi tiết Hóa học 11 - HK2 chuẩn format Claude docx
module.exports = {
  title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 11 – HỌC KÌ 2",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Dẫn xuất Halogen, Alcohol, Phenol, Hợp chất Carbonyl & Carboxylic Acid",
  parts: [
    {
      id: "hk2_11_p1",
      label: "Chương 5 (Phần 1): Dẫn xuất Halogen của hydrocarbon & Quy tắc Zaitsev (Bài 19)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
        children.push(Chapter("CHƯƠNG 5: DẪN XUẤT HALOGEN – ALCOHOL – PHENOL"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Ứng dụng đời sống", [
          "Dẫn xuất halogen, alcohol và phenol là **cầu nối then chốt** trong công nghiệp tổng hợp hữu cơ, biến các hydrocarbon thô sơ thành hàng ngàn loại dược phẩm, tơ sợi nhân tạo, phẩm nhuộm và hóa mỹ phẩm.",
          "**Trong y dược và bảo vệ thực vật:** Chloroform (CHCl3) và Halothane (CF3-CHBrCl) là những chất gây mê kinh điển mở ra kỷ nguyên phẫu thuật không đau; Dẫn xuất halogen là hoạt chất trong thuốc trừ sâu thế hệ mới, thuốc kháng nấm và kháng sinh.",
          "**Vật liệu và chất làm lạnh:** Teflon (PTFE từ tetrafluoroethene) làm bề mặt chống dính chảo rán và van tim nhân tạo; Hợp chất HFC, HFO thay thế CFC cũ để bảo vệ tầng ozone của Trái Đất."
        ]));
        children.push(spacer());

        children.push(Bai("Bài 19. Dẫn xuất halogen của hydrocarbon"));
        children.push(Section("I. Khái niệm, Đồng phân và Danh pháp"));
        children.push(P("Khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử hydrocarbon bằng một hay nhiều nguyên tử halogen (F, Cl, Br, I), ta thu được **dẫn xuất halogen của hydrocarbon**."));
        children.push(P("Công thức tổng quát: **R–X** hoặc **CnH2n+2–2k–mXm** (k là số liên kết pi hoặc vòng, m là số nguyên tử halogen)."));
        children.push(...Bullet([
          "**Phân loại:** Dẫn xuất monohalogen (chứa 1 nguyên tử X) và polyhalogen (chứa nhiều nguyên tử X); Dẫn xuất no, không no, thơm; Bậc của dẫn xuất halogen bằng bậc của nguyên tử carbon liên kết trực tiếp với nguyên tử halogen (Bậc I, II, III).",
          "**Đồng phân:** Xuất hiện đồng phân mạch carbon, đồng phân vị trí của nguyên tử halogen và đồng phân hình học (nếu có liên kết đôi).",
          "**Danh pháp thay thế IUPAC:** Số chỉ vị trí – Tên halogen (fluoro, chloro, bromo, iodo) + Tên hydrocarbon mạch chính.",
          "**Tên gốc – chức:** Tên gốc hydrocarbon + Halide (fluoride, chloride, bromide, iodide)."
        ]));
        children.push(DataTable(
          ["Công thức cấu tạo", "Tên thay thế IUPAC", "Tên gốc – chức", "Bậc của dẫn xuất"],
          [
            ["CH3 – Cl", "Chloromethane", "Methyl chloride", "Bậc I"],
            ["CH3 – CH2 – Br", "Bromoethane", "Ethyl bromide", "Bậc I"],
            ["CH3 – CH(Cl) – CH3", "2-chloropropane", "Isopropyl chloride", "Bậc II"],
            ["(CH3)3C – Br", "2-bromo-2-methylpropane", "tert-butyl bromide", "Bậc III"],
            ["CH2 = CH – Cl", "Chloroethene", "Vinyl chloride (trùng hợp tạo PVC)", "–"],
            ["C6H5 – Br", "Bromobenzene", "Phenyl bromide", "–"]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Tính chất vật lí"));
        children.push(...Bullet([
          "Ở điều kiện thường, các dẫn xuất halogen có phân tử khối nhỏ như CH3Cl, CH3F, C2H5Cl là chất khí. Các chất có phân tử khối lớn hơn là chất lỏng hoặc chất rắn.",
          "Nhiệt độ sôi và nhiệt độ nóng chảy của dẫn xuất halogen **cao hơn các hydrocarbon có cùng số nguyên tử C** do phân tử phân cực (liên kết C–X) và tương tác van der Waals tăng lên.",
          "Hầu hết các dẫn xuất halogen **không tan trong nước**, tan tốt trong các dung môi hữu cơ (xăng, cồn, ether), và nặng hơn nước (dẫn xuất của Br, I và polycloro)."
        ]));

        children.push(Section("III. Tính chất hoá học của dẫn xuất Halogen"));
        children.push(P("Liên kết C–X (X = F, Cl, Br, I) bị **phân cực mạnh** về phía nguyên tử halogen có độ âm điện lớn hơn, làm cho nguyên tử carbon mang một phần điện tích dương (δ+), dễ bị các tác nhân giàu electron (tác nhân nucleophile như OH–, H2O, NH3) tấn công."));

        children.push(Sub("1. Phản ứng thế nhóm –OH (Thủy phân trong môi trường kiềm)"));
        children.push(P("Dẫn xuất halogen phản ứng với dung dịch kiềm (NaOH hoặc KOH trong nước) khi đun nóng nhẹ, nguyên tử halogen bị thế bởi nhóm hydroxyl (–OH) tạo thành **alcohol** tương ứng:"));
        children.push(Eq("CH₃–CH₂–Br  +  NaOH  →(H₂O, t°)  CH₃–CH₂–OH (ethanol)  +  NaBr"));
        children.push(Eq("CH₃–CH(Cl)–CH₃  +  KOH  →(H₂O, t°)  CH₃–CH(OH)–CH₃ (propan-2-ol)  +  KCl"));
        children.push(P("Lưu ý: Dẫn xuất halogen loại vinyl (CH2=CH-Cl) và aryl (C6H5-Cl) có cặp electron p của halogen liên hợp với hệ pi của nối đôi/nhân thơm nên liên kết C-X rất bền, **không bị thủy phân** trong dung dịch kiềm ở điều kiện thường."));

        children.push(Sub("2. Phản ứng tách hydrogen halide (Quy tắc Zaitsev)"));
        children.push(P("Khi đun nóng dẫn xuất halogen với dung dịch **KOH hoặc NaOH trong dung môi cồn (ethanol)**, xảy ra phản ứng tách HX tạo thành **alkene**:"));
        children.push(Eq("CH₃–CH₂–Br  +  KOH  →(C₂H₅OH, t°)  CH₂=CH₂ (ethene)  +  KBr  +  H₂O"));
        children.push(NoteBox("Quy tắc tách Zaitsev (Zaytsev)", [
          "Khi tách hydrogen halide (HX) ra khỏi dẫn xuất halogen, nguyên tử halogen X ưu tiên **tách ra cùng với nguyên tử H ở nguyên tử carbon kề bên có bậc cao hơn** (mang ít H hơn), tạo thành alkene có nhiều nhóm thế hơn (bền vững hơn về mặt nhiệt động) là **sản phẩm chính**.",
          "Mẹo nhớ nhanh: *Halogen ưu tiên đi cùng H của carbon kề có bậc cao hơn*."
        ]));

        children.push(Example("Ví dụ mẫu: Áp dụng quy tắc Zaitsev", [
          "Đề bài: Đun nóng 2-bromobutane với dung dịch KOH trong ethanol. Viết phương trình hóa học và xác định sản phẩm chính, sản phẩm phụ.",
          "Lời giải từng bước:",
          "Công thức cấu tạo: CH3–CH(Br)–CH2–CH3. Nguyên tử Br đính ở C số 2.",
          "Có hai nguyên tử carbon kề bên có chứa H:",
          "• Carbon C1 (bậc I, có 3 H) → tách H ở C1 tạo sản phẩm phụ: CH2=CH–CH2–CH3 (but-1-ene).",
          "• Carbon C3 (bậc II, có 2 H, bậc cao hơn) → tách H ở C3 tạo sản phẩm chính: **CH3–CH=CH–CH3 (but-2-ene)**.",
          "Phương trình phản ứng chính:\nCH3–CH(Br)–CH2–CH3 + KOH →(ethanol, t°) CH3–CH=CH–CH3 (but-2-ene) + KBr + H2O."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Bài 19", [
          {
            q: "Để phân biệt dung dịch NaCl và dung dịch ethyl bromide (C2H5Br), người ta không thể nhỏ ngay dung dịch AgNO3 vào được. Vì sao và phải làm thế nào?",
            a: "Vì C2H5Br là hợp chất cộng hóa trị, liên kết C-Br không phân li thành ion Br– trong nước nên không phản ứng trực tiếp với AgNO3. Cách làm: Đun sôi mẫu thử C2H5Br với dung dịch NaOH để thủy phân giải phóng ion Br–, sau đó acid hóa bằng dung dịch HNO3 rồi mới nhỏ dung dịch AgNO3 vào, sẽ xuất hiện kết tủa vàng nhạt AgBr."
          },
          {
            q: "Hợp chất 2-chloro-2-methylbutane khi đun với KOH/ethanol cho sản phẩm chính là alkene nào?",
            a: "Cấu tạo: CH3-C(CH3)(Cl)-CH2-CH3. Tách Cl ở C2 cùng H ở C3 (bậc II, ít H hơn C1 bậc I có 3H) cho sản phẩm chính là 2-methylbut-2-ene: (CH3)2C=CH-CH3."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_11_p2",
      label: "Chương 5 (Phần 2): Alcohol – Cấu tạo, Liên kết Hydrogen, Tính chất & Ứng dụng (Bài 20)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Bai("Bài 20. Alcohol"));
        children.push(Section("I. Khái niệm, Đồng phân, Danh pháp"));
        children.push(P("**Alcohol** là những hợp chất hữu cơ trong phân tử có nhóm hydroxyl (**–OH**) liên kết trực tiếp với nguyên tử carbon no (carbon lai hóa sp³)."));
        children.push(...Bullet([
          "**Công thức chung:** Alcohol no, đơn chức, mạch hở có CTPT chung: **CnH2n+1OH** (hay CnH2n+2O, với n ≥ 1).",
          "**Phân loại:** Theo gốc hydrocarbon (no, không no, thơm); Theo số nhóm –OH (đơn chức: methanol, ethanol; đa chức/polyalcohol: ethylene glycol C2H4(OH)2, glycerol C3H5(OH)3); Theo bậc của alcohol (bằng bậc của C mang nhóm –OH: bậc I, bậc II, bậc III).",
          "**Danh pháp thay thế:** Tên hydrocarbon tương ứng (bỏ e) + số chỉ vị trí nhóm –OH + 'ol'.",
          "**Tên thông thường:** Alcohol + tên gốc alkyl + 'ic' (Ví dụ: methyl alcohol, ethyl alcohol, isopropyl alcohol)."
        ]));

        children.push(Section("II. Cấu tạo phân tử, Liên kết Hydrogen và Tính chất vật lí"));
        children.push(Sub("Giải thích bản chất nhiệt độ sôi cao và tính tan của Alcohol"));
        children.push(P("Trong nhóm –OH, do nguyên tử O có độ âm điện lớn (3,44) hút mạnh electron của liên kết O–H và C–O, liên kết O–H bị phân cực mạnh: nguyên tử O mang điện tích âm cục bộ (δ–) và nguyên tử H mang điện tích dương cục bộ (δ+)."));
        children.push(...Bullet([
          "**Liên kết hydrogen liên phân tử giữa các phân tử alcohol:** (R–O–H···O(R)–H···). Do có liên kết hydrogen liên phân tử bền vững, alcohol có **nhiệt độ sôi cao hơn rất nhiều** so với các hydrocarbon, dẫn xuất halogen hay ether có cùng phân tử khối hoặc cùng số nguyên tử carbon.",
          "**Liên kết hydrogen giữa alcohol với nước:** Các alcohol đầu dãy (methanol, ethanol, propanol) **tan vô hạn trong nước** vì các phân tử alcohol tạo được liên kết hydrogen mạnh với các phân tử nước. Khi mạch carbon tăng lên (tính kị nước tăng), độ tan trong nước giảm dần."
        ]));
        children.push(DataTable(
          ["Chất", "Công thức phân tử", "Phân tử khối (g/mol)", "Nhiệt độ sôi (°C)", "Độ tan trong nước (20 °C)"],
          [
            ["Propane", "CH3–CH2–CH3", "44", "–42,1", "Không tan"],
            ["Dimethyl ether", "CH3–O–CH3", "46", "–24,8", "Khí, tan ít"],
            ["Ethanol", "C2H5–OH", "46", "**+78,3**", "**Tan vô hạn**"],
            ["Ethylene glycol", "C2H4(OH)2", "62", "**+197,3**", "**Tan vô hạn**"],
            ["Glycerol", "C3H5(OH)3", "92", "**+290,0**", "**Tan vô hạn (sánh như siro)**"]
          ]
        ));
        children.push(spacer());

        children.push(Section("III. Tính chất hoá học của Alcohol"));
        children.push(Sub("1. Phản ứng thế nguyên tử H của nhóm –OH (Tác dụng với kim loại kiềm)"));
        children.push(P("Alcohol phản ứng với kim loại kiềm (Na, K) giải phóng khí hydrogen:"));
        children.push(Eq("2C₂H₅OH  +  2Na  →  2C₂H₅ONa (sodium ethoxide)  +  H₂↑"));
        children.push(P("Alcohol phản ứng êm dịu hơn nước nhiều (do gốc ankyl đẩy e làm giảm độ phân cực của O-H so với H-O-H). Dung dịch sodium ethoxide bị thủy phân hoàn toàn trong nước tái tạo lại alcohol và NaOH kiềm mạnh."));

        children.push(Sub("2. Phản ứng tách nước (Tạo ether hoặc alkene)"));
        children.push(...Bullet([
          "**Tách nước liên phân tử tạo Ether (ở 140 °C, xúc tác H2SO4 đặc):** Hai phân tử alcohol tách 1 phân tử nước tạo ether:",
          "2C₂H₅OH  →(140°C, H₂SO₄ đặc)  C₂H₅–O–C₂H₅ (diethyl ether)  +  H₂O",
          "Tổng quát: Hỗn hợp n alcohol tách nước ở 140 °C tạo tối đa **n(n+1)/2 ether**.",
          "**Tách nước nội phân tử tạo Alkene (ở 170 °C, xúc tác H2SO4 đặc):** Nhóm –OH tách cùng nguyên tử H ở carbon kề bên theo quy tắc Zaitsev:",
          "CH₃–CH₂–OH  →(170°C, H₂SO₄ đặc)  CH₂=CH₂  +  H₂O",
          "CH₃–CH(OH)–CH₂–CH₃  →(170°C)  CH₃–CH=CH–CH₃ (but-2-ene, sản phẩm chính)  +  H₂O"
        ]));

        children.push(Sub("3. Phản ứng oxi hoá"));
        children.push(DataTable(
          ["Bậc alcohol", "Tác nhân oxi hóa nhẹ (CuO, t°)", "Sản phẩm hữu cơ", "Phương trình minh họa tiêu biểu"],
          [
            ["Alcohol bậc I", "CuO (đun nóng)", "**Aldehyde (–CHO)**", "CH3–CH2–OH + CuO →(t°) CH3–CHO + Cu↓ (đỏ) + H2O"],
            ["Alcohol bậc II", "CuO (đun nóng)", "**Ketone (>C=O)**", "CH3–CH(OH)–CH3 + CuO →(t°) CH3–CO–CH3 + Cu↓ + H2O"],
            ["Alcohol bậc III", "CuO (đun nóng)", "**Không bị oxi hóa**", "Không đổi màu đen của CuO ở điều kiện êm dịu"]
          ]
        ));
        children.push(spacer());

        children.push(Sub("4. Tính chất đặc trưng của Polyalcohol có các nhóm –OH kề nhau"));
        children.push(P("Các polyalcohol có **từ 2 nhóm –OH liền kề nhau trở lên** (như ethylene glycol, glycerol) có khả năng hòa tan kết tủa Cu(OH)2 ở nhiệt độ thường, tạo thành **dung dịch phức chất màu xanh lam thẫm (xanh sapphire) đặc trưng**:"));
        children.push(Eq("2C₃H₅(OH)₃  +  Cu(OH)₂  →  [C₃H₅(OH)₂O]₂Cu (dung dịch xanh lam đậm)  +  2H₂O"));
        children.push(NoteBox("Dấu hiệu nhận biết", [
          "Phản ứng hòa tan Cu(OH)2 tạo dung dịch xanh lam đậm là **phản ứng đặc trưng dùng để nhận biết polyalcohol có nhóm –OH kề nhau** (như glycerol, ethylene glycol, glucose) để phân biệt với alcohol đơn chức (như ethanol) hoặc polyalcohol có nhóm –OH cách xa nhau."
        ]));

        children.push(Example("Ví dụ mẫu: Phân biệt các dung dịch không nhãn", [
          "Đề bài: Bằng phương pháp hóa học, hãy phân biệt 3 chất lỏng không màu sau: hexane, ethanol, glycerol.",
          "Lời giải từng bước:",
          "1. Cho nước cất vào từng mẫu thử:",
          "   • Mẫu thử không tan, tách lớp nổi lên trên mặt nước là **hexane** (hydrocarbon không phân cực).",
          "   • Hai mẫu thử tan hoàn toàn thành dung dịch đồng nhất là ethanol và glycerol.",
          "2. Cho dung dịch Cu(OH)2 (vừa mới điều chế từ CuSO4 + NaOH) vào 2 mẫu thử còn lại:",
          "   • Mẫu thử hòa tan Cu(OH)2 tạo dung dịch màu xanh lam thẫm là **glycerol** (polyalcohol có nhóm –OH kề nhau).",
          "   • Mẫu thử không hòa tan Cu(OH)2 (kết tủa xanh nhạt vẫn nguyên) là **ethanol**."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Bài 20", [
          {
            q: "Nêu tác hại nguy hiểm chết người của cồn công nghiệp Methanol (CH3OH) và cách phòng tránh ngộ độc rượu.",
            a: "Methanol vào cơ thể bị enzyme alcohol dehydrogenase ở gan chuyển hóa thành formaldehyde và formic acid (HCOOH) cực độc, gây toan máu nghiêm trọng, phá hủy tế bào thần kinh thị giác làm mù mắt vĩnh viễn và suy đa tạng dẫn tới tử vong. Phòng tránh: Tuyệt đối không uống rượu không rõ nguồn gốc, rượu pha chế trôi nổi giá rẻ."
          },
          {
            q: "Đun nóng hỗn hợp gồm ethanol và propan-1-ol với H2SO4 đặc ở 140 °C thu được tối đa bao nhiêu ether? Viết công thức các ether đó.",
            a: "Thu được tối đa 3 ether: C2H5-O-C2H5 (diethyl ether), C3H7-O-C3H7 (dipropyl ether) và C2H5-O-C3H7 (ethyl propyl ether)."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_11_p3",
      label: "Chương 5 (Phần 3): Phenol – Tính Acid, Phản ứng thế nhân thơm & Ôn tập Chương 5 (Bài 21, 22)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Bai("Bài 21. Phenol"));
        children.push(Section("I. Khái niệm và Cấu trúc phân tử"));
        children.push(P("**Phenol** là những hợp chất hữu cơ trong phân tử có nhóm hydroxyl (**–OH**) liên kết **trực tiếp với nguyên tử carbon của vòng benzene**."));
        children.push(P("Chất tiêu biểu và đơn giản nhất là phenol: **C6H5–OH** (tên IUPAC: phenol; tên thông thường: benzenol, carbolic acid)."));

        children.push(Sub("Giải thích ảnh hưởng tương hỗ giữa nhóm –OH và vòng benzene"));
        children.push(...Bullet([
          "**Ảnh hưởng của vòng benzene lên nhóm –OH:** Cặp electron p tự do chưa liên kết của nguyên tử Oxygen liên hợp với hệ electron pi của vòng benzene. Kết quả là mật độ electron trên nguyên tử O bị kéo dịch chuyển về phía vòng thơm, làm cho liên kết O–H phân cực mạnh hơn rất nhiều so với trong phân tử alcohol → nguyên tử H của nhóm –OH trở nên linh động hơn nhiều → **Phenol có tính acid (dù là acid yếu)**.",
          "**Ảnh hưởng của nhóm –OH lên vòng benzene:** Nhóm –OH là nhóm đẩy electron vào vòng thơm (hiệu ứng liên hợp dương +C), làm tăng mật độ electron của vòng benzene, đặc biệt là tại các vị trí **ortho (o-) và para (p-)** → **Vòng benzene trong phenol dễ tham gia phản ứng thế nguyên tử H hơn benzene rất nhiều**."
        ]));

        children.push(Section("II. Tính chất vật lí"));
        children.push(...Bullet([
          "Ở điều kiện thường, phenol là chất rắn dạng tinh thể không màu, nóng chảy ở 43 °C, để lâu trong không khí bị oxy hóa chuyển sang màu hồng nhạt.",
          "Ít tan trong nước lạnh, tan vô hạn trong nước ở nhiệt độ trên 66 °C; tan tốt trong dung môi hữu cơ (ethanol, ether).",
          "**Độc tính cao:** Phenol có tính sát trùng mạnh nhưng có thể gây bỏng nặng khi dính vào da, có thể thẩm thấu qua da gây ngộ độc toàn thân."
        ]));

        children.push(Section("III. Tính chất hoá học của Phenol"));
        children.push(Sub("1. Tính acid (Phản ứng thế H của nhóm –OH)"));
        children.push(P("Do liên kết O–H phân cực mạnh, phenol thể hiện **tính acid yếu** (tên gọi cổ: carbolic acid):"));
        children.push(Eq("C₆H₅OH  +  Na  →  C₆H₅ONa (sodium phenolate)  +  ½ H₂↑"));
        children.push(Eq("C₆H₅OH  +  NaOH (dung dịch kiềm)  →  C₆H₅ONa (tan trong nước)  +  H₂O"));
        children.push(P("So sánh tính acid: **Alcohol  <  Nước  <  Phenol  <  H₂CO₃  <  Carboxylic acid  <  Acid vô cơ mạnh**"));
        children.push(NoteBox("Lưu ý then chốt về tính acid của Phenol", [
          "• Phenol tác dụng được với dung dịch kiềm (NaOH, KOH) — tính chất mà alcohol thông thường không có.",
          "• Phenol có tính acid **rất yếu**, không làm đổi màu giấy quỳ tím.",
          "• Tính acid của phenol **yếu hơn carbonic acid (H2CO3)**. Khi sục khí CO2 vào dung dịch sodium phenolate, phenol bị đẩy ra ngoài làm dung dịch bị vẩn đục:",
          "  **C6H5ONa  +  CO2  +  H2O  →  C6H5OH↓ (vẩn đục)  +  NaHCO3**"
        ]));

        children.push(Sub("2. Phản ứng thế nguyên tử H ở vòng benzene (ở vị trí ortho và para)"));
        children.push(...Bullet([
          "**Phản ứng với nước Bromine (Thuốc thử nhận biết phenol):** Khi nhỏ dung dịch nước bromine vào dung dịch phenol, ngay lập tức xuất hiện **kết tủa trắng 2,4,6-tribromophenol** và làm mất màu nước bromine:",
          "C₆H₅OH  +  3Br₂  →  2,4,6-Br₃C₆H₂OH↓ (kết tủa trắng)  +  3HBr",
          "**Phản ứng nitro hóa với HNO3 đặc (xúc tác H2SO4 đặc):** Đun nóng phenol với hỗn hợp HNO3 đặc và H2SO4 đặc tạo thành **kết tủa vàng 2,4,6-trinitrophenol (acid picric)** dùng làm thuốc nổ và thuốc chữa bỏng:",
          "C₆H₅OH  +  3HNO₃ (đặc)  →(H₂SO₄ đặc, t°)  2,4,6-(NO₂)₃C₆H₂OH↓ (kết tủa vàng)  +  3H₂O"
        ]));

        children.push(DataTable(
          ["Đặc điểm so sánh", "Ethanol (C2H5OH)", "Phenol (C6H5OH)"],
          [
            ["Cấu tạo nhóm –OH", "Liên kết với carbon no", "Liên kết trực tiếp với vòng benzene"],
            ["Tác dụng với kim loại Na", "Có phản ứng giải phóng H2", "Có phản ứng giải phóng H2"],
            ["Tác dụng với dung dịch NaOH", "**Không phản ứng**", "**Có phản ứng** (tạo C6H5ONa)"],
            ["Tác dụng với nước Bromine", "**Không phản ứng**", "**Tạo kết tủa trắng 2,4,6-tribromophenol**"],
            ["Đổi màu quỳ tím", "Không đổi màu", "Không đổi màu (acid quá yếu)"]
          ]
        ));
        children.push(spacer());

        children.push(Bai("Ôn tập tổng kết Chương 5: Dẫn xuất Halogen – Alcohol – Phenol"));
        children.push(NoteBox("Sơ đồ biến hóa cốt lõi Chương 5", [
          "Alkene  ⇄(+HX / -HX [Zaitsev])  Dẫn xuất Halogen (R-X)  →(+NaOH, t°)  Alcohol (R-OH)",
          "Alcohol bậc I  →(+CuO, t°)  Aldehyde (R-CHO)  →(+O2, xt)  Carboxylic acid (R-COOH)",
          "Benzene  →(+Br2, Fe)  Bromobenzene  →(+NaOH đ, t° cao, p)  Sodium phenolate  →(+CO2+H2O)  Phenol"
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh toàn diện Chương 5", [
          {
            q: "Nhận biết 3 chất lỏng không màu riêng biệt sau: benzene, ethanol và dung dịch phenol.",
            a: "1. Nhỏ vài giọt nước bromine vào 3 mẫu thử: Mẫu thử xuất hiện kết tủa trắng là phenol. 2. Cho mẩu kim loại Na vào 2 mẫu thử còn lại: Mẫu thử sủi bọt khí H2 là ethanol. Mẫu thử không hiện tượng là benzene."
          },
          {
            q: "Giải thích vì sao phenol dính vào da tay gây bỏng rát, người ta phải rửa ngay bằng cồn ethanol hoặc xà phòng mà không rửa bằng nước?",
            a: "Vì phenol tan rất ít trong nước lạnh nhưng tan rất tốt trong cồn ethanol. Rửa bằng cồn giúp hòa tan và cuốn trôi nhanh chóng phenol ra khỏi bề mặt da, giảm thiểu tổn thương bỏng hóa chất."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_11_p4",
      label: "Chương 6 (Phần 1): Hợp chất Carbonyl – Aldehyde & Ketone (Bài 23, 24)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHƯƠNG 6: HỢP CHẤT CARBONYL – CARBOXYLIC ACID"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Ứng dụng đời sống", [
          "Hợp chất carbonyl và carboxylic acid là trung tâm của ngành công nghiệp hương liệu, thực phẩm, mĩ phẩm và tổng hợp hữu cơ.",
          "**Aldehyde & Ketone:** Formaldehyde (focmon) bảo quản mẫu tiêu bản sinh học; Vanillin tạo mùi thơm vani cho bánh kẹo kem; Cinnamaldehyde tạo hương quế đặc trưng; Acetone là dung môi tẩy sơn móng tay và hòa tan polymer hàng đầu.",
          "**Carboxylic acid:** Acetic acid là linh hồn của giấm ăn gia đình; Citric acid tạo vị chua thanh trong chanh cam; Benzoic acid làm chất bảo quản thực phẩm chống nấm mốc; Lactic acid trong sữa chua lên men tự nhiên dưỡng đường tiêu hóa."
        ]));
        children.push(spacer());

        children.push(Bai("Bài 23. Hợp chất carbonyl"));
        children.push(Section("I. Khái niệm, Phân loại và Danh pháp"));
        children.push(P("**Hợp chất carbonyl** là các hợp chất hữu cơ trong phân tử có chứa nhóm carbonyl (**>C=O**)."));
        children.push(...Bullet([
          "**Aldehyde:** là hợp chất carbonyl có nhóm carbonyl liên kết với ít nhất một nguyên tử hydrogen hoặc gốc hydrocarbon (nhóm chức **–CH=O**). Công thức chung aldehyde no, đơn chức, mạch hở: **CnH2n+1CHO** (n ≥ 0) hay **CnH2nO** (n ≥ 1).",
          "**Ketone:** là hợp chất carbonyl có nhóm carbonyl liên kết với hai gốc hydrocarbon (**R–CO–R'**). Công thức chung ketone no, đơn chức, mạch hở: **CnH2nO** (n ≥ 3).",
          "**Danh pháp thay thế IUPAC:**",
          "• Aldehyde: Tên hydrocarbon mạch chính (bắt đầu đánh số từ C của nhóm –CHO là số 1) + **'al'**.",
          "• Ketone: Tên hydrocarbon mạch chính + số chỉ vị trí C của nhóm >C=O + **'on'**."
        ]));
        children.push(DataTable(
          ["Công thức cấu tạo", "Tên thay thế IUPAC", "Tên thông thường", "Phân loại"],
          [
            ["H–CHO", "Methanal", "Formaldehyde (focmon khi hòa vào nước 37-40%)", "Aldehyde"],
            ["CH3–CHO", "Ethanal", "Acetaldehyde", "Aldehyde"],
            ["CH3–CH2–CHO", "Propanal", "Propionaldehyde", "Aldehyde"],
            ["C6H5–CHO", "Benzaldehyde", "Aldehyde benzoic (mùi hạnh nhân)", "Aldehyde thơm"],
            ["CH3–CO–CH3", "Propan-2-one", "Acetone (dung môi tẩy sơn)", "Ketone"],
            ["CH3–CO–C2H5", "Butan-2-one", "Ethyl methyl ketone (MEK)", "Ketone"]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Cấu tạo phân tử và Tính chất vật lí"));
        children.push(P("Trong nhóm carbonyl >C=O, nguyên tử Oxygen có độ âm điện lớn hơn carbon nên liên kết đôi C=O bị phân cực mạnh về phía O (nguyên tử C mang điện tích dương δ+, nguyên tử O mang điện tích âm δ–)."));
        children.push(...Bullet([
          "Do phân cực, nhiệt độ sôi của aldehyde và ketone **cao hơn các hydrocarbon và ether cùng phân tử khối**, nhưng **thấp hơn alcohol** tương ứng vì giữa các phân tử aldehyde/ketone **không có liên kết hydrogen liên phân tử**.",
          "Các aldehyde và ketone mạch ngắn (HCHO, CH3CHO, CH3COCH3) **tan vô hạn trong nước** do tạo được liên kết hydrogen với các phân tử nước."
        ]));

        children.push(Section("III. Tính chất hoá học của Hợp chất Carbonyl"));
        children.push(Sub("1. Phản ứng khử (Tạo alcohol)"));
        children.push(P("Hợp chất carbonyl bị khử bởi H2 (xúc tác Ni, t°) hoặc các chất khử phức hydride như NaBH4, LiAlH4:"));
        children.push(Eq("**Aldehyde bị khử tạo alcohol bậc I:**  R–CHO  +  H₂  →(Ni, t°)  R–CH₂–OH"));
        children.push(Eq("**Ketone bị khử tạo alcohol bậc II:**  R–CO–R'  +  H₂  →(Ni, t°)  R–CH(OH)–R'"));

        children.push(Sub("2. Phản ứng oxi hoá Aldehyde (Phản ứng đặc trưng phân biệt với Ketone)"));
        children.push(P("Do có nguyên tử H liên kết trực tiếp với nhóm carbonyl, aldehyde rất dễ bị oxi hoá bởi các tác nhân oxi hoá nhẹ. Ngược lại, ketone rất bền và không tham gia các phản ứng này ở điều kiện êm dịu:"));
        children.push(...Bullet([
          "**Phản ứng tráng bạc với thuốc thử Tollens [Ag(NH3)2]OH:**",
          "R–CHO  +  2[Ag(NH₃)₂]OH  →(t°)  R–COONH₄  +  2Ag↓ (bạc sáng bóng bám thành ống nghiệm)  +  3NH₃  +  H₂O",
          "Riêng **Formaldehyde (HCHO)** có cấu tạo đặc biệt có thể tráng bạc 2 lần, **1 mol HCHO tạo 4 mol Ag**.",
          "**Tác dụng với Cu(OH)2 trong môi trường kiềm đun nóng:**",
          "R–CHO  +  2Cu(OH)₂  +  NaOH  →(t°)  R–COONa  +  Cu₂O↓ (kết tủa đỏ gạch)  +  3H₂O",
          "**Làm mất màu dung dịch nước Bromine:**",
          "R–CHO  +  Br₂  +  H₂O  →  R–COOH  +  2HBr  (Ketone không làm mất màu nước bromine)"
        ]));

        children.push(Sub("3. Phản ứng tạo Iodoform (Phản ứng Haloform)"));
        children.push(P("Các hợp chất có chứa nhóm **methyl ketone (CH3–CO–R)** hoặc các alcohol có nhóm **CH3–CH(OH)–** phản ứng với I2 trong môi trường kiềm NaOH tạo ra **kết tủa màu vàng nhạt triiodomethane (CHI3, iodoform)** có mùi sát trùng đặc trưng:"));
        children.push(Eq("CH₃–CO–R  +  3I₂  +  4NaOH  →  CHI₃↓ (kết tủa vàng)  +  R–COONa  +  3NaI  +  3H₂O"));
        children.push(NoteBox("Ứng dụng phản ứng Iodoform", [
          "Phản ứng tạo iodoform dùng để **nhận biết các hợp chất có nhóm CH3–CO–** (như acetone CH3COCH3, acetaldehyde CH3CHO) hoặc nhóm CH3–CH(OH)– (như ethanol, propan-2-ol)."
        ]));

        children.push(Example("Ví dụ mẫu: Bài toán tráng bạc", [
          "Đề bài: Cho 4,4 gam một aldehyde no, đơn chức, mạch hở X tác dụng hoàn toàn với lượng dư thuốc thử Tollens đun nóng thu được 21,6 gam kết tủa bạc Ag kim loại. Xác định công thức cấu tạo và tên gọi của X.",
          "Lời giải từng bước:",
          "1. Số mol Ag thu được: n_Ag = 21,6 / 108 = 0,2 mol.",
          "2. Xét 2 trường hợp:",
          "   • Nếu X là HCHO: n_HCHO = n_Ag / 4 = 0,05 mol → M_X = 4,4 / 0,05 = 88 g/mol ≠ 30 (loại).",
          "   • Nếu X khác HCHO: n_X = n_Ag / 2 = 0,2 / 2 = 0,1 mol.",
          "     M_X = 4,4 / 0,1 = 44 g/mol.",
          "3. Công thức phân tử R–CHO: R + 29 = 44 → R = 15 (gốc methyl –CH3).",
          "   Vậy X là **CH3–CHO (Ethanal hay Acetaldehyde)**."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Bài 23", [
          {
            q: "Bằng phương pháp hóa học nào đơn giản nhất để phân biệt hai chất lỏng không màu: propanal và acetone?",
            a: "Dùng thuốc thử Tollens [Ag(NH3)2]OH đun nóng hoặc dung dịch nước bromine: Propanal tráng bạc tạo lớp bạc sáng bóng (và làm mất màu nước bromine); Acetone không có hiện tượng."
          },
          {
            q: "Viết phương trình hóa học của phản ứng tạo iodoform từ acetone (CH3COCH3).",
            a: "CH3-CO-CH3 + 3I2 + 4NaOH → CHI3↓ (vàng) + CH3COONa + 3NaI + 3H2O."
          }
        ]));

        return children;
      }
    },
    {
      id: "hk2_11_p5",
      label: "Chương 6 (Phần 2): Carboxylic Acid & Ôn tập Học kì 2 (Bài 25)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Bai("Bài 25. Carboxylic acid"));
        children.push(Section("I. Khái niệm, Phân loại và Danh pháp"));
        children.push(P("**Carboxylic acid** là những hợp chất hữu cơ trong phân tử có chứa nhóm carboxyl (**–COOH**) liên kết trực tiếp với nguyên tử carbon hoặc nguyên tử hydrogen."));
        children.push(...Bullet([
          "**Phân loại:** Acid no, không no, thơm; Acid đơn chức (chứa 1 nhóm –COOH) và đa chức (chứa nhiều nhóm –COOH như oxalic acid HOOC–COOH).",
          "**Công thức chung acid no, đơn chức, mạch hở:** **CnH2n+1COOH** (n ≥ 0) hay **CnH2nO2** (n ≥ 1).",
          "**Danh pháp thay thế:** Acid + tên hydrocarbon mạch chính (tính cả C của nhóm –COOH là C số 1) + **'oic'**.",
          "**Tên thông thường:** Bắt nguồn từ nguồn gốc tìm ra chúng: HCOOH (formic acid - kiến lửa); CH3COOH (acetic acid - giấm ăn); C2H5COOH (propionic acid); C3H7COOH (butyric acid - bơ ôi); C6H5COOH (benzoic acid)."
        ]));

        children.push(Section("II. Cấu tạo phân tử và Tính chất vật lí"));
        children.push(Sub("Giải thích nguyên nhân nhiệt độ sôi cao nhất của Carboxylic Acid"));
        children.push(P("Trong nhóm carboxyl –COOH, có sự kết hợp của nhóm carbonyl >C=O hút electron và nhóm hydroxyl –OH nhường electron, làm cho liên kết O–H phân cực cực kỳ mạnh."));
        children.push(...Bullet([
          "**Liên kết hydrogen dạng dime (nhị hợp):** Giữa hai phân tử carboxylic acid hình thành hai liên kết hydrogen hỗ tương rất bền vững dạng vòng dime (dạng phân tử kép).",
          "Do đó, carboxylic acid có **nhiệt độ sôi cao hơn alcohol, aldehyde, ketone, ester có cùng phân tử khối hoặc cùng số nguyên tử C**.",
          "Các acid đầu dãy (formic, acetic, propionic) **tan vô hạn trong nước** do tạo liên kết hydrogen mạnh với nước. Nhiệt độ sôi tăng dần theo chiều tăng của phân tử khối."
        ]));
        children.push(DataTable(
          ["Hợp chất", "Công thức phân tử", "Phân tử khối (g/mol)", "Nhiệt độ sôi (°C)", "Vị giác / Đặc điểm"],
          [
            ["Ethanol", "C2H5–OH", "46", "78,3", "Cay nồng"],
            ["Formic acid", "H–COOH", "46", "**100,5**", "Chua gắt, gây bỏng rát (nọc kiến)"],
            ["Propan-1-ol", "C3H7–OH", "60", "97,2", "Cay nồng"],
            ["Acetic acid", "CH3–COOH", "60", "**118,2**", "Chua thanh dịu (giấm ăn 2-5%)"]
          ]
        ));
        children.push(spacer());

        children.push(Section("III. Tính chất hoá học của Carboxylic Acid"));
        children.push(Sub("1. Tính acid"));
        children.push(P("Carboxylic acid là các **acid yếu** (phân li thuận nghịch trong nước sinh ra H+), nhưng có đầy đủ tính chất chung của một acid:"));
        children.push(...Bullet([
          "**Làm đổi màu chất chỉ thị:** Làm quỳ tím chuyển sang màu đỏ (hồng).",
          "**Tác dụng với kim loại đứng trước H:** 2CH3COOH + 2Na → 2CH3COONa + H2↑; 2CH3COOH + Mg → (CH3COO)2Mg + H2↑.",
          "**Tác dụng với basic oxide và base:** 2CH3COOH + CuO → (CH3COO)2Cu (xanh lam) + H2O; CH3COOH + NaOH → CH3COONa + H2O.",
          "**Tác dụng với muối của acid yếu hơn (muối carbonate, hydrogencarbonate):**",
          "CH₃COOH  +  NaHCO₃  →  CH₃COONa  +  CO₂↑ (sủi bọt khí mạnh)  +  H₂O",
          "2CH₃COOH  +  CaCO₃  →  (CH₃COO)₂Ca  +  CO₂↑  +  H₂O (tẩy cặn vôi ấm đun nước)."
        ]));

        children.push(Sub("2. Phản ứng ester hoá"));
        children.push(P("Khi đun nóng carboxylic acid với alcohol có xúc tác **H2SO4 đặc**, xảy ra phản ứng tạo **ester** và nước (phản ứng thuận nghịch):"));
        children.push(Eq("CH₃COOH  +  C₂H₅OH  ⇌(H₂SO₄ đặc, t°)  CH₃COOC₂H₅ (ethyl acetate, mùi thơm quả chín)  +  H₂O"));
        children.push(NoteBox("Vai trò của H2SO4 đặc trong phản ứng ester hóa", [
          "• Đóng vai trò là **chất xúc tác acid** làm tăng tốc độ phản ứng đạt tới trạng thái cân bằng.",
          "• Đóng vai trò là **chất háo nước**, hút nước sinh ra để làm cân bằng chuyển dịch theo chiều thuận (tăng hiệu suất tạo ester theo nguyên lí Le Chatelier)."
        ]));

        children.push(Bai("Ôn tập tổng kết toàn diện lý thuyết Hóa học 11 Học kì 2"));
        children.push(DataTable(
          ["Chất hữu cơ", "Nhóm chức", "Nhiệt độ sôi", "Phản ứng đặc trưng nổi bật", "Thuốc thử nhận biết"],
          [
            ["Dẫn xuất Halogen", "–X (Cl, Br, I)", "Khá thấp", "Thủy phân (NaOH, H2O, t°); Tách HX (KOH/cồn)", "Thủy phân + acid hóa + AgNO3"],
            ["Alcohol", "–OH (no)", "Cao (có lk H)", "Tác dụng Na; Tách nước (140° tạo ether, 170° tạo alkene)", "Cu(OH)2 xanh lam (với polyalcohol kề)"],
            ["Phenol", "–OH (thơm)", "Cao", "Tác dụng Na, NaOH; Thế nhân thơm o-, p-", "Nước Bromine (kết tủa trắng)"],
            ["Aldehyde", "–CHO", "Trung bình", "Khử (+H2 tạo alcohol I); Oxi hóa (tráng bạc, Cu(OH)2 kiềm)", "Thuốc thử Tollens (tráng bạc), Cu(OH)2 đỏ gạch"],
            ["Ketone", ">C=O", "Trung bình", "Khử (+H2 tạo alcohol II); Tạo iodoform (với nhóm CH3CO-)", "Thuốc thử I2/NaOH (kết tủa vàng CHI3)"],
            ["Carboxylic Acid", "–COOH", "**Cao nhất**", "Tính acid (quỳ tím hóa đỏ, đẩy CO2 từ NaHCO3); Ester hóa", "Quỳ tím (hóa đỏ), dd NaHCO3 (sủi bọt khí CO2)"]
          ]
        ));
        children.push(spacer());

        children.push(Example("Ví dụ mẫu: Nhận biết 4 dung dịch mất nhãn", [
          "Đề bài: Bằng phương pháp hóa học, hãy nhận biết 4 lọ hóa chất mất nhãn: ethanol, glycerol, acetaldehyde, acetic acid.",
          "Lời giải từng bước:",
          "1. Dùng quỳ tím nhúng vào từng mẫu thử: Mẫu thử làm quỳ tím hóa đỏ là **acetic acid**.",
          "2. Cho thuốc thử Tollens [Ag(NH3)2]OH đun nóng vào 3 mẫu thử còn lại: Mẫu thử xuất hiện lớp bạc sáng bóng tráng gương là **acetaldehyde**.",
          "3. Cho Cu(OH)2 ở nhiệt độ thường vào 2 mẫu thử còn lại (ethanol, glycerol):",
          "   • Mẫu thử hòa tan kết tủa tạo dung dịch màu xanh lam thẫm là **glycerol**.",
          "   • Mẫu thử không hiện tượng (Cu(OH)2 không tan) là **ethanol**."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh toàn diện Chương 6", [
          {
            q: "Vì sao người ta thường dùng giấm ăn (chứa acetic acid) để khử mùi tanh của cá trước khi chế biến?",
            a: "Mùi tanh của cá chủ yếu do các amine (hợp chất có tính base yếu như trimethylamine) gây ra. Acetic acid trong giấm ăn phản ứng trung hòa các amine này tạo thành các muối tan không bay hơi, làm mất hoàn toàn mùi tanh."
          },
          {
            q: "Sắp xếp theo chiều nhiệt độ sôi tăng dần: (1) CH3COOH, (2) C2H5OH, (3) CH3CHO, (4) C2H6. Giải thích.",
            a: "Thứ tự: (4) C2H6 < (3) CH3CHO < (2) C2H5OH < (1) CH3COOH. Giải thích: C2H6 là hydrocarbon không phân cực; CH3CHO phân cực nhưng không có liên kết H; C2H5OH có liên kết H liên phân tử; CH3COOH có liên kết H dạng dime phân tử kép bền vững nhất nên nhiệt độ sôi cao nhất."
          }
        ]));

        return children;
      }
    }
  ]
};
