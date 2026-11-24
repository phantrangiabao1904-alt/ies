import type { FaqItem } from "@/components/landing/faq";

export const QUOTAS = [
  { no: "01", icon: "laptop_mac", name: "Công nghệ thông tin", quota: 150 },
  { no: "02", icon: "palette", name: "Thiết kế đồ họa", quota: 120 },
  { no: "03", icon: "security", name: "Quản trị mạng & An ninh mạng", quota: 110 },
  { no: "04", icon: "calculate", name: "Kế toán doanh nghiệp số", quota: 120 },
  { no: "05", icon: "business_center", name: "Quản trị kinh doanh & Dịch vụ", quota: 110 },
  { no: "06", icon: "shopping_bag", name: "Thương mại điện tử", quota: 140 },
];

export const STEPS = [
  { icon: "app_registration", title: "Đăng ký tư vấn trực tuyến", desc: "Điền biểu mẫu online trong 3-5 phút hoặc gọi hotline. Chuyên viên giải đáp chọn ngành phù hợp sở thích.", meta: "Thời gian: 3 - 5 phút" },
  { icon: "markunread_mailbox", title: "Nộp hồ sơ học bạ", desc: "Gửi học bạ photo cùng phiếu xét tuyển trực tiếp tại phòng tuyển sinh hoặc qua bưu điện.", meta: "Hình thức: Trực tiếp / Bưu điện" },
  { icon: "mark_email_read", title: "Nhận giấy báo nhập học", desc: "Hội đồng tuyển sinh kiểm duyệt điều kiện văn hóa và cấp Giấy báo trúng tuyển kèm hướng dẫn thủ tục.", meta: "Phản hồi: 24 - 48 giờ" },
  { icon: "badge", title: "Nhập học & nhận lịch thực hành", desc: "Hoàn thiện hồ sơ gốc, nhận đồng phục, thẻ học sinh và tham gia tuần lễ định hướng.", meta: "Chính thức trở thành sinh viên IES" },
];

export const DOCS = [
  { t: "Phiếu đăng ký xét tuyển theo mẫu IES Sài Gòn", d: "Điền đầy đủ thông tin cá nhân, ngành học nguyện vọng và thông tin người giám hộ." },
  { t: "Bản sao công chứng Học bạ THCS (hoặc THPT)", d: "Học sinh vừa thi xong lớp 9 có thể nộp trước giấy chứng nhận tốt nghiệp tạm thời." },
  { t: "Bản sao CCCD (hoặc trích lục định danh VNeID mức 2)", d: "02 bản sao có công chứng hoặc xuất trình bản điện tử trên VNeID khi làm thủ tục." },
  { t: "Ảnh thẻ 3x4 (04 tấm chụp không quá 6 tháng)", d: "Ghi rõ họ tên, ngày tháng năm sinh phía sau ảnh." },
  { t: "Giấy chứng nhận ưu tiên / hộ nghèo / gia đình chính sách (nếu có)", d: "Dùng để kích hoạt các khoản học bổng và trợ cấp xã hội theo luật định." },
];

export const POLICIES = [
  { icon: "policy", tag: "Nghị định 81/2021/NĐ-CP", title: "Miễn giảm học phí nghề từ Nhà nước", desc: "Học sinh tốt nghiệp THCS học tiếp lên Trung cấp được Nhà nước cấp bù học phí đào tạo nghề theo quy định hiện hành. Nhà trường hỗ trợ thủ tục cấp giấy xác nhận để phụ huynh nhận trợ cấp tại địa phương." },
  { icon: "credit_card", tag: "Ưu đãi tuyển sinh đợt 1", title: "Chia nhỏ đợt đóng & miễn lệ phí", desc: "Học phí chia 2 - 3 đợt linh hoạt mỗi kỳ. Miễn 100% lệ phí hồ sơ và xét tuyển cho thí sinh nộp hồ sơ đợt đầu." },
  { icon: "apartment", tag: "Học sinh tỉnh xa nhà", title: "Ký túc xá an ninh có thầy cô quản nhiệm", desc: "KTX có máy lạnh, wifi, camera an ninh 24/7 và thầy cô quản nhiệm điểm danh mỗi tối. Ưu tiên phòng cho học sinh đăng ký sớm trước ngày 15/08/2026." },
];

export const ADMISSION_FAQ: FaqItem[] = [
  { q: "Học hết lớp 9 đi học Trung cấp có được nhận bằng cấp 3 (THPT) không?", a: "Học sinh học chương trình tích hợp gồm môn văn hóa THPT theo quy định của Bộ GD&ĐT cùng chuyên ngành Trung cấp. Sau khi hoàn thành, sinh viên nhận Bằng Trung cấp chính quy và Giấy chứng nhận hoàn thành văn hóa THPT, đủ điều kiện thi tốt nghiệp THPT và liên thông Cao đẳng, Đại học." },
  { q: "Học sinh có học lực trung bình ở cấp 2 có đủ điều kiện xét tuyển không?", a: "Đủ điều kiện. Nhà trường không thi tuyển mà xét dựa trên bằng hoặc học bạ THCS. Chương trình dành 70-80% thời lượng cho thực hành nên học sinh dễ tiếp thu." },
  { q: "Chính sách miễn giảm học phí theo Nghị định 81/CP được thực hiện thế nào?", a: "Nhà trường cấp giấy xác nhận đối tượng đào tạo để phụ huynh nhận tiền hỗ trợ học phí tại Phòng Lao động - Thương binh & Xã hội quận/huyện nơi thường trú." },
  { q: "Học xong 2 năm tại trường có cam kết việc làm hay không?", a: "IES hợp tác tuyển dụng với hơn 50 doanh nghiệp đối tác tại TP.HCM. Sinh viên đạt chuẩn tốt nghiệp được giới thiệu thực tập có lương và kết nối phỏng vấn đúng chuyên môn." },
  { q: "Các em 15 tuổi xa nhà ở Ký túc xá có đảm bảo an toàn không?", a: "Ban Quản nhiệm túc trực 24/7, kiểm tra phòng mỗi tối, giữ liên lạc với phụ huynh qua nhóm Zalo để cập nhật tình hình sinh hoạt, học tập và sức khỏe." },
  { q: "Nhà trường có hỗ trợ liên thông Đại học chính quy sau này không?", a: "Có. Sau khi có bằng Trung cấp và hoàn thành văn hóa THPT, sinh viên có thể liên thông Cao đẳng (1 năm) rồi Đại học (thêm 1,5 năm) tại các trường đối tác ở TP.HCM." },
];
