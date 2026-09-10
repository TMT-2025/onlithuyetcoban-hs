/**
 * Nội dung lý thuyết hóa học trọng tâm - Bộ sách Kết nối tri thức với cuộc sống
 * Dựa theo PPCT, SGK, Yêu cầu cần đạt các khối lớp 10, 11, 12
 */

const chemistryContent = {
  10: {
    hk1: {
      title: "LÝ THUYẾT HÓA HỌC 10 – HỌC KÌ 1",
      subtitle: "Bộ sách: Kết nối tri thức với cuộc sống",
      parts: [
        {
          id: "hk1_10_p1",
          label: "Phần 1/7: Nhập môn & Cấu tạo nguyên tử",
          chapters: [
            {
              title: "MỞ ĐẦU: NHẬP MÔN HÓA HỌC",
              sections: [
                {
                  heading: "1. Đối tượng nghiên cứu của hóa học",
                  content: [
                    "Hóa học là ngành khoa học nghiên cứu về chất, sự biến đổi chất và ứng dụng của chúng.",
                    "Hóa học nghiên cứu: thành phần, cấu trúc, tính chất của chất; sự biến đổi chất (phản ứng hóa học); năng lượng kèm theo sự biến đổi chất.",
                  ]
                },
                {
                  heading: "2. Vai trò của hóa học",
                  content: [
                    "Hóa học đóng vai trò quan trọng trong các lĩnh vực: y tế, nông nghiệp, công nghiệp, môi trường, vật liệu mới.",
                    "Hóa học giúp sản xuất thuốc chữa bệnh, phân bón, chất dẻo, sợi tổng hợp, chất tẩy rửa...",
                  ]
                },
                {
                  heading: "3. Phương pháp học tập và nghiên cứu hóa học",
                  content: [
                    "Phương pháp nghiên cứu hóa học gồm: quan sát, thực nghiệm, lý thuyết.",
                    "Quy trình nghiên cứu: Quan sát → Đặt câu hỏi → Giả thuyết → Thực nghiệm kiểm tra → Kết luận.",
                  ]
                }
              ]
            },
            {
              title: "CHƯƠNG 1: CẤU TẠO NGUYÊN TỬ",
              sections: [
                {
                  heading: "Bài 1: Thành phần của nguyên tử",
                  content: [
                    "Nguyên tử vô cùng nhỏ, gồm 2 phần: hạt nhân và lớp vỏ electron.",
                    "Hạt nhân gồm: proton (p) mang điện tích +1, khối lượng ≈ 1 amu; neutron (n) không mang điện, khối lượng ≈ 1 amu.",
                    "Lớp vỏ gồm: electron (e) mang điện tích -1, khối lượng ≈ 1/1836 amu (rất nhỏ so với hạt nhân).",
                    "Trong nguyên tử trung hòa: số p = số e.",
                    "Kích thước nguyên tử (~10⁻¹⁰ m) >> kích thước hạt nhân (~10⁻¹⁵ m).",
                    "Khối lượng nguyên tử tập trung chủ yếu ở hạt nhân (do me << mp ≈ mn).",
                  ]
                },
                {
                  heading: "Bài 2: Nguyên tố hóa học",
                  content: [
                    "Nguyên tố hóa học: tập hợp các nguyên tử có cùng số proton trong hạt nhân.",
                    "Số hiệu nguyên tử (Z) = số proton = số electron (trong nguyên tử trung hòa).",
                    "Kí hiệu nguyên tử: ᴬzX, trong đó A = số khối = Z + N, Z = số proton, N = số neutron.",
                    "Đồng vị: các nguyên tử có cùng Z nhưng khác N (khác số khối A).",
                    "Ví dụ đồng vị hydrogen: ¹₁H (protium), ²₁H (deuterium), ³₁H (tritium).",
                    "Nguyên tử khối trung bình: Ā = (a₁.m₁ + a₂.m₂ +...+ aₙ.mₙ)/100, trong đó aᵢ là % số nguyên tử đồng vị i.",
                  ]
                },
                {
                  heading: "Bài 3: Cấu trúc lớp vỏ electron nguyên tử",
                  content: [
                    "Mô hình Rutherford–Bohr: electron chuyển động trên các quỹ đạo tròn/elip xác định quanh hạt nhân.",
                    "Mô hình hiện đại: electron chuyển động không theo quỹ đạo xác định, tồn tại ở dạng 'đám mây electron' (orbital nguyên tử – AO).",
                    "Orbital nguyên tử (AO): khu vực không gian xung quanh hạt nhân mà xác suất tìm thấy electron cao nhất (≥ 90%).",
                    "Hình dạng AO: AO s có dạng hình cầu; AO p có dạng hình số 8 (thuỳ đôi), có 3 AO p định hướng theo 3 trục Ox, Oy, Oz.",
                    "Mỗi AO chứa tối đa 2 electron (nguyên lý Pauli).",
                    "Lớp electron (n = 1, 2, 3...): lớp K (n=1), L (n=2), M (n=3), N (n=4).",
                    "Phân lớp electron: s, p, d, f. Lớp n có n phân lớp (n ≤ 4).",
                    "Số AO: phân lớp s: 1 AO; phân lớp p: 3 AO; phân lớp d: 5 AO; phân lớp f: 7 AO.",
                    "Số electron tối đa: phân lớp s: 2e; phân lớp p: 6e; phân lớp d: 10e; phân lớp f: 14e.",
                    "Nguyên lý Aufbau (xây dựng): electron điền vào AO theo thứ tự năng lượng tăng dần: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p...",
                    "Quy tắc Hund: trong cùng một phân lớp, các electron điền vào từng AO trống trước, sau đó ghép đôi, các electron đơn độc phải có chiều spin giống nhau.",
                    "Cấu hình electron: 20 nguyên tố đầu (Z=1→20)",
                    "Ví dụ: Na (Z=11): 1s²2s²2p⁶3s¹ → có 1e lớp ngoài cùng → là kim loại.",
                    "Cl (Z=17): 1s²2s²2p⁶3s²3p⁵ → có 7e lớp ngoài cùng → là phi kim.",
                    "Kim loại: 1–3e lớp ngoài cùng; Phi kim: 5–7e lớp ngoài cùng; Khí hiếm: 8e lớp ngoài cùng (trừ He: 2e).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_10_p2",
          label: "Phần 2/7: Bảng tuần hoàn",
          chapters: [
            {
              title: "CHƯƠNG 2: BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HÓA HỌC",
              sections: [
                {
                  heading: "Bài 4: Cấu tạo của bảng tuần hoàn",
                  content: [
                    "Lịch sử: Mendeleev (1869) sắp xếp các nguyên tố theo chiều tăng dần khối lượng nguyên tử và sự lặp lại tính chất hóa học → Định luật tuần hoàn.",
                    "Định luật tuần hoàn hiện đại: Tính chất của các nguyên tố biến đổi tuần hoàn theo chiều tăng của số hiệu nguyên tử.",
                    "Bảng tuần hoàn gồm: 118 nguyên tố, 7 chu kì, 18 nhóm (8 nhóm A và 8 nhóm B), 2 hàng nguyên tố lanthanide và actinide.",
                    "Chu kì: hàng ngang, số thứ tự chu kì = số lớp electron.",
                    "Nhóm: cột dọc, các nguyên tố trong cùng nhóm có cấu hình electron lớp ngoài cùng giống nhau → tính chất hóa học tương tự.",
                    "Nhóm A (IA → VIIIA): số thứ tự nhóm = số e lớp ngoài cùng.",
                    "Khối s (nhóm IA, IIA), khối p (nhóm IIIA → VIIIA), khối d (nhóm IB → VIIIB), khối f (lanthanide, actinide).",
                  ]
                },
                {
                  heading: "Bài 5: Xu hướng biến đổi một số tính chất của nguyên tố",
                  content: [
                    "Bán kính nguyên tử: trong chu kì → tăng Z → bán kính giảm (do lực hút hạt nhân tăng); trong nhóm A → tăng Z → bán kính tăng (thêm lớp electron).",
                    "Độ âm điện (χ): đặc trưng khả năng hút electron của nguyên tử trong liên kết hóa học.",
                    "Trong chu kì → tăng Z → độ âm điện tăng; trong nhóm → tăng Z → độ âm điện giảm.",
                    "F có độ âm điện lớn nhất (3,98), Cs có độ âm điện nhỏ nhất trong kim loại.",
                    "Tính kim loại: trong chu kì → tăng Z → tính kim loại giảm; trong nhóm → tăng Z → tính kim loại tăng.",
                    "Tính phi kim: trong chu kì → tăng Z → tính phi kim tăng; trong nhóm → tăng Z → tính phi kim giảm.",
                    "Năng lượng ion hóa (IE₁): năng lượng cần cung cấp để tách 1 electron ra khỏi nguyên tử ở trạng thái khí.",
                    "Trong chu kì → tăng Z → IE₁ tăng; trong nhóm → tăng Z → IE₁ giảm.",
                  ]
                },
                {
                  heading: "Bài 6: Xu hướng biến đổi tính chất của các đơn chất và hợp chất",
                  content: [
                    "Tính chất đơn chất: kim loại → phi kim → khí hiếm trong cùng chu kì.",
                    "Tính axit–bazơ của oxide và hydroxide: trong chu kì tăng Z → oxide/hydroxide từ tính bazơ → lưỡng tính → tính axit.",
                    "Trong nhóm: tăng Z → tính bazơ của oxide/hydroxide tăng (kim loại), tính axit giảm.",
                    "Ví dụ: chu kì 3: Na₂O (bazơ) → MgO (bazơ) → Al₂O₃ (lưỡng tính) → SiO₂ (axit) → P₂O₅ (axit) → SO₃ (axit) → Cl₂O₇ (axit mạnh).",
                  ]
                },
                {
                  heading: "Bài 7: Định luật tuần hoàn – Ý nghĩa của bảng tuần hoàn",
                  content: [
                    "Từ vị trí (Z, chu kì, nhóm) → suy ra: cấu hình electron, số lớp electron, số electron lớp ngoài cùng, tính chất cơ bản.",
                    "Từ cấu hình electron → suy ra vị trí trong bảng tuần hoàn.",
                    "So sánh tính chất hóa học của nguyên tố với các nguyên tố lân cận.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_10_p3",
          label: "Phần 3/7: Liên kết hóa học",
          chapters: [
            {
              title: "CHƯƠNG 3: LIÊN KẾT HÓA HỌC",
              sections: [
                {
                  heading: "Bài 8: Quy tắc octet",
                  content: [
                    "Quy tắc octet: trong phản ứng hóa học, nguyên tử của các nguyên tố có xu hướng nhường, nhận hoặc góp chung electron để đạt cấu hình electron bền vững (8e lớp ngoài cùng, giống khí hiếm).",
                    "Kim loại: nhường electron để đạt cấu hình khí hiếm gần nhất.",
                    "Phi kim: nhận hoặc góp chung electron.",
                  ]
                },
                {
                  heading: "Bài 9: Liên kết ion",
                  content: [
                    "Liên kết ion: liên kết được hình thành do lực hút tĩnh điện giữa các ion mang điện trái dấu.",
                    "Ion dương (cation): nguyên tử nhường electron, thường là kim loại.",
                    "Ion âm (anion): nguyên tử nhận electron, thường là phi kim.",
                    "Điều kiện hình thành: hiệu độ âm điện (Δχ) ≥ 1,7 → liên kết ion.",
                    "Tinh thể ion: NaCl, CaCl₂,... có nhiệt độ nóng chảy cao, dẫn điện khi nóng chảy hoặc hòa tan trong nước.",
                  ]
                },
                {
                  heading: "Bài 10: Liên kết cộng hóa trị",
                  content: [
                    "Liên kết cộng hóa trị: liên kết được hình thành do 2 nguyên tử góp chung 1 hoặc nhiều cặp electron.",
                    "Cặp electron chung: cặp electron liên kết (liên kết); cặp electron không liên kết (cặp lẻ).",
                    "Liên kết đơn: 1 cặp e dùng chung (H–H, H–Cl...); liên kết đôi: 2 cặp e (O=O, C=O...); liên kết ba: 3 cặp e (N≡N, C≡C).",
                    "Liên kết CHT không phân cực: Δχ = 0 (cùng nguyên tố, ví dụ: H₂, Cl₂).",
                    "Liên kết CHT phân cực: 0 < Δχ < 1,7 (HCl, H₂O, NH₃...).",
                    "Phân tử phân cực: có lưỡng cực điện (ví dụ: HCl, H₂O); phân tử không phân cực: điện tích đều (ví dụ: CO₂ thẳng, CCl₄ tứ diện).",
                    "Liên kết cho – nhận (phối trí): 1 nguyên tử góp cả 2 electron cho liên kết (ví dụ: NH₄⁺, H₃O⁺).",
                  ]
                },
                {
                  heading: "Bài 11: Liên kết hydrogen và tương tác van der Waals",
                  content: [
                    "Liên kết hydrogen (H–bond): tương tác hút giữa nguyên tử H (đã liên kết với F, O, N có độ âm điện cao) với nguyên tử F, O, N khác.",
                    "Liên kết hydrogen làm tăng nhiệt độ sôi, nhiệt độ nóng chảy so với hợp chất tương tự.",
                    "Ví dụ: nước (100°C) > H₂S (-61°C) do H₂O có liên kết hydrogen mạnh hơn.",
                    "Tương tác van der Waals: lực hút yếu giữa các phân tử trung hòa (lực London, lực kéo – đẩy Debye...). Phân tử càng lớn, tương tác van der Waals càng mạnh → nhiệt độ sôi càng cao.",
                  ]
                },
                {
                  heading: "Bài 12: Sự lai hóa orbital – Hình học phân tử",
                  content: [
                    "Lai hóa orbital: sự tổ hợp các AO có mức năng lượng gần nhau để tạo ra các AO lai hóa có hình dạng và năng lượng giống nhau.",
                    "Lai hóa sp: 2 AO lai tạo góc 180°, dạng thẳng (ví dụ: BeCl₂, C₂H₂).",
                    "Lai hóa sp²: 3 AO lai, góc 120°, dạng tam giác phẳng (ví dụ: BF₃, C₂H₄).",
                    "Lai hóa sp³: 4 AO lai, góc 109,5°, dạng tứ diện đều (CH₄); biến dạng nếu có cặp electron lẻ: NH₃ (hình chóp tam giác), H₂O (hình chữ V).",
                    "Thuyết VSEPR (lực đẩy cặp electron lớp vỏ): hình dạng phân tử phụ thuộc vào số cặp electron (liên kết và không liên kết) quanh nguyên tử trung tâm.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_10_p4",
          label: "Phần 4/7: Phản ứng hóa học – Năng lượng",
          chapters: [
            {
              title: "CHƯƠNG 4: PHẢN ỨNG OXI HÓA – KHỬ",
              sections: [
                {
                  heading: "Bài 13: Phản ứng oxi hóa – khử",
                  content: [
                    "Số oxi hóa: điện tích quy ước của nguyên tử trong hợp chất nếu giả sử tất cả các liên kết là ion.",
                    "Quy tắc xác định số oxi hóa: H: +1 (trừ hydrua kim loại: -1); O: -2 (trừ F₂O: +2, peoxit: -1); kim loại kiềm: +1; kim loại kiềm thổ: +2; tổng số oxi hóa trong phân tử = 0; trong ion = điện tích ion.",
                    "Chất khử: nhường electron, số oxi hóa tăng (bị oxi hóa).",
                    "Chất oxi hóa: nhận electron, số oxi hóa giảm (bị khử).",
                    "Quá trình oxi hóa: A → Aⁿ⁺ + ne (nhường e).",
                    "Quá trình khử: B + me → Bᵐ⁻ (nhận e).",
                    "Phương pháp cân bằng electron: (1) Xác định số oxi hóa; (2) Viết 2 nửa phản ứng; (3) Nhân hệ số để số e nhường = số e nhận; (4) Điền hệ số vào phương trình; (5) Cân bằng các nguyên tố còn lại.",
                  ]
                },
                {
                  heading: "Bài 14: Ứng dụng phản ứng oxi hóa – khử",
                  content: [
                    "Ứng dụng trong đời sống: đốt cháy nhiên liệu, pin điện, luyện kim, xử lý nước...",
                    "Sự cháy: phản ứng oxi hóa nhanh tỏa nhiệt và phát sáng.",
                    "Sự ăn mòn kim loại: phản ứng oxi hóa chậm kim loại bởi môi trường (không khí ẩm, axit...).",
                  ]
                }
              ]
            },
            {
              title: "CHƯƠNG 5: NĂNG LƯỢNG HÓA HỌC",
              sections: [
                {
                  heading: "Bài 15: Phản ứng tỏa nhiệt – Thu nhiệt. Enthalpy",
                  content: [
                    "Phản ứng tỏa nhiệt (exothermic): hệ giải phóng năng lượng ra môi trường, ΔH < 0.",
                    "Phản ứng thu nhiệt (endothermic): hệ hấp thụ năng lượng từ môi trường, ΔH > 0.",
                    "Enthalpy (H): hàm nhiệt động, biến thiên enthalpy ΔH = H(sản phẩm) – H(chất đầu).",
                    "Nhiệt tạo thành chuẩn (ΔfH°₂₉₈): nhiệt tạo thành 1 mol chất từ các đơn chất bền ở 25°C, 1 bar. ΔfH° của đơn chất bền = 0.",
                    "Nhiệt đốt cháy chuẩn (ΔcH°): nhiệt tỏa ra khi đốt cháy hoàn toàn 1 mol chất (ΔcH° < 0).",
                  ]
                },
                {
                  heading: "Bài 16: Tính biến thiên enthalpy của phản ứng",
                  content: [
                    "Định luật Hess: ΔH của phản ứng không phụ thuộc vào đường đi, chỉ phụ thuộc vào trạng thái đầu và cuối.",
                    "Công thức: ΔrH° = ΣΔfH°(sản phẩm) – ΣΔfH°(chất đầu)",
                    "Công thức qua năng lượng liên kết: ΔrH° = ΣEb(liên kết bị phá vỡ) – ΣEb(liên kết được hình thành)",
                    "Năng lượng liên kết (Eb): năng lượng cần cung cấp để phá vỡ 1 mol liên kết trong pha khí.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_10_p5",
          label: "Phần 5/7: Tốc độ phản ứng",
          chapters: [
            {
              title: "CHƯƠNG 6: TỐC ĐỘ PHẢN ỨNG HÓA HỌC",
              sections: [
                {
                  heading: "Bài 17: Khái niệm tốc độ phản ứng",
                  content: [
                    "Tốc độ phản ứng (v): độ biến thiên nồng độ chất phản ứng hoặc sản phẩm theo thời gian.",
                    "v = |ΔC/Δt| (mol/L.s hoặc mol/L.min).",
                    "Tốc độ trung bình và tốc độ tức thời.",
                    "Thuyết va chạm: phản ứng xảy ra khi các phân tử chất đầu va chạm với nhau và có đủ năng lượng (≥ năng lượng hoạt hóa Ea).",
                    "Phức chất hoạt động (trạng thái chuyển tiếp): phức chất trung gian có năng lượng cao nhất trong quá trình phản ứng.",
                  ]
                },
                {
                  heading: "Bài 18: Các yếu tố ảnh hưởng đến tốc độ phản ứng",
                  content: [
                    "1. Nồng độ: tăng nồng độ → tăng số va chạm → tăng tốc độ phản ứng.",
                    "2. Nhiệt độ: tăng nhiệt độ → tăng tốc độ phản ứng. Quy tắc Van't Hoff: cứ tăng thêm 10°C thì tốc độ tăng 2–4 lần.",
                    "3. Áp suất (với phản ứng khí): tăng áp suất → tăng nồng độ khí → tăng tốc độ.",
                    "4. Diện tích bề mặt (chất rắn): tăng diện tích bề mặt (nghiền nhỏ) → tăng tốc độ.",
                    "5. Chất xúc tác: làm tăng tốc độ phản ứng (làm giảm năng lượng hoạt hóa) mà không bị tiêu hao sau phản ứng.",
                    "Ví dụ chất xúc tác: MnO₂ trong phân hủy H₂O₂; Fe trong tổng hợp NH₃; V₂O₅ trong sản xuất H₂SO₄.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_10_p6",
          label: "Phần 6/7: Nguyên tố nhóm VIIA – Halogen",
          chapters: [
            {
              title: "CHƯƠNG 7: NGUYÊN TỐ NHÓM VIIA – HALOGEN",
              sections: [
                {
                  heading: "Bài 19: Đặc điểm cấu tạo và tính chất của halogen",
                  content: [
                    "Nhóm VIIA: F, Cl, Br, I, At. Cấu hình electron lớp ngoài cùng: ns²np⁵ (7e ngoài cùng).",
                    "Tính chất vật lí: F₂ (khí, vàng nhạt) → Cl₂ (khí, vàng lục) → Br₂ (lỏng, nâu đỏ) → I₂ (rắn, tím đen). Nhiệt độ sôi tăng dần do tương tác van der Waals tăng.",
                    "Tính chất hóa học chủ yếu: tính oxi hóa mạnh (nhận 1e để đạt cấu hình khí hiếm).",
                    "Tính oxi hóa giảm dần: F₂ > Cl₂ > Br₂ > I₂.",
                    "Halogen tác dụng với kim loại: 2Na + Cl₂ → 2NaCl; 2Fe + 3Cl₂ → 2FeCl₃.",
                    "Halogen tác dụng với hydrogen: H₂ + X₂ → 2HX (HF, HCl, HBr, HI). Phản ứng với F₂ mãnh liệt nhất (nổ ngay trong bóng tối); với I₂ cần đun nóng và thuận nghịch.",
                    "Halogen tác dụng với nước: Cl₂ + H₂O ⇌ HCl + HClO (nước Javel).",
                    "Dãy hoạt động oxi hóa: Cl₂ + 2KBr → 2KCl + Br₂; Br₂ + 2KI → 2KBr + I₂ (halogen mạnh đẩy halogen yếu ra khỏi muối).",
                  ]
                },
                {
                  heading: "Bài 20: Hydrogen halide và một số phản ứng của ion halide",
                  content: [
                    "Hydrogen halide (HX): HF, HCl, HBr, HI – tan tốt trong nước, tạo dung dịch axit (hydrohalo acid).",
                    "Tính axit: HF (axit yếu) < HCl < HBr < HI (axit mạnh). HF có tính axit yếu do liên kết H–F rất bền.",
                    "Tính khử: F⁻ (không có tính khử) < Cl⁻ < Br⁻ < I⁻ (tính khử mạnh nhất).",
                    "Nhận biết ion halide:",
                    "  – Cl⁻: thêm AgNO₃ → AgCl↓ trắng, không tan trong HNO₃.",
                    "  – Br⁻: thêm AgNO₃ → AgBr↓ vàng nhạt, không tan trong HNO₃.",
                    "  – I⁻: thêm AgNO₃ → AgI↓ vàng đậm, không tan trong HNO₃.",
                    "Điều chế HCl trong công nghiệp: phương pháp tổng hợp (H₂ + Cl₂), phương pháp sunfate (NaCl + H₂SO₄ đặc).",
                  ]
                },
                {
                  heading: "Bài 21: Ôn tập – Sơ lược về hợp chất có oxygen của chlorine",
                  content: [
                    "Hợp chất có oxygen của Cl: HClO (axit hypochlorous), HClO₂ (axit chlorous), HClO₃ (axit chloric), HClO₄ (axit perchloric).",
                    "Tính axit tăng dần: HClO < HClO₂ < HClO₃ < HClO₄.",
                    "Nước Javel (NaClO): có tính tẩy màu, diệt khuẩn. Điều chế: Cl₂ + 2NaOH → NaCl + NaClO + H₂O.",
                    "Clorua vôi (Ca(ClO)Cl hoặc CaOCl₂): được sử dụng để tẩy trắng, khử trùng.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_10_p7",
          label: "Phần 7/7: Ôn tập tổng hợp HK1 lớp 10",
          chapters: [
            {
              title: "ÔN TẬP TỔNG HỢP HỌC KÌ 1 – HÓA HỌC 10",
              sections: [
                {
                  heading: "Bảng tóm tắt kiến thức trọng tâm",
                  content: [
                    "=== CHƯƠNG 1: CẤU TẠO NGUYÊN TỬ ===",
                    "• Nguyên tử: hạt nhân (p, n) + vỏ (e). Trong nguyên tử trung hòa: Z = số p = số e.",
                    "• A = Z + N; đồng vị: cùng Z, khác A.",
                    "• Cấu hình electron theo Aufbau + Pauli + Hund. 20 nguyên tố đầu.",
                    "• Kim loại: 1-3e ngoài; phi kim: 5-7e ngoài; khí hiếm: 8e (He: 2e).",
                    "",
                    "=== CHƯƠNG 2: BẢNG TUẦN HOÀN ===",
                    "• Định luật tuần hoàn: tính chất biến đổi tuần hoàn theo Z.",
                    "• Chu kì: số lớp e; Nhóm A: số e lớp ngoài cùng.",
                    "• Trong chu kì: bán kính giảm, IE tăng, χ tăng, tính KL giảm, phi kim tăng.",
                    "• Trong nhóm: bán kính tăng, IE giảm, χ giảm, tính KL tăng, phi kim giảm.",
                    "",
                    "=== CHƯƠNG 3: LIÊN KẾT HÓA HỌC ===",
                    "• Liên kết ion: Δχ ≥ 1,7; hình thành do lực hút tĩnh điện giữa cation và anion.",
                    "• Liên kết CHT: Δχ < 1,7; góp chung cặp e. Không phân cực (Δχ=0), phân cực (0<Δχ<1,7).",
                    "• Lai hóa: sp (thẳng), sp² (tam giác phẳng), sp³ (tứ diện).",
                    "• Liên kết H: tăng nhiệt độ sôi; Van der Waals: phân tử lớn → t° sôi cao.",
                    "",
                    "=== CHƯƠNG 4: PHẢN ỨNG OXI HÓA – KHỬ ===",
                    "• Chất khử: nhường e, số oxi hóa tăng. Chất oxi hóa: nhận e, số oxi hóa giảm.",
                    "• Cân bằng bằng phương pháp electron: số e nhường = số e nhận.",
                    "",
                    "=== CHƯƠNG 5: NĂNG LƯỢNG HÓA HỌC ===",
                    "• Tỏa nhiệt: ΔH < 0; Thu nhiệt: ΔH > 0.",
                    "• ΔrH° = ΣΔfH°(sp) – ΣΔfH°(cđ) = ΣEb(phá) – ΣEb(tạo).",
                    "",
                    "=== CHƯƠNG 6: TỐC ĐỘ PHẢN ỨNG ===",
                    "• Yếu tố ảnh hưởng: nồng độ, nhiệt độ, áp suất, diện tích bề mặt, xúc tác.",
                    "• Chất xúc tác: giảm Ea, tăng tốc độ, không bị tiêu hao.",
                    "",
                    "=== CHƯƠNG 7: HALOGEN ===",
                    "• Tính oxi hóa: F₂ > Cl₂ > Br₂ > I₂.",
                    "• Tính axit HX: HF < HCl < HBr < HI.",
                    "• Nhận biết halide bằng AgNO₃: AgCl (trắng), AgBr (vàng nhạt), AgI (vàng đậm).",
                  ]
                },
                {
                  heading: "Một số phản ứng hóa học quan trọng cần nhớ",
                  content: [
                    "2Na + Cl₂ → 2NaCl",
                    "H₂ + Cl₂ → 2HCl (ánh sáng, phản ứng dây chuyền)",
                    "Cl₂ + H₂O ⇌ HCl + HClO",
                    "Cl₂ + 2NaOH → NaCl + NaClO + H₂O",
                    "2HCl → H₂ + Cl₂ (điện phân dung dịch)",
                    "MnO₂ + 4HCl đặc → MnCl₂ + Cl₂ + 2H₂O (điều chế Cl₂ trong PTN)",
                    "C + O₂ → CO₂ (ΔH < 0, tỏa nhiệt)",
                    "2H₂ + O₂ → 2H₂O (ΔH < 0)",
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    hk2: {
      title: "LÝ THUYẾT HÓA HỌC 10 – HỌC KÌ 2",
      subtitle: "Bộ sách: Kết nối tri thức với cuộc sống",
      parts: [
        {
          id: "hk2_10_p1",
          label: "Phần 1/7: Nguyên tố nhóm VIA – Sulfur và hợp chất",
          chapters: [
            {
              title: "CHƯƠNG 8: NGUYÊN TỐ NHÓM VIA – SULFUR",
              sections: [
                {
                  heading: "Bài 22: Sulfur và các hợp chất của sulfur",
                  content: [
                    "Nhóm VIA: O, S, Se, Te. Cấu hình electron ngoài cùng: ns²np⁴.",
                    "Sulfur (S): số oxi hóa -2, 0, +4, +6.",
                    "Tính chất vật lí: S tồn tại ở 2 dạng thù hình (S-tà phương, S-đơn tà), chất rắn màu vàng.",
                    "Tính chất hóa học: vừa có tính oxi hóa (tác dụng với H₂, kim loại) vừa có tính khử (tác dụng với O₂, chất oxi hóa mạnh).",
                    "S + O₂ → SO₂ (S bị oxi hóa, số oxi hóa 0 → +4).",
                    "S + Fe → FeS (S bị khử từ 0 → -2).",
                    "H₂S: khí không màu, mùi trứng thối, độc. Tính axit yếu trong nước. Có tính khử mạnh.",
                    "2H₂S + O₂ thiếu → 2S + 2H₂O; 2H₂S + 3O₂ dư → 2SO₂ + 2H₂O.",
                    "SO₂: khí không màu, mùi xốc, độc. Tính chất: oxit axit, vừa có tính oxi hóa vừa tính khử.",
                    "SO₂ + H₂O ⇌ H₂SO₃ (axit sulfurous yếu).",
                    "SO₂ + NaOH → NaHSO₃ hoặc Na₂SO₃ (tùy tỉ lệ mol).",
                    "SO₃: oxit axit mạnh, tan vô hạn trong nước.",
                    "SO₃ + H₂O → H₂SO₄.",
                  ]
                },
                {
                  heading: "Bài 23: Sulfuric acid – Muối sulfate",
                  content: [
                    "H₂SO₄ đặc: chất lỏng sánh, không màu, tan vô hạn trong nước (tỏa nhiệt mạnh).",
                    "H₂SO₄ loãng: tính axit mạnh (tác dụng kim loại đứng trước H trong dãy điện hóa, bazơ, oxide bazơ, muối).",
                    "H₂SO₄ đặc: tính oxi hóa mạnh (tác dụng được với kim loại như Cu, Ag, Au trừ Pt).",
                    "Cu + 2H₂SO₄ đặc → CuSO₄ + SO₂↑ + 2H₂O.",
                    "C + 2H₂SO₄ đặc → CO₂ + 2SO₂ + 2H₂O.",
                    "H₂SO₄ đặc có tính háo nước: C₁₂H₂₂O₁₁ + H₂SO₄ đặc → 12C + 11H₂O.",
                    "Fe, Al bị thụ động trong H₂SO₄ đặc nguội.",
                    "Nhận biết SO₄²⁻: thêm BaCl₂ → BaSO₄↓ trắng, không tan trong HCl.",
                    "Sản xuất H₂SO₄ (phương pháp tiếp xúc): S → SO₂ → SO₃ → H₂SO₄.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_10_p2",
          label: "Phần 2/7: Đại cương hóa học hữu cơ",
          chapters: [
            {
              title: "CHƯƠNG 9: ĐẠI CƯƠNG VỀ HÓA HỌC HỮU CƠ",
              sections: [
                {
                  heading: "Bài 24: Hợp chất hữu cơ và hóa học hữu cơ",
                  content: [
                    "Hóa học hữu cơ: ngành hóa học nghiên cứu về hợp chất của carbon.",
                    "Hợp chất hữu cơ: hợp chất của carbon (trừ CO, CO₂, muối carbonate, CN⁻...).",
                    "Đặc điểm: chủ yếu chứa C, H; có thể chứa O, N, S, halogen...",
                    "Liên kết trong hợp chất hữu cơ: cộng hóa trị (đơn, đôi, ba).",
                    "Phân loại: hydrocarbon (chỉ C,H) và dẫn xuất hydrocarbon (C,H + nhóm chức).",
                  ]
                },
                {
                  heading: "Bài 25: Phân tích nguyên tố – Công thức phân tử",
                  content: [
                    "Phân tích nguyên tố: xác định % khối lượng các nguyên tố trong hợp chất hữu cơ.",
                    "Công thức đơn giản nhất (CTĐGN): tỉ lệ số nguyên tử tối giản nhất.",
                    "Công thức phân tử (CTPT): số nguyên tử thực trong phân tử, M = k × M(CTĐGN).",
                    "Tính CTPT từ %: C:H:O = (%C/12):(%H/1):(%O/16) = a:b:c (tỉ lệ tối giản).",
                  ]
                },
                {
                  heading: "Bài 26: Cấu trúc phân tử hợp chất hữu cơ",
                  content: [
                    "Thuyết cấu tạo hóa học (Butlerov): tính chất phụ thuộc vào thành phần và cách sắp xếp nguyên tử (cấu tạo hóa học).",
                    "Đồng phân: các hợp chất có cùng CTPT nhưng khác cấu tạo → tính chất khác nhau.",
                    "Đồng phân cấu tạo: mạch carbon khác nhau, vị trí nhóm chức khác nhau, loại nhóm chức khác nhau.",
                    "Đồng phân lập thể (hình học, quang học): cùng công thức cấu tạo nhưng sự phân bố không gian khác nhau.",
                    "Liên kết σ (sigma): bền, xoay tự do. Liên kết π (pi): kém bền hơn, dễ tham gia phản ứng cộng.",
                    "Nhóm chức: nhóm nguyên tử quyết định tính chất đặc trưng của hợp chất.",
                    "Các nhóm chức quan trọng: –OH (alcohol), –CHO (aldehyde), –C(=O)– (ketone), –COOH (carboxylic acid), –NH₂ (amine).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_10_p3",
          label: "Phần 3/7: Hydrocarbon",
          chapters: [
            {
              title: "CHƯƠNG 10: HYDROCARBON",
              sections: [
                {
                  heading: "Bài 27: Alkane",
                  content: [
                    "Alkane (parafin): CₙH₂ₙ₊₂ (n ≥ 1). Liên kết đơn, mạch hở, no.",
                    "Danh pháp: methane, ethane, propane, butane, pentane, hexane, heptane, octane...",
                    "Tính chất vật lí: C₁–C₄ khí; C₅–C₁₇ lỏng; ≥C₁₈ rắn. Nhiệt độ sôi tăng theo M. Không tan trong nước.",
                    "Tính chất hóa học: phản ứng thế halogen (ánh sáng/đun), phản ứng cracking (nhiệt phân), phản ứng đốt cháy.",
                    "CH₄ + Cl₂ → CH₃Cl + HCl (ánh sáng) → CH₂Cl₂ → CHCl₃ → CCl₄.",
                    "Đốt cháy: CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → nCO₂ + (n+1)H₂O. Luôn có n(H₂O) > n(CO₂).",
                  ]
                },
                {
                  heading: "Bài 28: Alkene và Alkyne",
                  content: [
                    "Alkene (olefin): CₙH₂ₙ (n ≥ 2). Có 1 liên kết đôi C=C.",
                    "Alkyne: CₙH₂ₙ₋₂ (n ≥ 2). Có 1 liên kết ba C≡C.",
                    "Tính chất hóa học đặc trưng: phản ứng cộng (H₂, HX, X₂, H₂O).",
                    "CH₂=CH₂ + H₂ → CH₃–CH₃ (Ni, to).",
                    "CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (làm mất màu dung dịch brom).",
                    "CH₂=CH₂ + H₂O → CH₃–CH₂OH (H₂SO₄, to).",
                    "CH₂=CH₂ + HCl → CH₃–CH₂Cl (quy tắc Markovnikov: H gắn vào C nhiều H hơn).",
                    "Phản ứng trùng hợp (polime hóa): nCH₂=CH₂ → (–CH₂–CH₂–)ₙ (polyethylene/PE).",
                    "Alkyne (C₂H₂) tác dụng AgNO₃/NH₃: C₂H₂ + 2AgNO₃/NH₃ → CAg≡CAg↓ vàng + 2NH₄NO₃.",
                    "Đốt cháy alkene: nCO₂ = nH₂O; đốt cháy alkyne: nCO₂ > nH₂O.",
                  ]
                },
                {
                  heading: "Bài 29: Arene (Hydrocarbon thơm)",
                  content: [
                    "Benzene (C₆H₆): hệ thơm, 6 liên kết C–C đồng đều (liên kết π giải tỏa), phân tử phẳng.",
                    "Tính chất hóa học: phản ứng thế (ưu tiên) và phản ứng cộng.",
                    "C₆H₆ + Br₂ → C₆H₅Br + HBr (Fe xúc tác, phản ứng thế).",
                    "C₆H₆ + HNO₃ đặc → C₆H₅NO₂ + H₂O (H₂SO₄ đặc, nitro hóa).",
                    "C₆H₆ + 3H₂ → C₆H₁₂ (Ni, to, phản ứng cộng).",
                    "Toluene (C₆H₅–CH₃): nhóm CH₃ hoạt hóa vòng benzene, phản ứng thế ở vị trí ortho, para.",
                    "Đốt cháy benzene: 2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O (ngọn lửa sáng, nhiều khói đen do C dư).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_10_p4",
          label: "Phần 4/7: Dẫn xuất halogen – Alcohol – Phenol",
          chapters: [
            {
              title: "CHƯƠNG 11: DẪN XUẤT HALOGEN – ALCOHOL – PHENOL",
              sections: [
                {
                  heading: "Bài 30: Dẫn xuất halogen",
                  content: [
                    "Dẫn xuất halogen: hydrocarbon có 1 hay nhiều nguyên tử H được thay bằng halogen.",
                    "CTPT tổng quát: CₙH₂ₙ₊₂₋₂ₛ₋ₓXₓ (X = F, Cl, Br, I; s = số liên kết π và vòng).",
                    "Tính chất hóa học: phản ứng thế nguyên tử halogen bằng OH⁻; phản ứng tách HX.",
                    "CH₃Cl + NaOH → CH₃OH + NaCl (thủy phân trong dung dịch kiềm).",
                    "CH₃CH₂Cl + NaOH (cồn) → CH₂=CH₂ + NaCl + H₂O (phản ứng tách).",
                    "Ứng dụng: CFCs (Freon, hại ozone), chloroform (CHCl₃), DDT (thuốc trừ sâu, bị cấm).",
                  ]
                },
                {
                  heading: "Bài 31: Alcohol",
                  content: [
                    "Alcohol: nhóm chức –OH gắn vào carbon no (sp³).",
                    "CTPT: CₙH₂ₙ₊₂O (alcohol đơn no, mạch hở) = CₙH₂ₙ₊₁OH.",
                    "Phân loại: bậc 1, 2, 3 (theo bậc C mang OH).",
                    "Tính chất vật lí: nhiệt độ sôi cao hơn hẳn hydrocarbon cùng M (do liên kết H).",
                    "Tính chất hóa học:",
                    "  – Tính axit yếu: R–OH + Na → R–ONa + ½H₂↑.",
                    "  – Phản ứng với HX: R–OH + HCl → R–Cl + H₂O (Lucas).",
                    "  – Phản ứng tách nước: CH₃CH₂OH → CH₂=CH₂ + H₂O (H₂SO₄ đặc, 170°C).",
                    "  – 2C₂H₅OH → C₂H₅–O–C₂H₅ + H₂O (H₂SO₄ đặc, 140°C).",
                    "  – Phản ứng oxi hóa: C₂H₅OH + O₂ → CH₃CHO + H₂O (men giấm).",
                    "  – Ethanol lên men: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.",
                    "Glycerol (C₃H₅(OH)₃): 3 nhóm –OH, phản ứng với Cu(OH)₂ → dung dịch xanh lam đẹp.",
                  ]
                },
                {
                  heading: "Bài 32: Phenol",
                  content: [
                    "Phenol: –OH gắn trực tiếp vào vòng benzene (C₆H₅OH, phenol đơn giản nhất).",
                    "Tính axit mạnh hơn alcohol nhưng yếu hơn axit carbonic (H₂CO₃).",
                    "C₆H₅OH + NaOH → C₆H₅ONa + H₂O (phenol tác dụng bazơ mạnh).",
                    "C₆H₅ONa + CO₂ + H₂O → C₆H₅OH + NaHCO₃ (axit mạnh đẩy phenol ra khỏi muối).",
                    "C₆H₅OH + 3Br₂ → C₆H₂Br₃OH↓ + 3HBr (nhóm OH hoạt hóa vòng, thế ở vị trí 2,4,6).",
                    "Ứng dụng: sản xuất nhựa phenolfomaldehyde (bakelite), chất diệt khuẩn.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_10_p5",
          label: "Phần 5/7: Hợp chất carbonyl – Carboxylic acid",
          chapters: [
            {
              title: "CHƯƠNG 12: HỢP CHẤT CARBONYL – CARBOXYLIC ACID",
              sections: [
                {
                  heading: "Bài 33: Hợp chất carbonyl (Aldehyde và Ketone)",
                  content: [
                    "Aldehyde: nhóm –CHO. CTPT tổng quát: RCHO (R–CHO). Aldehyde đơn giản nhất: HCHO (methanal/formaldehyde).",
                    "Ketone: nhóm C=O giữa 2 gốc hydrocarbon. RCOR'. Ketone đơn giản: CH₃COCH₃ (acetone/propanone).",
                    "Tính chất hóa học của aldehyde:",
                    "  – Phản ứng oxi hóa (tính khử của aldehyde): R–CHO → R–COOH.",
                    "  – Phản ứng tráng gương: RCHO + 2[Ag(NH₃)₂]OH → RCOONH₄ + 2Ag↓ + 3NH₃ + H₂O.",
                    "  – Phản ứng với Cu(OH)₂/NaOH: RCHO + 2Cu(OH)₂ → RCOOH + Cu₂O↓ đỏ gạch + 2H₂O.",
                    "  – Phản ứng cộng H₂: RCHO + H₂ → RCH₂OH (tạo alcohol bậc 1).",
                    "Ketone không tác dụng với AgNO₃/NH₃ và không tác dụng với Cu(OH)₂ ở điều kiện thường.",
                    "HCHO (formaldehyde): dung dịch 37-40% là formalin, dùng bảo quản tiêu bản sinh học.",
                    "CH₃CHO (acetaldehyde): nguyên liệu sản xuất axit axetic.",
                  ]
                },
                {
                  heading: "Bài 34: Carboxylic acid",
                  content: [
                    "Carboxylic acid: nhóm chức –COOH. RCOOH.",
                    "Axit formic (HCOOH): có nhóm –CHO ẩn → có tính khử (tráng gương).",
                    "Axit acetic (CH₃COOH, giấm ăn): axit yếu, ứng dụng trong thực phẩm, công nghiệp.",
                    "Tính axit: RCOOH ⇌ RCOO⁻ + H⁺ (axit yếu hơn HCl nhưng mạnh hơn H₂CO₃).",
                    "Phản ứng este hóa: RCOOH + R'OH ⇌ RCOOR' + H₂O (H₂SO₄ đặc, đun nóng, thuận nghịch).",
                    "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (ethyl acetate) + H₂O.",
                    "RCOOH + NaOH → RCOONa + H₂O.",
                    "2RCOOH + Na → 2RCOONa + H₂↑.",
                    "Điều chế CH₃COOH: lên men giấm (C₂H₅OH + O₂) hoặc oxi hóa CH₃CHO.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_10_p6",
          label: "Phần 6/7: Amine – Amino acid – Protein",
          chapters: [
            {
              title: "CHƯƠNG 13: AMINE – AMINO ACID – PROTEIN",
              sections: [
                {
                  heading: "Bài 35: Amine",
                  content: [
                    "Amine: dẫn xuất của NH₃ khi thay H bằng gốc hydrocarbon.",
                    "Phân loại: bậc 1 (R–NH₂), bậc 2 (R–NH–R'), bậc 3 (R₃N).",
                    "Aniline (C₆H₅NH₂): amine thơm, chất lỏng không màu, ít tan trong nước.",
                    "Tính bazơ: amine no bậc 1 > NH₃ > aniline (vòng benzene hút cặp e của N).",
                    "R–NH₂ + H₂O ⇌ R–NH₃⁺ + OH⁻ (môi trường kiềm yếu).",
                    "R–NH₂ + HCl → R–NH₃Cl.",
                    "Aniline + Br₂ → 2,4,6-tribromoaniline↓ trắng + 3HBr.",
                    "Ứng dụng: sản xuất phẩm nhuộm, dược phẩm, thuốc nổ (TNT từ toluene).",
                  ]
                },
                {
                  heading: "Bài 36: Amino acid và Protein",
                  content: [
                    "Amino acid: phân tử chứa đồng thời nhóm –NH₂ và –COOH.",
                    "CTPT tổng quát: H₂N–CH(R)–COOH. Amino acid thiên nhiên phổ biến ở dạng L.",
                    "Tính lưỡng tính (amphoteric): H₂N–CH₂–COOH + HCl → ClH₃N–CH₂–COOH (tác dụng axit); H₂N–CH₂–COOH + NaOH → H₂N–CH₂–COONa + H₂O (tác dụng bazơ).",
                    "Điểm đẳng điện (pI): pH mà amino acid ở dạng trung hòa điện (ion lưỡng cực).",
                    "Phản ứng trùng ngưng tạo peptide: n H₂N–CH(R)–COOH → (–NH–CH(R)–CO–)ₙ + nH₂O.",
                    "Protein: polymer của các α-amino acid, liên kết bằng liên kết peptide (–CO–NH–).",
                    "Cấu trúc protein: bậc 1 (trình tự AA), bậc 2 (α-helix, β-sheet), bậc 3 (cấu trúc 3D), bậc 4.",
                    "Sự biến tính protein: mất cấu trúc không gian nhưng CTPT không đổi (do nhiệt, axit, bazơ, muối nặng).",
                    "Phản ứng màu biuret: peptide + Cu(OH)₂/NaOH → màu tím (nhận biết protein, peptide ≥ 2 liên kết peptide).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_10_p7",
          label: "Phần 7/7: Ôn tập tổng hợp HK2 lớp 10",
          chapters: [
            {
              title: "ÔN TẬP TỔNG HỢP HỌC KÌ 2 – HÓA HỌC 10",
              sections: [
                {
                  heading: "Bảng tóm tắt kiến thức trọng tâm HK2",
                  content: [
                    "=== SULFUR VÀ HỢP CHẤT ===",
                    "• Số oxi hóa S: -2 (H₂S, sulfide), 0 (S), +4 (SO₂, H₂SO₃), +6 (SO₃, H₂SO₄).",
                    "• H₂SO₄ đặc: tính oxi hóa mạnh, tác dụng Cu, C, S... Fe/Al thụ động.",
                    "• Nhận biết SO₄²⁻: BaCl₂ → BaSO₄↓ trắng không tan trong HCl.",
                    "",
                    "=== HÓA HỌC HỮU CƠ CƠ BẢN ===",
                    "• Alkane CₙH₂ₙ₊₂: phản ứng thế, cracking, đốt cháy (nH₂O > nCO₂).",
                    "• Alkene CₙH₂ₙ: phản ứng cộng (Br₂, H₂, HX, H₂O), trùng hợp.",
                    "• Alkyne CₙH₂ₙ₋₂: phản ứng cộng, phản ứng với AgNO₃/NH₃ (nhận biết C≡C đầu mạch).",
                    "• Benzene: phản ứng thế (ưu tiên), phản ứng cộng (khó hơn).",
                    "",
                    "=== ALCOHOL – PHENOL ===",
                    "• Alcohol: –OH + Na → H₂↑; tách nước → alkene (170°C) hoặc ether (140°C).",
                    "• Phenol: tính axit > alcohol (phản ứng với NaOH); OH hoạt hóa vòng → thế dễ ở o,p.",
                    "",
                    "=== ALDEHYDE – KETONE – ACID ===",
                    "• Aldehyde: có tính khử → tráng gương (AgNO₃/NH₃ → Ag↓) và Cu(OH)₂ → Cu₂O↓ đỏ.",
                    "• Ketone: không phản ứng với AgNO₃/NH₃.",
                    "• Carboxylic acid: este hóa với alcohol (thuận nghịch); tính axit: RCOOH > H₂CO₃ > phenol.",
                    "",
                    "=== AMINE – AMINO ACID – PROTEIN ===",
                    "• Amine no: tính bazơ > NH₃; aniline: tính bazơ yếu (vòng Ben hút e của N).",
                    "• Amino acid: lưỡng tính (tác dụng cả axit và bazơ).",
                    "• Protein: nhận biết bằng phản ứng biuret (màu tím) với Cu(OH)₂/NaOH.",
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },

  11: {
    hk1: {
      title: "LÝ THUYẾT HÓA HỌC 11 – HỌC KÌ 1",
      subtitle: "Bộ sách: Kết nối tri thức với cuộc sống",
      parts: [
        {
          id: "hk1_11_p1",
          label: "Phần 1/7: Cân bằng hóa học",
          chapters: [
            {
              title: "CHƯƠNG 1: CÂN BẰNG HÓA HỌC",
              sections: [
                {
                  heading: "Bài 1: Khái niệm về cân bằng hóa học",
                  content: [
                    "Phản ứng thuận nghịch: phản ứng xảy ra đồng thời theo 2 chiều (ký hiệu ⇌).",
                    "Ví dụ: N₂ + 3H₂ ⇌ 2NH₃ (phản ứng Haber).",
                    "Cân bằng hóa học: trạng thái mà tốc độ phản ứng thuận = tốc độ phản ứng nghịch.",
                    "Tại cân bằng: nồng độ các chất không đổi (nhưng phản ứng vẫn xảy ra – cân bằng động).",
                    "Hằng số cân bằng (Kc): với aA + bB ⇌ cC + dD:",
                    "  Kc = [C]c[D]d / [A]a[B]b (không tính chất rắn thuần, chất lỏng thuần).",
                    "Kc phụ thuộc vào: nhiệt độ (duy nhất). Không phụ thuộc nồng độ đầu.",
                    "Kc >> 1: cân bằng lệch về phải (ưu tiên tạo sản phẩm); Kc << 1: lệch về trái.",
                  ]
                },
                {
                  heading: "Bài 2: Nguyên lý Le Chatelier – Các yếu tố ảnh hưởng đến cân bằng",
                  content: [
                    "Nguyên lý Le Chatelier (chuyển dịch cân bằng): khi thay đổi điều kiện của hệ đang cân bằng, cân bằng sẽ dịch chuyển theo chiều chống lại sự thay đổi đó.",
                    "1. Nồng độ: tăng nồng độ chất đầu → cân bằng dịch phải; tăng nồng độ sản phẩm → dịch trái.",
                    "2. Nhiệt độ: tăng T → cân bằng dịch về phía phản ứng thu nhiệt (ΔH > 0); giảm T → dịch về phía tỏa nhiệt.",
                    "3. Áp suất (với phản ứng có khí): tăng P → cân bằng dịch về phía ít mol khí hơn.",
                    "Ví dụ: N₂ + 3H₂ ⇌ 2NH₃ (ΔH < 0). Để tăng hiệu suất: tăng P, giảm T (nhưng T quá thấp → tốc độ chậm, cần xúc tác Fe).",
                    "4. Chất xúc tác: không dịch chuyển cân bằng, chỉ tăng tốc đạt cân bằng.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_11_p2",
          label: "Phần 2/7: Cân bằng trong dung dịch – Axit – Bazơ",
          chapters: [
            {
              title: "CHƯƠNG 2: CÂN BẰNG TRONG DUNG DỊCH NƯỚC",
              sections: [
                {
                  heading: "Bài 3: Sự điện li",
                  content: [
                    "Sự điện li: sự phân li của các chất trong nước tạo thành ion.",
                    "Chất điện li: chất khi tan trong nước phân li thành ion.",
                    "Chất điện li mạnh: phân li hoàn toàn (→). Gồm: axit mạnh (HCl, H₂SO₄, HNO₃, HBr, HI, HClO₄); bazơ mạnh (NaOH, KOH, Ba(OH)₂...); muối tan.",
                    "Chất điện li yếu: phân li không hoàn toàn (⇌). Gồm: axit yếu (CH₃COOH, HF, H₂CO₃, HClO...); bazơ yếu (NH₃, Al(OH)₃...).",
                    "Chất không điện li: không phân li thành ion (ví dụ: glucose, ethanol, saccharose).",
                  ]
                },
                {
                  heading: "Bài 4: Thuyết Brønsted–Lowry về axit–bazơ",
                  content: [
                    "Thuyết Brønsted–Lowry: axit là chất nhường proton (H⁺); bazơ là chất nhận proton.",
                    "Cặp acid–base liên hợp: HA ⇌ H⁺ + A⁻ (HA là axit; A⁻ là bazơ liên hợp của HA).",
                    "Nước là chất lưỡng tính (amphoteric): vừa nhường H⁺ (axit) vừa nhận H⁺ (bazơ).",
                    "Tích số ion của nước: Kw = [H⁺][OH⁻] = 10⁻¹⁴ (25°C).",
                    "pH = –log[H⁺] hoặc [H⁺] = 10⁻pH.",
                    "pH < 7: môi trường axit; pH = 7: trung tính; pH > 7: bazơ (ở 25°C).",
                    "Chỉ thị: quỳ tím (đỏ pH<7, tím 7, xanh pH>7); phenolphthalein (không màu pH<8,2; hồng pH>8,2).",
                  ]
                },
                {
                  heading: "Bài 5: Chuẩn độ axit–bazơ",
                  content: [
                    "Chuẩn độ: phương pháp xác định nồng độ dung dịch bằng dung dịch chuẩn đã biết nồng độ.",
                    "Điểm tương đương: điểm mà lượng axit = lượng bazơ phản ứng vừa đủ.",
                    "Tại điểm tương đương: n(H⁺) = n(OH⁻) → n(acid) × C_acid × V_acid = n(base) × C_base × V_base.",
                    "Phương pháp chuẩn độ: dùng buret, nhỏ dần dung dịch chuẩn vào bình chứa mẫu đến khi chỉ thị đổi màu.",
                  ]
                },
                {
                  heading: "Bài 6: Phản ứng trao đổi ion trong dung dịch",
                  content: [
                    "Điều kiện xảy ra phản ứng trao đổi ion: tạo kết tủa, hoặc tạo khí bay ra, hoặc tạo chất điện li yếu (nước).",
                    "Viết phương trình ion rút gọn: loại bỏ các ion không tham gia phản ứng (ion khán giả).",
                    "Cân bằng thủy phân: ion kim loại hoặc gốc axit yếu phản ứng với nước.",
                    "Al³⁺ + 3H₂O ⇌ Al(OH)₃ + 3H⁺; CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻.",
                    "Muối của axit yếu và bazơ mạnh (Na₂CO₃): dung dịch có môi trường bazơ.",
                    "Muối của axit mạnh và bazơ yếu (NH₄Cl): dung dịch có môi trường axit.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_11_p3",
          label: "Phần 3/7: Nitrogen và Sulfur",
          chapters: [
            {
              title: "CHƯƠNG 3: NITROGEN VÀ SULFUR",
              sections: [
                {
                  heading: "Bài 7: Nitrogen (Nitơ) và các hợp chất",
                  content: [
                    "Nitrogen (N₂): chiếm 78% thể tích không khí. Liên kết ba N≡N rất bền (Eb ≈ 945 kJ/mol) → N₂ trơ ở nhiệt độ thường.",
                    "N₂ hoạt động ở nhiệt độ cao: N₂ + 3H₂ ⇌ 2NH₃ (Haber); N₂ + O₂ ⇌ 2NO (sét, >2000°C).",
                    "Ammonia (NH₃): khí không màu, mùi khai, tan nhiều trong nước.",
                    "Tính bazơ: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻; NH₃ + HCl → NH₄Cl (muối ammonium).",
                    "Tính khử của NH₃: 4NH₃ + 5O₂ → 4NO + 6H₂O (Pt/Rh, 850°C); 4NH₃ + 3O₂ → 2N₂ + 6H₂O (không có xúc tác).",
                    "Muối ammonium (NH₄⁺): nhiệt phân tạo NH₃ và axit hoặc N₂O... NH₄HCO₃ → NH₃ + H₂O + CO₂.",
                    "Nitric acid (HNO₃): axit mạnh, tính oxi hóa rất mạnh.",
                    "HNO₃ loãng + kim loại đứng trước H → muối + NO↑ + H₂O.",
                    "HNO₃ đặc + kim loại → muối + NO₂↑ + H₂O.",
                    "Fe, Al thụ động trong HNO₃ đặc nguội.",
                    "HNO₃ + phi kim (C, S, P): C + 4HNO₃ đặc → CO₂ + 4NO₂ + 2H₂O.",
                    "Phân đạm: NH₄NO₃ (đạm amoni nitrat), (NH₂)₂CO (urê), Ca(NO₃)₂, (NH₄)₂SO₄...",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_11_p4",
          label: "Phần 4/7: Đại cương hóa học hữu cơ",
          chapters: [
            {
              title: "CHƯƠNG 4: ĐẠI CƯƠNG VỀ HÓA HỌC HỮU CƠ",
              sections: [
                {
                  heading: "Bài 8: Hợp chất hữu cơ – Cấu trúc phân tử",
                  content: [
                    "Hóa học hữu cơ: nghiên cứu hợp chất của carbon (trừ CO, CO₂, carbonate, CN⁻...).",
                    "Đặc điểm hợp chất hữu cơ: liên kết CHT, nhiệt độ nóng chảy/sôi thấp, phần lớn không tan trong nước, phản ứng thường chậm.",
                    "Mạch carbon: mạch hở (không vòng) và mạch vòng (carbocyclic, heterocyclic).",
                    "Phân tích nguyên tố và xác định CTPT.",
                  ]
                },
                {
                  heading: "Bài 9: Hiệu ứng cảm ứng – Đồng phân",
                  content: [
                    "Hiệu ứng cảm ứng (inductive effect): sự phân cực liên kết σ lan truyền qua mạch carbon.",
                    "Nhóm electron đẩy (+I): alkyl (CH₃, C₂H₅...) → làm tăng mật độ e ở liên kết kề.",
                    "Nhóm electron hút (–I): halogen, –NO₂, –COOH, –OH... → làm giảm mật độ e.",
                    "Đồng phân cấu tạo: mạch C, vị trí nhóm chức, loại nhóm chức.",
                    "Đồng phân hình học (cis–trans): điều kiện C=C, mỗi C mang 2 nhóm khác nhau.",
                    "Đồng phân quang học: C bất đối (chiral carbon – 4 nhóm khác nhau).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_11_p5",
          label: "Phần 5/7: Hydrocarbon (Hóa 11)",
          chapters: [
            {
              title: "CHƯƠNG 5: HYDROCARBON",
              sections: [
                {
                  heading: "Bài 10: Alkane – Cycloalkane",
                  content: [
                    "Alkane CₙH₂ₙ₊₂: phản ứng thế halogen (radical). Ưu tiên thế ở C bậc cao hơn.",
                    "Cycloalkane CₙH₂ₙ: vòng nhỏ (C₃, C₄) dễ mở vòng hơn; cyclopentane, cyclohexane tương đối bền.",
                    "Phân loại alkane nhánh: isobutane (2-methylpropane), neopentane (2,2-dimethylpropane).",
                    "Danh pháp IUPAC: chọn mạch chính dài nhất và nhiều nhánh nhất; đánh số từ đầu gần nhánh hơn.",
                  ]
                },
                {
                  heading: "Bài 11: Alkene – Alkyne",
                  content: [
                    "Alkene CₙH₂ₙ: đồng phân cis–trans (với điều kiện mỗi C của nối đôi mang 2 nhóm khác nhau).",
                    "Quy tắc Markovnikov: khi HX cộng vào alkene không đối xứng, H gắn vào C nhiều H hơn (bậc thấp hơn).",
                    "CH₂=CH–CH₃ + HBr → CH₃–CHBr–CH₃ (sản phẩm chính, Markovnikov).",
                    "Phản ứng oxi hóa: alkene + KMnO₄ → làm mất màu dung dịch tím KMnO₄.",
                    "Nhận biết alkene và alkyne: mất màu dung dịch Br₂/CCl₄.",
                    "Nhận biết C≡C đầu mạch (alkyne-1): dùng AgNO₃/NH₃ → kết tủa vàng.",
                  ]
                },
                {
                  heading: "Bài 12: Arene (Hydrocarbon thơm)",
                  content: [
                    "Benzene: vòng 6 cạnh phẳng, 3 liên kết đôi xen kẽ (giải tỏa π). Bền hơn so với alkene.",
                    "Phản ứng thế electrophile (SE): Br₂/Fe; HNO₃đặc/H₂SO₄đặc; H₂SO₄ đặc (sulfonation).",
                    "Phản ứng cộng: C₆H₆ + 3H₂ → C₆H₁₂ (Ni, to, khó hơn alkene).",
                    "Nhóm thế loại 1 (kích hoạt, định hướng o,p): –OH, –NH₂, –CH₃, –OCH₃ → dễ phản ứng SE hơn benzene.",
                    "Nhóm thế loại 2 (phá hoạt, định hướng m): –NO₂, –COOH, –SO₃H, –CHO → khó phản ứng SE hơn.",
                    "Naphthalene (C₁₀H₈): arene 2 vòng, phản ứng SE ưu tiên ở vị trí 1 (α).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_11_p6",
          label: "Phần 6/7: Nguồn nhiên liệu hydrocarbon",
          chapters: [
            {
              title: "CHƯƠNG 6: NGUỒN NHIÊN LIỆU VÀ VẬT LIỆU HYDROCARBON",
              sections: [
                {
                  heading: "Bài 13: Dầu mỏ và các sản phẩm chế biến",
                  content: [
                    "Dầu mỏ: hỗn hợp phức tạp của hydrocarbon (chủ yếu alkane), cùng O, N, S.",
                    "Nguồn gốc: từ xác động thực vật biển bị chôn vùi và biến đổi địa chất hàng triệu năm.",
                    "Chế biến dầu mỏ: chưng cất phân đoạn (phân riêng theo nhiệt độ sôi):",
                    "  – Khí (C₁–C₄): < 40°C",
                    "  – Xăng (C₅–C₁₂): 40–180°C",
                    "  – Dầu hỏa (C₁₀–C₁₆): 150–250°C",
                    "  – Dầu diesel (C₁₄–C₂₀): 250–350°C",
                    "  – Dầu mazut (> C₂₀): > 350°C",
                    "Cracking: nhiệt phân hydrocarbon nặng thành nhẹ hơn (tăng lượng xăng).",
                    "Reforming: chuyển hóa xăng thành sản phẩm chất lượng cao hơn.",
                    "Khí thiên nhiên: chủ yếu methane (CH₄), nguồn năng lượng sạch.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_11_p7",
          label: "Phần 7/7: Ôn tập tổng hợp HK1 lớp 11",
          chapters: [
            {
              title: "ÔN TẬP TỔNG HỢP HỌC KÌ 1 – HÓA HỌC 11",
              sections: [
                {
                  heading: "Bảng tóm tắt kiến thức trọng tâm HK1 Hóa 11",
                  content: [
                    "=== CHƯƠNG 1: CÂN BẰNG HÓA HỌC ===",
                    "• Kc = [sp]^c[sp]^d / [cđ]^a[cđ]^b. Kc chỉ phụ thuộc T.",
                    "• Le Chatelier: hệ dịch chuyển để chống lại sự thay đổi.",
                    "• Nồng độ ↑ → dịch phía tiêu thụ chất đó. Nhiệt độ ↑ → dịch phía thu nhiệt.",
                    "• Áp suất ↑ → dịch phía ít mol khí hơn.",
                    "",
                    "=== CHƯƠNG 2: DUNG DỊCH – AXIT – BAZƠ ===",
                    "• Điện li mạnh (phân li hoàn toàn): axit mạnh, bazơ mạnh, muối tan.",
                    "• pH = –log[H⁺]; pH < 7 (axit), = 7 (trung tính), > 7 (bazơ).",
                    "• Kw = [H⁺][OH⁻] = 10⁻¹⁴ (25°C).",
                    "• Thuyết Brønsted-Lowry: axit nhường H⁺, bazơ nhận H⁺.",
                    "",
                    "=== CHƯƠNG 3: NITROGEN & SULFUR ===",
                    "• NH₃: tính bazơ + tính khử. Sản xuất NH₃: Haber (N₂ + 3H₂, xúc tác Fe, 400-450°C, 200 atm).",
                    "• HNO₃: axit mạnh + oxi hóa mạnh. Đặc: NO₂; loãng: NO. Fe/Al thụ động trong HNO₃ đặc nguội.",
                    "• Chu trình N trong tự nhiên: N₂ → (sét/vi khuẩn) → NO₃⁻ → hấp thụ bởi thực vật.",
                    "",
                    "=== HYDROCARBON ===",
                    "• Alkane: thế halogen; cracking (nhiệt phân).",
                    "• Alkene: cộng (H₂, Br₂, HX, H₂O), trùng hợp. Quy tắc Markovnikov.",
                    "• Alkyne: cộng (tương tự), C≡C đầu mạch → AgNO₃/NH₃ → kết tủa vàng.",
                    "• Benzene: thế SE (ưu tiên), cộng (khó). Nhóm thế -I: o,p; nhóm thế -II: m.",
                    "• Dầu mỏ: chưng cất phân đoạn (theo nhiệt độ sôi). Cracking tăng xăng.",
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    hk2: {
      title: "LÝ THUYẾT HÓA HỌC 11 – HỌC KÌ 2",
      subtitle: "Bộ sách: Kết nối tri thức với cuộc sống",
      parts: [
        {
          id: "hk2_11_p1",
          label: "Phần 1/7: Dẫn xuất halogen – Alcohol – Phenol (Hóa 11)",
          chapters: [
            {
              title: "CHƯƠNG 5: DẪN XUẤT HALOGEN – ALCOHOL – PHENOL",
              sections: [
                {
                  heading: "Bài 14: Dẫn xuất halogen",
                  content: [
                    "Dẫn xuất halogen: thay H trong hydrocarbon bằng X (F, Cl, Br, I).",
                    "Cách gọi tên: tên X + tên gốc alkyl + ide (ví dụ: chloromethane, bromoethane).",
                    "Phản ứng thế với NaOH (thủy phân trong kiềm): R–X + NaOH (aq) → R–OH + NaX.",
                    "Phản ứng tách (elimination): R–CH₂–CH₂X + NaOH (cồn, to) → R–CH=CH₂ + HX + H₂O.",
                    "Với dẫn xuất halogen có nhiều C: hướng tách ưu tiên theo quy tắc Saytzeff (Zaitsev): H bị tách từ C ít H hơn → alkene nhiều nhánh hơn (bền hơn).",
                    "Ứng dụng: dung môi (CH₂Cl₂, CHCl₃, CCl₄), polymer (PVC, PTFE/Teflon), dược phẩm.",
                  ]
                },
                {
                  heading: "Bài 15: Alcohol",
                  content: [
                    "Alcohol no đơn chức CₙH₂ₙ₊₁OH (n≥1). Bậc alcohol theo bậc C mang OH.",
                    "Liên kết H trong alcohol → nhiệt độ sôi cao, tan tốt trong nước (với C₁–C₃).",
                    "Phản ứng với Na: 2ROH + 2Na → 2RONa + H₂↑ (nhận biết nhóm –OH).",
                    "Phản ứng oxi hóa không hoàn toàn: alcohol bậc 1 → aldehyde; bậc 2 → ketone.",
                    "R–CH₂–OH + [O] (CuO, to) → R–CHO + H₂O.",
                    "R–CHOH–R' + [O] → R–CO–R' + H₂O.",
                    "Alcohol bậc 3 khó oxi hóa thành carbonyl.",
                    "Điều chế ethanol: lên men đường (C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂) hoặc hydrate hóa ethylene.",
                    "Methanol (CH₃OH): rất độc, uống nhầm gây mù hoặc chết.",
                    "Glycerol C₃H₅(OH)₃: 3 nhóm –OH; phản ứng với Cu(OH)₂ tạo dung dịch xanh.",
                  ]
                },
                {
                  heading: "Bài 16: Phenol",
                  content: [
                    "Phenol C₆H₅OH: –OH gắn trực tiếp vào vòng benzene.",
                    "Tính axit (yếu, pKa≈10): mạnh hơn alcohol nhưng yếu hơn H₂CO₃.",
                    "C₆H₅OH + NaOH → C₆H₅ONa + H₂O (tác dụng bazơ mạnh).",
                    "C₆H₅ONa + CO₂ + H₂O → C₆H₅OH↓ + NaHCO₃ (CO₂ > H₂CO₃ > phenol).",
                    "Phản ứng thế ái điện tử SE vào nhân: nhóm –OH kích hoạt mạnh → thế ở o và p dễ dàng.",
                    "C₆H₅OH + Br₂(dd) → 2,4,6-tribromoaniline↓ (dùng nhận biết phenol).",
                    "C₆H₅OH + HNO₃ đặc (H₂SO₄) → 2,4,6-trinitrophenol (axit picric, thuốc nổ).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_11_p2",
          label: "Phần 2/7: Hợp chất carbonyl – Carboxylic acid (Hóa 11)",
          chapters: [
            {
              title: "CHƯƠNG 6: HỢP CHẤT CARBONYL – CARBOXYLIC ACID",
              sections: [
                {
                  heading: "Bài 17: Aldehyde và Ketone",
                  content: [
                    "Aldehyde (R–CHO): formaldehyde (HCHO), acetaldehyde (CH₃CHO), benzaldehyde (C₆H₅CHO)...",
                    "Ketone (R–CO–R'): acetone (CH₃COCH₃), methylethylketone...",
                    "Nhận biết: aldehyde dương tính với AgNO₃/NH₃ (→ Ag↓ trắng sáng) và Cu(OH)₂ (→ Cu₂O↓ đỏ gạch). Ketone âm tính.",
                    "Phản ứng cộng nucleophile (AN): RCH=O + HCN → RCH(OH)CN (cyanohydrin); RCH=O + H₂ → RCH₂OH.",
                    "Phản ứng ngưng tụ aldol (aldol condensation): 2CH₃CHO → CH₃CH(OH)CH₂CHO (base).",
                    "Formalin: dung dịch 37% HCHO, bảo quản sinh phẩm, thuốc sát trùng.",
                  ]
                },
                {
                  heading: "Bài 18: Carboxylic acid",
                  content: [
                    "Carboxylic acid (RCOOH): axit yếu trong nước, Ka nhỏ.",
                    "Tính chất axit: tác dụng Na, NaOH, Na₂CO₃, NaHCO₃...",
                    "RCOOH + Na₂CO₃ → RCOONa + CO₂ + H₂O (phân biệt với phenol không tác dụng Na₂CO₃).",
                    "Phản ứng este hóa (Fisher): RCOOH + R'OH ⇌ RCOOR' + H₂O (H⁺ xúc tác, thuận nghịch).",
                    "Phản ứng halogen hóa axit: HVZ (Hell–Volhard–Zelinsky): RCH₂COOH + Br₂ (PCl₃) → RCHBrCOOH.",
                    "Axit formic (HCOOH): dễ bị oxi hóa (nhóm –CHO ẩn), tráng gương.",
                    "Axit béo: palmitic C₁₅H₃₁COOH, stearic C₁₇H₃₅COOH, oleic C₁₇H₃₃COOH (1 nối đôi).",
                    "Tính axit tăng khi có nhóm hút e (–Cl, –NO₂...) α với –COOH; giảm khi có nhóm đẩy e (–CH₃...).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_11_p3",
          label: "Phần 3/7: Amine – Amino acid – Peptide (Hóa 11)",
          chapters: [
            {
              title: "CHƯƠNG 7: AMINE – AMINO ACID – PEPTIDE",
              sections: [
                {
                  heading: "Bài 19: Amine",
                  content: [
                    "Amine: dẫn xuất của NH₃ thay thế H bằng gốc hydrocarbon.",
                    "Bậc amine: bậc 1 (RNH₂), bậc 2 (R₂NH), bậc 3 (R₃N).",
                    "Tính bazơ: alkylamine bậc 1 > NH₃ > aryamine (aniline). Lý do: gốc alkyl đẩy e vào N; vòng benzene hút e của N.",
                    "Nhận biết amine bậc 1: phản ứng với HNO₂ (ở 0–5°C) → muối diazonium (R–N₂⁺Cl⁻).",
                    "Aniline: lỏng, ít tan, độc. Phản ứng với Br₂ → kết tủa trắng 2,4,6-tribromoaniline.",
                    "Phản ứng diazo hóa: C₆H₅NH₂ + NaNO₂ + HCl (0-5°C) → C₆H₅N₂⁺Cl⁻ + NaCl + H₂O.",
                    "Phản ứng ghép cặp (azo): C₆H₅N₂⁺ + C₆H₅OH → C₆H₅–N=N–C₆H₄OH (phẩm màu azo).",
                  ]
                },
                {
                  heading: "Bài 20: Amino acid và Peptide",
                  content: [
                    "Amino acid (AA): phân tử vừa có –NH₂ vừa có –COOH.",
                    "α-Amino acid: H₂N gắn vào C-α kề –COOH. Ví dụ: glycine (H₂N–CH₂–COOH), alanine, valine...",
                    "20 amino acid thiên nhiên, mã hóa bởi DNA, hầu hết dạng L.",
                    "Tính lưỡng tính: phản ứng axit và phản ứng bazơ.",
                    "Ion lưỡng cực (zwitterion): H₃N⁺–CHR–COO⁻ (dạng chiếm ưu thế ở dung dịch trung tính).",
                    "Điểm đẳng điện (pI): pH mà phân tử AA mang điện bằng 0, di chuyển chậm nhất điện di.",
                    "Liên kết peptide: –CO–NH– giữa nhóm –COOH của AA này và –NH₂ của AA kia.",
                    "Peptide: dipeptide (2 AA), tripeptide (3 AA), oligopeptide, polypeptide.",
                    "Nhận biết: phản ứng biuret – peptide ≥ 2 liên kết peptide + Cu(OH)₂/NaOH → màu tím.",
                    "Amino acid thiết yếu: cơ thể không tự tổng hợp được, phải lấy từ thức ăn.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_11_p4",
          label: "Phần 4/7: Polymer",
          chapters: [
            {
              title: "CHƯƠNG 8: POLYMER",
              sections: [
                {
                  heading: "Bài 21: Đại cương về polymer",
                  content: [
                    "Polymer: hợp chất có phân tử lớn (macromolecule) gồm nhiều đơn vị cấu trúc (mắt xích) lặp đi lặp lại.",
                    "Monomer: đơn vị nhỏ nhất cấu tạo nên polymer.",
                    "Độ trùng hợp (n): số mắt xích trong một phân tử polymer.",
                    "Phân loại theo nguồn gốc: polymer thiên nhiên (cao su, cellulose, protein, tinh bột) và polymer tổng hợp.",
                    "Phân loại theo cấu trúc: polymer mạch thẳng, mạch nhánh, mạch không gian (lưới).",
                  ]
                },
                {
                  heading: "Bài 22: Phương pháp điều chế polymer",
                  content: [
                    "Phản ứng trùng hợp (addition polymerization): monomer có liên kết đôi/ba → polymer mạch thẳng.",
                    "Điều kiện: áp suất, nhiệt độ, chất xúc tác (hoặc chất khởi đầu radical/ion).",
                    "Ví dụ: nCH₂=CH₂ → (–CH₂–CH₂–)ₙ (PE); nCH₂=CHCl → (–CH₂–CHCl–)ₙ (PVC).",
                    "nCH₂=C(CH₃)₂ → (–CH₂–C(CH₃)₂–)ₙ (polyisobutylene); nCF₂=CF₂ → Teflon (PTFE).",
                    "Phản ứng trùng ngưng (condensation polymerization): monomer ≥ 2 nhóm chức, tạo polymer và phân tử nhỏ (H₂O, HCl...).",
                    "Nylon-6,6: n H₂N(CH₂)₆NH₂ + n HOOC(CH₂)₄COOH → [–NH(CH₂)₆NH–CO(CH₂)₄CO–]ₙ + 2nH₂O.",
                    "Nylon-6 (caprolactam): trùng ngưng lactam mở vòng.",
                    "Nhựa phenol-formaldehyde (Bakelite): phenol + HCHO → mạng lưới không gian (thermosetting).",
                    "Cao su: thiên nhiên (polyisoprene, cis), tổng hợp (polybutadiene, SBR, neoprene).",
                    "Lưu hóa cao su: dùng S nối các mạch polymer → tăng độ bền, đàn hồi.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_11_p5",
          label: "Phần 5/7: Carbohydrate",
          chapters: [
            {
              title: "CHƯƠNG 9: CARBOHYDRATE (Gluxit)",
              sections: [
                {
                  heading: "Bài 23: Monosaccharide – Glucose và Fructose",
                  content: [
                    "Carbohydrate (saccharide): nhóm hợp chất chứa C, H, O với CT tổng quát Cₙ(H₂O)ₘ.",
                    "Phân loại: monosaccharide (1 đơn vị), disaccharide (2 đơn vị), polysaccharide (nhiều đơn vị).",
                    "Glucose (C₆H₁₂O₆): tồn tại chủ yếu dạng vòng pyranose (α hoặc β-D-glucopyranose).",
                    "Tính chất glucose: có tính khử (nhóm –OH hemiacetal ẩn, dạng mạch hở có –CHO).",
                    "Glucose + 2[Ag(NH₃)₂]OH → gluconate + 2Ag↓ + NH₃ + H₂O (tráng gương).",
                    "Glucose + 2Cu(OH)₂ → gluconate + Cu₂O↓ đỏ gạch.",
                    "Glucose + H₂ → sorbitol; Glucose → lên men → 2C₂H₅OH + 2CO₂.",
                    "Fructose (C₆H₁₂O₆): đồng phân của glucose. Fructose → (kiềm) ⇌ glucose (có thể tráng gương).",
                  ]
                },
                {
                  heading: "Bài 24: Disaccharide và Polysaccharide",
                  content: [
                    "Saccharose (C₁₂H₂₂O₁₁): glucose + fructose, không còn nhóm –OH hemiacetal → không có tính khử.",
                    "Saccharose + H₂O (H⁺ hoặc enzyme invertase) → glucose + fructose.",
                    "Saccharose + Cu(OH)₂ → dung dịch xanh đẹp (3 nhóm –OH liền kề).",
                    "Maltose (C₁₂H₂₂O₁₁): glucose + glucose; còn nhóm –OH hemiacetal → có tính khử.",
                    "Tinh bột (C₆H₁₀O₅)ₙ: polymer của α-glucose. Gồm amylose (mạch thẳng) và amylopectin (mạch nhánh).",
                    "Tinh bột + I₂ → màu xanh đặc trưng (nhận biết tinh bột).",
                    "Tinh bột thủy phân: tinh bột → maltose → glucose (H₂O, H⁺ hoặc enzyme amylase).",
                    "Cellulose (C₆H₁₀O₅)ₙ: polymer của β-glucose, mạch thẳng không nhánh. Xenlulozơ tạo sợi thực vật.",
                    "Cellulose + HNO₃ đặc/H₂SO₄ → cellulose trinitrate (thuốc súng bông, phim nhựa).",
                    "Cellulose + (CH₃CO)₂O → cellulose acetate (làm sợi acetate, phim ảnh).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_11_p6",
          label: "Phần 6/7: Ester – Lipid (Hóa 11)",
          chapters: [
            {
              title: "CHƯƠNG 10: ESTER VÀ LIPID",
              sections: [
                {
                  heading: "Bài 25: Ester",
                  content: [
                    "Ester (RCOOR'): sản phẩm của phản ứng axit + alcohol (este hóa).",
                    "Tên gọi: tên gốc R' + tên acid (đổi đuôi -ic thành -ate). Ví dụ: CH₃COOC₂H₅ = ethyl acetate.",
                    "Tính chất vật lí: nhẹ hơn nước, ít tan trong nước, bay hơi dễ hơn acid tương ứng (vì không tạo liên kết H), thường có mùi thơm.",
                    "Phản ứng thủy phân axit: RCOOR' + H₂O ⇌ RCOOH + R'OH (thuận nghịch, H⁺ xúc tác).",
                    "Phản ứng xà phòng hóa (base): RCOOR' + NaOH → RCOONa + R'OH (một chiều, hoàn toàn).",
                    "Điều chế: este hóa Fischer, phản ứng acid chloride/anhydride với alcohol.",
                    "Ứng dụng: dung môi (ethyl acetate, butyl acetate), hương liệu thực phẩm (isoamyl acetate: mùi chuối), sơn, keo dán...",
                  ]
                },
                {
                  heading: "Bài 26: Lipid – Chất béo",
                  content: [
                    "Lipid: nhóm chất không tan trong nước, tan trong dung môi hữu cơ.",
                    "Chất béo (fat/oil): ester của glycerol và axit béo (triglyceride).",
                    "Axit béo no: palmitic (C₁₅H₃₁COOH), stearic (C₁₇H₃₅COOH) → mỡ động vật (rắn).",
                    "Axit béo không no: oleic (C₁₇H₃₃COOH, 1 nối đôi), linoleic (2 nối đôi), linolenic (3 nối đôi) → dầu thực vật (lỏng).",
                    "Phản ứng xà phòng hóa chất béo: (RCOO)₃C₃H₅ + 3NaOH → 3RCOONa + C₃H₅(OH)₃.",
                    "Xà phòng: muối sodium của axit béo dài (RCOONa). Cơ chế hoạt động: đầu ưa nước (COO⁻Na⁺) và đuôi kỵ nước (R).",
                    "Phản ứng cộng H₂ (hydro hóa): dầu thực vật + H₂ → mỡ rắn (margarine, Ni xúc tác).",
                    "Omega-3 (EPA, DHA), omega-6: axit béo không no thiết yếu, quan trọng cho tim mạch, não.",
                    "Sáp (wax): ester của axit béo dài với alcohol dài; phospholipid: thành phần màng tế bào.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_11_p7",
          label: "Phần 7/7: Ôn tập tổng hợp HK2 lớp 11",
          chapters: [
            {
              title: "ÔN TẬP TỔNG HỢP HỌC KÌ 2 – HÓA HỌC 11",
              sections: [
                {
                  heading: "Bảng tóm tắt kiến thức trọng tâm HK2 Hóa 11",
                  content: [
                    "=== DẪN XUẤT HALOGEN – ALCOHOL – PHENOL ===",
                    "• Dẫn xuất halogen: thế (NaOH/H₂O → OH), tách (NaOH/cồn → alkene).",
                    "• Alcohol: –OH + Na → H₂; tách H₂O (170°C → alkene; 140°C → ether).",
                    "• Phenol: axit yếu > H₂CO₃ > alcohol; thế SE dễ ở o,p.",
                    "",
                    "=== CARBONYL – CARBOXYLIC ACID ===",
                    "• Aldehyde: tính khử → tráng gương (AgNO₃/NH₃ → Ag), Cu(OH)₂ → Cu₂O.",
                    "• Ketone: không tác dụng AgNO₃/NH₃; không Cu(OH)₂ thường.",
                    "• RCOOH: este hóa với R'OH (thuận nghịch); axit yếu, tác dụng Na, NaOH, Na₂CO₃.",
                    "",
                    "=== AMINE – AMINO ACID – POLYMER ===",
                    "• Amine no: bazơ mạnh hơn NH₃; aniline: bazơ yếu hơn NH₃.",
                    "• Amino acid: lưỡng tính, tạo liên kết peptide → polypeptide.",
                    "• Polymer: trùng hợp (CH₂=CH₂ → PE); trùng ngưng (AA → peptide, diacid+diamine → nylon).",
                    "",
                    "=== CARBOHYDRATE ===",
                    "• Glucose: có tính khử (tráng gương, Cu₂O↓); lên men → ethanol.",
                    "• Saccharose: không khử; thủy phân → glucose + fructose.",
                    "• Tinh bột: + I₂ → xanh; cellulose: + HNO₃/H₂SO₄ → trinitrate (thuốc súng bông).",
                    "",
                    "=== ESTER – LIPID ===",
                    "• Ester: thủy phân axit (⇌); xà phòng hóa (→ hoàn toàn, NaOH).",
                    "• Chất béo: triglyceride; xà phòng hóa → xà phòng + glycerol.",
                    "• Dầu thực vật + H₂ → margarine. Omega-3, omega-6: thiết yếu.",
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },

  12: {
    hk1: {
      title: "LÝ THUYẾT HÓA HỌC 12 – HỌC KÌ 1",
      subtitle: "Bộ sách: Kết nối tri thức với cuộc sống",
      parts: [
        {
          id: "hk1_12_p1",
          label: "Phần 1/7: Ester – Lipid",
          chapters: [
            {
              title: "CHƯƠNG 1: ESTER – LIPID",
              sections: [
                {
                  heading: "Bài 1: Ester",
                  content: [
                    "Ester (RCOOR'): sản phẩm thay –OH của axit bằng –OR' (hoặc thay –H của alcohol bằng –COR).",
                    "CTPT: CₙH₂ₙO₂ (ester no đơn chức, mạch hở, n ≥ 2).",
                    "Đặc điểm cấu tạo: nhóm –COO– ở giữa, không có liên kết H → nhiệt độ sôi thấp hơn acid tương ứng.",
                    "Phản ứng thủy phân: RCOOR' + H₂O ⇌ RCOOH + R'OH (H₂SO₄, đun nóng).",
                    "Phản ứng xà phòng hóa: RCOOR' + NaOH → RCOONa + R'OH (một chiều, hoàn toàn).",
                    "Điều chế ester: este hóa (RCOOH + R'OH ⇌ RCOOR' + H₂O, H⁺ xúc tác).",
                    "Ứng dụng: mùi thơm hoa quả (ethyl butyrate: mùi dứa; isoamyl acetate: mùi chuối), dung môi sơn.",
                  ]
                },
                {
                  heading: "Bài 2: Lipid – Chất béo – Xà phòng",
                  content: [
                    "Lipid: nhóm hợp chất không tan trong nước, tan trong dung môi kém phân cực.",
                    "Chất béo (triglyceride): ester của glycerol và 3 axit béo (có thể cùng loại hoặc khác loại).",
                    "CTPT: (RCOO)₃C₃H₅ (R có thể khác nhau cho 3 vị trí).",
                    "Axit béo no: stearic C₁₇H₃₅COOH, palmitic C₁₅H₃₁COOH → chất béo rắn (mỡ động vật).",
                    "Axit béo không no: oleic C₁₇H₃₃COOH → dầu thực vật (lỏng).",
                    "Tính chất: nhẹ hơn nước, không tan trong nước; phản ứng cộng H₂ (dầu → mỡ); phản ứng oxi hóa (dầu bị ôi thiu).",
                    "Phản ứng xà phòng hóa: (RCOO)₃C₃H₅ + 3NaOH → 3RCOONa (xà phòng) + C₃H₅(OH)₃.",
                    "Xà phòng: muối sodium/potassium của axit béo. Chất giặt rửa: đầu phân cực (ưa nước) + đuôi kỵ nước.",
                    "Chất giặt rửa tổng hợp: alkylbenzenesulfonate (ABS), alkyl sulfate – không tạo kết tủa với nước cứng.",
                    "Omega-3 (linolenic, EPA, DHA) và Omega-6 (linoleic, arachidonic): axit béo không no thiết yếu.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_12_p2",
          label: "Phần 2/7: Carbohydrate",
          chapters: [
            {
              title: "CHƯƠNG 2: CARBOHYDRATE",
              sections: [
                {
                  heading: "Bài 3: Glucose và Fructose",
                  content: [
                    "Glucose C₆H₁₂O₆: đường đơn (monosaccharide), CTCT dạng mạch hở có 5–OH và 1–CHO.",
                    "Dạng vòng α-D-glucopyranose và β-D-glucopyranose (tồn tại chủ yếu trong dung dịch).",
                    "Tính chất hóa học glucose:",
                    "  – Tính khử (nhóm –CHO hoặc –OH hemiacetal): tráng gương (AgNO₃/NH₃ → 2Ag); khử Cu(OH)₂ → Cu₂O↓ đỏ gạch.",
                    "  – Phản ứng với nước brom: làm mất màu Br₂.",
                    "  – Phản ứng với H₂ (Ni, to): → sorbitol.",
                    "  – Lên men (enzyme): C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.",
                    "  – Phản ứng của nhóm –OH: tạo ester nhiều chức.",
                    "Fructose C₆H₁₂O₆: đồng phân của glucose, có nhóm keto (–C=O–) nhưng qua cân bằng isomer hóa (bazơ) → có thể tráng gương.",
                  ]
                },
                {
                  heading: "Bài 4: Saccharose – Maltose – Tinh bột – Cellulose",
                  content: [
                    "Saccharose C₁₂H₂₂O₁₁: glucose + fructose (liên kết 1,2-glucoside); không có nhóm OH hemiacetal → không có tính khử.",
                    "Saccharose + Cu(OH)₂ → phức xanh (đặc trưng polyol).",
                    "Saccharose thủy phân: + H₂O (H⁺ hoặc invertase) → glucose + fructose (đường nghịch chuyển).",
                    "Maltose C₁₂H₂₂O₁₁: glucose + glucose (1,4-glucoside); còn OH hemiacetal → có tính khử (tráng gương).",
                    "Tinh bột (C₆H₁₀O₅)ₙ: amylose (mạch thẳng, α-1,4) + amylopectin (mạch nhánh, α-1,4 và α-1,6).",
                    "Tinh bột + I₂ → xanh (I₂ nằm trong xoắn ốc amylose). Đun nóng → mất màu, để nguội → xanh lại.",
                    "Tinh bột thủy phân: → maltose → glucose (H₂O, H⁺ hoặc enzyme).",
                    "Tinh bột + H₂O (enzyme amylase trong tuyến nước bọt) → maltose → glucose (tiêu hóa).",
                    "Cellulose (C₆H₁₀O₅)ₙ: β-glucose, liên kết β-1,4-glucoside, mạch thẳng không phân nhánh.",
                    "Cellulose + HNO₃ đặc (H₂SO₄ đặc) → cellulose trinitrate + H₂O (thuốc súng bông).",
                    "Cellulose + (CH₃CO)₂O → cellulose acetate (fiber).",
                    "Cellulose + dung dịch Schweizer [Cu(NH₃)₄](OH)₂ → viscose (tơ viscose, tơ nhân tạo).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_12_p3",
          label: "Phần 3/7: Amine – Amino acid – Protein",
          chapters: [
            {
              title: "CHƯƠNG 3: AMINE – AMINO ACID – PROTEIN",
              sections: [
                {
                  heading: "Bài 5: Amine",
                  content: [
                    "Amine: dẫn xuất của NH₃, thay H bằng gốc hydrocarbon.",
                    "Phân loại: amine no (alkylamine), amine không no, amine thơm (arylamine).",
                    "CTPT amine no đơn chức: CₙH₂ₙ₊₃N (n≥1).",
                    "Danh pháp: gốc alkyl + amine (methylamine, ethylamine, dimethylamine...); aniline = phenylamine.",
                    "Tính bazơ (vì N có cặp e lẻ nhận H⁺):",
                    "  – Alkylamine > NH₃ > Aryamine (aniline)",
                    "  – Trong dãy alkylamine: bậc 2 > bậc 1 > bậc 3 (trong pha nước, do solvat hóa).",
                    "R–NH₂ + H₂O ⇌ R–NH₃⁺ + OH⁻ (môi trường bazơ yếu).",
                    "R–NH₂ + HCl → R–NH₃⁺Cl⁻ (muối ammonium).",
                    "Aniline (C₆H₅NH₂): lỏng không màu (bị oxy hóa chậm → nâu). Ít tan trong nước. Độc.",
                    "C₆H₅NH₂ + Br₂(dd) → 2,4,6-tribromoaniline↓ trắng + 3HBr (nhận biết aniline).",
                    "Diazo hóa aniline: C₆H₅NH₂ + NaNO₂ + 2HCl (0-5°C) → [C₆H₅N≡N]Cl⁻ + NaCl + 2H₂O.",
                    "Ứng dụng: sản xuất phẩm nhuộm azo, polymer (polyurethane, nylon), dược phẩm.",
                  ]
                },
                {
                  heading: "Bài 6: Amino acid",
                  content: [
                    "Amino acid: hợp chất chứa đồng thời –NH₂ và –COOH trong phân tử.",
                    "α-amino acid: nhóm –NH₂ gắn vào C-α (kề –COOH). CTCT: H₂N–CHR–COOH.",
                    "Tính lưỡng tính: tác dụng axit (qua –NH₂) và tác dụng bazơ (qua –COOH).",
                    "H₂N–CH₂–COOH + HCl → ClH₃N–CH₂–COOH.",
                    "H₂N–CH₂–COOH + NaOH → H₂N–CH₂–COONa + H₂O.",
                    "Ion lưỡng cực (zwitterion): H₃N⁺–CHR–COO⁻ (trạng thái chủ yếu ở pI).",
                    "Điều chế: từ protein thủy phân; tổng hợp hóa học.",
                    "20 amino acid thiên nhiên cấu tạo protein: glycine, alanine, valine, leucine, isoleucine, serine, threonine, cysteine, methionine, proline, phenylalanine, tyrosine, tryptophan, histidine, lysine, arginine, aspartic acid, asparagine, glutamic acid, glutamine.",
                    "Amino acid thiết yếu (9 loại): valine, leucine, isoleucine, methionine, threonine, phenylalanine, tryptophan, lysine, histidine.",
                    "Ứng dụng: thực phẩm (MSG = glutamic acid), y tế, dịch truyền, hương liệu.",
                  ]
                },
                {
                  heading: "Bài 7: Peptide và Protein",
                  content: [
                    "Liên kết peptide: –CO–NH– (amide bond) nối –COOH của AA này với –NH₂ của AA tiếp theo.",
                    "Peptide: 2–50 AA; Protein: > 50 AA (polypeptide).",
                    "Cấu trúc protein:",
                    "  – Bậc 1: trình tự các amino acid (quyết định bởi gen).",
                    "  – Bậc 2: cấu trúc xoắn α (α-helix) hoặc tờ gấp β (β-sheet); duy trì bằng liên kết H.",
                    "  – Bậc 3: cấu trúc không gian 3D tổng thể; duy trì bằng liên kết S–S, liên kết H, tương tác kỵ nước.",
                    "  – Bậc 4: nhiều chuỗi polypeptide kết hợp (ví dụ hemoglobin: 4 chuỗi).",
                    "Sự biến tính protein: phá vỡ cấu trúc bậc cao (2,3,4) nhưng không đứt liên kết peptide (bậc 1).",
                    "Nguyên nhân biến tính: nhiệt, axit/bazơ mạnh, muối kim loại nặng (Hg²⁺, Pb²⁺), ethanol.",
                    "Phản ứng màu biuret: protein + Cu(OH)₂/NaOH → màu tím đặc trưng (≥ 2 liên kết peptide).",
                    "Phản ứng xanthoproteic: protein + HNO₃ đặc → màu vàng (do nhóm phenol của Tyr, Phe).",
                    "Phân loại protein: đơn giản (chỉ AA) và phức tạp (AA + phần phi protein: heme, đường, lipid...).",
                    "Vai trò: cấu trúc (collagen, keratin), xúc tác (enzyme), vận chuyển (hemoglobin), kháng thể (immunoglobulin), hormone (insulin).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_12_p4",
          label: "Phần 4/7: Polymer – Pin điện và điện phân",
          chapters: [
            {
              title: "CHƯƠNG 4: POLYMER",
              sections: [
                {
                  heading: "Bài 8: Đại cương về polymer và phân loại",
                  content: [
                    "Polymer: đại phân tử do nhiều monomer liên kết nhau.",
                    "Phân loại theo phản ứng tổng hợp:",
                    "  – Trùng hợp (addition): nCH₂=CH₂ → (–CH₂–CH₂–)ₙ (PE, polyethylene).",
                    "  – Trùng ngưng (condensation): kèm theo giải phóng phân tử nhỏ (H₂O, HCl...).",
                    "Các polymer quan trọng:",
                    "  – PE (polyethylene): túi nilon, bình chứa.",
                    "  – PP (polypropylene): cứng hơn PE, đồ gia dụng.",
                    "  – PVC (polyvinyl chloride): ống nước, vỏ dây điện.",
                    "  – PS (polystyrene): hộp xốp, đồ chơi.",
                    "  – PMMA (acrylic glass/plexiglass): kính hữu cơ.",
                    "  – Nylon-6,6: sợi tổng hợp, lưỡi dao, bánh răng.",
                    "  – Nylon-6 (caprolactam): sợi dệt.",
                    "  – Tơ tằm (fibroin protein): sợi tự nhiên.",
                    "  – Tơ viscose/rayon: cellulose tái sinh.",
                    "  – Cao su thiên nhiên (polyisoprene cis): đàn hồi.",
                    "  – Cao su tổng hợp: SBR (styrene-butadiene rubber), neoprene, silicone.",
                    "Lưu hóa cao su: tạo cầu nối –S– giữa các mạch → tăng độ bền, đàn hồi, không tan.",
                  ]
                }
              ]
            },
            {
              title: "CHƯƠNG 5: PIN ĐIỆN VÀ ĐIỆN PHÂN",
              sections: [
                {
                  heading: "Bài 9: Pin điện – Điện hóa học",
                  content: [
                    "Pin điện hóa: thiết bị biến đổi hóa năng thành điện năng.",
                    "Cấu tạo: 2 điện cực (anode và cathode) nhúng vào dung dịch điện phân (electrolyte), nối ngoài bằng dây dẫn.",
                    "Anode (cực âm của pin): xảy ra sự oxi hóa (cực hoạt động, bị ăn mòn).",
                    "Cathode (cực dương của pin): xảy ra sự khử.",
                    "Pin Volta (Zn/Cu): Anode: Zn → Zn²⁺ + 2e; Cathode: 2H⁺ + 2e → H₂.",
                    "Suất điện động (emf, E°cell) = E°cathode – E°anode (thế điện cực chuẩn).",
                    "Thế điện cực chuẩn (E°): so với điện cực hydrogen chuẩn (SHE, E° = 0 V).",
                    "Dãy điện hóa (activity series): Li > K > Ba > Ca > Na > Mg > Al > Zn > Fe > Ni > Sn > Pb > H > Cu > Hg > Ag > Pt > Au.",
                    "Kim loại đứng trước trong dãy điện hóa → có tính khử mạnh hơn, dễ bị oxi hóa hơn.",
                    "Pin nhiên liệu (fuel cell): H₂ + O₂ → H₂O + điện (hiệu suất cao, không ô nhiễm).",
                    "Acqui (ắc quy): pin có thể nạp lại. Acqui chì (Pb/PbO₂/H₂SO₄): dùng trong ô tô.",
                  ]
                },
                {
                  heading: "Bài 10: Điện phân",
                  content: [
                    "Điện phân: dùng điện năng để thực hiện phản ứng oxi hóa – khử không tự xảy ra.",
                    "Tại cathode (cực âm): xảy ra sự khử (ion dương nhận e). Ưu tiên: ion có E° lớn hơn bị khử trước.",
                    "Tại anode (cực dương): xảy ra sự oxi hóa. Anode trơ (Pt, graphite): anion bị oxi hóa. Anode tan (kim loại): kim loại bị oxi hóa.",
                    "Thứ tự điện phân ở cathode: Ag⁺ > Cu²⁺ > Ni²⁺ > Fe²⁺ > Zn²⁺ > H⁺ > Na⁺, K⁺, Ca²⁺, Mg²⁺, Al³⁺ (cuối cùng mới khử H₂O).",
                    "Điện phân dung dịch NaCl bão hòa (màng ngăn): cathode: H₂O + 2e → H₂ + 2OH⁻; anode: 2Cl⁻ → Cl₂ + 2e. Thu được: Cl₂ (anode), H₂ (cathode), NaOH (dung dịch sau màng ngăn).",
                    "Định luật Faraday: m = (M × I × t) / (n × F). Trong đó: m (g), M (g/mol), I (A), t (s), n (số e), F = 96500 C/mol.",
                    "Ứng dụng điện phân: mạ điện (electroplating), tinh chế kim loại (Cu, Al), sản xuất Na, Cl₂, NaOH, Al...",
                    "Sản xuất Al: điện phân Al₂O₃ nóng chảy (thêm cryolite Na₃AlF₆ để hạ nhiệt độ nóng chảy).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_12_p5",
          label: "Phần 5/7: Đại cương kim loại",
          chapters: [
            {
              title: "CHƯƠNG 6: ĐẠI CƯƠNG VỀ KIM LOẠI",
              sections: [
                {
                  heading: "Bài 11: Cấu tạo và tính chất vật lí của kim loại",
                  content: [
                    "Kim loại: cấu trúc tinh thể (mạng tinh thể), các ion kim loại cố định trong mạng, electron tự do chuyển động.",
                    "Kiểu mạng tinh thể: lập phương tâm khối (BCC: Na, K, Fe ở to thường), lập phương tâm mặt (FCC: Cu, Al, Ag, Au), lục phương (HCP: Mg, Zn).",
                    "Tính chất vật lí: dẫn điện, dẫn nhiệt (do e tự do), ánh kim, tính dẻo (do các lớp ion trượt lên nhau).",
                    "Khối lượng riêng: Li nhỏ nhất (0,5 g/cm³); Os nặng nhất (22,6 g/cm³). Kim loại nhẹ (<5 g/cm³): Na, K, Al, Mg; Kim loại nặng (>5 g/cm³): Fe, Cu, Pb, Au...",
                    "Nhiệt độ nóng chảy: Hg thấp nhất (-39°C); W cao nhất (3410°C).",
                    "Độ cứng: K, Na mềm; Cr cứng nhất trong kim loại.",
                  ]
                },
                {
                  heading: "Bài 12: Tính chất hóa học của kim loại",
                  content: [
                    "Tính chất chung: tính khử (nhường electron).",
                    "Kim loại + phi kim: 2Na + Cl₂ → 2NaCl; 2Fe + 3Cl₂ → 2FeCl₃; Fe + S → FeS (nung).",
                    "Kim loại + nước: Na, K, Ca, Ba tan trong nước ở nhiệt độ thường → bazơ + H₂.",
                    "2Na + 2H₂O → 2NaOH + H₂↑; Ca + 2H₂O → Ca(OH)₂ + H₂↑.",
                    "Mg + H₂O (hơi nước nóng) → MgO + H₂; Fe + H₂O (hơi, >570°C) → Fe₃O₄ + H₂.",
                    "Kim loại + axit (HCl, H₂SO₄ loãng): kim loại đứng trước H → muối + H₂.",
                    "Fe + 2HCl → FeCl₂ + H₂; Zn + H₂SO₄ loãng → ZnSO₄ + H₂.",
                    "Kim loại + HNO₃/H₂SO₄ đặc: (hầu hết) → muối + NO₂/SO₂ + H₂O.",
                    "Cu + 4HNO₃ đặc → Cu(NO₃)₂ + 2NO₂ + 2H₂O.",
                    "Cu + 8HNO₃ loãng → 3Cu(NO₃)₂ + 2NO + 4H₂O.",
                    "Kim loại + dung dịch muối: kim loại đứng trước đẩy kim loại đứng sau.",
                    "Fe + CuSO₄ → FeSO₄ + Cu; Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag.",
                  ]
                },
                {
                  heading: "Bài 13: Dãy điện hóa – Ăn mòn kim loại",
                  content: [
                    "Dãy điện hóa (activity series): sắp xếp các cặp oxi hóa–khử theo chiều tăng tính oxi hóa của dạng oxi hóa.",
                    "Quy tắc α: kim loại A có thể đẩy kim loại B ra khỏi dung dịch muối nếu A đứng trước B trong dãy điện hóa (và không tác dụng với dung môi).",
                    "Ăn mòn kim loại: sự phá hủy kim loại do tác dụng của môi trường.",
                    "Ăn mòn hóa học: trực tiếp tác dụng hóa học, không phát sinh dòng điện.",
                    "Ăn mòn điện hóa học: hình thành pin điện hóa khi có 2 kim loại (hoặc kim loại–phi kim) tiếp xúc và có dung dịch điện phân. Kim loại hoạt động hơn làm anode (bị ăn mòn).",
                    "Điều kiện ăn mòn điện hóa: 2 điện cực khác nhau + tiếp xúc + trong dung dịch điện phân.",
                    "Ví dụ: gỉ sắt (Fe–C tiếp xúc trong nước mưa có CO₂/O₂ → pin Fe–C → Fe bị oxi hóa).",
                    "Bảo vệ kim loại: phủ lớp bảo vệ (sơn, mạ, tráng men), thêm chất ức chế, bảo vệ cathodic (nối với Zn).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_12_p6",
          label: "Phần 6/7: Kim loại kiềm – Kim loại kiềm thổ",
          chapters: [
            {
              title: "CHƯƠNG 7: KIM LOẠI NHÓM IA VÀ IIA",
              sections: [
                {
                  heading: "Bài 14: Kim loại nhóm IA (Alkali metals)",
                  content: [
                    "Nhóm IA: Li, Na, K, Rb, Cs, Fr. Cấu hình e ngoài cùng: ns¹.",
                    "Tính chất vật lí: màu trắng bạc, mềm, nhẹ, nhiệt độ nóng chảy thấp.",
                    "Tính chất hóa học: tính khử rất mạnh (nhường 1e). Hoạt tính tăng dần: Li < Na < K < Rb < Cs.",
                    "Kim loại IA + O₂: Na cháy → Na₂O₂ (sodium peroxide); K cháy → KO₂; Li cháy → Li₂O.",
                    "Kim loại IA + H₂O: 2M + 2H₂O → 2MOH + H₂↑ (tỏa nhiệt mạnh, K, Rb, Cs có thể bùng cháy).",
                    "Kim loại IA + axit: phản ứng mãnh liệt → MOH + H₂ (hoặc cháy nổ).",
                    "Na₂O₂: chất oxi hóa mạnh, dùng bình dưỡng khí: 2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂.",
                    "Hợp chất quan trọng: NaOH (xút, sản xuất xà phòng, dệt nhuộm); Na₂CO₃ (soda ash, thủy tinh); NaHCO₃ (muối nở, dược phẩm); NaCl (muối ăn, điện phân).",
                    "Điều chế kim loại IA: điện phân nóng chảy muối halide (ví dụ: NaCl(lỏng) → Na + Cl₂).",
                  ]
                },
                {
                  heading: "Bài 15: Kim loại nhóm IIA (Alkaline earth metals)",
                  content: [
                    "Nhóm IIA: Be, Mg, Ca, Sr, Ba, Ra. Cấu hình e ngoài cùng: ns².",
                    "Tính chất hóa học: tính khử mạnh (nhường 2e). Hoạt tính tăng dần theo nhóm.",
                    "Mg + O₂ → MgO (cháy sáng trắng, không tắt trong CO₂, H₂O).",
                    "Ca + 2H₂O → Ca(OH)₂ + H₂↑ (nước vôi, ít tan).",
                    "Mg không tác dụng H₂O ở nhiệt độ thường (do lớp MgO bảo vệ).",
                    "Nước cứng: chứa nhiều Ca²⁺, Mg²⁺.",
                    "  – Tạm thời: chứa Ca(HCO₃)₂, Mg(HCO₃)₂ → đun sôi → CaCO₃↓, MgCO₃↓ + CO₂ + H₂O.",
                    "  – Vĩnh cửu: chứa CaSO₄, MgSO₄, CaCl₂, MgCl₂ → không mất khi đun.",
                    "Làm mềm nước cứng tạm thời: đun sôi hoặc dùng Ca(OH)₂ vừa đủ.",
                    "Làm mềm nước cứng vĩnh cửu: dùng Na₂CO₃, Na₃PO₄ hoặc trao đổi ion (resin).",
                    "Hợp chất quan trọng: CaO (vôi sống), Ca(OH)₂ (vôi tôi), CaCO₃ (đá vôi), CaSO₄.2H₂O (thạch cao sống), CaSO₄.½H₂O (thạch cao nung).",
                    "Ca(OH)₂: nhận biết CO₂ (nước vôi trong → đục, CaCO₃↓); nhận biết NH₃.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk1_12_p7",
          label: "Phần 7/7: Ôn tập tổng hợp HK1 lớp 12",
          chapters: [
            {
              title: "ÔN TẬP TỔNG HỢP HỌC KÌ 1 – HÓA HỌC 12",
              sections: [
                {
                  heading: "Bảng tóm tắt kiến thức trọng tâm HK1 Hóa 12",
                  content: [
                    "=== CHƯƠNG 1: ESTER – LIPID ===",
                    "• Ester RCOOR': thủy phân (H⁺, thuận nghịch → RCOOH + R'OH); xà phòng hóa (NaOH → RCOONa + R'OH, 1 chiều).",
                    "• Chất béo: triglyceride. Dầu (lỏng, unsaturated) + H₂ → mỡ (no, rắn).",
                    "• Xà phòng hóa chất béo: + 3NaOH → 3RCOONa (xà phòng) + glycerol.",
                    "• Omega-3, omega-6: thiết yếu cho cơ thể.",
                    "",
                    "=== CHƯƠNG 2: CARBOHYDRATE ===",
                    "• Glucose: tính khử → tráng gương (→ 2Ag), Cu₂O↓ đỏ; lên men → ethanol; + H₂ → sorbitol.",
                    "• Saccharose: không khử; thủy phân → Glc + Fru.",
                    "• Tinh bột + I₂ → xanh; cellulose + HNO₃/H₂SO₄ → trinitrate.",
                    "",
                    "=== CHƯƠNG 3: AMINE – AMINO ACID – PROTEIN ===",
                    "• Amine: tính bazơ. Aniline + Br₂ → tribromoaniline↓ (nhận biết).",
                    "• Amino acid: lưỡng tính. Chuỗi peptide = liên kết –CO–NH–.",
                    "• Protein: biuret → màu tím; biến tính bởi nhiệt, axit/bazơ mạnh, muối nặng.",
                    "",
                    "=== CHƯƠNG 4: POLYMER ===",
                    "• Trùng hợp: monomer có liên kết đôi/ba → polymer. PE, PVC, PP, PS.",
                    "• Trùng ngưng: tạo polymer + phân tử nhỏ. Nylon-6,6, Bakelite.",
                    "• Cao su: thiên nhiên (cis-isoprene), lưu hóa bằng S.",
                    "",
                    "=== CHƯƠNG 5: PIN ĐIỆN – ĐIỆN PHÂN ===",
                    "• Pin điện: hóa năng → điện năng. Anode: oxi hóa. Cathode: khử.",
                    "• Điện phân: điện năng → hóa năng. Cathode: khử ion; Anode trơ: oxi hóa anion.",
                    "• Faraday: m = MIt/(nF). F = 96500 C/mol.",
                    "",
                    "=== CHƯƠNG 6,7: KIM LOẠI ===",
                    "• Kim loại: tính khử, nhường e. Dãy điện hóa quyết định phản ứng.",
                    "• Ăn mòn điện hóa: 2 KL + tiếp xúc + dung dịch điện phân → KL hoạt động hơn bị ăn mòn.",
                    "• Na, K: tan trong H₂O → MOH + H₂. Na₂O₂ + CO₂ → Na₂CO₃ + O₂.",
                    "• Nước cứng: tạm thời (HCO₃⁻) đun sôi mất; vĩnh cửu (SO₄²⁻, Cl⁻) cần Na₂CO₃.",
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    hk2: {
      title: "LÝ THUYẾT HÓA HỌC 12 – HỌC KÌ 2",
      subtitle: "Bộ sách: Kết nối tri thức với cuộc sống",
      parts: [
        {
          id: "hk2_12_p1",
          label: "Phần 1/7: Đại cương kim loại (ôn tập)",
          chapters: [
            {
              title: "CHƯƠNG 6: ĐẠI CƯƠNG VỀ KIM LOẠI (ÔN TẬP VÀ NÂNG CAO)",
              sections: [
                {
                  heading: "Điều chế kim loại",
                  content: [
                    "Phương pháp thủy luyện (hydrometallurgy): dùng dung dịch, áp dụng cho kim loại đứng sau trong dãy điện hóa. Cu + Fe (đinh sắt) → Cu↓ từ CuSO₄.",
                    "Phương pháp nhiệt luyện (pyrometallurgy): dùng chất khử (C, CO, H₂, Al) khử oxide kim loại ở nhiệt độ cao.",
                    "  – Fe₂O₃ + 3CO → 2Fe + 3CO₂ (luyện gang/thép); CuO + H₂ → Cu + H₂O.",
                    "  – Thermite: Fe₂O₃ + 2Al → Al₂O₃ + 2Fe (hàn đường ray).",
                    "Phương pháp điện luyện (electrometallurgy): điện phân nóng chảy oxide, halide hoặc hydroxide. Dùng cho Na, K, Ca, Mg, Al.",
                    "  – 2Al₂O₃ (nóng chảy + cryolite) → 4Al + 3O₂ (điện phân, sản xuất nhôm).",
                    "  – 2NaCl (nóng chảy) → 2Na + Cl₂ (điện phân).",
                  ]
                },
                {
                  heading: "Hợp kim",
                  content: [
                    "Hợp kim: vật liệu gồm kim loại chính + thêm các nguyên tố khác (kim loại hoặc phi kim).",
                    "Tính chất hợp kim: thường khác so với kim loại thành phần (cứng hơn, bền hơn, hoặc chống ăn mòn tốt hơn).",
                    "Thép (Fe + C, 0,1–2,14% C): cứng hơn sắt nguyên chất. Thép hợp kim: thêm Cr, Ni, Mo...",
                    "Thép không gỉ (inox): Fe + Cr (≥12%) + Ni → chống ăn mòn tốt.",
                    "Gang (Fe + C, 2,14–6,67% C): giòn hơn thép, dùng đúc.",
                    "Đồng thau (Cu + Zn), Đồng thanh (Cu + Sn), Nhôm hợp kim (duralumin: Al + Cu + Mg + Mn).",
                    "Amalgam: hợp kim Hg (thủy ngân) với các kim loại khác.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_12_p2",
          label: "Phần 2/7: Nhóm IA và IIA (ôn tập) – Kim loại chuyển tiếp",
          chapters: [
            {
              title: "CHƯƠNG 7 & 8: KIM LOẠI NHÓM IA, IIA VÀ KIM LOẠI CHUYỂN TIẾP",
              sections: [
                {
                  heading: "Tóm tắt kim loại nhóm IA và IIA",
                  content: [
                    "Nhóm IA: Li, Na, K, Rb, Cs. ns¹, tính khử rất mạnh. Na và K nổ khi gặp nước.",
                    "Na₂O₂ + H₂O → NaOH + O₂; Na₂O₂ + CO₂ → Na₂CO₃ + O₂ (dùng trong bình dưỡng khí).",
                    "Nhóm IIA: Be, Mg, Ca, Sr, Ba. ns², tính khử mạnh, tăng dần từ Be đến Ba.",
                    "Ca(OH)₂ dùng nhận biết CO₂ (vẩn đục) và nhận biết SO₂, NH₃.",
                    "Độ cứng của nước: CaCO₃ tương đương (ppm hoặc mg/L).",
                    "Trao đổi ion zeolite: Ca²⁺, Mg²⁺ ↔ Na⁺ (làm mềm nước).",
                  ]
                },
                {
                  heading: "Kim loại chuyển tiếp dãy thứ nhất (Sc–Zn)",
                  content: [
                    "Cấu hình e: điền vào phân lớp 3d. Đặc điểm: nhiều số oxi hóa, tạo ion màu, xúc tác quan trọng.",
                    "Chromium (Cr): Z=24, [Ar]3d⁵4s¹. Số oxi hóa: +2, +3, +6. Thụ động trong HNO₃ đặc, H₂SO₄ đặc.",
                    "  – Cr₂O₇²⁻ (dichromate, da cam) ↔ CrO₄²⁻ (chromate, vàng) tùy pH.",
                    "  – Cr₂O₇²⁻ là chất oxi hóa mạnh trong môi trường axit.",
                    "Manganese (Mn): Z=25. Số oxi hóa phổ biến: +2, +4 (MnO₂), +7 (KMnO₄).",
                    "  – KMnO₄ (tím): chất oxi hóa mạnh. Trong môi trường axit → Mn²⁺ (không màu); trung tính → MnO₂↓ nâu; kiềm → MnO₄²⁻ (xanh).",
                    "Iron (Fe): Z=26. Số oxi hóa: +2, +3. Fe có từ tính.",
                    "  – Fe tác dụng HCl, H₂SO₄ loãng → Fe²⁺; với HNO₃/H₂SO₄ đặc → Fe³⁺ (trừ thụ động khi đặc nguội).",
                    "  – Fe²⁺ → Fe³⁺: bị oxi hóa; Fe³⁺ → Fe²⁺: bị khử.",
                    "  – Gỉ sắt: Fe₂O₃.nH₂O (ăn mòn điện hóa).",
                    "Copper (Cu): Z=29, [Ar]3d¹⁰4s¹. Số oxi hóa: +1, +2. Không tác dụng HCl, H₂SO₄ loãng.",
                    "  – Cu + 2H₂SO₄ đặc → CuSO₄ + SO₂ + 2H₂O; Cu + HNO₃ → Cu(NO₃)₂ + NO/NO₂.",
                    "  – Dung dịch CuSO₄: màu xanh. Cu(OH)₂ tan trong NH₃ tạo [Cu(NH₃)₄]²⁺ (xanh đậm).",
                    "Zinc (Zn): Z=30. Số oxi hóa: +2. Tác dụng NaOH (Zn lưỡng tính): Zn + 2NaOH → Na₂ZnO₂ + H₂.",
                    "  – ZnO, Zn(OH)₂ đều lưỡng tính.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_12_p3",
          label: "Phần 3/7: Nhôm và hợp chất",
          chapters: [
            {
              title: "CHƯƠNG: NHÔM VÀ HỢP CHẤT CỦA NHÔM",
              sections: [
                {
                  heading: "Bài: Nhôm (Al)",
                  content: [
                    "Al: Z=13, [Ne]3s²3p¹. Số oxi hóa: +3. Kim loại nhẹ (d = 2,7 g/cm³), dẫn điện tốt.",
                    "Nhôm có lớp oxit Al₂O₃ mỏng, bền → bảo vệ khỏi ăn mòn trong không khí ẩm.",
                    "Tính lưỡng tính của Al: tác dụng được với cả axit và bazơ.",
                    "2Al + 6HCl → 2AlCl₃ + 3H₂↑ (tác dụng axit).",
                    "2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂↑ (tác dụng bazơ).",
                    "Al thụ động trong HNO₃ đặc nguội và H₂SO₄ đặc nguội.",
                    "Al + O₂ → Al₂O₃ (cháy sáng trắng).",
                    "Phản ứng nhiệt nhôm (thermite): 2Al + Fe₂O₃ → Al₂O₃ + 2Fe (ΔH << 0, hàn đường ray).",
                    "Điều chế Al: điện phân Al₂O₃ nóng chảy (với cryolite Na₃AlF₆).",
                    "2Al₂O₃ (lỏng) → 4Al + 3O₂↑ (cathode: Al³⁺ + 3e → Al; anode: 2O²⁻ → O₂ + 4e).",
                    "Ứng dụng: hàng không (nhẹ), xây dựng, bao bì, dây điện.",
                  ]
                },
                {
                  heading: "Hợp chất của Nhôm",
                  content: [
                    "Al₂O₃ (alumina): oxide lưỡng tính. Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O; Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O.",
                    "Al(OH)₃: kết tủa trắng keo. Lưỡng tính:",
                    "  – Al(OH)₃ + 3HCl → AlCl₃ + 3H₂O (tính bazơ).",
                    "  – Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (tính axit).",
                    "Kết tủa Al(OH)₃: Al³⁺ + 3OH⁻ → Al(OH)₃↓; tan trong NaOH dư → NaAlO₂.",
                    "  – Nếu dùng NH₃ (bazơ yếu): chỉ tạo kết tủa Al(OH)₃, không tan trong NH₃ dư (dùng để nhận biết và tách Al³⁺).",
                    "AlCl₃ thủy phân: Al³⁺ + 3H₂O ⇌ Al(OH)₃ + 3H⁺ → dung dịch axit.",
                    "Phèn chua: KAl(SO₄)₂.12H₂O – làm trong nước, thuộc da, nhuộm vải.",
                    "Corundum (Al₂O₃): đá cứng. Ruby (Cr³⁺), Sapphire (Ti³⁺/Fe²⁺ trong Al₂O₃).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_12_p4",
          label: "Phần 4/7: Sắt và hợp chất",
          chapters: [
            {
              title: "CHƯƠNG: SẮT VÀ HỢP CHẤT CỦA SẮT",
              sections: [
                {
                  heading: "Bài: Sắt (Fe)",
                  content: [
                    "Fe: Z=26, [Ar]3d⁶4s². Số oxi hóa phổ biến: +2, +3. Có từ tính.",
                    "Fe + S → FeS (to); Fe + 2HCl → FeCl₂ + H₂ (HCl loãng, Fe→Fe²⁺).",
                    "Fe + 4HNO₃ loãng → Fe(NO₃)₃ + NO↑ + 2H₂O (Fe→Fe³⁺).",
                    "Fe + Fe(NO₃)₃ (dư, dư Fe) → Fe(NO₃)₂ (Fe đẩy Fe³⁺ về Fe²⁺).",
                    "Fe thụ động trong HNO₃ đặc nguội và H₂SO₄ đặc nguội.",
                    "2Fe + 3Cl₂ → 2FeCl₃ (Fe → Fe³⁺ với halogen).",
                    "Fe + 2FeCl₃ → 3FeCl₂ (Fe khử Fe³⁺ → Fe²⁺).",
                    "Fe + CuSO₄ → FeSO₄ + Cu (Fe đứng trước Cu trong dãy điện hóa).",
                  ]
                },
                {
                  heading: "Hợp chất của Sắt",
                  content: [
                    "Hợp chất Fe(II): FeO (đen), Fe(OH)₂ (trắng xanh), FeCl₂, FeSO₄...",
                    "  – Fe(OH)₂ dễ bị oxi hóa trong không khí: 4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃↓ nâu đỏ.",
                    "  – Fe²⁺ là chất khử trung bình: Fe²⁺ → Fe³⁺ + e.",
                    "Hợp chất Fe(III): Fe₂O₃ (đỏ/nâu), Fe(OH)₃ (nâu đỏ), FeCl₃, Fe₂(SO₄)₃...",
                    "  – Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O.",
                    "  – Fe(OH)₃ + 3HCl → FeCl₃ + 3H₂O.",
                    "  – FeCl₃ dư + Fe → 3FeCl₂ (Fe khử Fe³⁺).",
                    "  – FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl.",
                    "  – FeCl₃ + Cu → CuCl₂ + 2FeCl₂ (Fe³⁺ oxi hóa Cu).",
                    "Gỉ sắt: Fe₂O₃.nH₂O. Ăn mòn điện hóa: Fe(anode) + C(graphite) trong H₂O/O₂.",
                    "Sản xuất gang thép (lò cao): Fe₂O₃ + 3CO → 2Fe + 3CO₂ (gang 2-5% C).",
                    "Luyện thép: thổi O₂ vào gang lỏng để oxi hóa C, Si, Mn xuống mức thép (<2,14% C).",
                    "Nhận biết Fe²⁺: KMnO₄/H₂SO₄ mất màu; Fe³⁺: dùng KSCN → đỏ máu [Fe(SCN)]²⁺.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_12_p5",
          label: "Phần 5/7: Kim loại chuyển tiếp quan trọng",
          chapters: [
            {
              title: "KIM LOẠI CHUYỂN TIẾP – PHỨC CHẤT",
              sections: [
                {
                  heading: "Đại cương về kim loại chuyển tiếp dãy thứ nhất",
                  content: [
                    "Vị trí: nhóm 3–12 trong bảng tuần hoàn (Sc đến Zn cho dãy thứ nhất).",
                    "Đặc điểm chung: điền e vào phân lớp d; nhiều số oxi hóa; tạo hợp chất có màu; hoạt động xúc tác.",
                    "Màu sắc ion trong dung dịch: Cu²⁺ (xanh), Fe³⁺ (vàng nâu), Fe²⁺ (xanh nhạt), Co²⁺ (hồng), Ni²⁺ (xanh lá), Cr³⁺ (xanh lá/tím), MnO₄⁻ (tím).",
                    "Xúc tác quan trọng: Fe (Haber – tổng hợp NH₃), Ni/Pt (hydro hóa), V₂O₅ (sản xuất H₂SO₄), MnO₂ (phân hủy H₂O₂), Pt/Pd (khử xúc tác xe).",
                  ]
                },
                {
                  heading: "Sơ lược về phức chất",
                  content: [
                    "Phức chất (coordination compound): gồm ion/nguyên tử trung tâm (M) + phối tử (ligand, L).",
                    "Phối tử: anion hoặc phân tử trung hòa có cặp e lẻ (nhường cho M). Ví dụ: Cl⁻, NH₃, H₂O, CN⁻, CO.",
                    "Số phối trí: số cặp e nhận bởi M từ các phối tử.",
                    "Phức chất thông thường: [Cu(NH₃)₄]²⁺ (xanh đậm), [Fe(CN)₆]³⁻, [Ag(NH₃)₂]⁺.",
                    "Ứng dụng phức chất: mạ điện, xử lý ảnh, y tế (cisplatin chống ung thư), phân tích hóa học.",
                    "Danh pháp: tên phối tử (alphabetically) + tên kim loại (số oxi hóa La Mã).",
                    "[Cu(NH₃)₄]²⁺: tetraamminecopper(II) ion.",
                    "[Ag(NH₃)₂]⁺: diamminesilver(I) ion (thuốc thử Tollens, dùng tráng gương).",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_12_p6",
          label: "Phần 6/7: Ôn tập thi tốt nghiệp THPT",
          chapters: [
            {
              title: "ÔN TẬP THI TỐT NGHIỆP THPT – HÓA HỌC 12",
              sections: [
                {
                  heading: "Hóa hữu cơ – Tổng kết",
                  content: [
                    "Phân biệt các nhóm chất hữu cơ bằng thuốc thử:",
                    "  – Glucose, aldehyde: tráng gương (AgNO₃/NH₃ → Ag↓), Cu(OH)₂ (→ Cu₂O↓ đỏ).",
                    "  – Saccharose, tinh bột: thủy phân rồi tráng gương (tinh bột).",
                    "  – Tinh bột: + I₂ → xanh.",
                    "  – Protein: biuret → tím; xanthoproteic → vàng.",
                    "  – Aniline: + Br₂ → kết tủa trắng.",
                    "  – Alcohol, amino acid đa chức: + Cu(OH)₂ → phức xanh.",
                    "  – Axit: + Na₂CO₃ → CO₂ bay lên (phenol không tác dụng).",
                    "  – Alkene, alkyne: mất màu Br₂ (CCl₄).",
                    "  – Alkyne đầu mạch (RC≡CH): + AgNO₃/NH₃ → kết tủa vàng.",
                    "Bảng số liên kết π và nhóm chức quan trọng để tính khối lượng phân tử.",
                    "Các phản ứng trùng hợp và trùng ngưng tạo polymer thường gặp.",
                  ]
                },
                {
                  heading: "Hóa vô cơ – Tổng kết",
                  content: [
                    "Kim loại và phản ứng quan trọng:",
                    "  – Dãy điện hóa: Li > K > Ba > Ca > Na > Mg > Al > Mn > Zn > Fe > Ni > Sn > Pb > (H) > Cu > Hg > Ag > Pt > Au.",
                    "  – Al và Zn: tác dụng được cả axit lẫn bazơ (lưỡng tính).",
                    "  – Fe + HCl/H₂SO₄ loãng → Fe²⁺; Fe + HNO₃/Cl₂ → Fe³⁺.",
                    "  – Cu + Fe³⁺ → Cu²⁺ + Fe²⁺.",
                    "Hợp chất cần nhớ:",
                    "  – NaOH + HCO₃⁻ → CO₃²⁻ + H₂O; NaOH + Al³⁺ dư → NaAlO₂.",
                    "  – BaCl₂ + SO₄²⁻ → BaSO₄↓; AgNO₃ + Cl⁻ → AgCl↓; AgNO₃ + PO₄³⁻ → Ag₃PO₄↓ vàng.",
                    "  – KMnO₄ (tím) + axit + chất khử → Mn²⁺ (không màu).",
                    "  – KMnO₄ + Fe²⁺ (H₂SO₄) → Fe³⁺ + Mn²⁺ + K₂SO₄ + H₂O.",
                    "Các oxide axit: SO₂, SO₃, NO₂, CO₂, P₂O₅, N₂O₅, Cl₂O₇...",
                    "Oxide lưỡng tính: Al₂O₃, ZnO, Cr₂O₃, SnO, PbO.",
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "hk2_12_p7",
          label: "Phần 7/7: Ôn tập tổng hợp HK2 lớp 12",
          chapters: [
            {
              title: "ÔN TẬP TỔNG HỢP HỌC KÌ 2 – HÓA HỌC 12",
              sections: [
                {
                  heading: "Bảng tóm tắt kiến thức trọng tâm HK2 Hóa 12",
                  content: [
                    "=== ĐẠI CƯƠNG KIM LOẠI ===",
                    "• Điều chế: thủy luyện (M đứng sau), nhiệt luyện (CO, H₂, Al khử oxide), điện luyện (Na, K, Ca, Mg, Al).",
                    "• Hợp kim: thay đổi tính chất KL. Thép = Fe + <2,14%C; Gang = Fe + 2,14-6,67%C.",
                    "• Ăn mòn điện hóa: 2 KL + tiếp xúc + chất điện phân → KL hoạt động hơn bị ăn mòn trước.",
                    "",
                    "=== NHÔM VÀ SẮT ===",
                    "• Al: lưỡng tính (tác dụng axit và bazơ NaOH). Al thụ động HNO₃ đặc nguội, H₂SO₄ đặc nguội.",
                    "• Al(OH)₃: lưỡng tính; NH₃ chỉ tạo kết tủa, không tan tiếp.",
                    "• Fe: Fe²⁺ (HCl, H₂SO₄ loãng) và Fe³⁺ (HNO₃, Cl₂, H₂SO₄ đặc nóng).",
                    "• Nhận biết Fe³⁺: KSCN → đỏ máu; Fe²⁺: KMnO₄/H₂SO₄ → mất màu.",
                    "",
                    "=== KIM LOẠI CHUYỂN TIẾP ===",
                    "• Cu: không tác dụng HCl, H₂SO₄ loãng; tác dụng HNO₃, H₂SO₄ đặc nóng.",
                    "• Cr: +2, +3, +6. K₂Cr₂O₇ (da cam, chất oxi hóa mạnh trong axit); CrO₄²⁻ (vàng, kiềm).",
                    "• Mn: KMnO₄ (tím, oxi hóa mạnh). MnO₂ xúc tác phân hủy H₂O₂.",
                    "• Phức chất: M + phối tử (NH₃, CN⁻, H₂O...). [Cu(NH₃)₄]²⁺ xanh đậm; [Ag(NH₃)₂]⁺ dùng tráng gương.",
                    "",
                    "=== ÔN TẬP THI TỐT NGHIỆP ===",
                    "• Dãy điện hóa: quyết định chiều phản ứng kim loại.",
                    "• Nhận biết: tráng gương (aldehyde, glucose), Cu₂O↓ đỏ, Br₂ mất màu (alkene/alkyne), AgCl↓ (Cl⁻)...",
                    "• Faraday: m = MIt/(nF) dùng tính khối lượng chất ở điện cực.",
                    "• Điện phân dung dịch CuSO₄: cathode Cu↓; anode O₂ (trơ).",
                    "• Pin điện: Ecell = Ecathode – Eanode (dương → phản ứng tự xảy ra).",
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
};

module.exports = chemistryContent;
