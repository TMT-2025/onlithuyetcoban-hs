// Dữ liệu lý thuyết chi tiết Hóa học 10 - HK1 chuẩn theo Tom_tat_ly_thuyet_Hoa_10_HK1_KNTT 3
module.exports = {
  title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 10 – HỌC KÌ 1",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Nhập môn, Nguyên tử, BTH, Liên kết & Oxi hóa - khử",
  parts: [
    {
      id: "hk1_10_p1",
      label: "Phần 1/7: Mở đầu & Thành phần nguyên tử, Nguyên tố hoá học (Bài 1, 2)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("MỞ ĐẦU: NHẬP MÔN HÓA HỌC"));
children.push(Section("I. Đối tượng nghiên cứu của hoá học"));
children.push(P("Hoá học là ngành khoa học thuộc lĩnh vực khoa học tự nhiên, nghiên cứu về **thành phần, cấu trúc, tính chất và sự biến đổi của chất**, đồng thời nghiên cứu **ứng dụng của chúng** trong đời sống."));
children.push(P("Đối tượng nghiên cứu của hoá học là **chất** và **sự biến đổi của chất** (biến đổi vật lí, biến đổi hoá học)."));
children.push(Section("II. Vai trò của hoá học đối với đời sống và sản xuất"));
children.push(...Bullet([
  "Là cơ sở của nhiều ngành công nghiệp: hoá chất, dược phẩm, phân bón, vật liệu, năng lượng, thực phẩm...",
  "Gắn bó mật thiết với đời sống hằng ngày: y tế, nông nghiệp, môi trường, mĩ phẩm...",
  "Có mối liên hệ chặt chẽ với các ngành khoa học khác: Vật lí, Sinh học, Y – Dược, Nông nghiệp, Khoa học Trái Đất...",
]));
children.push(Section("III. Phương pháp học tập và nghiên cứu hoá học"));
children.push(...Bullet([
  "**Phương pháp học tập:** quan sát – mô tả; phân loại – hệ thống hoá; mô hình hoá.",
  "**Phương pháp nghiên cứu:** nghiên cứu lí thuyết; nghiên cứu thực nghiệm; nghiên cứu ứng dụng (kết hợp lí thuyết và thực nghiệm).",
]));
children.push(spacer());

// ================= CHƯƠNG 1 =================
children.push(Chapter("CHƯƠNG 1: CẤU TẠO NGUYÊN TỬ"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Hiểu cấu tạo nguyên tử là **nền tảng để giải thích mọi tính chất hoá học** — từ vì sao muối ăn có vị mặn đến vì sao vàng không bị gỉ.",
  "**Đồng vị phóng xạ** được dùng để chẩn đoán và điều trị ung thư (I-131, Co-60), khử trùng thiết bị y tế, và xác định niên đại cổ vật, hoá thạch bằng phương pháp **carbon-14**.",
  "Việc khám phá electron, proton, neutron đã mở đường cho công nghệ hạt nhân (nhà máy điện hạt nhân), vật liệu bán dẫn trong chip điện tử, và các thiết bị chẩn đoán hình ảnh y khoa (PET, MRI).",
]));
children.push(spacer());

children.push(Bai("Bài 1. Thành phần của nguyên tử"));
children.push(Section("I. Các loại hạt cơ bản cấu tạo nên nguyên tử"));
children.push(P("Nguyên tử gồm **hạt nhân** (ở tâm, chứa proton và neutron) và **lớp vỏ electron** (các electron chuyển động xung quanh hạt nhân)."));
children.push(DataTable(
  ["Loại hạt", "Kí hiệu", "Khối lượng (amu)", "Điện tích tương đối", "Vị trí"],
  [
    ["Electron", "e", "≈ 0,00055", "–1", "Lớp vỏ"],
    ["Proton", "p", "≈ 1", "+1", "Hạt nhân"],
    ["Neutron", "n", "≈ 1", "0", "Hạt nhân"],
  ],
));
children.push(spacer());
children.push(...Img("01_mohinh_nguyentu.png", 320, "Mô hình cấu tạo nguyên tử: hạt nhân ở tâm, các electron chuyển động trên các lớp xung quanh."));
children.push(NoteBox("Kết luận", [
  "Nguyên tử có cấu tạo rỗng, gồm hạt nhân mang điện dương ở tâm và lớp vỏ electron mang điện âm chuyển động xung quanh.",
  "Nguyên tử trung hoà về điện: **số proton (p) = số electron (e)**.",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Nguyên tử aluminium (nhôm) có 13 proton và 14 neutron trong hạt nhân. Hỏi nguyên tử này có bao nhiêu electron?",
  "Lời giải: Vì nguyên tử trung hoà về điện nên số electron = số proton = 13.",
]));
children.push(Section("II. Kích thước và khối lượng nguyên tử"));
children.push(...Bullet([
  "Đường kính nguyên tử cỡ **10⁻¹⁰ m**; đường kính hạt nhân nhỏ hơn đường kính nguyên tử khoảng **10 000 – 100 000 lần** → nguyên tử có cấu tạo rỗng.",
  "Đơn vị khối lượng nguyên tử **amu**: 1 amu = 1/12 khối lượng một nguyên tử đồng vị carbon-12 ≈ 1,6605.10⁻²⁴ g.",
  "Khối lượng nguyên tử tập trung hầu như toàn bộ ở **hạt nhân** vì khối lượng electron rất nhỏ so với proton, neutron.",
]));
children.push(...Img("02_tyle_kichthuoc.png", 380, "So sánh tỉ lệ kích thước giữa nguyên tử và hạt nhân — vì sao nói nguyên tử có cấu tạo rỗng."));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao nói nguyên tử có cấu tạo rỗng?", a: "Vì đường kính hạt nhân rất nhỏ so với đường kính nguyên tử (nhỏ hơn khoảng 10 000 – 100 000 lần), phần không gian còn lại là nơi các electron chuyển động." },
  { q: "Khối lượng của nguyên tử tập trung chủ yếu ở đâu? Vì sao?", a: "Ở hạt nhân, vì khối lượng electron rất nhỏ (≈ 0,00055 amu) so với proton và neutron (≈ 1 amu mỗi hạt)." },
]));

children.push(Bai("Bài 2. Nguyên tố hoá học"));
children.push(Section("I. Hạt nhân nguyên tử"));
children.push(...Bullet([
  "**Điện tích hạt nhân** = số đơn vị điện tích hạt nhân = **Z** (số proton).",
  "**Số khối A = Z + N** (N: số neutron). Số khối không có đơn vị.",
]));
children.push(Section("II. Nguyên tố hoá học"));
children.push(...Bullet([
  "**Số hiệu nguyên tử (Z)**: là số đơn vị điện tích hạt nhân, đặc trưng cho một nguyên tố hoá học.",
  "**Nguyên tố hoá học** là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (cùng Z).",
  "**Kí hiệu nguyên tử:** ᴬZX, trong đó X là kí hiệu nguyên tố, A là số khối, Z là số hiệu nguyên tử (viết ở góc trên trái và góc dưới trái của X).",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Xác định số proton, neutron, electron và số khối của nguyên tử potassium (K), biết kí hiệu nguyên tử là ³⁹₁₉K.",
  "Lời giải: Z = 19 → số proton = số electron = 19. Số khối A = 39 → số neutron N = A − Z = 39 − 19 = 20.",
]));
children.push(Section("III. Đồng vị"));
children.push(P("**Đồng vị** là những nguyên tử có cùng số proton (cùng Z) nhưng khác số neutron (khác số khối A)."));
children.push(P("Ví dụ: Hydrogen có 3 đồng vị bền là ¹H (protium), ²H (deuterium – D), ³H (tritium – T)."));
children.push(...Img("03_dongvi_hydrogen.png", 440, "Ba đồng vị bền của nguyên tố hydrogen — cùng 1 proton nhưng khác số neutron."));
children.push(Section("IV. Nguyên tử khối trung bình"));
children.push(P("Nguyên tử khối trung bình của một nguyên tố (kí hiệu **A̅**) được tính theo phần trăm số nguyên tử của các đồng vị:"));
children.push(P("**A̅ = (A₁.x₁ + A₂.x₂ + ... )/100**  (x: phần trăm số nguyên tử mỗi đồng vị)", { align: AlignmentType.CENTER }));
children.push(Example("Ví dụ minh hoạ", [
  "Nguyên tố chlorine có 2 đồng vị bền: ³⁵Cl chiếm 75,77% và ³⁷Cl chiếm 24,23% số nguyên tử. Tính nguyên tử khối trung bình của chlorine.",
  "Lời giải: A̅ = (35 × 75,77 + 37 × 24,23)/100 ≈ **35,48**.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Hai nguyên tử có cùng số proton nhưng khác số neutron thì có phải là hai đồng vị của cùng một nguyên tố không?", a: "Đúng, vì đồng vị được định nghĩa là các nguyên tử cùng Z (cùng số proton), khác N (khác số khối A)." },
  { q: "Vì sao nguyên tử khối ghi trong bảng tuần hoàn thường là số thập phân (không nguyên)?", a: "Vì đó là nguyên tử khối trung bình, được tính theo tỉ lệ phần trăm số nguyên tử của các đồng vị tồn tại trong tự nhiên." },
]));

        return children;
      }
    },
    {
      id: "hk1_10_p2",
      label: "Phần 2/7: Cấu trúc lớp vỏ electron của nguyên tử & Ôn tập Chương 1 (Bài 3, 4)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 3. Cấu trúc lớp vỏ electron của nguyên tử"));
children.push(Section("I. Sự chuyển động của electron trong nguyên tử"));
children.push(P("Theo mô hình hiện đại, electron chuyển động rất nhanh quanh hạt nhân, không theo quỹ đạo xác định, tạo thành **đám mây electron**. **Orbital nguyên tử (AO)** là vùng không gian xung quanh hạt nhân mà tại đó xác suất tìm thấy electron khoảng 90%."));
children.push(...Bullet([
  "Orbital **s**: có dạng hình cầu.",
  "Orbital **p**: có dạng hình số 8 nổi, gồm 3 orbital pₓ, p_y, p_z định hướng theo 3 trục toạ độ.",
  "Mỗi ô orbital chứa tối đa **2 electron** có chiều tự quay ngược nhau (được kí hiệu bằng hai mũi tên ngược chiều).",
]));
children.push(...Img("04_orbital_s_p.png", 400, "Hình dạng orbital s (hình cầu) và orbital p (hình số 8 nổi)."));
children.push(Section("II. Lớp và phân lớp electron"));
children.push(DataTable(
  ["Lớp (n)", "1", "2", "3", "4"],
  [
    ["Tên lớp", "K", "L", "M", "N"],
    ["Số electron tối đa (2n²)", "2", "8", "18", "32"],
  ],
));
children.push(spacer());
children.push(P("Mỗi lớp electron chia thành các **phân lớp** kí hiệu s, p, d, f. Số electron tối đa: phân lớp s chứa **2e**, phân lớp p chứa **6e**, phân lớp d chứa **10e**, phân lớp f chứa **14e**."));
children.push(Section("III. Cấu hình electron nguyên tử"));
children.push(Sub("1. Ba nguyên lí, quy tắc cơ bản"));
children.push(...Bullet([
  "**Nguyên lí vững bền:** ở trạng thái cơ bản, electron chiếm lần lượt các orbital có mức năng lượng từ thấp đến cao: 1s 2s 2p 3s 3p 4s 3d 4p 5s...",
  "**Nguyên lí Pauli:** mỗi orbital chỉ chứa tối đa 2 electron và có chiều tự quay ngược nhau.",
  "**Quy tắc Hund:** trong cùng một phân lớp, các electron được phân bố sao cho số electron độc thân là tối đa và có chiều tự quay giống nhau, trước khi ghép đôi.",
]));
children.push(...Img("05_thutu_mucnangluong.png", 480, "Trật tự mức năng lượng các orbital — cơ sở của nguyên lí vững bền."));
children.push(Sub("2. Cách viết cấu hình electron nguyên tử"));
children.push(P("Bước 1: Xác định số electron (bằng số proton Z). Bước 2: Điền electron theo mức năng lượng tăng dần. Bước 3: Sắp xếp lại các phân lớp theo đúng thứ tự lớp (1, 2, 3...) để viết cấu hình chính thức."));
children.push(P("Ví dụ: Nguyên tử Na (Z = 11): 1s² 2s² 2p⁶ 3s¹."));
children.push(Sub("3. Biểu diễn cấu hình electron theo ô orbital"));
children.push(P("Ô orbital giúp thể hiện rõ số electron độc thân — áp dụng quy tắc Hund khi điền các electron cuối cùng vào một phân lớp chưa bão hoà."));
children.push(...Img("06_o_luongtu_oxygen.png", 480, "Cấu hình electron theo ô orbital của nguyên tử oxygen (Z = 8): 1s² 2s² 2p⁴, có 2 electron độc thân."));
children.push(Example("Ví dụ minh hoạ", [
  "Viết cấu hình electron của nguyên tử chlorine (Z = 17) và cho biết chlorine có bao nhiêu electron độc thân.",
  "Lời giải: Điền theo mức năng lượng tăng dần: 1s² 2s² 2p⁶ 3s² 3p⁵ → sắp xếp lại theo lớp (đã đúng thứ tự). Phân lớp 3p⁵ có 5 electron trong 3 ô orbital (chứa tối đa 6) nên có **1 electron độc thân**.",
]));
children.push(Section("IV. Đặc điểm của lớp electron ngoài cùng"));
children.push(NoteBox("Ghi nhớ", [
  "Lớp electron ngoài cùng có tối đa **8 electron** (riêng lớp K tối đa 2 electron).",
  "Nguyên tử có **8e** ở lớp ngoài cùng (hoặc 2e đối với He) là khí hiếm, bền vững, không hoạt động hoá học.",
  "Nguyên tử có 1, 2, 3 electron lớp ngoài cùng thường là **kim loại** (trừ H, He, B).",
  "Nguyên tử có 5, 6, 7 electron lớp ngoài cùng thường là **phi kim**.",
  "Nguyên tử có 4 electron lớp ngoài cùng có thể là kim loại hoặc phi kim.",
]));

children.push(Bai("Ôn tập Chương 1"));
children.push(...Bullet([
  "Nguyên tử gồm hạt nhân (p, n) và vỏ electron (e); nguyên tử trung hoà điện nên số p = số e.",
  "Số khối A = Z + N; kí hiệu nguyên tử ᴬZX; đồng vị là các nguyên tử cùng Z khác A.",
  "Electron được phân bố vào các lớp, phân lớp, orbital theo nguyên lí vững bền, nguyên lí Pauli và quy tắc Hund.",
  "Số electron lớp ngoài cùng quyết định nhiều tính chất hoá học cơ bản của nguyên tố.",
]));
children.push(spacer());

        return children;
      }
    },
    {
      id: "hk1_10_p3",
      label: "Phần 3/7: Cấu tạo BTH & Xu hướng biến đổi tính chất nguyên tử (Bài 5, 6)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 2: BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HOÁ HỌC"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Bảng tuần hoàn là **\"bản đồ\" tra cứu tính chất** của gần 120 nguyên tố — công cụ không thể thiếu trong nghiên cứu, sản xuất hoá chất, luyện kim, dược phẩm và vật liệu mới.",
  "Nhờ quy luật tuần hoàn, **Mendeleev đã dự đoán chính xác tính chất của các nguyên tố chưa được tìm ra** (như gallium, germanium) trước khi chúng được phát hiện trong phòng thí nghiệm — minh chứng cho sức mạnh dự báo của khoa học.",
  "Việc hiểu xu hướng biến đổi tính chất giúp các nhà khoa học **lựa chọn đúng nguyên tố** để chế tạo pin, chất bán dẫn, hợp kim nhẹ – bền, hoặc vật liệu chịu nhiệt.",
]));
children.push(spacer());

children.push(Bai("Bài 5. Cấu tạo của bảng tuần hoàn các nguyên tố hoá học"));
children.push(Section("I. Nguyên tắc sắp xếp"));
children.push(...Bullet([
  "Các nguyên tố được sắp xếp theo chiều **tăng dần điện tích hạt nhân**.",
  "Các nguyên tố có **cùng số lớp electron** trong nguyên tử được xếp thành một **hàng** (chu kì).",
  "Các nguyên tố có **cùng số electron hoá trị** trong nguyên tử được xếp thành một **cột** (nhóm).",
]));
children.push(Section("II. Ô nguyên tố, chu kì, nhóm"));
children.push(...Bullet([
  "**Ô nguyên tố:** số thứ tự ô = số hiệu nguyên tử Z của nguyên tố đó; ô chứa kí hiệu, tên nguyên tố, nguyên tử khối trung bình, cấu hình electron...",
  "**Chu kì:** dãy nguyên tố có cùng số lớp electron, xếp theo chiều Z tăng dần. Có 7 chu kì; **số thứ tự chu kì = số lớp electron**. Chu kì 1, 2, 3 là chu kì nhỏ; chu kì 4, 5, 6, 7 là chu kì lớn.",
  "**Nhóm:** tập hợp các nguyên tố có cấu hình electron tương tự nhau, tính chất hoá học gần giống nhau, xếp thành một cột. Bảng tuần hoàn có **8 nhóm A** (IA – VIIIA) và **8 nhóm B**.",
]));
children.push(Section("III. Phân loại nguyên tố"));
children.push(DataTable(
  ["Khối nguyên tố", "Đặc điểm electron cuối cùng điền vào", "Vị trí trong bảng"],
  [
    ["Nguyên tố s", "Phân lớp s", "Nhóm IA, IIA (trừ He)"],
    ["Nguyên tố p", "Phân lớp p", "Nhóm IIIA – VIIIA"],
    ["Nguyên tố d", "Phân lớp d", "Nhóm B (kim loại chuyển tiếp)"],
    ["Nguyên tố f", "Phân lớp f", "Họ lanthanide, actinide"],
  ],
));
children.push(spacer());
children.push(...Img("07_khoi_nguyento.png", 420, "Sơ đồ các khối nguyên tố s, p, d, f trong bảng tuần hoàn."));
children.push(NoteBox("Ghi nhớ", [
  "Với nguyên tố nhóm A: **số thứ tự nhóm = số electron hoá trị** (số electron lớp ngoài cùng).",
  "Ví dụ: Cl (Z = 17): 1s² 2s² 2p⁶ 3s² 3p⁵ → chu kì 3 (3 lớp electron), nhóm VIIA (7 electron lớp ngoài cùng).",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Nguyên tử X có Z = 20, cấu hình electron: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s². Xác định vị trí của X trong bảng tuần hoàn.",
  "Lời giải: X có 4 lớp electron → chu kì 4. Electron lớp ngoài cùng là 4s² (2 electron hoá trị) → nhóm IIA. Vậy X thuộc chu kì 4, nhóm IIA (đó là calcium, Ca).",
]));

children.push(Bai("Bài 6. Xu hướng biến đổi một số tính chất của nguyên tử các nguyên tố trong một chu kì và trong một nhóm"));
children.push(Section("I. Bán kính nguyên tử"));
children.push(DataTable(
  ["Chiều tăng Z", "Trong một chu kì", "Trong một nhóm A"],
  [
    ["Bán kính nguyên tử", "Giảm dần", "Tăng dần"],
    ["Nguyên nhân", "Điện tích hạt nhân tăng, lực hút hạt nhân – electron tăng, số lớp e không đổi", "Số lớp electron tăng dần"],
  ],
));
children.push(spacer());
children.push(Sub("Giải thích"));
children.push(P("Trong một **chu kì**, các nguyên tử có **cùng số lớp electron**, nhưng theo chiều tăng Z thì điện tích hạt nhân tăng dần. Lực hút tĩnh điện giữa hạt nhân và các electron lớp ngoài cùng vì thế **mạnh hơn**, kéo electron lại gần hạt nhân hơn → bán kính nguyên tử **giảm dần**."));
children.push(P("Trong một **nhóm A**, theo chiều tăng Z, nguyên tử có **thêm lớp electron mới**. Việc tăng số lớp electron làm khoảng cách từ hạt nhân đến electron ngoài cùng tăng lên nhiều, lấn át ảnh hưởng của việc điện tích hạt nhân tăng → bán kính nguyên tử **tăng dần**."));
children.push(Section("II. Độ âm điện"));
children.push(P("**Độ âm điện** đặc trưng cho khả năng hút electron của nguyên tử khi hình thành liên kết hoá học. Trong một chu kì, theo chiều tăng Z, độ âm điện **tăng dần**. Trong một nhóm A, theo chiều tăng Z, độ âm điện **giảm dần**."));
children.push(Sub("Giải thích"));
children.push(P("Độ âm điện có liên hệ chặt chẽ với bán kính nguyên tử: bán kính **càng nhỏ** thì hạt nhân **càng hút electron dùng chung mạnh hơn** (electron liên kết ở gần hạt nhân) → độ âm điện càng lớn. Vì vậy, cùng chu kì (Z tăng, bán kính giảm) thì độ âm điện tăng; cùng nhóm A (Z tăng, bán kính tăng) thì độ âm điện giảm."));
children.push(Section("III. Tính kim loại, tính phi kim"));
children.push(P("Trong một chu kì, theo chiều tăng Z: tính kim loại **giảm dần**, tính phi kim **tăng dần**. Trong một nhóm A, theo chiều tăng Z: tính kim loại **tăng dần**, tính phi kim **giảm dần**."));
children.push(Sub("Giải thích"));
children.push(P("**Tính kim loại** là khả năng **nhường electron**, còn **tính phi kim** là khả năng **nhận electron**. Nguyên tử có bán kính lớn và độ âm điện nhỏ thì electron lớp ngoài cùng ở xa hạt nhân, bị hạt nhân hút yếu, nên **dễ nhường electron** → tính kim loại mạnh. Ngược lại, nguyên tử có bán kính nhỏ và độ âm điện lớn thì hạt nhân hút electron lớp ngoài cùng (kể cả electron sắp nhận thêm) rất mạnh → **dễ nhận electron** → tính phi kim mạnh."));
children.push(P("Do đó, xu hướng biến đổi tính kim loại – phi kim luôn **song hành ngược chiều** với xu hướng biến đổi bán kính và cùng chiều với độ âm điện."));
children.push(...Img("08_xuhuong_bienoi.png", 400, "Xu hướng biến đổi bán kính nguyên tử và độ âm điện trong bảng tuần hoàn."));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "So sánh bán kính nguyên tử của Na, Mg, Al (cùng chu kì 3).", a: "Cùng chu kì, Z tăng dần Na (11) < Mg (12) < Al (13) nên bán kính giảm dần: bán kính Na > Mg > Al." },
  { q: "So sánh tính kim loại của Li, Na, K (cùng nhóm IA).", a: "Cùng nhóm A, Z tăng thì tính kim loại tăng dần, nên tính kim loại: Li < Na < K." },
]));

        return children;
      }
    },
    {
      id: "hk1_10_p4",
      label: "Phần 4/7: Xu hướng biến đổi hợp chất & Định luật tuần hoàn, Ôn tập Chương 2 (Bài 7, 8, 9)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 7. Xu hướng biến đổi thành phần và một số tính chất của hợp chất trong một chu kì"));
children.push(...Bullet([
  "Trong một chu kì, theo chiều tăng dần điện tích hạt nhân, **hoá trị cao nhất với oxygen** tăng lần lượt từ 1 đến 7 (nhóm IA đến VIIA); **hoá trị với hydrogen** của các phi kim giảm từ 4 xuống 1 (nhóm IVA đến VIIA).",
  "Trong một chu kì, theo chiều tăng Z: **tính base của oxide và hydroxide giảm dần**, **tính acid tăng dần**.",
  "Ví dụ chu kì 3: Na₂O, NaOH (base mạnh) → MgO, Mg(OH)₂ (base) → Al₂O₃, Al(OH)₃ (lưỡng tính) → SiO₂ (acid yếu) → P₂O₅, H₃PO₄ → SO₃, H₂SO₄ → Cl₂O₇, HClO₄ (acid mạnh dần).",
]));
children.push(Sub("Giải thích"));
children.push(P("Trong một chu kì, theo chiều tăng Z thì **độ âm điện của nguyên tố tăng dần** (đã giải thích ở Bài 6). Nguyên tố có độ âm điện càng lớn thì càng **hút mạnh electron dùng chung trong liên kết O–H**, làm liên kết O–H trong hydroxide phân cực mạnh hơn, khiến nguyên tử H dễ tách ra dưới dạng H⁺ hơn → **tính acid tăng dần**. Ngược lại, đầu chu kì (kim loại điển hình, độ âm điện nhỏ) liên kết kim loại–O mang nhiều đặc tính ion, nhóm OH⁻ dễ tách ra → **tính base mạnh**."));

children.push(Bai("Bài 8. Định luật tuần hoàn và ý nghĩa của bảng tuần hoàn các nguyên tố hoá học"));
children.push(NoteBox("Định luật tuần hoàn", [
  "Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó, **biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử**.",
]));
children.push(Section("Ý nghĩa của bảng tuần hoàn"));
children.push(...Bullet([
  "Biết **vị trí** của một nguyên tố có thể suy ra **cấu tạo nguyên tử** và tính chất cơ bản của nguyên tố, và ngược lại.",
  "**So sánh tính chất hoá học** của một nguyên tố với các nguyên tố lân cận (cùng chu kì, cùng nhóm).",
]));

children.push(Bai("Ôn tập Chương 2"));
children.push(...Bullet([
  "Bảng tuần hoàn sắp xếp các nguyên tố theo chiều tăng điện tích hạt nhân, thành chu kì (theo số lớp electron) và nhóm (theo số electron hoá trị).",
  "Trong chu kì: bán kính giảm, độ âm điện tăng, tính kim loại giảm – tính phi kim tăng theo chiều tăng Z.",
  "Trong nhóm A: bán kính tăng, độ âm điện giảm, tính kim loại tăng – tính phi kim giảm theo chiều tăng Z.",
  "Định luật tuần hoàn là cơ sở để dự đoán và giải thích tính chất của nguyên tố dựa vào vị trí trong bảng.",
]));
children.push(spacer());

// ================= CHƯƠNG 3 =================

        return children;
      }
    },
    {
      id: "hk1_10_p5",
      label: "Phần 5/7: Quy tắc octet & Liên kết ion, Tinh thể ion (Bài 10, 11)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 3: LIÊN KẾT HOÁ HỌC"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Loại liên kết hoá học quyết định **tính chất vật lí và hoá học** của chất: vì sao muối ăn (liên kết ion) giòn, dễ vỡ và tan trong nước, còn kim cương (liên kết cộng hoá trị mạng lưới) lại siêu cứng.",
  "**Liên kết hydrogen** giải thích vì sao nước có nhiệt độ sôi cao bất thường, tồn tại ở thể lỏng trong điều kiện thường — điều kiện tiên quyết cho sự sống trên Trái Đất; cũng là cơ sở cấu trúc xoắn kép của DNA.",
  "Hiểu bản chất liên kết giúp các nhà hoá học **thiết kế vật liệu và dược phẩm** mới: chất dẻo, sợi tổng hợp, thuốc chữa bệnh đều được xây dựng dựa trên việc kiểm soát các loại liên kết giữa nguyên tử, phân tử.",
]));
children.push(spacer());

children.push(Bai("Bài 10. Quy tắc octet"));
children.push(P("Trong quá trình hình thành liên kết hoá học, nguyên tử của các nguyên tố nhóm A có xu hướng **nhường, nhận hoặc góp chung electron** để đạt tới cấu hình electron bền vững của khí hiếm gần nhất, thường là **8 electron** ở lớp ngoài cùng (hoặc 2 electron với He)."));
children.push(P("Ví dụ: khi hình thành phân tử N₂, mỗi nguyên tử N góp chung 3 cặp electron để mỗi nguyên tử đều có 8 electron lớp ngoài cùng."));
children.push(NoteBox("Lưu ý", [
  "Quy tắc octet có một số ngoại lệ (VD: BeCl₂, BF₃, SF₆...) — không phải mọi hợp chất đều tuân theo tuyệt đối.",
]));

children.push(Bai("Bài 11. Liên kết ion"));
children.push(Section("I. Ion và sự hình thành liên kết ion"));
children.push(...Bullet([
  "**Ion** là phần tử mang điện, được hình thành khi nguyên tử (hay nhóm nguyên tử) nhường hoặc nhận electron.",
  "**Cation** (ion dương): nguyên tử **nhường electron**. Ví dụ: Na → Na⁺ + 1e.",
  "**Anion** (ion âm): nguyên tử **nhận electron**. Ví dụ: Cl + 1e → Cl⁻.",
  "**Liên kết ion** là liên kết được hình thành bởi lực hút tĩnh điện giữa các ion mang điện tích trái dấu.",
]));
children.push(P("Liên kết ion thường hình thành giữa **kim loại điển hình** (nhóm IA, IIA) và **phi kim điển hình** (nhóm VIA, VIIA), khi hiệu độ âm điện giữa hai nguyên tử ≥ 1,7."));
children.push(...Img("09_lienket_ion.png", 440, "Sự hình thành liên kết ion trong phân tử NaCl: Na nhường 1 electron cho Cl."));
children.push(Example("Ví dụ minh hoạ", [
  "Giải thích sự hình thành liên kết ion trong phân tử calcium oxide (CaO).",
  "Lời giải: Ca (nhóm IIA) có 2 electron lớp ngoài cùng, nhường 2e để đạt cấu hình bền của khí hiếm: Ca → Ca²⁺ + 2e. O (nhóm VIA) có 6 electron lớp ngoài cùng, nhận 2e để đạt cấu hình bền: O + 2e → O²⁻. Hai ion Ca²⁺ và O²⁻ trái dấu hút nhau bằng lực hút tĩnh điện tạo thành liên kết ion trong CaO.",
]));
children.push(Section("II. Tinh thể ion"));
children.push(P("Trong tinh thể ion (ví dụ NaCl), các cation và anion được sắp xếp luân phiên, đều đặn theo một trật tự xác định trong không gian. Tinh thể ion **rất bền vững**, khó nóng chảy, khó bay hơi, ở thể rắn không dẫn điện nhưng **dẫn điện khi nóng chảy hoặc hoà tan trong nước**."));

        return children;
      }
    },
    {
      id: "hk1_10_p6",
      label: "Phần 6/7: Liên kết cộng hoá trị, Liên kết hydrogen & van der Waals (Bài 12, 13, 14)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Bai("Bài 12. Liên kết cộng hoá trị"));
children.push(Section("I. Sự hình thành liên kết cộng hoá trị"));
children.push(P("**Liên kết cộng hoá trị** là liên kết được hình thành giữa hai nguyên tử bằng một hay nhiều **cặp electron dùng chung**."));
children.push(P("**Công thức Lewis** biểu diễn cặp electron dùng chung bằng một gạch nối, cặp electron riêng (chưa liên kết) bằng các dấu chấm quanh kí hiệu nguyên tố."));
children.push(...Img("10_lewis_phanttu.png", 480, "Công thức Lewis của một số phân tử: H₂, HCl (liên kết đơn), O₂ (liên kết đôi), N₂ (liên kết ba)."));
children.push(Example("Ví dụ minh hoạ", [
  "Viết công thức Lewis của phân tử CO₂ (carbon dioxide), biết nguyên tử C nằm giữa và liên kết với 2 nguyên tử O.",
  "Lời giải: C có 4 electron hoá trị, mỗi O có 6 electron hoá trị. Để mỗi nguyên tử đạt octet, C tạo 2 liên kết đôi với 2 nguyên tử O: **O = C = O**. Kiểm tra: C có 4 cặp electron dùng chung (8e), mỗi O có 2 cặp dùng chung + 2 cặp riêng (8e) → thoả quy tắc octet.",
]));
children.push(Section("II. Liên kết cho – nhận"));
children.push(P("Là trường hợp đặc biệt của liên kết cộng hoá trị, trong đó **cặp electron dùng chung chỉ do một nguyên tử đóng góp** (nguyên tử cho); được kí hiệu bằng mũi tên từ nguyên tử cho sang nguyên tử nhận. Ví dụ: liên kết trong ion NH₄⁺."));
children.push(Section("III. Phân loại liên kết cộng hoá trị theo độ âm điện"));
children.push(DataTable(
  ["Loại liên kết", "Hiệu độ âm điện (Δχ)", "Ví dụ"],
  [
    ["Cộng hoá trị không cực", "Δχ < 0,4", "H₂, Cl₂, N₂"],
    ["Cộng hoá trị có cực", "0,4 ≤ Δχ < 1,7", "HCl, H₂O, NH₃"],
    ["Liên kết ion", "Δχ ≥ 1,7", "NaCl, CaO"],
  ],
));
children.push(spacer());
children.push(Section("IV. Tính chất chung của các chất có liên kết cộng hoá trị"));
children.push(...Bullet([
  "Có thể tồn tại ở thể rắn, lỏng hoặc khí; nhiệt độ nóng chảy, nhiệt độ sôi **thấp hơn** hợp chất ion.",
  "Các chất cộng hoá trị không cực **không dẫn điện** ở mọi trạng thái; một số chất có cực tan trong nước tạo dung dịch dẫn điện.",
  "Chất không cực dễ tan trong dung môi không cực; chất có cực dễ tan trong dung môi có cực (như nước).",
]));
children.push(Section("V. Liên kết σ, liên kết π và năng lượng liên kết"));
children.push(...Bullet([
  "**Liên kết σ (sigma):** hình thành do sự xen phủ trục (xen phủ trực diện) của các orbital, có ở mọi liên kết đơn.",
  "**Liên kết π (pi):** hình thành do sự xen phủ bên (song song trục liên kết) của các orbital, chỉ có ở liên kết đôi, liên kết ba.",
  "Liên kết đơn = 1σ; liên kết đôi = 1σ + 1π; liên kết ba = 1σ + 2π.",
  "**Năng lượng liên kết (Eb):** là năng lượng cần thiết để phá vỡ một liên kết hoá học trong phân tử ở thể khí, thành các nguyên tử ở thể khí (đơn vị kJ/mol). Năng lượng liên kết càng lớn thì liên kết càng bền.",
]));
children.push(...Img("11_sigma_pi.png", 440, "Sự xen phủ orbital tạo liên kết σ (trực diện) và liên kết π (song song)."));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Phân tử N₂ có liên kết ba (N≡N). Hãy cho biết trong đó có bao nhiêu liên kết σ và bao nhiêu liên kết π?", a: "Liên kết ba gồm 1 liên kết σ và 2 liên kết π." },
  { q: "Vì sao liên kết ba thường bền hơn liên kết đơn giữa cùng một cặp nguyên tố?", a: "Vì liên kết ba có nhiều cặp electron dùng chung hơn (năng lượng liên kết lớn hơn), nên cần nhiều năng lượng hơn để phá vỡ." },
]));

children.push(Bai("Bài 13. Liên kết hydrogen và tương tác van der Waals"));
children.push(Section("I. Liên kết hydrogen"));
children.push(P("**Liên kết hydrogen** là một loại liên kết yếu, được hình thành giữa nguyên tử **H** (đã liên kết cộng hoá trị với nguyên tử có độ âm điện lớn như F, O, N) với một nguyên tử khác có độ âm điện lớn (F, O, N) còn cặp electron riêng, ở phân tử khác hoặc trong cùng phân tử."));
children.push(P("Liên kết hydrogen làm tăng đáng kể nhiệt độ nóng chảy, nhiệt độ sôi và độ tan trong nước của các chất. Ví dụ: nhờ liên kết hydrogen giữa các phân tử, nước có nhiệt độ sôi cao bất thường so với các hợp chất cùng nhóm VIA (H₂S, H₂Se...)."));
children.push(...Img("12_lienket_hydrogen.png", 440, "Liên kết hydrogen (nét đứt) hình thành giữa nguyên tử H của phân tử này với nguyên tử O của phân tử nước khác."));
children.push(Section("II. Tương tác van der Waals"));
children.push(P("Là lực hút tĩnh điện **yếu** giữa các phân tử, hình thành do sự xuất hiện của các lưỡng cực tạm thời và lưỡng cực cảm ứng. Tương tác van der Waals **tăng theo khối lượng phân tử** và diện tích tiếp xúc giữa các phân tử, làm tăng nhiệt độ nóng chảy và nhiệt độ sôi của chất."));

children.push(Bai("Ôn tập Chương 3"));
children.push(...Bullet([
  "Nguyên tử có xu hướng đạt cấu hình electron bền của khí hiếm (quy tắc octet) khi hình thành liên kết.",
  "Liên kết ion: hình thành do lực hút tĩnh điện giữa ion trái dấu (kim loại điển hình + phi kim điển hình).",
  "Liên kết cộng hoá trị: hình thành do dùng chung cặp electron (giữa các nguyên tố phi kim).",
  "Liên kết hydrogen và tương tác van der Waals là các lực liên phân tử yếu hơn liên kết ion, cộng hoá trị nhưng ảnh hưởng lớn đến tính chất vật lí của chất.",
]));
children.push(spacer());

// ================= CHƯƠNG 4 =================

        return children;
      }
    },
    {
      id: "hk1_10_p7",
      label: "Phần 7/7: Phản ứng oxi hoá – khử & Phương pháp thăng bằng electron (Bài 15, 16)",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, Img, spacer, Eq, AlignmentType } = H;
        const children = [];
        
children.push(Chapter("CHƯƠNG 4: PHẢN ỨNG OXI HOÁ – KHỬ"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Phản ứng oxi hoá – khử là nền tảng của **sự cháy** (đốt nhiên liệu để sinh nhiệt, chạy động cơ), **luyện kim** (tách kim loại từ quặng) và **ăn mòn kim loại** — gây thiệt hại kinh tế khổng lồ mỗi năm (gỉ sét cầu, tàu, đường ống).",
  "Là cơ sở hoạt động của **pin, ắc quy** (biến hoá năng thành điện năng) — công nghệ cốt lõi cho xe điện và thiết bị di động hiện nay.",
  "Gắn liền với các quá trình sống thiết yếu: **quang hợp** (cây xanh tạo O₂, glucose) và **hô hấp tế bào** (giải phóng năng lượng nuôi cơ thể) đều là chuỗi phản ứng oxi hoá – khử.",
]));
children.push(spacer());

children.push(Bai("Bài 15. Phản ứng oxi hoá – khử"));
children.push(Section("I. Số oxi hoá"));
children.push(P("**Số oxi hoá** của một nguyên tử trong phân tử là điện tích quy ước của nguyên tử đó, nếu giả định các cặp electron dùng chung đều lệch hoàn toàn về nguyên tử có độ âm điện lớn hơn."));
children.push(NoteBox("Quy tắc xác định số oxi hoá", [
  "Số oxi hoá của nguyên tử trong đơn chất bằng **0**.",
  "Trong hợp chất, **tổng đại số số oxi hoá** của các nguyên tử bằng 0; trong ion, tổng đó bằng **điện tích của ion**.",
  "Một số nguyên tố thường có số oxi hoá cố định: kim loại nhóm IA (+1), nhóm IIA (+2); hydrogen thường +1 (trừ hydride kim loại: –1); oxygen thường –2 (trừ trong peroxide: –1, hoặc trong OF₂: +2).",
]));
children.push(Section("II. Chất khử, chất oxi hoá, phản ứng oxi hoá – khử"));
children.push(DataTable(
  ["Khái niệm", "Đặc điểm", "Số oxi hoá"],
  [
    ["Chất khử (chất bị oxi hoá)", "Nhường electron", "Tăng"],
    ["Chất oxi hoá (chất bị khử)", "Nhận electron", "Giảm"],
  ],
));
children.push(spacer());
children.push(NoteBox("Định nghĩa", [
  "**Phản ứng oxi hoá – khử** là phản ứng hoá học trong đó có sự chuyển electron giữa các chất phản ứng, hay là phản ứng hoá học trong đó có sự thay đổi số oxi hoá của một số nguyên tố.",
]));
children.push(...Img("13_oxihoa_khu.png", 440, "Sơ đồ nhường – nhận electron trong phản ứng Zn + Cu²⁺ → Zn²⁺ + Cu."));
children.push(Section("III. Lập phương trình hoá học của phản ứng oxi hoá – khử (phương pháp thăng bằng electron)"));
children.push(...Bullet([
  "Bước 1: Xác định các nguyên tố có số oxi hoá thay đổi, viết quá trình oxi hoá và quá trình khử.",
  "Bước 2: Tìm hệ số thích hợp cho chất khử và chất oxi hoá sao cho **tổng số electron nhường = tổng số electron nhận**.",
  "Bước 3: Đặt hệ số của các chất oxi hoá, chất khử vào sơ đồ phản ứng.",
  "Bước 4: Đặt hệ số các chất còn lại, kiểm tra lại số nguyên tử của các nguyên tố ở hai vế.",
]));
children.push(Example("Ví dụ minh hoạ: cân bằng phản ứng Fe + HCl → FeCl₂ + H₂", [
  "Bước 1: Số oxi hoá thay đổi: Fe⁰ → Fe⁺² (nhường 2e); H⁺ (trong HCl) → H₂⁰ (mỗi H nhận 1e).",
  "Quá trình oxi hoá: Fe → Fe²⁺ + 2e.  Quá trình khử: 2H⁺ + 2e → H₂.",
  "Bước 2: Số electron nhường (2) = số electron nhận (2) → hệ số Fe và H₂ đều là 1.",
  "Bước 3–4: Đặt hệ số và cân bằng các nguyên tố còn lại, thu được: **Fe + 2HCl → FeCl₂ + H₂**.",
]));
children.push(Section("IV. Ý nghĩa của phản ứng oxi hoá – khử"));
children.push(P("Phản ứng oxi hoá – khử gắn liền với nhiều quá trình quan trọng trong đời sống và sản xuất: **sự cháy** của nhiên liệu (than, xăng dầu, khí gas), **sự ăn mòn kim loại**, **luyện kim** (điều chế kim loại), **quang hợp và hô hấp** ở sinh vật, các quá trình điện phân, pin điện hoá..."));

children.push(Bai("Ôn tập Chương 4"));
children.push(...Bullet([
  "Số oxi hoá là công cụ để xác định chất khử, chất oxi hoá và cân bằng phản ứng oxi hoá – khử.",
  "Chất khử nhường electron (số oxi hoá tăng); chất oxi hoá nhận electron (số oxi hoá giảm).",
  "Phương pháp thăng bằng electron dựa trên nguyên tắc bảo toàn electron để cân bằng phương trình phản ứng oxi hoá – khử.",
]));

        return children;
      }
    }
  ]
};
