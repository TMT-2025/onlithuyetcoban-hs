// Dữ liệu lý thuyết chi tiết Chuyên đề học tập Hóa học 12 - Kết nối tri thức với cuộc sống
module.exports = {
  title: "TÀI LIỆU TÓM TẮT TRỌNG TÂM CHUYÊN ĐỀ HỌC TẬP HÓA HỌC 12",
  subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Cơ chế phản ứng hữu cơ, Trải nghiệm Hóa vô cơ & Phức chất",
  parts: [
    {
      id: "cd12_p1",
      label: "Chuyên đề 1: Cơ chế phản ứng trong Hoá học hữu cơ (Bài 1, 2, 3)",
      desc: "Phân cắt đồng li, dị li; Tác nhân Electrophile và Nucleophile; Cơ chế thế gốc tự do (SR), thế electrophile thơm (SEAr), thế nucleophile (SN1, SN2, đảo cấu hình Walden); Cơ chế cộng AE (quy tắc Markovnikov) và AN.",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 1: CƠ CHẾ PHẢN ỨNG TRONG HOÁ HỌC HỮU CƠ"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Tư duy Hóa học hiện đại", [
          "Nếu như phương trình hóa học thông thường chỉ cho biết điểm xuất phát (chất phản ứng) và đích đến (sản phẩm), thì **Cơ chế phản ứng chính là cuốn phim quay chậm chi tiết từng bước** diễn biến vi mô: liên kết nào bị bẻ gãy trước, liên kết nào được hình thành sau, electron di chuyển như thế nào và trạng thái chuyển tiếp trung gian có cấu trúc ra sao.",
          "**Làm chủ cơ chế phản ứng:** Giúp học sinh giải thích bản chất sâu sắc của các quy tắc thực nghiệm kinh điển (như quy tắc cộng Markovnikov, quy tắc thế nhân thơm), đồng thời là công cụ sống còn của các nhà khoa học trong việc thiết kế lộ trình tổng hợp các loại thuốc kháng sinh, thuốc đặc trị ung thư và vật liệu polyme thông minh thế hệ mới."
        ]));
        children.push(spacer());

        // BÀI 1
        children.push(Bai("Bài 1. Đại cương về cơ chế phản ứng"));
        children.push(Section("I. Hai kiểu phân cắt liên kết cộng hóa trị"));
        children.push(P("Trong phản ứng hóa học hữu cơ, liên kết cộng hóa trị giữa hai nguyên tử A và B có thể bị đứt gãy theo hai phương thức cơ bản:"));
        children.push(DataTable(
          ["Kiểu phân cắt liên kết", "Bản chất dịch chuyển electron", "Tiểu phân trung gian sinh ra", "Đặc điểm và Ví dụ tiêu biểu"],
          [
            ["Phân cắt đồng li (Homolytic cleavage)", "Đôi electron liên kết bị chia đều cho mỗi nguyên tử một electron:\nA : B  ——(t°, as)——>  A•  +  B•", "Tạo ra các **Gốc tự do (Free radicals)** mang electron độc thân", "Xảy ra giữa các nguyên tử có độ âm điện tương đương nhau hoặc dưới tác dụng của năng lượng ánh sáng tử ngoại (UV), nhiệt độ cao. Ví dụ: Cl : Cl ——(as)——> 2Cl•; H₃C : H ——(t°)——> H₃C• + H•."],
            ["Phân cắt dị li (Heterolytic cleavage)", "Nguyên tử có độ âm điện lớn hơn sẽ chiếm giữ toàn bộ đôi electron liên kết:\nA : B  ———>  A⁺  +  :B⁻  (với χ_B > χ_A)", "Tạo ra các **Ion hữu cơ**: Carbocation (R⁺) hoặc Carbanion (R⁻)", "Xảy ra trong môi trường dung môi phân cực, có xúc tác acid hoặc base. Ví dụ: (CH₃)₃C : Cl ——> (CH₃)₃C⁺ (carbocation) + :Cl⁻; R–CH₂ : Li ——> R–CH₂⁻ (carbanion) + Li⁺."]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Phân loại các tác nhân phản ứng"));
        children.push(P("Dựa vào bản chất cho hoặc nhận electron, các tác nhân phản ứng được chia thành hai nhóm đối lập nhau:"));
        children.push(...Bullet([
          "**Tác nhân Electrophile (E⁺ - Tác nhân ưa electron):** Là những tiểu phân mang điện tích dương hoặc phân tử trung hòa có **orbital trống (thiếu electron)**, đóng vai trò là acid Lewis, luôn tìm kiếm và tấn công vào những vị trí giàu electron (mật độ điện tích âm cao) trên cơ chất. Ví dụ: H⁺, Br⁺, NO₂⁺, R⁺ (carbocation), SO₃, AlCl₃, FeCl₃, BF₃.",
          "**Tác nhân Nucleophile (Nu⁻ - Tác nhân ưa hạt nhân):** Là những anion hoặc phân tử trung hòa có **cặp electron tự do chưa liên kết**, đóng vai trò là base Lewis, luôn sẵn sàng cho đôi electron để tấn công vào những vị trí thiếu electron (mật độ điện tích dương hoặc mang điện tích dương riêng phần δ⁺) trên cơ chất. Ví dụ: OH⁻, RO⁻, Cl⁻, Br⁻, I⁻, CN⁻, H₂O, NH₃, R–NH₂."
        ]));

        children.push(Section("III. Trạng thái chuyển tiếp và Tiểu phân trung gian"));
        children.push(...Bullet([
          "**Tiểu phân trung gian (Intermediate):** Là các tiểu phân có cấu trúc xác định (như carbocation, carbanion, gốc tự do), tồn tại trong thời gian ngắn ở điểm cực tiểu cục bộ trên đường cong thế năng phản ứng, có thể bị bắt giữ hoặc quan sát bằng các phương pháp phổ nghiệm hiện đại.",
          "**Trạng thái chuyển tiếp (Transition state - ‡):** Là trạng thái giả định tại đỉnh cực đại thế năng của phản ứng, nơi các liên kết cũ đang bị kéo giãn đứt dở và các liên kết mới đang bắt đầu hình thành đồng thời. Trạng thái chuyển tiếp không thể phân lập hay tách rời được."
        ]));
        children.push(spacer());

        // BÀI 2
        children.push(Bai("Bài 2. Cơ chế phản ứng thế"));
        children.push(Section("I. Cơ chế thế gốc tự do (S_R) vào alkane"));
        children.push(P("Phản ứng thế halogen (chlorine hóa, bromine hóa) vào phân tử alkane xảy ra theo cơ chế **thế gốc tự do theo chuỗi (Radical Substitution - S_R)** gồm 3 giai đoạn nối tiếp nhau:"));
        children.push(DataTable(
          ["Giai đoạn", "Phương trình cơ chế phản ứng", "Giải thích bản chất"],
          [
            ["1. Khơi mào (Initiation)", "Cl₂ ——(as tử ngoại hν)——> 2Cl•", "Năng lượng photon ánh sáng phân cắt đồng li liên kết Cl–Cl tạo 2 gốc tự do chlorine Cl• cực kì hoạt động."],
            ["2. Phát triển mạch (Propagation)", "Bước a: Cl• + CH₄ → •CH₃ + HCl\nBước b: •CH₃ + Cl₂ → CH₃Cl + Cl•", "Gốc Cl• giật nguyên tử H của alkane sinh gốc tự do methyl •CH₃. Sau đó •CH₃ lại phản ứng tiếp với Cl₂ sinh ra sản phẩm CH₃Cl và tái tạo lại gốc Cl• tiếp tục vòng lặp chuỗi hàng nghìn lần."],
            ["3. Đứt mạch (Termination)", "Cl• + Cl• → Cl₂\n•CH₃ + Cl• → CH₃Cl\n•CH₃ + •CH₃ → CH₃–CH₃ (ethane)", "Các gốc tự do va chạm và kết hợp triệt tiêu lẫn nhau, làm dừng chuỗi phản ứng dây chuyền."]
          ]
        ));
        children.push(P("**Quy luật định hướng thế gốc tự do:** Gốc tự do bậc cao bền hơn gốc tự do bậc thấp do hiệu ứng đẩy electron của các nhóm alkyl:"));
        children.push(Eq("**Độ bền gốc tự do: R₃C• (bậc 3) > R₂CH• (bậc 2) > RCH₂• (bậc 1) > •CH₃**"));
        children.push(P("=> Do đó, khi phản ứng thế gốc tự do xảy ra, nguyên tử halogen **ưu tiên thế vào nguyên tử carbon bậc cao hơn** để tạo thành sản phẩm chính."));
        children.push(spacer());

        children.push(Section("II. Cơ chế thế electrophile vào nhân thơm (S_EAr)"));
        children.push(P("Hệ electron liên hợp π của vòng benzen có mật độ electron rất cao nhưng rất bền vững do tính thơm. Do đó, nhân thơm phản ứng đặc trưng với các tác nhân electrophile theo cơ chế **thế electrophile vòng thơm (Electrophilic Aromatic Substitution - S_EAr)** qua 2 giai đoạn:"));
        children.push(...Bullet([
          "**Giai đoạn 1: Tấn công của electrophile tạo phức σ (Arenium ion):** Tác nhân electrophile E⁺ (được sinh ra nhờ xúc tác acid Lewis, ví dụ Br⁺ từ Br₂/FeBr₃, hoặc NO₂⁺ từ HNO₃/H₂SO₄ đặc) tấn công vào hệ mây electron π của vòng thơm, phá vỡ hệ thơm khép kín để tạo thành **carbocation trung gian (phức σ hay cation arenium)** mang điện tích dương giải tỏa trên 5 nguyên tử carbon còn lại.",
          "**Giai đoạn 2: Tách proton H⁺ tái lập hệ thơm bền vững:** Một base yếu trong môi trường (như FeBr₄⁻ hoặc HSO₄⁻) lấy đi proton H⁺ gắn ở carbon mang tác nhân thế, đôi electron C–H quay trở lại hoàn trả trọn vẹn vòng thơm π bền vững sinh ra dẫn xuất thế."
        ]));
        children.push(NoteBox("Quy tắc thế định hướng vào nhân thơm", [
          "**Nhóm thế hoạt hóa (đẩy electron: –OH, –NH₂, –OCH₃, các gốc alkyl –CH₃, –C₂H₅):** Làm tăng mật độ electron trong nhân thơm, đặc biệt ở các vị trí **ortho (o-) và para (p-)** => Phản ứng dễ dàng hơn benzen và ưu tiên thế vào vị trí **ortho và para**.",
          "**Nhóm thế phản hoạt hóa (hút electron: –NO₂, –COOH, –CHO, –SO₃H):** Làm giảm mạnh mật độ electron của vòng thơm, đặc biệt ở các vị trí ortho và para giảm nhiều nhất => Phản ứng khó khăn hơn benzen và định hướng thế vào vị trí **meta (m-)**."
        ]));

        children.push(Section("III. Cơ chế thế nucleophile (S_N1 và S_N2) vào dẫn xuất halogen"));
        children.push(DataTable(
          ["Tiêu chí so sánh", "Cơ chế thế nucleophile đơn phân tử (S_N1)", "Cơ chế thế nucleophile lưỡng phân tử (S_N2)"],
          [
            ["Số giai đoạn", "2 giai đoạn nối tiếp nhau", "1 giai đoạn đồng thời (đồng bộ)"],
            ["Tiểu phân trung gian", "Tạo **carbocation trung gian (R⁺)** dạng phẳng", "Không có intermediate, đi qua **trạng thái chuyển tiếp [Nu···C···X]‡** ngũ phối"],
            ["Bậc phản ứng động học", "Bậc 1: Tốc độ v = k.[R–X] (không phụ thuộc vào nồng độ Nu⁻)", "Bậc 2: Tốc độ v = k.[R–X].[Nu⁻]"],
            ["Cấu trúc không gian sản phẩm", "Tác nhân Nu⁻ có thể tấn công từ 2 phía của mặt phẳng carbocation => Gây ra hiện tượng **Racemic hóa (hỗn hợp racemic triệt quang)**", "Tác nhân Nu⁻ bắt buộc tấn công từ **phía đối diện với liên kết C–X** => Gây ra hiện tượng **quay cấu hình Walden (đảo nghịch cấu hình)**"],
            ["Điều kiện ưu tiên xảy ra", "Thuận lợi với **dẫn xuất halogen bậc 3** (vì sinh carbocation bậc 3 rất bền), dung môi phân cực proton (nước, alcohol)", "Thuận lợi với **dẫn xuất halogen bậc 1** (vì ít bị cản trở không gian), tác nhân Nu⁻ mạnh, dung môi phân cực phi proton (aceton, DMF)"]
          ]
        ));
        children.push(spacer());

        // BÀI 3
        children.push(Bai("Bài 3. Cơ chế phản ứng cộng"));
        children.push(Section("I. Cơ chế cộng electrophile (A_E) vào liên kết C=C alkene"));
        children.push(P("Liên kết đôi C=C gồm 1 liên kết σ bền và 1 liên kết π lỏng lẻo giàu electron. Do đó alkene rất dễ tham gia phản ứng **cộng electrophile (Electrophilic Addition - A_E)** với các tác nhân phân cực HX (HCl, HBr, H₂O):"));
        children.push(...Bullet([
          "**Giai đoạn 1 (Chậm - Quyết định tốc độ):** Tác nhân electrophile (H⁺) tấn công vào đám mây electron π của liên kết C=C, tạo thành một **tiểu phân trung gian carbocation (R⁺)**.",
          "**Giai đoạn 2 (Nhanh):** Tác nhân nucleophile (anion halide X⁻) tấn công chớp nhoáng vào tâm carbocation tích điện dương tạo thành sản phẩm cộng no."
        ]));

        children.push(NoteBox("Bản chất sâu sắc giải thích Quy tắc Markovnikov", [
          "Quy tắc thực nghiệm Markovnikov phát biểu: 'Khi cộng HX vào alkene bất đối xứng, H ưu tiên cộng vào C mang nhiều H hơn, X cộng vào C mang ít H hơn'.",
          "**Bản chất cơ chế electron:** Proton H⁺ sẽ ưu tiên tấn công vào nguyên tử carbon mang nhiều H hơn để tạo thành **Carbocation bậc cao hơn (bền hơn rất nhiều)** nhờ hiệu ứng cảm ứng đẩy electron (+I) và siêu liên hợp của các nhóm alkyl lân cận giải tỏa điện tích dương.",
          "Carbocation bền hơn sẽ chiếm ưu thế tuyệt đối về mặt động học, dẫn tới anion X⁻ tấn công vào tạo ra **sản phẩm chính**."
        ]));

        children.push(Section("II. Cơ chế cộng nucleophile (A_N) vào hợp chất carbonyl"));
        children.push(P("Trong nhóm carbonyl **>C=O** của aldehyde và ketone, do nguyên tử oxy có độ âm điện lớn hơn carbon (χ_O = 3,44 > χ_C = 2,55), đôi electron liên kết π bị hút lệch mạnh về phía oxy, khiến nguyên tử carbon tích điện dương riêng phần **δ⁺** và oxy tích điện âm **δ⁻**."));
        children.push(...Bullet([
          "Do đó, nguyên tử carbon carbonyl là một tâm thiếu electron, rất nhạy cảm với sự tấn công của các **tác nhân nucleophile (A_N)** như ion cyanide CN⁻, ion hydride H⁻, hợp chất cơ magie Grignard (R–MgX), phân tử nước H₂O.",
          "Cơ chế 2 bước: Bước 1 (Chậm): Nu⁻ tấn công vào C carbonyl mở liên kết π tạo anion alkoxide intermediate; Bước 2 (Nhanh): Nhận proton H⁺ từ môi trường để hoàn thành phân tử sản phẩm."
        ]));

        children.push(Example("Ví dụ mẫu: Giải thích cơ chế tạo sản phẩm chính khi cộng HBr vào 2-methylbut-2-ene", [
          "Đề bài: Cho 2-methylbut-2-ene [(CH₃)₂C=CH–CH₃] tác dụng với hydrobromic acid HBr. Hãy viết cơ chế phản ứng từng bước và giải thích tại sao sản phẩm chính thu được là 2-bromo-2-methylbutane chứ không phải 2-bromo-3-methylbutane.",
          "Lời giải từng bước:",
          "1. Giai đoạn 1: Tác nhân electrophile H⁺ từ phân tử phân cực H–Br tấn công vào liên kết đôi C=C. Có hai khả năng tạo carbocation trung gian:",
          "• Hướng A (H⁺ gắn vào C3 mang 1 H): Tạo carbocation bậc 3 [(CH₃)₂C⁺–CH₂–CH₃]. Carbocation này cực kì bền vững do có 3 nhóm alkyl đẩy electron (+I) và có tới 8 liên kết C–H siêu liên hợp giải tỏa điện tích dương.",
          "• Hướng B (H⁺ gắn vào C2 không mang H): Tạo carbocation bậc 2 [(CH₃)₂CH–CH⁺–CH₃]. Carbocation này kém bền hơn hẳn so với carbocation bậc 3.",
          "2. Giai đoạn 2: Do carbocation bậc 3 có thế năng thấp hơn và hình thành với tốc độ vượt trội, anion Br⁻ sẽ tấn công nhanh vào tâm C⁺ bậc 3 tạo sản phẩm **2-bromo-2-methylbutane (sản phẩm chính, chiếm > 90%)**.",
          "Sản phẩm phụ 2-bromo-3-methylbutane sinh ra từ hướng B chỉ chiếm tỉ lệ không đáng kể."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 1", [
          { q: "Tại sao phản ứng thế brom vào toluene xảy ra nhanh hơn benzen rất nhiều và ưu tiên thế vào vị trí ortho, para?", a: "Vì nhóm methyl (–CH₃) gắn trên vòng benzen là nhóm thế đẩy electron (hiệu ứng cảm ứng dương +I và siêu liên hợp), làm tăng mật độ electron của toàn bộ vòng benzen (hoạt hóa nhân thơm), đặc biệt làm tăng điện tích âm cục bộ nhiều nhất tại các vị trí ortho và para. Do đó, tác nhân electrophile Br⁺ bị hút mạnh nhất và tấn công thuận lợi nhất vào các vị trí ortho và para với tốc độ nhanh hơn nhiều so với benzene." },
          { q: "Cơ chế thế nucleophile S_N2 dẫn tới hiện tượng gì về mặt cấu hình không gian của nguyên tử carbon bất đối xứng?", a: "Cơ chế S_N2 dẫn tới hiện tượng đảo ngược cấu hình Walden (Walden inversion), giống như một chiếc ô bị gió thổi lộn ngược từ trong ra ngoài, do tác nhân nucleophile bắt buộc phải tấn công vào carbon bất đối xứng từ phía đối diện 180° so với nhóm rời đi (halogen)." }
        ]));

        return children;
      }
    },
    {
      id: "cd12_p2",
      label: "Chuyên đề 2: Trải nghiệm, thực hành Hoá học vô cơ (Bài 4, 5, 6)",
      desc: "Tái chế kim loại (Al, Fe, Cu, tiết kiệm 95% năng lượng, giảm CO2, kinh tế tuần hoàn); Công nghiệp silicate (thủy tinh soda-lime, gốm sứ cao lanh, xi măng Portland); Xử lí nước sinh hoạt (keo tụ phèn chua, PAC, lọc than, khử trùng Cl2, UV).",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 2: TRẢI NGHIỆM, THỰC HÀNH HOÁ HỌC VÔ CƠ"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Công nghệ môi trường vật liệu", [
          "Các ngành công nghiệp vật liệu vô cơ (kim loại màu, thủy tinh, gốm sứ, xi măng) là **xương sống của cơ sở hạ tầng kiến thiết đất nước**, quyết định diện mạo của các đại đô thị hiện đại và công trình giao thông thế kỉ.",
          "**Kinh tế tuần hoàn & An toàn nước sạch:** Việc chuyển dịch sang công nghệ tái chế kim loại giúp tiết kiệm đến 95% tài nguyên năng lượng và bảo vệ môi trường sinh thái. Song song đó, việc làm chủ quy trình hóa học xử lý nước cấp sinh hoạt (keo tụ bông cặn, khử độc, tiệt trùng) là điều kiện tiên quyết đảm bảo sức khỏe cộng đồng cho toàn xã hội."
        ]));
        children.push(spacer());

        // BÀI 4
        children.push(Bai("Bài 4. Tái chế kim loại"));
        children.push(Section("I. Ý nghĩa kinh tế và Môi trường của Tái chế kim loại"));
        children.push(P("Tái chế kim loại là quá trình thu gom, phân loại, làm sạch và nấu chảy phế liệu kim loại đã qua sử dụng để sản xuất ra các sản phẩm kim loại mới phục vụ đời sống và sản xuất:"));
        children.push(DataTable(
          ["Kim loại tái chế", "Tiết kiệm năng lượng so với sản xuất từ quặng", "Giảm phát thải khí nhà kính CO₂", "Ý nghĩa thực tiễn nổi bật"],
          [
            ["Nhôm (Aluminium - Al)", "Tiết kiệm **95% năng lượng**", "Giảm **95% lượng CO₂** phát thải", "Sản xuất Al sơ khai từ quặng bauxite bằng phương pháp Hall-Héroult (điện phân nóng chảy Al₂O₃ hòa tan trong cryolite ở 950°C) tiêu thụ nguồn điện năng khổng lồ (14.000 kWh/tấn Al). Tái chế lon nhôm phế liệu chỉ cần nung chảy ở 660°C, bảo toàn vô hạn chu trình tái chế mà không làm suy giảm cơ tính kim loại."],
            ["Sắt thép (Steel - Fe)", "Tiết kiệm **60 - 75% năng lượng**", "Giảm **58% phát thải CO₂**", "Tái chế thép trong lò hồ quang điện (EAF - Electric Arc Furnace) giúp giảm phụ thuộc vào quặng sắt hematit/manhetit và than cốc, giảm khai thác mỏ và ô nhiễm xỉ lò cao."],
            ["Đồng (Copper - Cu)", "Tiết kiệm **85% năng lượng**", "Giảm đáng kể ô nhiễm nước acid", "Bảo tồn trữ lượng quặng đồng sulfide tự nhiên đang cạn kiệt nhanh chóng, đáp ứng nhu cầu bùng nổ của mạng lưới truyền tải điện và xe điện (EV)."]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Quy trình công nghệ tái chế và Thách thức tại các làng nghề"));
        children.push(...Bullet([
          "**Quy trình tái chế chuẩn:** Thu gom phế liệu → Phân loại cơ học (dùng nam châm tách thép, dòng điện Foucault tách nhôm đồng) → Tẩy rửa sạch dầu mỡ sơn phủ → Cắt nhỏ và ép khối → Nấu chảy trong lò luyện, thổi khí tinh luyện xỉ → Đúc phôi thỏi sản phẩm.",
          "**Vấn đề môi trường tại các làng nghề đúc tái chế thủ công:** Nhiều cơ sở tái chế phế liệu tự phát sử dụng hóa chất độc hại (acid tẩy rửa không qua xử lý đổ thẳng ra sông ngòi), lò nấu thủ công đốt than đá phát thải lượng lớn bụi kim loại nặng (Pb, Cd, As), khí độc SO₂, CO và dioxin gây ô nhiễm không khí trầm trọng và tỉ lệ bệnh tật cao trong khu dân cư. Cần quy hoạch tập trung vào các khu công nghiệp sinh thái hiện đại."
        ]));
        children.push(spacer());

        // BÀI 5
        children.push(Bai("Bài 5. Công nghiệp silicate"));
        children.push(Section("I. Công nghiệp Thủy tinh"));
        children.push(P("Thủy tinh thông thường (thủy tinh vôi - soda, soda-lime glass) dùng làm chai lọ, bóng đèn, cửa kính xây dựng có thành phần gần đúng biểu diễn dưới dạng oxit: **Na₂O · CaO · 6SiO₂** (chứa khoảng 75% SiO₂, 15% Na₂O, 10% CaO)."));
        children.push(...Bullet([
          "**Nguyên liệu sản xuất:** Cát thạch anh trắng (SiO₂), đá vôi (CaCO₃) và soda (Na₂CO₃).",
          "**Các phản ứng hóa học xảy ra khi nung chảy ở 1400°C:**\nCaCO₃ + SiO₂ ——(t°)——> CaSiO₃ + CO₂↑\nNa₂CO₃ + SiO₂ ——(t°)——> Na₂SiO₃ + CO₂↑\nNhiệt độ cao hơn làm nóng chảy hỗn hợp các muối silicate và SiO₂ dư thành khối thủy tinh lỏng dẻo, sau đó thổi ép thành sản phẩm và làm nguội có kiểm soát (ủ nguội).",
          "**Các loại thủy tinh đặc biệt:** Thủy tinh thạch anh (SiO₂ tinh khiết) chịu nhiệt cực cao; Thủy tinh Borosilicate (chứa B₂O₃, ví dụ Pyrex) có hệ số giãn nở nhiệt rất nhỏ, dùng làm dụng cụ thí nghiệm đun nấu; Thủy tinh pha lê (chứa PbO) có chiết suất rất cao, tán sắc ánh sáng lấp lánh."
        ]));

        children.push(Section("II. Công nghiệp Đồ gốm và Xi măng Portland"));
        children.push(DataTable(
          ["Ngành sản xuất", "Nguyên liệu chính", "Biến đổi hóa học và Đặc tính sản phẩm"],
          [
            ["Đồ gốm, sứ", "Đất sét, cao lanh (chứa kaolinite Al₂O₃·2SiO₂·2H₂O), tràng thạch (feldspar), cát thạch anh", "Nhào với nước tạo hình dẻo, phơi khô nung ở 1000 - 1300°C: Nước liên kết bị mất, các khoáng chất kết tinh lại thành khoáng mullite 3Al₂O₃·2SiO₂ cứng bền, tráng men silicat tạo bề mặt láng bóng không thấm nước."],
            ["Xi măng Portland", "Đá vôi giàu canxi (CaCO₃) và đất sét giàu silica, alumina (SiO₂, Al₂O₃, Fe₂O₃)", "Nghiền mịn nung ở 1450°C trong lò quay thu được **Clinker xi măng** (chứa các khoáng: 3CaO·SiO₂ kí hiệu C₃S, 2CaO·SiO₂ kí hiệu C₂S, 3CaO·Al₂O₃ kí hiệu C₃A). Nghiền clinker với 3 - 5% thạch cao sống (CaSO₄·2H₂O để điều hòa thời gian đông kết) thu được bột xi măng."]
          ]
        ));
        children.push(NoteBox("Phản ứng đông cứng của xi măng", [
          "Khi nhào bột xi măng với nước tạo vữa xi măng hoặc bê tông, các khoáng clinker tham gia phản ứng **thủy hóa (hydrate hóa)** mãnh liệt:",
          "2(3CaO·SiO₂) + 6H₂O  ———>  3CaO·2SiO₂·3H₂O (gel C-S-H) + 3Ca(OH)₂",
          "Gel C-S-H sinh ra dạng vi tinh thể sợi đan xen chặt chẽ vào nhau, kết dính các hạt cát sỏi thành khối đá nhân tạo rắn chắc chịu lực nén cực lớn."
        ]));

        // BÀI 6
        children.push(Bai("Bài 6. Xử lí nước sinh hoạt"));
        children.push(Section("I. Quy trình công nghệ tại trạm xử lý nước cấp"));
        children.push(P("Nguồn nước thô tự nhiên (nước mặt sông hồ hoặc nước ngầm) thường chứa bùn đất lơ lửng, chất hữu cơ, vi sinh vật gây bệnh và các ion kim loại hòa tan (Fe²⁺, Mn²⁺). Quy trình xử lý gồm các bước nghiêm ngặt:"));
        children.push(DataTable(
          ["Công đoạn xử lý", "Hóa chất / Thiết bị sử dụng", "Bản chất phản ứng & Mục đích"],
          [
            ["1. Làm thoáng (Aeration)", "Giàn mưa, tháp thổi khí oxy tự nhiên", "Oxi hóa ion sắt hòa tan thành kết tủa hydroxide:\n4Fe²⁺ + O₂ + 10H₂O → 4Fe(OH)₃↓ + 8H⁺\nĐồng thời giải thoát các khí độc hòa tan (H₂S, CO₂)."],
            ["2. Keo tụ và tạo bông (Coagulation & Flocculation)", "Phèn nhôm KAl(SO₄)₂·12H₂O hoặc Polyaluminium Chloride (PAC) [Al₂(OH)_nCl₆₋n]_m", "Các hạt keo phù sa trong nước mang điện tích âm đẩy nhau không lắng được. Ion Al³⁺ thủy phân tạo các phức hydroxy đa nhân mang điện tích dương cao trung hòa điện tích hạt keo, kết tụ chúng thành các bông cặn Al(OH)₃ xốp to dễ lắng."],
            ["3. Lắng và Lọc cát - than hoạt tính", "Bể lắng lamen và bể lọc nhiều lớp (cát thạch anh, than hoạt tính)", "Giữ lại toàn bộ các bông cặn lơ lửng; than hoạt tính có cấu trúc xốp vi mao quản hấp phụ triệt để độc tố hữu cơ, thuốc trừ sâu, mùi tanh và màu lạ trong nước."],
            ["4. Khử trùng diệt khuẩn (Disinfection)", "Khí chlorine (Cl₂), dung dịch javen (NaClO), chloramine-B, khí ozone (O₃), hoặc đèn tia cực tím (UV)", "Cl₂ tác dụng với nước tạo hypochlorous acid:\nCl₂ + H₂O ⇌ HCl + HClO\nHClO là chất oxi hóa cực mạnh, khuếch tán qua màng tế bào phá hủy hệ enzyme của vi khuẩn, tiêu diệt 99,99% vi sinh vật gây bệnh đường ruột."]
          ]
        ));
        children.push(spacer());

        children.push(Example("Bài toán định lượng 1: Tính khối lượng nguyên liệu sản xuất 1 tấn thủy tinh soda-lime", [
          "Đề bài: Một nhà máy sản xuất thủy tinh loại thông thường có thành phần danh định biểu diễn theo oxit là Na₂O·CaO·6SiO₂ (khối lượng mol M = 62 + 56 + 6 × 60 = 478 g/mol). Để sản xuất được đúng 1,0 tấn (1000 kg) loại thủy tinh này, nhà máy cần dùng các nguyên liệu: cát thạch anh trắng (chứa 96% SiO₂), đá vôi (chứa 95% CaCO₃) và soda khan (chứa 98% Na₂CO₃). Giả thiết hiệu suất chuyển hóa của cả quy trình đạt 90%. Hãy tính khối lượng (kg) của từng loại nguyên liệu thô cần dùng.",
          "Lời giải từng bước:",
          "1. Số mol thủy tinh Na₂O·CaO·6SiO₂ trong 1000 kg (1.000.000 g):",
          "n_thủy tinh = 1.000.000 / 478 = 2092,05 mol.",
          "2. Tính lượng nguyên chất cần theo phương trình bảo toàn nguyên tố:",
          "• Cần n_Na₂CO₃ = n_thủy tinh = 2092,05 mol => m_Na₂CO₃ (lý thuyết) = 2092,05 × 106 = 221.757 g ≈ 221,76 kg.",
          "• Cần n_CaCO₃ = n_thủy tinh = 2092,05 mol => m_CaCO₃ (lý thuyết) = 2092,05 × 100 = 209.205 g ≈ 209,21 kg.",
          "• Cần n_SiO₂ = 6 × n_thủy tinh = 6 × 2092,05 = 12552,3 mol => m_SiO₂ (lý thuyết) = 12552,3 × 60 = 753.138 g ≈ 753,14 kg.",
          "3. Tính lượng nguyên liệu thực tế có tính đến độ tinh khiết và hiệu suất H = 90%:",
          "• Khối lượng soda thương phẩm (98% Na₂CO₃):",
          "m_soda = (221,76 / 98%) / 90% = **251,43 kg**.",
          "• Khối lượng đá vôi thương phẩm (95% CaCO₃):",
          "m_đá vôi = (209,21 / 95%) / 90% = **244,69 kg**.",
          "• Khối lượng cát thạch anh (96% SiO₂):",
          "m_cát = (753,14 / 96%) / 90% = **871,69 kg**."
        ]));

        children.push(Example("Bài toán định lượng 2: Tính lượng khí chlorine cần dùng để khử trùng nước cấp sinh hoạt", [
          "Đề bài: Một nhà máy cấp nước sạch cần khử trùng 10.000 m³ nước sinh hoạt mỗi ngày đêm. Liều lượng chlorine hiệu dụng cần châm vào nước là 2,5 mg/L (gam/m³) để đảm bảo sau khi oxi hóa hết các chất hữu cơ và vi khuẩn, nồng độ chlorine dư tự do tại vòi người tiêu dùng đạt tiêu chuẩn quy chuẩn (0,3 - 0,5 mg/L). Hãy tính khối lượng khí chlorine nguyên chất (kg) và thể tích khí chlorine tương ứng ở điều kiện chuẩn (đkc: 1 bar, 25°C, 1 mol = 24,79 L) cần nạp cho trạm clo hóa trong một ngày.",
          "Lời giải từng bước:",
          "1. Tổng khối lượng chlorine cần châm vào 10.000 m³ nước trong 1 ngày:",
          "m_Cl₂ = 10.000 m³ × 2,5 g/m³ = 25.000 g = **25,0 kg**.",
          "2. Số mol khí Cl₂:",
          "n_Cl₂ = 25.000 g / 71 g/mol = 352,11 mol.",
          "3. Thể tích khí Cl₂ ở điều kiện chuẩn (đkc):",
          "V_Cl₂ = 352,11 mol × 24,79 L/mol = **8728,8 L** ≈ **8,73 m³**."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 2", [
          { q: "Tại sao nói việc tái chế nhôm (Al) mang lại lợi ích môi trường và năng lượng vượt trội hơn nhiều so với việc tái chế sắt thép?", a: "Vì nhôm là kim loại hoạt động hóa học mạnh, trong tự nhiên tồn tại dạng quặng bauxite Al₂O₃ có liên kết ion Al–O cực kì bền vững. Muốn sản xuất 1 tấn nhôm từ quặng đòi hỏi phải điện phân nóng chảy ở gần 1000°C với nguồn điện năng cực kì tốn kém (~14.000 kWh/tấn) và sinh ra lượng khí thải CO₂ rất lớn từ cực than dương. Ngược lại, việc tái chế nhôm chỉ đơn giản là nung chảy phế liệu ở 660°C rồi đúc lại, tiêu tốn chỉ 5% năng lượng so với sản xuất ban đầu, tiết kiệm tới 95% điện năng và giảm 95% phát thải khí nhà kính." }
        ]));

        return children;
      }
    },
    {
      id: "cd12_p3",
      label: "Chuyên đề 3: Một số vấn đề cơ bản về Phức chất (Bài 7, 8, 9)",
      desc: "Khái niệm phức chất, nguyên tử trung tâm, phối tử (ligand đơn càng, đa càng EDTA, chelate); Thuyết VB, lai hóa sp, sp3, dsp2, sp3d2; Đồng phân hình học cis-trans (Cisplatin trị ung thư); Phức sinh học Hemoglobin, Chlorophyll, Vit B12.",
      builder: function(H) {
        const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions, ChapterIntro, DataTable, spacer, Eq, AlignmentType } = H;
        const children = [];

        children.push(Chapter("CHUYÊN ĐỀ 3: MỘT SỐ VẤN ĐỀ CƠ BẢN VỀ PHỨC CHẤT"));
        children.push(ChapterIntro("Ý nghĩa thực tiễn & Khoa học Hóa sinh đỉnh cao", [
          "Phức chất (Coordination complexes) là một trong những lĩnh vực nghiên cứu hiện đại và rực rỡ nhất của Hóa học vô cơ và Hóa sinh học, vượt ra khỏi các giới hạn liên kết hóa trị thông thường để mở ra **thế giới kì diệu của các liên kết cho - nhận phối trí**.",
          "**Trung tâm của sự sống:** Nếu không có phức chất, sự sống trên Trái Đất không thể tồn tại: phân tử **Hemoglobin** (phức chất của Fe²⁺) mang oxy đi nuôi sống hàng tỉ tế bào con người; phân tử **Chlorophyll** (phức chất của Mg²⁺) hấp thụ ánh sáng mặt trời để thực hiện quang hợp nuôi dưỡng hành tinh xanh; phức chất **Cisplatin** là vũ khí hóa trị cứu sống hàng triệu bệnh nhân ung thư."
        ]));
        children.push(spacer());

        // BÀI 7
        children.push(Bai("Bài 7. Một số vấn đề cơ bản về phức chất"));
        children.push(Section("I. Khái niệm và Thành phần cấu tạo của Phức chất"));
        children.push(P("Phức chất là hợp chất được tạo thành từ **nguyên tử hoặc ion kim loại trung tâm** liên kết với các **phối tử (ligand)** xung quanh thông qua các liên kết cho – nhận (liên kết phối trí). Cấu trúc tổng quát của phức chất thường được đặt trong dấu ngoặc vuông **[M(L)_n]** gọi là **cầu nội phức**, bên ngoài là các ion trái dấu cân bằng điện tích gọi là **cầu ngoại phức**:"));
        children.push(...Bullet([
          "**Nguyên tử trung tâm (M - Central atom/ion):** Thường là các cation kim loại chuyển tiếp dãy 3d (như Fe²⁺, Fe³⁺, Cu²⁺, Ag⁺, Ni²⁺, Co³⁺, Pt²⁺), có các orbital d còn trống để tiếp nhận các cặp electron.",
          "**Phối tử (L - Ligand):** Là các phân tử trung hòa hoặc anion có các **cặp electron tự do chưa liên kết** sẵn sàng dùng chung để tạo liên kết phối trí với nguyên tử trung tâm. Ví dụ: H₂O (aqua), NH₃ (ammine), CO (carbonyl), Cl⁻ (chlorido), OH⁻ (hydroxido), CN⁻ (cyanido).",
          "**Số phối trí (Coordination number):** Là tổng số liên kết σ mà nguyên tử trung tâm tạo thành với các phối tử xung quanh. Các số phối trí phổ biến nhất trong hóa học là **2, 4 và 6**."
        ]));

        children.push(Section("II. Phối tử đơn càng và Phối tử đa càng (Hiệu ứng Chelate)"));
        children.push(DataTable(
          ["Loại phối tử", "Khái niệm dung lượng phối trí", "Các ví dụ tiêu biểu", "Ý nghĩa ứng dụng"],
          [
            ["Phối tử đơn càng (Monodentate)", "Mỗi phối tử chỉ cung cấp **1 cặp electron** để tạo 1 liên kết phối trí với tâm kim loại.", "H₂O, NH₃, Cl⁻, OH⁻, CN⁻, SCN⁻, CO", "Tạo các phức đơn giản phổ biến như [Ag(NH₃)₂]⁺, [Cu(H₂O)₄]²⁺, [Fe(CN)₆]⁴⁻."],
            ["Phối tử đa càng (Polydentate / Chelate)", "Mỗi phân tử/ion phối tử có từ **2 nguyên tử cho electron trở lên**, có thể ôm giữ lấy ion kim loại trung tâm tạo thành cấu trúc vòng khép kín gọi là **vòng chelate** (vòng càng kẹp).", "• 2 càng (Bidentate): Ethylenediamine (kí hiệu là en: H₂N–CH₂–CH₂–NH₂), Oxalate ion (C₂O₄²⁻).\n• 6 càng (Hexadentate): EDTA⁴⁻ (Ethylenediaminetetraacetate)", "**Hiệu ứng Chelate (Chelate effect):** Các phức chelate có độ bền nhiệt động học cao gấp hàng triệu lần phức phối tử đơn càng tương đương, dùng giải độc kim loại nặng và làm mềm nước cứng."]
          ]
        ));
        children.push(spacer());

        // BÀI 8
        children.push(Bai("Bài 8. Liên kết và cấu tạo của phức chất"));
        children.push(Section("I. Thuyết Liên kết hoá trị (VB) giải thích hình học phức chất"));
        children.push(P("Theo thuyết VB (Valence Bond), liên kết phối trí giữa nguyên tử trung tâm và phối tử được hình thành do sự **xen phủ giữa orbital lai hóa trống của kim loại trung tâm** với **orbital chứa cặp electron tự do của phối tử**:"));
        children.push(DataTable(
          ["Số phối trí", "Kiểu lai hóa của tâm kim loại", "Dạng hình học không gian của phức", "Ví dụ phức chất thực tế"],
          [
            ["2", "Lai hóa **sp**", "Đường thẳng (Linear, góc 180°)", "[Ag(NH₃)₂]⁺, [Ag(CN)₂]⁻, [CuCl₂]⁻"],
            ["4", "Lai hóa **sp³**", "Tứ diện đều (Tetrahedral, góc 109,5°)", "[Zn(NH₃)₄]²⁺, [Ni(CO)₄], [CoCl₄]²⁻"],
            ["4", "Lai hóa **dsp²**", "Vuông phẳng (Square planar, góc 90°)", "[Pt(NH₃)₂Cl₂], [Ni(CN)₄]²⁻, [Cu(NH₃)₄]²⁺"],
            ["6", "Lai hóa **d²sp³** hoặc **sp³d²**", "Bát diện đều (Octahedral, góc 90°)", "[Fe(CN)₆]⁴⁻, [Fe(H₂O)₆]³⁺, [Co(NH₃)₆]³⁺"]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Đồng phân hình học (Cis - Trans) của Phức chất và Thuốc Cisplatin"));
        children.push(P("Phức chất vuông phẳng dạng **[MA₂B₂]** và phức chất bát diện dạng **[MA₄B₂]** có thể tồn tại hai dạng đồng phân hình học trong không gian:"));
        children.push(...Bullet([
          "**Đồng phân cis (cùng phía):** Hai phối tử giống nhau B nằm kề sát nhau (góc liên kết B–M–B = 90°).",
          "**Đồng phân trans (khác phía/đối diện):** Hai phối tử giống nhau B nằm đối diện nhau qua nguyên tử trung tâm (góc liên kết B–M–B = 180°)."
        ]));

        children.push(NoteBox("Câu chuyện khoa học về thuốc chống ung thư Cisplatin", [
          "Phức chất vuông phẳng của Platinum: **[Pt(NH₃)₂Cl₂]**.",
          "• **Cisplatin (Dạng cis):** Hai phối tử Cl⁻ nằm cùng một bên. Khi vào tế bào ung thư, Cisplatin liên kết chéo với hai gốc guanine liền kề trên cùng một mạch đơn của phân tử DNA làm xoắn gãy cấu trúc xoắn kép, ức chế sự nhân đôi của tế bào ung thư và kích hoạt quá trình tự chết (apoptosis) của khối u. Cisplatin là một trong những loại hóa trị liệu ung thư tinh hoàn, buồng trứng hiệu quả nhất lịch sử y học.",
          "• **Transplatin (Dạng trans):** Hai phối tử Cl⁻ nằm đối diện nhau (180°). Transplatin hoàn toàn **không có hoạt tính chống ung thư** vì khoảng cách không gian giữa hai liên kết Pt–Cl không thể khớp vào hai nucleotide kề nhau của DNA. Đây là minh chứng kinh điển cho thấy cấu trúc hình học không gian quyết định trực tiếp đến hoạt tính sinh học của vật chất."
        ]));

        // BÀI 9
        children.push(Bai("Bài 9. Vai trò và ứng dụng của phức chất"));
        children.push(Section("I. Phức chất trong Hệ sinh thái Sinh học"));
        children.push(DataTable(
          ["Phức chất sinh học", "Ion kim loại trung tâm & Cấu trúc", "Vai trò sinh học sống còn"],
          [
            ["Hemoglobin (Hb)", "Ion sắt **Fe²⁺** tạo phức bát diện với vòng porphyrin (nhân heme) và chuỗi globin", "Vận chuyển khí O₂ từ phổi đến tất cả các mô cơ quan trong cơ thể theo phản ứng thuận nghịch: Hb + O₂ ⇌ HbO₂."],
            ["Chlorophyll (Diệp lục tố)", "Ion magnesium **Mg²⁺** nằm tại tâm của vòng porphyrin biến tính", "Đóng vai trò là ăng-ten quang học hấp thụ năng lượng ánh sáng mặt trời để thực hiện phản ứng quang hợp: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂."],
            ["Vitamin B₁₂ (Cobalamin)", "Ion cobalt **Co³⁺** nằm tại tâm của vòng corrin", "Tham gia vào quá trình sinh tổng hợp DNA, tạo tế bào hồng cầu tủy xương và duy trì chức năng thần kinh não bộ."]
          ]
        ));
        children.push(spacer());

        children.push(Section("II. Cơ chế nhiễm độc khí Than CO và Giải độc kim loại nặng bằng EDTA"));
        children.push(...Bullet([
          "**Cơ chế ngộ độc khí than CO:** Khí carbon monoxide (CO) tạo liên kết phối trí với ion Fe²⁺ của hemoglobin bền vững gấp **khoảng 250 lần** so với phân tử O₂ (tạo carboxyhemoglobin bền vững không phân li). Khi hít phải CO, hemoglobin bị chiếm chỗ hoàn toàn không thể gắn O₂, khiến cơ thể rơi vào tình trạng thiếu oxy mô cấp tính, ngạt thở và tử vong nhanh chóng.",
          "**Ứng dụng Chelate giải độc y khoa:** Phối tử 6 càng **EDTA⁴⁻ (Ethylenediaminetetraacetate)** tạo phức chelate cực kì bền vững với các ion kim loại nặng độc hại tích tụ trong máu (như Pb²⁺, Hg²⁺, Cd²⁺). Khi tiêm dung dịch muối Ca-EDTA vào tĩnh mạch, ion Pb²⁺ sẽ đẩy Ca²⁺ ra và tạo phức tan [Pb(EDTA)]²⁻ rất bền đào thải an toàn qua đường nước tiểu."
        ]));

        children.push(Example("Bài toán định lượng 1: Xác định số oxi hóa, số phối trí và điện tích ion phức", [
          "Đề bài: Xác định nguyên tử trung tâm, số oxi hóa của nguyên tử trung tâm, phối tử và số phối trí trong các phức chất sau:\na) K₃[Fe(CN)₆]\nb) [Cu(NH₃)₄]SO₄\nc) [Pt(NH₃)₂Cl₂]",
          "Lời giải từng bước:",
          "a) Trong K₃[Fe(CN)₆]:",
          "• Phức chất gồm cầu ngoại 3K⁺ và cầu nội anion phức [Fe(CN)₆]³⁻.",
          "• Nguyên tử trung tâm: Fe. Phối tử: ion CN⁻ (cyanido, điện tích -1). Số phối trí: **6**.",
          "• Số oxi hóa của Fe: x + 6 × (-1) = -3  => x = **+3** (Fe³⁺).",
          "b) Trong [Cu(NH₃)₄]SO₄:",
          "• Cầu nội là cation phức [Cu(NH₃)₄]²⁺ và cầu ngoại là anion SO₄²⁻.",
          "• Nguyên tử trung tâm: Cu. Phối tử: phân tử trung hòa NH₃ (điện tích 0). Số phối trí: **4**.",
          "• Số oxi hóa của Cu: x + 4 × 0 = +2  => x = **+2** (Cu²⁺).",
          "c) Trong [Pt(NH₃)₂Cl₂]:",
          "• Phức chất là phân tử trung hòa không có cầu ngoại.",
          "• Nguyên tử trung tâm: Pt. Phối tử: 2 phân tử NH₃ (trung hòa) và 2 ion Cl⁻ (điện tích -1). Số phối trí: 2 + 2 = **4**.",
          "• Số oxi hóa của Pt: x + 2 × 0 + 2 × (-1) = 0  => x = **+2** (Pt²⁺)."
        ]));

        children.push(Example("Bài toán định lượng 2: Tính nồng độ ion bạc tự do Ag+ trong dung dịch cân bằng phức chất", [
          "Đề bài: Cho 0,1 mol AgNO₃ tác dụng với 1 lít dung dịch NH₃ 1,2 M. Trong dung dịch xảy ra phản ứng tạo ion phức diamminebạc(I) theo phương trình:\nAg⁺  +  2NH₃  ⇌  [Ag(NH₃)₂]⁺\nBiết hằng số bền tổng cộng của ion phức là β₂ = 1,0 × 10⁷. Giả thiết thể tích dung dịch không đổi (1 lít). Hãy tính nồng độ mol của ion Ag⁺ tự do còn lại trong dung dịch ở trạng thái cân bằng.",
          "Lời giải từng bước:",
          "1. Nồng độ ban đầu: [Ag⁺]₀ = 0,1 M; [NH₃]₀ = 1,2 M.",
          "Vì hằng số bền β₂ = 10⁷ rất lớn nên phản ứng tạo phức xảy ra gần như hoàn toàn.",
          "2. Tính nồng độ sau phản ứng tạo phức giả định hoàn toàn:",
          "• [Ag(NH₃)₂]⁺ ≈ 0,1 M.",
          "• Lượng NH₃ đã phản ứng: 2 × 0,1 = 0,2 M  => [NH₃] dư = 1,2 – 0,2 = 1,0 M.",
          "3. Gọi x là nồng độ ion Ag⁺ tự do bị phân li ngược lại ở trạng thái cân bằng (x << 0,1):",
          "Biểu thức hằng số bền: β₂ = [[Ag(NH₃)₂]⁺] / ([Ag⁺] × [NH₃]²)",
          "Thay số: 1,0 × 10⁷ = 0,1 / (x × 1,0²)",
          "x = 0,1 / (1,0 × 10⁷) = **1,0 × 10⁻⁸ M**.",
          "Kết luận: Nồng độ ion Ag⁺ tự do trong dung dịch cực kì nhỏ (chỉ còn 10⁻⁸ M), chứng tỏ phức [Ag(NH₃)₂]⁺ rất bền vững."
        ]));

        children.push(CheckQuestions("Tự kiểm tra nhanh Chuyên đề 3", [
          { q: "Tại sao đồng phân Cisplatin có khả năng ức chế khối u ung thư phát triển trong khi đồng phân Transplatin lại không có tác dụng?", a: "Vì trong Cisplatin, 2 nhóm rời đi Cl⁻ nằm cùng một bên (góc 90°), có khoảng cách tương ứng với khoảng cách giữa hai base guanine liền kề trên cùng một mạch đơn DNA tế bào ung thư, cho phép nó tạo liên kết phối trí kẹp đôi bền vững làm gập gãy chuỗi xoắn kép DNA khiến tế bào ung thư không thể sao chép và bị tiêu diệt. Ngược lại, ở Transplatin 2 nhóm Cl⁻ nằm đối diện nhau (góc 180°), khoảng cách quá xa không thể gắn đồng thời vào 2 base cạnh nhau trên DNA nên hoàn toàn mất hoạt tính điều trị ung thư." }
        ]));

        return children;
      }
    }
  ]
};
