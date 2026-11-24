export type Doc = {
  code: string;
  date: string;
  size: string;
  title: string;
  desc: string;
  year: 2024 | 2025 | 2026;
  /** Đường dẫn file PDF thật (vd: "/docs/bc-01.pdf"). Để trống nếu chưa có. */
  file?: string;
};

export type Category = { key: string; icon: string; label: string; title: string; docs: Doc[] };

export const CATEGORIES: Category[] = [
  {
    key: "chuan-dau-ra", icon: "rule", label: "1. Chuẩn đầu ra & Cam kết", title: "Cam kết chất lượng & chuẩn đầu ra đào tạo",
    docs: [
      { code: "BC-01/IES-2025", date: "15/01/2026", size: "2.4 MB", year: 2026, title: "Báo cáo ba công khai cơ sở giáo dục nghề nghiệp năm học 2025 - 2026", desc: "Tổng hợp chỉ tiêu, cơ sở vật chất, đội ngũ giáo viên và kết quả tài chính theo quy định." },
      { code: "CĐR-06/IES-2025", date: "10/12/2025", size: "4.1 MB", year: 2025, title: "Chuẩn đầu ra 6 ngành đào tạo trọng điểm", desc: "Khung năng lực thực hành nghề nghiệp, ngoại ngữ và kỹ năng mềm sinh viên phải đạt khi tốt nghiệp." },
      { code: "CK-VL/IES-2025", date: "05/11/2025", size: "1.8 MB", year: 2025, title: "Cam kết chuẩn đào tạo và bảo đảm việc làm cho sinh viên tốt nghiệp năm 2025", desc: "Văn bản cam kết giữa nhà trường và doanh nghiệp về tiếp nhận sinh viên đạt chuẩn vào thực tập." },
      { code: "CTĐT-THCS/IES", date: "20/09/2024", size: "3.5 MB", year: 2024, title: "Khung chương trình đào tạo tích hợp 70% thực hành hệ Trung cấp chính quy", desc: "Cấu trúc học phần giảm lý thuyết, tăng thực hành trên phòng máy và xưởng thực hành." },
    ],
  },
  {
    key: "co-so-vat-chat", icon: "apartment", label: "2. Cơ sở vật chất & Nhà giáo", title: "Công khai cơ sở vật chất & đội ngũ nhà giáo",
    docs: [
      { code: "CSVC-01/IES-2026", date: "10/01/2026", size: "2.0 MB", year: 2026, title: "Danh mục phòng học, phòng thực hành và thiết bị đào tạo", desc: "Thống kê diện tích, số phòng máy và trang thiết bị phục vụ giảng dạy." },
      { code: "NG-02/IES-2025", date: "20/10/2025", size: "1.6 MB", year: 2025, title: "Thống kê đội ngũ nhà giáo cơ hữu và thỉnh giảng", desc: "Trình độ, chuyên môn và tỷ lệ giáo viên trên học sinh." },
      { code: "NG-01/IES-2024", date: "18/10/2024", size: "1.5 MB", year: 2024, title: "Thống kê đội ngũ nhà giáo năm 2024", desc: "Số liệu nhà giáo theo từng ngành đào tạo." },
    ],
  },
  {
    key: "tai-chinh", icon: "payments", label: "3. Tài chính & Học phí NĐ 81", title: "Công khai tài chính & học phí theo Nghị định 81",
    docs: [
      { code: "TC-01/IES-2026", date: "05/01/2026", size: "1.2 MB", year: 2026, title: "Biểu mức thu học phí năm học 2026 - 2027", desc: "Mức học phí từng ngành, hỗ trợ theo Nghị định 81/2021/NĐ-CP." },
      { code: "TC-02/IES-2025", date: "30/12/2025", size: "1.9 MB", year: 2025, title: "Báo cáo tài chính năm 2025", desc: "Thu chi tài chính của nhà trường trong năm." },
      { code: "TC-03/IES-2025", date: "01/09/2025", size: "0.9 MB", year: 2025, title: "Chính sách miễn giảm học phí và học bổng", desc: "Đối tượng, điều kiện và quy trình được miễn giảm." },
      { code: "TC-04/IES-2024", date: "30/12/2024", size: "1.8 MB", year: 2024, title: "Báo cáo tài chính năm 2024", desc: "Thu chi tài chính của nhà trường trong năm." },
      { code: "TC-05/IES-2024", date: "01/09/2024", size: "0.8 MB", year: 2024, title: "Biểu mức thu học phí năm học 2024 - 2025", desc: "Mức học phí và các khoản thu theo quy định." },
    ],
  },
  {
    key: "tuyen-sinh", icon: "how_to_reg", label: "4. Kết quả tuyển sinh hàng năm", title: "Kết quả tuyển sinh hàng năm",
    docs: [
      { code: "TS-01/IES-2026", date: "20/02/2026", size: "1.1 MB", year: 2026, title: "Thông báo chỉ tiêu và phương thức tuyển sinh năm 2026", desc: "Chỉ tiêu theo ngành, điều kiện và hình thức xét tuyển." },
      { code: "TS-02/IES-2025", date: "15/09/2025", size: "1.3 MB", year: 2025, title: "Báo cáo kết quả tuyển sinh năm 2025", desc: "Số lượng nhập học theo từng ngành." },
      { code: "TS-03/IES-2024", date: "15/09/2024", size: "1.2 MB", year: 2024, title: "Báo cáo kết quả tuyển sinh năm 2024", desc: "Số lượng nhập học theo từng ngành." },
    ],
  },
  {
    key: "viec-lam", icon: "work", label: "5. Khảo sát việc làm ra trường", title: "Khảo sát việc làm sinh viên ra trường",
    docs: [
      { code: "VL-01/IES-2026", date: "10/02/2026", size: "2.2 MB", year: 2026, title: "Kết quả khảo sát việc làm sau 6 tháng tốt nghiệp (khóa 2025)", desc: "Tỷ lệ có việc làm, đúng ngành và học liên thông." },
      { code: "VL-02/IES-2025", date: "10/02/2025", size: "2.0 MB", year: 2025, title: "Kết quả khảo sát việc làm khóa 2024", desc: "Tỷ lệ có việc làm và mức thu nhập khởi điểm." },
      { code: "VL-03/IES-2025", date: "01/06/2025", size: "1.4 MB", year: 2025, title: "Báo cáo đánh giá của doanh nghiệp về sinh viên thực tập", desc: "Phản hồi từ doanh nghiệp đối tác." },
      { code: "VL-04/IES-2024", date: "10/02/2024", size: "1.9 MB", year: 2024, title: "Kết quả khảo sát việc làm khóa 2023", desc: "Tỷ lệ có việc làm và học liên thông." },
    ],
  },
];
