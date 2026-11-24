// Nguồn duy nhất cho 6 ngành: dùng cho thẻ ngành, khối "Ngành nào hợp với bạn?" và form.
// Tên ngành (name) là giá trị gửi vào cột leads.major, giữ ổn định.
export type Major = {
  id: string;
  name: string;
  icon: string;
  desc: string;
  img: string;
  // Các sở thích map tới ngành này, dùng cho khối "Ngành nào hợp với bạn?".
  interests: string[];
};

export const MAJORS: Major[] = [
  {
    id: "cntt",
    name: "Công nghệ thông tin",
    icon: "terminal",
    desc: "Lập trình ứng dụng, phát triển phần mềm và xây dựng website thực chiến.",
    img: "/images/lab.png",
    interests: ["lap-trinh", "bao-mat"],
  },
  {
    id: "thiet-ke",
    name: "Thiết kế đồ họa",
    icon: "palette",
    desc: "Sáng tạo ấn phẩm truyền thông, đồ họa quảng cáo và thiết kế UI/UX.",
    img: "/images/design.png",
    interests: ["sang-tao"],
  },
  {
    id: "mang",
    name: "Quản trị mạng & An ninh mạng",
    icon: "dns",
    desc: "Vận hành hệ thống máy chủ, đám mây và bảo vệ an ninh mạng.",
    img: "/images/campus.png",
    interests: ["bao-mat"],
  },
  {
    id: "ke-toan",
    name: "Kế toán doanh nghiệp số",
    icon: "receipt_long",
    desc: "Thành thạo chứng từ kế toán, kê khai thuế số và phần mềm MISA.",
    img: "/images/counseling.png",
    interests: ["tai-chinh"],
  },
  {
    id: "quan-tri",
    name: "Quản trị kinh doanh & Dịch vụ",
    icon: "business_center",
    desc: "Kỹ năng quản lý bán hàng, dịch vụ khách hàng và điều hành dự án.",
    img: "/images/counseling.png",
    interests: ["quan-tri", "ban-hang"],
  },
  {
    id: "tmdt",
    name: "Thương mại điện tử",
    icon: "shopping_cart",
    desc: "Kinh doanh online, livestream bán hàng và vận hành sàn Shopee, TikTok.",
    img: "/images/ecommerce.png",
    interests: ["ban-hang"],
  },
];

// Sở thích hiển thị trong khối "Ngành nào hợp với bạn?".
export const INTERESTS = [
  { id: "lap-trinh", icon: "code", title: "Lập trình & Công nghệ", desc: "Thích logic & máy tính" },
  { id: "sang-tao", icon: "palette", title: "Sáng tạo & Mỹ thuật", desc: "Đam mê vẽ & mỹ thuật số" },
  { id: "bao-mat", icon: "security", title: "Bảo mật & Hệ thống", desc: "Thích bảo mật & phần cứng" },
  { id: "tai-chinh", icon: "calculate", title: "Tài chính & Kế toán", desc: "Yêu thích con số & tài chính" },
  { id: "quan-tri", icon: "groups", title: "Quản trị & Điều hành", desc: "Thích giao tiếp & quản lý" },
  { id: "ban-hang", icon: "storefront", title: "Bán hàng & E-commerce", desc: "Mê bán lẻ & kinh doanh online" },
];
