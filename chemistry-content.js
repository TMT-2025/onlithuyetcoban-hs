// Helper tổ chức dữ liệu theo từng CHƯƠNG hoàn chỉnh cho 3 khối (Lớp 10, 11, 12 - HK1 & HK2)
// Mỗi chương gom toàn bộ bài học, ví dụ, câu hỏi và hình minh họa bám sát SGK Kết nối tri thức

const g10_hk1 = require('./data/grade10_hk1');
const g10_hk2 = require('./data/grade10_hk2');
const g11_hk1 = require('./data/grade11_hk1');
const g11_hk2 = require('./data/grade11_hk2');
const g12_hk1 = require('./data/grade12_hk1');
const g12_hk2 = require('./data/grade12_hk2');

function combineParts(rawParts, indices) {
  return function(H) {
    const combined = [];
    indices.forEach(idx => {
      if (rawParts[idx] && typeof rawParts[idx].builder === 'function') {
        combined.push(...rawParts[idx].builder(H));
      }
    });
    return combined;
  };
}

// ====================================================================
// KHỐI 10
// ====================================================================
const grade10_chapters = {
  hk1: {
    title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 10 – HỌC KÌ 1",
    subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Nhập môn, Cấu tạo nguyên tử, Bảng tuần hoàn, Liên kết hoá học & Oxi hoá – khử",
    chapters: [
      {
        id: "g10_c1",
        chapterNumber: 1,
        title: "Chương 1: Cấu tạo nguyên tử (Bài 1, 2, 3, 4 kèm Mở đầu)",
        desc: "Mở đầu nhập môn hóa học, thành phần nguyên tử (p, n, e), kích thước khối lượng (amu), đồng vị, nguyên tử khối trung bình, orbital nguyên tử (AO) & cấu hình electron.",
        builder: combineParts(g10_hk1.parts, [0, 1])
      },
      {
        id: "g10_c2",
        chapterNumber: 2,
        title: "Chương 2: Bảng tuần hoàn các nguyên tố hoá học (Bài 5, 6, 7, 8, 9)",
        desc: "Nguyên tắc sắp xếp BTH, chu kì, nhóm A, B, các khối s, p, d, f; quy luật biến đổi bán kính, độ âm điện, tính kim loại/phi kim; tính acid/base của oxide và hydroxide; Định luật tuần hoàn.",
        builder: combineParts(g10_hk1.parts, [2, 3])
      },
      {
        id: "g10_c3",
        chapterNumber: 3,
        title: "Chương 3: Liên kết hoá học (Bài 10, 11, 12, 13, 14)",
        desc: "Quy tắc octet, liên kết ion, tinh thể ion; liên kết cộng hoá trị (cho–nhận, phân cực, không phân cực), liên kết hydrogen và tương tác van der Waals.",
        builder: combineParts(g10_hk1.parts, [4, 5])
      },
      {
        id: "g10_c4",
        chapterNumber: 4,
        title: "Chương 4: Phản ứng oxi hoá – khử (Bài 15, 16)",
        desc: "Quy tắc xác định số oxi hoá, chất khử, chất oxi hoá, quá trình oxi hoá/khử; phương pháp thăng bằng electron và ý nghĩa thực tiễn to lớn trong đời sống.",
        builder: combineParts(g10_hk1.parts, [6])
      }
    ]
  },
  hk2: {
    title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 10 – HỌC KÌ 2",
    subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Năng lượng hoá học, Tốc độ phản ứng & Nhóm Halogen (VIIA)",
    chapters: [
      {
        id: "g10_c5",
        chapterNumber: 5,
        title: "Chương 5: Năng lượng hóa học (Bài 17, 18)",
        desc: "Phản ứng toả nhiệt, thu nhiệt, biến thiên enthalpy chuẩn (ΔrHo298), nhiệt tạo thành chuẩn (ΔfHo298); tính biến thiên enthalpy theo nhiệt tạo thành và năng lượng liên kết (Eb).",
        builder: combineParts(g10_hk2.parts, [0, 1])
      },
      {
        id: "g10_c6",
        chapterNumber: 6,
        title: "Chương 6: Tốc độ phản ứng hóa học (Bài 19, 20)",
        desc: "Khái niệm tốc độ phản ứng, định luật tác dụng khối lượng, hằng số tốc độ k; 5 yếu tố ảnh hưởng (nồng độ, áp suất, nhiệt độ - hệ số Van't Hoff, diện tích tiếp xúc, chất xúc tác).",
        builder: combineParts(g10_hk2.parts, [2])
      },
      {
        id: "g10_c7",
        chapterNumber: 7,
        title: "Chương 7: Nhóm VIIA – Nguyên tố Halogen (Bài 21, 22, 23)",
        desc: "Đặc điểm cấu tạo phân tử halogen (F2, Cl2, Br2, I2), tính chất vật lí và tính oxi hoá mạnh; hydrogen halide, acid HX, tính khử của ion halide; hợp chất chứa oxygen của chlorine.",
        builder: combineParts(g10_hk2.parts, [3])
      }
    ]
  }
};

// ====================================================================
// KHỐI 11
// ====================================================================
const grade11_chapters = {
  hk1: {
    title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 11 – HỌC KÌ 1",
    subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Cân bằng hoá học, Nitrogen - Sulfur, Đại cương hoá hữu cơ & Toàn bộ Hydrocarbon",
    chapters: [
      {
        id: "g11_c1",
        chapterNumber: 1,
        title: "Chương 1: Cân bằng hoá học (Bài 1, 2, 3)",
        desc: "Phản ứng thuận nghịch, cân bằng động, hằng số cân bằng Kc; nguyên lí Le Chatelier; sự điện li trong dung dịch nước, thuyết Brønsted–Lowry, thang pH, chất chỉ thị và chuẩn độ acid–base.",
        builder: combineParts(g11_hk1.parts, [0, 1])
      },
      {
        id: "g11_c2",
        chapterNumber: 2,
        title: "Chương 2: Nitrogen – Sulfur (Bài 4, 5, 6, 7, 8, 9)",
        desc: "Đơn chất N2, ammonia NH3, muối ammonium; các oxide NOx, acid HNO3 và hiện tượng phú dưỡng; đơn chất sulfur, SO2, sulfuric acid H2SO4, muối sulfate và mưa acid.",
        builder: combineParts(g11_hk1.parts, [2, 3])
      },
      {
        id: "g11_c3",
        chapterNumber: 3,
        title: "Chương 3: Đại cương về hoá học hữu cơ (Bài 10, 11, 12, 13)",
        desc: "Đặc điểm hợp chất hữu cơ, nhóm chức; các phương pháp tách biệt và tinh chế (chưng cất, chiết, kết tinh, sắc kí); lập CTPT qua phổ khối lượng (MS); thuyết cấu tạo, đồng phân và danh pháp.",
        builder: combineParts(g11_hk1.parts, [4])
      },
      {
        id: "g11_c4",
        chapterNumber: 4,
        title: "Chương 4: Hydrocarbon (Bài 14, 15, 16, 17, 18)",
        desc: "Toàn diện về hydrocarbon: Alkane (phản ứng thế halogen, cracking); Alkene & Alkyne (cộng Br2, HX theo Markovnikov, trùng hợp, phản ứng alkyne-1-yne với AgNO3/NH3); Arene (benzen, toluene, thế nhân thơm, oxi hoá nhánh).",
        builder: combineParts(g11_hk1.parts, [5, 6])
      }
    ]
  },
  hk2: {
    title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 11 – HỌC KÌ 2",
    subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Dẫn xuất Halogen, Alcohol, Phenol, Hợp chất Carbonyl & Carboxylic Acid",
    chapters: [
      {
        id: "g11_c5",
        chapterNumber: 5,
        title: "Chương 5: Dẫn xuất Halogen – Alcohol – Phenol (Bài 19, 20, 21, 22)",
        desc: "Dẫn xuất halogen (phản ứng thế nucleophile, quy tắc tách Zaitsev); Alcohol (liên kết hydrogen, phản ứng với Na, CuO, tách nước tạo alkene/ether); Phenol (tính acid yếu, ảnh hưởng qua lại vòng thơm, thế brom 2,4,6-tribromophenol).",
        builder: combineParts(g11_hk2.parts, [0, 1, 2])
      },
      {
        id: "g11_c6",
        chapterNumber: 6,
        title: "Chương 6: Hợp chất Carbonyl – Carboxylic Acid (Bài 23, 24, 25)",
        desc: "Aldehyde & Ketone (nhóm C=O, phản ứng tráng bạc Tollens, tạo kết tủa Cu2O với Cu(OH)2/NaOH, phản ứng iodoform); Carboxylic acid (tính acid, phản ứng ester hoá thuận nghịch) & Tổng kết ôn tập HK2.",
        builder: combineParts(g11_hk2.parts, [3, 4])
      }
    ]
  }
};

// ====================================================================
// KHỐI 12
// ====================================================================
const grade12_chapters = {
  hk1: {
    title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 12 – HỌC KÌ 1",
    subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Ester - Lipid, Carbohydrate, Hợp chất chứa N, Polymer, Pin điện & Đại cương Kim loại",
    chapters: [
      {
        id: "g12_c1",
        chapterNumber: 1,
        title: "Chương 1: Ester – Lipid. Xà phòng và chất giặt rửa (Bài 1, 2, 3)",
        desc: "Khái niệm ester, phản ứng thuỷ phân (acid và xà phòng hoá base); chất béo (triglyceride no, không no), chỉ số xà phòng; cấu trúc mixen, cơ chế tẩy rửa của xà phòng.",
        builder: combineParts(g12_hk1.parts, [0])
      },
      {
        id: "g12_c2",
        chapterNumber: 2,
        title: "Chương 2: Carbohydrate (Bài 4, 5, 6, 7)",
        desc: "Phân loại monosaccharide, disaccharide, polysaccharide; cấu trúc mạch hở và mạch vòng của Glucose, Fructose; Saccharose, Maltose; Tinh bột (amylose, amylopectin) và Cellulose.",
        builder: combineParts(g12_hk1.parts, [1])
      },
      {
        id: "g12_c3",
        chapterNumber: 3,
        title: "Chương 3: Hợp chất chứa Nitrogen (Bài 8, 9, 10, 11)",
        desc: "Amine (bậc amine, tính base, phản ứng anilin với Br2); Amino acid (lưỡng tính, ion lưỡng cực); Peptide (liên kết peptide, phản ứng màu biuret); Protein và Enzyme.",
        builder: combineParts(g12_hk1.parts, [2])
      },
      {
        id: "g12_c4",
        chapterNumber: 4,
        title: "Chương 4: Polymer (Bài 12, 13, 14)",
        desc: "Đại cương polymer, phản ứng trùng hợp, trùng ngưng; vật liệu polymer: chất dẻo (PE, PP, PVC, PS, Plexiglas), tơ (thiên nhiên, hoá học), cao su (buna, buna-S, buna-N) và keo dán.",
        builder: combineParts(g12_hk1.parts, [3])
      },
      {
        id: "g12_c5",
        chapterNumber: 5,
        title: "Chương 5: Pin điện và Điện phân (Bài 15, 16, 17)",
        desc: "Cặp oxi hoá - khử, thế điện cực chuẩn (Eo), pin Galvani Daniell; bình điện phân dung dịch và nóng chảy (quy tắc anode, cathode, định luật Faraday) & ứng dụng mạ điện, tinh luyện.",
        builder: combineParts(g12_hk1.parts, [4])
      },
      {
        id: "g12_c6",
        chapterNumber: 6,
        title: "Chương 6: Đại cương về kim loại (Bài 18, 19, 20, 21, 22, 23)",
        desc: "Cấu tạo tinh thể kim loại (lập phương tâm khối, tâm diện, lục phương), tính chất vật lí chung (dẻo, dẫn điện, dẫn nhiệt, ánh kim); tính chất hoá học; tách kim loại (nhiệt luyện, thuỷ luyện, điện phân); hợp kim, ăn mòn kim loại (hoá học, điện hoá) và phương pháp bảo vệ.",
        builder: combineParts(g12_hk1.parts, [5, 6])
      }
    ]
  },
  hk2: {
    title: "TÀI LIỆU TÓM TẮT LÝ THUYẾT TRỌNG TÂM HÓA HỌC 12 – HỌC KÌ 2",
    subtitle: "Bộ sách Kết nối tri thức với cuộc sống – Kim loại kiềm, kiềm thổ, Nước cứng, Kim loại chuyển tiếp dãy thứ nhất & Phức chất",
    chapters: [
      {
        id: "g12_c7",
        chapterNumber: 7,
        title: "Chương 7: Nguyên tố nhóm IA và nhóm IIA – Nước cứng (Bài 24, 25, 26)",
        desc: "Kim loại nhóm IA (Na, K), nhóm IIA (Mg, Ca, Ba); hợp chất quan trọng (NaOH, Na2CO3, NaHCO3, Ca(OH)2, CaCO3); khái niệm nước cứng (tạm thời, vĩnh cửu, toàn phần), tác hại và phương pháp làm mềm nước cứng.",
        builder: combineParts(g12_hk2.parts, [0, 1])
      },
      {
        id: "g12_c8",
        chapterNumber: 8,
        title: "Chương 8: Kim loại chuyển tiếp dãy thứ nhất – Sơ lược về Phức chất (Bài 27, 28, 29, 30)",
        desc: "Cấu hình electron nguyên tử nguyên tố d (Sc đến Zn), các trạng thái oxi hoá đặc trưng; phức chất: nguyên tử trung tâm, ligand, số phối trí, dạng hình học, đồng phân & sự hình thành phức chất trong dung dịch; Tổng ôn thi tốt nghiệp THPT.",
        builder: combineParts(g12_hk2.parts, [2, 3])
      }
    ]
  }
};

// Module export chuẩn
module.exports = {
  10: {
    hk1: {
      title: grade10_chapters.hk1.title,
      subtitle: grade10_chapters.hk1.subtitle,
      parts: grade10_chapters.hk1.chapters.map(c => ({
        id: c.id,
        label: c.title,
        desc: c.desc,
        builder: c.builder
      }))
    },
    hk2: {
      title: grade10_chapters.hk2.title,
      subtitle: grade10_chapters.hk2.subtitle,
      parts: grade10_chapters.hk2.chapters.map(c => ({
        id: c.id,
        label: c.title,
        desc: c.desc,
        builder: c.builder
      }))
    }
  },
  11: {
    hk1: {
      title: grade11_chapters.hk1.title,
      subtitle: grade11_chapters.hk1.subtitle,
      parts: grade11_chapters.hk1.chapters.map(c => ({
        id: c.id,
        label: c.title,
        desc: c.desc,
        builder: c.builder
      }))
    },
    hk2: {
      title: grade11_chapters.hk2.title,
      subtitle: grade11_chapters.hk2.subtitle,
      parts: grade11_chapters.hk2.chapters.map(c => ({
        id: c.id,
        label: c.title,
        desc: c.desc,
        builder: c.builder
      }))
    }
  },
  12: {
    hk1: {
      title: grade12_chapters.hk1.title,
      subtitle: grade12_chapters.hk1.subtitle,
      parts: grade12_chapters.hk1.chapters.map(c => ({
        id: c.id,
        label: c.title,
        desc: c.desc,
        builder: c.builder
      }))
    },
    hk2: {
      title: grade12_chapters.hk2.title,
      subtitle: grade12_chapters.hk2.subtitle,
      parts: grade12_chapters.hk2.chapters.map(c => ({
        id: c.id,
        label: c.title,
        desc: c.desc,
        builder: c.builder
      }))
    }
  }
};
