# Ứng Dụng Tạo File Ôn Tập Lý Thuyết Hóa Học THPT (KNTT)

Ứng dụng web tự động tạo và tải về tài liệu tóm tắt kiến thức lý thuyết trọng tâm môn Hóa học THPT (Lớp 10, 11, 12 – Học kì 1 và Học kì 2) định dạng **Word (.docx)**, biên soạn theo chuẩn **Phân phối chương trình (PPCT)**, **Sách giáo khoa** và **Yêu cầu cần đạt** của bộ sách **Kết nối tri thức với cuộc sống**.

🔗 **Kho lưu trữ GitHub:** [https://github.com/TMT-2025/onlithuyetcoban-hs](https://github.com/TMT-2025/onlithuyetcoban-hs)

---

## 🌟 Tính Năng Nổi Bật

- **Đầy đủ 3 khối lớp:** Hóa học 10, 11 và 12.
- **Bao quát cả 2 học kì:** Học kì 1 và Học kì 2 bám sát khung PPCT năm học 2026-2027.
- **Chia nhỏ tài liệu thông minh:** Mỗi học kì được chia tối đa **7 phần** tải xuống, giúp file vừa vặn, in ấn tiện lợi, học sinh dễ học theo từng giai đoạn ôn tập.
- **Hỗ trợ tải linh hoạt:** Tải từng phần riêng lẻ hoặc bấm một nút để tải tuần tự toàn bộ các phần.
- **Định dạng chuẩn in ấn:** File `.docx` thiết kế chuẩn lề, font Times New Roman, bảng biểu, hộp ghi nhớ, phương trình hóa học rõ ràng, đẹp mắt.
- **Sẵn sàng triển khai:** Chạy được cục bộ bằng Node.js Express hoặc đưa lên đám mây **Vercel** thông qua Serverless Functions.

---

## 📂 Cấu Trúc Dự Án

```text
├── api/
│   └── index.js             # Vercel Serverless Function (xử lý API /api/parts, /api/download, /api/info)
├── public/
│   └── index.html           # Giao diện người dùng hiện đại, responsive, hỗ trợ tải file trực tiếp
├── chemistry-content.js     # Cơ sở dữ liệu lý thuyết chi tiết cả 3 khối lớp 10, 11, 12 (HK1 & HK2)
├── server.js                # Máy chủ cục bộ Node.js / Express (phục vụ web tại port 3007)
├── vercel.json              # Cấu hình triển khai Vercel
├── package.json             # Danh sách dependencies (docx, express)
└── TaoTaiLieuOnTapChuongChoHS-hoa_app_source_code-Claude/ # Thư viện mã nguồn gốc và tài nguyên tham khảo
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Cục Bộ

### 1. Yêu cầu môi trường
- [Node.js](https://nodejs.org/) (phiên bản 18 trở lên).

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Khởi động ứng dụng
```bash
npm start
```
Truy cập trình duyệt tại địa chỉ: `http://localhost:3007`

---

## ☁️ Hướng Dẫn Triển Khai Lên Vercel

Dự án đã được cấu hình sẵn file `vercel.json` và thư mục `api/index.js` chuẩn serverless:

1. Đăng nhập vào [Vercel](https://vercel.com).
2. Chọn **Add New Project** ➜ **Import Git Repository** ➜ Chọn repository `TMT-2025/onlithuyetcoban-hs`.
3. Giữ nguyên các cấu hình mặc định (Root Directory `./`, Framework Preset `Other`).
4. Bấm **Deploy**. Vercel sẽ tự động build và cấp domain hoạt động trực tiếp!
