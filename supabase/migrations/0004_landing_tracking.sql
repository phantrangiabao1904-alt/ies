-- 0004: theo dõi UTM trên leads và các sự kiện CTA mới trên trang chủ.
-- Chạy thủ công trên Supabase SQL Editor (hoặc supabase db push).

-- UTM gửi kèm form đăng ký. Độ dài giới hạn để tránh rác.
alter table public.leads
  add column if not exists utm_source text check (char_length(utm_source) <= 100),
  add column if not exists utm_medium text check (char_length(utm_medium) <= 100),
  add column if not exists utm_campaign text check (char_length(utm_campaign) <= 150),
  add column if not exists utm_content text check (char_length(utm_content) <= 150),
  add column if not exists utm_term text check (char_length(utm_term) <= 150);

-- Mở rộng danh sách sự kiện: bấm gọi, bấm Zalo, bấm nút đăng ký.
alter table public.events drop constraint if exists events_type_check;
alter table public.events
  add constraint events_type_check
  check (type in (
    'page_view',
    'form_click',
    'form_submit',
    'cta_call',
    'cta_zalo',
    'cta_register'
  ));
