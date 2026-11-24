export type Major = {
  no: string;
  id: string;
  name: string;
  group: "cong-nghe" | "kinh-te";
  groupLabel: string;
  tagline: string;
  img: string;
  alt: string;
  skillsIcon: string;
  skills: string[];
  jobsIcon: string;
  jobs: string[];
  footnote: string;
  footIcon: string;
};

export const MAJORS: Major[] = [
  {
    no: "01", id: "cntt", name: "Công nghệ thông tin", group: "cong-nghe", groupLabel: "Khối Công nghệ",
    tagline: "Lập trình web, phần mềm ứng dụng & cơ sở dữ liệu",
    img: "/images/lab.png", alt: "Lab thực hành lập trình IES Sài Gòn",
    skillsIcon: "terminal", skills: ["Tư duy thuật toán & CSDL SQL", "JavaScript & Python ứng dụng", "Quy trình Git & chuẩn Agile"],
    jobsIcon: "work", jobs: ["Junior Web Developer", "Software Tester (Kiểm thử)", "Chuyên viên IT Support"],
    footIcon: "verified", footnote: "Lab máy tính hiện đại IES",
  },
  {
    no: "02", id: "tkdh", name: "Thiết kế đồ họa", group: "cong-nghe", groupLabel: "Khối Công nghệ",
    tagline: "Mỹ thuật số, nhận diện thương hiệu, UI/UX & truyền thông số",
    img: "/images/design.png", alt: "Xưởng sáng tạo đồ họa kỹ thuật số",
    skillsIcon: "palette", skills: ["Photoshop, Illustrator, Figma", "Motion Graphics & video ngắn", "Typography & thiết kế bao bì"],
    jobsIcon: "brush", jobs: ["Graphic Designer doanh nghiệp", "Junior UI/UX Designer", "Digital Content Creator"],
    footIcon: "verified", footnote: "Phòng máy iMac & bảng vẽ Wacom",
  },
  {
    no: "03", id: "qtm", name: "Quản trị mạng & An ninh mạng", group: "cong-nghe", groupLabel: "Khối Công nghệ",
    tagline: "Hạ tầng mạng, hệ thống server Cisco/Linux & bảo mật thông tin",
    img: "/images/campus.png", alt: "Khuôn viên trường IES",
    skillsIcon: "router", skills: ["Cấu hình Router/Switch Cisco", "Quản trị Windows Server & Linux", "Giám sát an ninh mạng"],
    jobsIcon: "security", jobs: ["Kỹ thuật viên hạ tầng mạng", "Quản trị viên mạng", "Chuyên viên Helpdesk & Bảo mật"],
    footIcon: "verified", footnote: "Thực hành server & thiết bị thật",
  },
  {
    no: "04", id: "kts", name: "Kế toán doanh nghiệp số", group: "kinh-te", groupLabel: "Khối Kinh tế",
    tagline: "Kế toán thực hành, phần mềm hóa đơn điện tử & ERP tài chính",
    img: "/images/library.png", alt: "Phòng mô phỏng kế toán doanh nghiệp",
    skillsIcon: "calculate", skills: ["Kê khai thuế & báo cáo tài chính", "Thành thạo phần mềm MISA, FAST", "Kế toán kho & lương số hóa"],
    jobsIcon: "receipt_long", jobs: ["Kế toán viên tổng hợp", "Chuyên viên kê khai hồ sơ thuế", "Nhân viên thủ quỹ, kiểm soát chi"],
    footIcon: "verified", footnote: "Tặng tài khoản chứng chỉ MISA",
  },
  {
    no: "05", id: "qtkd", name: "Quản trị kinh doanh & Dịch vụ", group: "kinh-te", groupLabel: "Khối Kinh tế",
    tagline: "Kỹ năng bán hàng, vận hành kinh doanh & đàm phán CRM",
    img: "/images/studio.png", alt: "Không gian pitching & khởi nghiệp",
    skillsIcon: "storefront", skills: ["Lập kế hoạch bán hàng & KPIs", "Đàm phán thương vụ & CRM số", "Điều phối cửa hàng & nhân sự"],
    jobsIcon: "groups", jobs: ["Nhân viên kinh doanh B2B/B2C", "Trợ lý vận hành showroom", "Giám sát viên bán hàng & CSKH"],
    footIcon: "verified", footnote: "Thực tập tại hệ thống 50+ đối tác",
  },
  {
    no: "06", id: "tmdt", name: "Thương mại điện tử", group: "kinh-te", groupLabel: "Khối Kinh tế",
    tagline: "Vận hành sàn TMĐT, Digital Marketing, livestream bán hàng & TikTok Shop",
    img: "/images/ecommerce.png", alt: "Studio livestream bán hàng đa kênh",
    skillsIcon: "live_tv", skills: ["Livestream & host bán hàng số", "Vận hành Shopee & TikTok Shop", "Quảng cáo Meta/TikTok căn bản"],
    jobsIcon: "shopping_bag", jobs: ["Chuyên viên vận hành sàn E-Com", "Quản lý gian hàng omnichannel", "Content Creator & Livestreamer"],
    footIcon: "verified", footnote: "Studio livestream chuyên nghiệp tại trường",
  },
];
