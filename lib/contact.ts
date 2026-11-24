// Thông tin liên hệ: thay bằng số thật qua biến môi trường. Giá trị dự phòng chỉ là placeholder.
export const PHONE_DISPLAY = process.env.NEXT_PUBLIC_HOTLINE_DISPLAY ?? "09xx.xxx.xxx";
export const PHONE_TEL = `tel:${process.env.NEXT_PUBLIC_HOTLINE_TEL ?? "09xxxxxxxx"}`;
export const ZALO_URL = process.env.NEXT_PUBLIC_ZALO_URL ?? "https://zalo.me";
