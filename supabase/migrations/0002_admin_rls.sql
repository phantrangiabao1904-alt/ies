-- Admin/BA đọc và sửa dữ liệu qua JWT có role trong app_metadata.
-- Anon và user thường không có policy nào ngoài các policy đọc công khai ở 0001.

create or replace function public.current_app_role()
returns text
language sql
stable
security invoker
set search_path = ''
as $$
  select coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '');
$$;

create policy "admin and ba can read leads"
  on public.leads for select
  to authenticated
  using (public.current_app_role() in ('admin', 'ba'));

create policy "admin and ba can read events"
  on public.events for select
  to authenticated
  using (public.current_app_role() in ('admin', 'ba'));

create policy "admin can update leads"
  on public.leads for update
  to authenticated
  using (public.current_app_role() = 'admin')
  with check (public.current_app_role() = 'admin');

-- Admin cần thấy cả section/khóa học đang ẩn để quản trị.
create policy "admin can read all sections"
  on public.sections for select
  to authenticated
  using (public.current_app_role() = 'admin');

create policy "admin can read all courses"
  on public.courses for select
  to authenticated
  using (public.current_app_role() = 'admin');

create policy "admin can write sections"
  on public.sections for all
  to authenticated
  using (public.current_app_role() = 'admin')
  with check (public.current_app_role() = 'admin');

create policy "admin can write courses"
  on public.courses for all
  to authenticated
  using (public.current_app_role() = 'admin')
  with check (public.current_app_role() = 'admin');
