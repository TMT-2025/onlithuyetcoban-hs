# Ứng dụng tạo file tóm tắt lý thuyết Hóa học (KNTT)

Đây là toàn bộ mã nguồn đã dùng để tạo các file .docx tóm tắt lý thuyết Hóa học
lớp 10/11/12 (bộ sách Kết nối tri thức) trong cuộc trò chuyện này.

## Kiến trúc tổng thể

1. **`selector-widget.html`** — giao diện chọn khối lớp / học kì, hiển thị dạng
   widget tương tác ngay trong khung chat (dùng tool `visualize:show_widget`
   của Claude). Khi người dùng bấm một nút, widget gọi `sendPrompt(...)` để gửi
   yêu cầu quay lại cuộc trò chuyện; Claude sẽ đọc yêu cầu đó và chạy các script
   Node.js tương ứng bên dưới để biên soạn nội dung, tạo hình minh họa và xuất
   file .docx.

2. **`lib/docxhelpers.js`** — thư viện dùng chung, cung cấp các hàm dựng khối nội
   dung cho tài liệu Word bằng package `docx` (npm):
   - `Chapter`, `Bai`, `Section`, `Sub` — các cấp tiêu đề (chương / bài / mục).
   - `P`, `Bullet`, `Eq` — đoạn văn, danh sách gạch đầu dòng, dòng phương trình
     hoá học (căn giữa).
   - `NoteBox`, `Example`, `CheckQuestions`, `ChapterIntro` — các khung màu
     (ghi nhớ/kết luận, ví dụ minh hoạ, tự kiểm tra nhanh, ý nghĩa thực tiễn).
   - `DataTable` — bảng có tiêu đề tô màu, các dòng so le màu nền.
   - `Img` — chèn hình PNG (đọc từ thư mục `img/`) kèm chú thích.
   - `TitlePage` — trang bìa.
   - Cú pháp `**chữ đậm**` trong mọi chuỗi văn bản sẽ tự động in đậm.

3. **`hoa10-hk1/`, `hoa11-hk1/`, `hoa12-hk1/`** — mỗi thư mục ứng với một
   khối/học kì đã tạo, gồm:
   - `gen_images*.py` — script Python (dùng `matplotlib`) vẽ các hình minh hoạ
     (sơ đồ, cấu trúc phân tử, biểu đồ...) và lưu vào thư mục con `img/`.
   - `0N_build_*.js` — các script Node.js nối tiếp nhau (mỗi file `require()`
     file trước để kế thừa mảng nội dung `children`), mỗi file phụ trách một
     phần nội dung (ví dụ 1–2 chương). File cuối cùng trong chuỗi sẽ:
     - Ghép toàn bộ `children` thành một `Document` của package `docx`.
     - Đóng gói (`Packer.toBuffer`) và ghi ra file `.docx` trong `output/`.
   - `img/` — các hình PNG đã được vẽ sẵn (có thể chạy lại `gen_images*.py`
     để tái tạo).

## Cách chạy lại (tái tạo file .docx)

Yêu cầu: Node.js (đã cài package `docx` — `npm install docx`), Python 3 với
`matplotlib` và `Pillow` (nếu muốn vẽ lại hình).

```bash
cd hoa10-hk1
# (tuỳ chọn) vẽ lại hình minh hoạ — ảnh PNG có sẵn nên bước này không bắt buộc
python3 gen_images.py

# chạy script cuối cùng trong chuỗi — nó tự require() các script trước đó
node 02_build_chapters_2-4_and_export.js
# → xuất ra hoa10-hk1/output/Tom_tat_ly_thuyet_Hoa_10_HK1_KNTT.docx
```

Tương tự với `hoa11-hk1` (chạy `03_build_chapter3_and_export.js`) và
`hoa12-hk1` (chạy `04_build_chapters_4-6_and_export.js`).

## Ghi chú

- `hoa10-hk1` được viết ở giai đoạn đầu nên định nghĩa các hàm dựng nội dung
  ngay trong `01_build_chapters_1.js` (chưa dùng `lib/docxhelpers.js`).
  `hoa11-hk1` và `hoa12-hk1` được viết sau, dùng chung `lib/docxhelpers.js`
  để tránh lặp code.
- Đường dẫn xuất file trong các script đã được đổi thành `./output/...`
  (tương đối) để chạy được ở máy khác; bản gốc dùng trong phiên làm việc này
  xuất thẳng ra `/mnt/user-data/outputs/`.
- Các chương trình đều được viết theo đúng PPCT (phân phối chương trình) của
  bộ sách Kết nối tri thức mà bạn đã cung cấp.
