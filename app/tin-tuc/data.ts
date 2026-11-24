export type NewsItem = {
  id: string;
  category: "tuyensinh" | "hoctap" | "doanhnghiep" | "doisong";
  categoryLabel: string;
  img: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
};

export const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "tuyensinh", label: "Thông báo tuyển sinh" },
  { key: "hoctap", label: "Hoạt động học tập" },
  { key: "doanhnghiep", label: "Hợp tác doanh nghiệp" },
  { key: "doisong", label: "Đời sống sinh viên" },
] as const;

export const NEWS: NewsItem[] = [
  {
    id: "tb-tuyen-sinh-dot-1", category: "tuyensinh", categoryLabel: "Tuyển sinh 2026",
    img: "/images/counseling.png", date: "24/02/2026", author: "Ban Tuyển sinh",
    title: "Thông báo tuyển sinh Trung cấp chính quy đợt 1 năm 2026",
    excerpt: "Chi tiết chỉ tiêu, điều kiện xét tuyển học bạ THCS không thi tuyển, ưu đãi miễn giảm học phí theo quy định và hướng dẫn nộp hồ sơ.",
  },
  {
    id: "job-fair-2026", category: "doanhnghiep", categoryLabel: "Hợp tác doanh nghiệp",
    img: "/images/campus.png", date: "18/02/2026", author: "Trung tâm Việc làm",
    title: "Ngày hội việc làm Job Fair 2026 kết nối 50+ doanh nghiệp đối tác",
    excerpt: "Cơ hội thực tập có lương và tuyển dụng trực tiếp cho sinh viên các ngành CNTT, Thiết kế đồ họa và Kế toán doanh nghiệp.",
  },
  {
    id: "song-bang-khai-giang", category: "hoctap", categoryLabel: "Hoạt động học tập",
    img: "/images/lab.png", date: "10/02/2026", author: "Phòng Đào tạo",
    title: "Khai giảng khóa mới chương trình Song bằng THPT & Nghề",
    excerpt: "Hoàn tất bằng tốt nghiệp THPT song song bằng Trung cấp nghề sau 3 năm, sẵn sàng bước vào thị trường lao động.",
  },
  {
    id: "sang-tao-noi-dung", category: "doisong", categoryLabel: "Đời sống sinh viên",
    img: "/images/design.png", date: "03/02/2026", author: "Đoàn Thanh niên",
    title: "Sinh viên ngành Thiết kế đồ họa IES đạt giải sáng tạo nội dung số",
    excerpt: "Dự án truyền thông tương tác của nhóm sinh viên khóa K18 vượt qua hơn 40 dự án tại Hội thi Sáng tạo Trẻ thành phố.",
  },
  {
    id: "tham-quan-thuc-te", category: "hoctap", categoryLabel: "Hoạt động học tập",
    img: "/images/studio.png", date: "28/01/2026", author: "Khoa CNTT",
    title: "Chuyến tham quan thực tế tại trung tâm dữ liệu và phần mềm",
    excerpt: "Trải nghiệm môi trường doanh nghiệp tại Công viên Phần mềm Quang Trung, tiếp cận quy trình vận hành hạ tầng Cloud và DevOps.",
  },
  {
    id: "chinh-sach-hoc-phi", category: "tuyensinh", categoryLabel: "Thông báo chính sách",
    img: "/images/diploma.png", date: "15/01/2026", author: "Phòng Kế toán",
    title: "Chính sách miễn giảm học phí học nghề theo Nghị định hiện hành",
    excerpt: "Học sinh tốt nghiệp THCS đi học nghề được ngân sách nhà nước hỗ trợ học phí nghề theo quy định hiện hành.",
  },
];
