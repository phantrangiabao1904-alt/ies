-- Dữ liệu mẫu. Chạy sau 0001 và 0002. Chạy lại an toàn nhờ on conflict.
insert into public.courses (name, position) values
  ('Kỹ thuật điện công nghiệp', 0),
  ('Cơ khí chế tạo', 1),
  ('Hàn công nghiệp', 2),
  ('Điện tử dân dụng', 3)
on conflict (name) do nothing;

insert into public.sections (key, title, body, position) values
  ('usp', 'Vì sao chọn chúng tôi?', 'Đào tạo thực hành 70%, xưởng thực tập đạt chuẩn.' || chr(10) || 'Giảng viên có kinh nghiệm doanh nghiệp.', 0),
  ('partners', 'Đối tác tuyển dụng', 'Kết nối hơn 100 doanh nghiệp trong và ngoài khu công nghiệp.', 1),
  ('testimonials', 'Học viên nói gì', 'Sau 3 tháng tôi có việc làm với mức lương ổn định.', 2)
on conflict (key) do nothing;
