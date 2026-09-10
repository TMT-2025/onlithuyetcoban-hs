const path = require("path");
const { createHelpers } = require("../lib/docxhelpers.js");

const IMG_DIR = path.join(__dirname, "img");
const IMG_DIMS = {
  "01_do_thi_can_bang.png": [1124, 661],
  "02_n2_nh3.png": [1227, 562],
  "03_chu_trinh_nitrogen.png": [1235, 729],
  "04_sanxuat_h2so4.png": [1308, 466],
  "05_dongdang_dongphan.png": [1389, 525],
  "06_chungcat_chiet.png": [1308, 563],
};

const H = createHelpers(IMG_DIR, IMG_DIMS);
const { P, Chapter, Bai, Section, Sub, Bullet, NoteBox, Example, CheckQuestions,
  ChapterIntro, DataTable, Img, spacer, TitlePage, Eq } = H;

const children = [];
children.push(...TitlePage(
  "TÓM TẮT LÝ THUYẾT TRỌNG TÂM",
  "HÓA HỌC 11 — HỌC KÌ 1",
  "Bộ sách Kết nối tri thức với cuộc sống",
  "Nội dung: Chương 1: Cân bằng hoá học • Chương 2: Nitrogen – Sulfur • Chương 3: Đại cương về hoá học hữu cơ"
));

// ============ CHƯƠNG 1: CÂN BẰNG HOÁ HỌC ============
children.push(Chapter("CHƯƠNG 1: CÂN BẰNG HOÁ HỌC"));
children.push(ChapterIntro("Ý nghĩa thực tiễn", [
  "Nguyên lí chuyển dịch cân bằng giúp các nhà công nghiệp **tối ưu hiệu suất phản ứng** — ví dụ chọn điều kiện áp suất, nhiệt độ phù hợp để tổng hợp ammonia (NH₃) với hiệu suất cao nhất trong công nghiệp phân bón.",
  "Cân bằng trong dung dịch nước (pH, sự điện li) là cơ sở để hiểu **cân bằng acid – base trong máu**, kiểm soát độ pH trong nuôi trồng thuỷ sản, xử lí nước, và sản xuất thực phẩm.",
  "Hiểu cân bằng hoá học giúp giải thích nhiều hiện tượng tự nhiên: sự hoà tan CO₂ trong nước biển (ảnh hưởng đến hệ san hô), quá trình tạo thạch nhũ trong hang động.",
]));
children.push(spacer());

children.push(Bai("Bài 1. Khái niệm về cân bằng hoá học"));
children.push(Section("I. Phản ứng thuận nghịch"));
children.push(P("**Phản ứng thuận nghịch** là phản ứng trong đó, ở cùng điều kiện, xảy ra đồng thời theo **hai chiều trái ngược nhau** (chiều thuận và chiều nghịch), kí hiệu bằng mũi tên hai chiều **⇌**."));
children.push(Eq("**Ví dụ:**  H₂ (k)  +  I₂ (k)  ⇌  2HI (k)"));
children.push(Section("II. Cân bằng hoá học"));
children.push(P("**Cân bằng hoá học** là trạng thái của phản ứng thuận nghịch khi **tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch** (v₁ = v₂). Ở trạng thái cân bằng, nồng độ các chất **không đổi theo thời gian**, nhưng phản ứng thuận và nghịch vẫn tiếp diễn — đây là một **cân bằng động**."));
children.push(...Img("01_do_thi_can_bang.png", 440, "Tốc độ phản ứng thuận giảm dần, tốc độ phản ứng nghịch tăng dần cho đến khi bằng nhau — trạng thái cân bằng."));
children.push(Section("III. Hằng số cân bằng Kc"));
children.push(P("Với phản ứng tổng quát: aA + bB ⇌ cC + dD, hằng số cân bằng được biểu diễn:"));
children.push(Eq("**Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ**  (nồng độ mol/L tại trạng thái cân bằng; chất rắn không có mặt trong biểu thức Kc)"));
children.push(NoteBox("Ghi nhớ", [
  "Hằng số cân bằng Kc chỉ phụ thuộc vào **nhiệt độ** và **bản chất phản ứng**, không phụ thuộc vào nồng độ ban đầu các chất.",
  "Kc càng lớn thì cân bằng càng chuyển dịch về phía tạo sản phẩm (chiều thuận chiếm ưu thế).",
]));
children.push(Example("Ví dụ minh hoạ", [
  "Cho phản ứng: N₂ (k) + 3H₂ (k) ⇌ 2NH₃ (k). Viết biểu thức hằng số cân bằng Kc của phản ứng.",
  "Lời giải: Kc = [NH₃]² / ([N₂][H₂]³).",
]));

children.push(Bai("Bài 2. Cân bằng trong dung dịch nước"));
children.push(Section("I. Sự điện li"));
children.push(P("**Sự điện li** là quá trình các chất phân li thành ion khi tan trong nước (hoặc nóng chảy)."));
children.push(DataTable(
  ["Loại chất điện li", "Mức độ phân li", "Ví dụ"],
  [
    ["Chất điện li mạnh", "Phân li hoàn toàn (một chiều)", "Acid mạnh (HCl), base mạnh (NaOH), hầu hết muối tan"],
    ["Chất điện li yếu", "Phân li một phần (cân bằng, thuận nghịch)", "CH3COOH, NH3, H2CO3"],
  ],
));
children.push(spacer());
children.push(Eq("**Điện li chất điện li mạnh:**  HCl  →  H⁺  +  Cl⁻"));
children.push(Eq("**Điện li chất điện li yếu (cân bằng):**  CH₃COOH  ⇌  CH₃COO⁻  +  H⁺"));
children.push(Section("II. pH của dung dịch"));
children.push(P("**pH = −log[H⁺]**, dùng để đánh giá độ acid/base của dung dịch (ở 25 °C):"));
children.push(DataTable(
  ["Khoảng pH", "Môi trường", "Chất chỉ thị (quỳ tím)"],
  [
    ["pH < 7", "Acid", "Hoá đỏ"],
    ["pH = 7", "Trung tính", "Không đổi màu"],
    ["pH > 7", "Base (kiềm)", "Hoá xanh"],
  ],
));
children.push(spacer());
children.push(Section("III. Sự chuyển dịch cân bằng — Nguyên lí Le Chatelier"));
children.push(NoteBox("Nguyên lí Le Chatelier", [
  "Khi một hệ đang ở trạng thái cân bằng chịu tác động từ bên ngoài (thay đổi **nồng độ, nhiệt độ, áp suất**), cân bằng sẽ **chuyển dịch theo chiều làm giảm bớt tác động đó**.",
]));
children.push(Sub("Giải thích"));
children.push(P("Nguyên lí này có thể hiểu như một cơ chế **\"tự điều chỉnh\"** của hệ hoá học: khi tăng nồng độ một chất phản ứng, hệ sẽ ưu tiên phản ứng theo chiều **tiêu thụ bớt** chất đó (chiều thuận) để lập lại cân bằng mới; khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều **phản ứng thu nhiệt** (để hấp thụ bớt nhiệt lượng dư); khi tăng áp suất (đối với phản ứng có chất khí), cân bằng chuyển dịch theo chiều làm **giảm số mol khí** (giảm áp suất)."));
children.push(Example("Ví dụ minh hoạ", [
  "Phản ứng tổng hợp ammonia: N₂ (k) + 3H₂ (k) ⇌ 2NH₃ (k)  ΔH < 0 (toả nhiệt). Cân bằng sẽ chuyển dịch theo chiều nào khi tăng áp suất? Khi tăng nhiệt độ?",
  "Lời giải: Tăng áp suất → cân bằng chuyển dịch theo chiều giảm số mol khí, tức chiều thuận (4 mol khí → 2 mol khí) → tạo thêm NH₃. Tăng nhiệt độ → cân bằng chuyển dịch theo chiều thu nhiệt, tức chiều nghịch (vì chiều thuận toả nhiệt) → lượng NH₃ giảm.",
]));
children.push(CheckQuestions("Tự kiểm tra nhanh", [
  { q: "Vì sao trong công nghiệp, tổng hợp NH₃ thường thực hiện ở áp suất cao nhưng nhiệt độ không quá cao (khoảng 400–450°C)?", a: "Áp suất cao giúp cân bằng chuyển dịch theo chiều thuận (giảm số mol khí) làm tăng hiệu suất NH3. Tuy phản ứng toả nhiệt nên nhiệt độ thấp có lợi cho cân bằng, nhưng nhiệt độ quá thấp làm tốc độ phản ứng quá chậm, nên người ta chọn nhiệt độ vừa phải để cân bằng giữa hiệu suất và tốc độ phản ứng." },
]));

children.push(Bai("Ôn tập Chương 1"));
children.push(...Bullet([
  "Cân bằng hoá học là trạng thái động, khi tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch.",
  "Hằng số cân bằng Kc chỉ phụ thuộc nhiệt độ; pH = −log[H⁺] đánh giá môi trường acid/base.",
  "Nguyên lí Le Chatelier: cân bằng luôn chuyển dịch theo chiều làm giảm tác động từ bên ngoài (nồng độ, nhiệt độ, áp suất).",
]));
children.push(spacer());

module.exports = { children, H };
