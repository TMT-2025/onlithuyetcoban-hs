const fs = require("fs");
const base = require("./02_build_chapter2.js");
const { children, H } = base;
const { Document, Packer, P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions,
  ChapterIntro, DataTable, Img, spacer, Eq } = H;

children.push(Chapter("CHƯƠNG 3: ĐẠI CƯƠNG VỀ HOÁ HỌC HỮU CƠ"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Hoá học hữu cơ là nền tảng của **hầu hết vật liệu và sản phẩm quanh ta**: nhựa, tơ sợi, thuốc chữa bệnh, mĩ phẩm, nhiên liệu, thực phẩm — tất cả đều là hợp chất hữu cơ.",
  "Hiểu khái niệm **đồng đẳng, đồng phân** giải thích vì sao chỉ với carbon, hydrogen và một vài nguyên tố khác mà tự nhiên tạo ra **hàng triệu hợp chất hữu cơ khác nhau**, kể cả sự đa dạng của sự sống (DNA, protein).",
  "Các phương pháp tách biệt, tinh chế (chưng cất, chiết, sắc kí) là công cụ nền tảng để **sản xuất tinh dầu, chiết xuất dược liệu, tinh chế xăng dầu, kiểm nghiệm thực phẩm**.",
]));
children.push(spacer());

children.push(Bai("Bài 10. Hợp chất hữu cơ và hoá học hữu cơ"));
children.push(Section("I. Khái niệm"));
children.push(P("**Hoá học hữu cơ** là ngành hoá học nghiên cứu về các **hợp chất hữu cơ** — hợp chất của carbon (trừ một số hợp chất đơn giản như CO, CO₂, muối carbonate, cyanide...)."));
children.push(Section("II. Đặc điểm chung của hợp chất hữu cơ"));
children.push(...Bullet([
  "Liên kết hoá học chủ yếu là **liên kết cộng hoá trị**.",
  "Nhiệt độ nóng chảy, nhiệt độ sôi thường **thấp** (dễ bay hơi); phần lớn **không tan hoặc ít tan trong nước**, tan tốt trong dung môi hữu cơ.",
  "Dễ cháy (dễ bị oxi hoá) hơn hợp chất vô cơ.",
  "Phản ứng hoá học của hợp chất hữu cơ thường xảy ra **chậm, theo nhiều hướng khác nhau**, tạo ra hỗn hợp sản phẩm.",
]));
children.push(Section("III. Phân loại hợp chất hữu cơ"));
children.push(P("Chia làm hai loại lớn: **hydrocarbon** (phân tử chỉ chứa C và H) và **dẫn xuất của hydrocarbon** (phân tử có thêm các nguyên tố khác như O, N, halogen... tạo thành các **nhóm chức**)."));
children.push(NoteBox("Nhóm chức", [
  "**Nhóm chức** là nhóm nguyên tử gây ra những tính chất hoá học đặc trưng của hợp chất hữu cơ. Ví dụ: nhóm –OH (alcohol), nhóm –COOH (carboxylic acid), nhóm –CHO (aldehyde).",
]));

children.push(Bai("Bài 11. Phương pháp tách biệt và tinh chế hợp chất hữu cơ"));
children.push(...Img("06_chungcat_chiet.png", 460, "Hai phương pháp tách biệt hợp chất hữu cơ phổ biến: chưng cất và chiết."));
children.push(DataTable(
  ["Phương pháp", "Nguyên tắc", "Ứng dụng thường gặp"],
  [
    ["Chưng cất", "Dựa vào sự khác nhau về nhiệt độ sôi", "Tách rượu (ethanol) ra khỏi hỗn hợp lên men; chưng cất tinh dầu"],
    ["Chiết", "Dựa vào độ tan khác nhau trong hai dung môi không trộn lẫn", "Chiết tinh dầu từ thực vật, chiết dược liệu"],
    ["Kết tinh", "Dựa vào độ tan khác nhau của chất rắn theo nhiệt độ", "Tinh chế muối ăn, đường"],
    ["Sắc kí cột", "Dựa vào khả năng hấp phụ khác nhau trên pha tĩnh", "Phân tích, tách các thành phần trong hỗn hợp phức tạp"],
  ],
));
children.push(spacer());
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Muốn tách tinh dầu sả (không tan trong nước) ra khỏi hỗn hợp sau khi chưng cất lôi cuốn hơi nước, nên dùng phương pháp nào?", a: "Dùng phương pháp chiết, vì tinh dầu và nước là hai chất lỏng không tan lẫn vào nhau (phân lớp), có thể tách riêng bằng phễu chiết." },
]));

children.push(Bai("Bài 12. Công thức phân tử hợp chất hữu cơ"));
children.push(Section("I. Phân tích nguyên tố"));
children.push(...Bullet([
  "**Phân tích định tính:** xác định các nguyên tố có mặt trong hợp chất hữu cơ.",
  "**Phân tích định lượng:** xác định thành phần phần trăm khối lượng mỗi nguyên tố.",
]));
children.push(Section("II. Công thức đơn giản nhất và công thức phân tử"));
children.push(...Bullet([
  "**Công thức đơn giản nhất (CTĐGN):** biểu thị tỉ lệ tối giản về số nguyên tử của các nguyên tố trong phân tử.",
  "**Công thức phân tử (CTPT):** biểu thị đúng số lượng nguyên tử của mỗi nguyên tố trong phân tử. CTPT = (CTĐGN)ₙ, với n xác định dựa vào phân tử khối (thường xác định qua phổ khối lượng MS).",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Một hợp chất hữu cơ có công thức đơn giản nhất là CH2O và phân tử khối bằng 60. Xác định công thức phân tử.",
  "Lời giải: Khối lượng CTĐGN = 12+2+16 = 30. Ta có n = 60/30 = 2. Vậy công thức phân tử là (CH2O)2 = **C2H4O2**.",
]));

children.push(Bai("Bài 13. Cấu tạo hoá học hợp chất hữu cơ"));
children.push(Section("I. Thuyết cấu tạo hoá học"));
children.push(NoteBox("Nội dung thuyết cấu tạo hoá học (Butlerov)", [
  "Trong phân tử hợp chất hữu cơ, các nguyên tử liên kết với nhau theo đúng **hoá trị** và theo một **thứ tự nhất định** — thứ tự liên kết đó gọi là **cấu tạo hoá học**.",
  "**Tính chất của chất phụ thuộc vào thành phần phân tử** (bản chất, số lượng nguyên tử) **và cấu tạo hoá học** (thứ tự liên kết giữa các nguyên tử).",
]));
children.push(Section("II. Đồng đẳng"));
children.push(P("**Đồng đẳng** là các hợp chất có thành phần phân tử **hơn kém nhau một hay nhiều nhóm CH₂** nhưng có **tính chất hoá học tương tự nhau** (do có cấu tạo hoá học tương tự), tạo thành một **dãy đồng đẳng**."));
children.push(Section("III. Đồng phân"));
children.push(P("**Đồng phân** là các hợp chất có **cùng công thức phân tử** nhưng **khác nhau về cấu tạo hoá học**, nên có tính chất khác nhau. Có các loại đồng phân cấu tạo: đồng phân mạch carbon, đồng phân vị trí nhóm chức, đồng phân loại nhóm chức."));
children.push(...Img("05_dongdang_dongphan.png", 460, "Minh hoạ dãy đồng đẳng alkane (trái) và hiện tượng đồng phân của C4H10 (phải)."));
children.push(Sub("Giải thích"));
children.push(P("Sở dĩ chỉ với một số loại nguyên tố (chủ yếu C, H, O, N) mà hoá hữu cơ có **hàng triệu hợp chất khác nhau** là vì nguyên tử carbon có thể liên kết với nhau theo **nhiều cách khác nhau** (mạch thẳng, mạch nhánh, mạch vòng) tạo ra vô số cấu tạo hoá học khác nhau, dù cùng một công thức phân tử — đó chính là hiện tượng đồng phân."));
children.push(Example("Ví dụ minh hoạ", [
  "Vì sao ethanol (CH3-CH2-OH) và dimethyl ether (CH3-O-CH3) đều có công thức phân tử C2H6O nhưng có tính chất vật lí, hoá học rất khác nhau (ethanol là chất lỏng, phản ứng được với Na; dimethyl ether là chất khí, không phản ứng với Na)?",
  "Lời giải: Đây là một cặp đồng phân — tuy cùng CTPT C2H6O nhưng khác cấu tạo hoá học (khác loại nhóm chức: ethanol có nhóm –OH, dimethyl ether có nhóm –O– giữa hai gốc alkyl), theo thuyết cấu tạo hoá học, cấu tạo khác nhau dẫn đến tính chất khác nhau.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Hai chất CH3-CH2-CH2-CH3 (butane) và CH3-CH(CH3)-CH3 (isobutane) có phải là đồng đẳng của nhau không? Vì sao?", a: "Không, đây là đồng phân của nhau (cùng công thức phân tử C4H10 nhưng khác cấu tạo mạch carbon), không phải đồng đẳng (đồng đẳng phải khác nhau về thành phần, hơn kém nhau nhóm CH2)." },
]));

children.push(Bai("Ôn tập Chương 3"));
children.push(...Bullet([
  "Hợp chất hữu cơ có đặc điểm chung: liên kết cộng hoá trị, nhiệt độ sôi/nóng chảy thấp, dễ cháy, phản ứng chậm và theo nhiều hướng.",
  "Công thức phân tử được xác định từ công thức đơn giản nhất và phân tử khối.",
  "Thuyết cấu tạo hoá học: tính chất phụ thuộc cả thành phần phân tử và cấu tạo hoá học — giải thích các hiện tượng đồng đẳng, đồng phân.",
]));

// ---- assemble document ----
const doc = new Document({
  styles: { default: { document: { run: { font: "Times New Roman", size: 22 } } } },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11907, height: 16840 },
          margin: { top: 1134, bottom: 1134, left: 1417, right: 1134 },
        },
      },
      children,
    },
  ],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("./output/Tom_tat_ly_thuyet_Hoa_11_HK1_KNTT.docx", buf);
  console.log("done, bytes=", buf.length);
});
