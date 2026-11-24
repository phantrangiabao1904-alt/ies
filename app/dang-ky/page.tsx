import { redirect } from "next/navigation";

// Một mô hình duy nhất: mọi nút đăng ký dẫn về form trên trang chủ.
export default function DangKyRedirect() {
  redirect("/#dang-ky");
}
