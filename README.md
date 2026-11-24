# IES School - Hệ thống tuyển sinh

## Cài đặt

1. `npm install`
2. Tạo `.env.local` từ `.env.example`, điền `SUPABASE_URL` và `SUPABASE_ANON_KEY`.
3. Trên Supabase, chạy lần lượt trong SQL Editor:
   - `supabase/migrations/0001_init.sql`
   - `supabase/migrations/0002_admin_rls.sql`
   - `supabase/migrations/0003_seed.sql`
4. Tạo hai user trong Authentication > Users, rồi gán role:

```sql
update auth.users
set raw_app_meta_data = raw_app_meta_data || '{"role":"admin"}'
where email = 'admin@example.com';

update auth.users
set raw_app_meta_data = raw_app_meta_data || '{"role":"ba"}'
where email = 'ba@example.com';
```

5. `npm run dev`

## Kiểm tra nhanh

- `/` : form đăng ký gửi được, hiện đúng danh sách ngành.
- `/login` : đăng nhập admin chuyển sang `/admin`, BA chuyển sang `/ba`.
- `/admin` : kéo-thả và "Lưu thứ tự" cập nhật được.
- `/ba` : biểu đồ, bảng leads và nút xuất CSV hoạt động.
- Người chưa đăng nhập truy cập `/admin` hoặc `/ba` bị chuyển về `/login`.

## Deploy Vercel

Thêm `SUPABASE_URL` và `SUPABASE_ANON_KEY` vào Project Settings > Environment Variables, rồi deploy.
