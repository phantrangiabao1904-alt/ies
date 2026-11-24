-- Leads: anon chỉ được INSERT, không SELECT/UPDATE/DELETE.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  phone text not null check (phone ~ '^(\+84|0)(3|5|7|8|9)[0-9]{8}$'),
  major text not null check (char_length(major) between 2 and 100),
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "anon can insert leads"
  on public.leads for insert
  to anon
  with check (true);

-- Events: ghi lượt xem/click form cho funnel; anon chỉ INSERT.
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('page_view', 'form_click', 'form_submit')),
  referrer text check (char_length(referrer) <= 500),
  created_at timestamptz not null default now()
);

alter table public.events enable row level security;

create policy "anon can insert events"
  on public.events for insert
  to anon
  with check (true);

-- Không có policy SELECT cho anon trên leads/events.
-- Role admin/ba được cấp quyền đọc trong 0002, dựa trên app_metadata của JWT.

-- Sections của Landing Page (CMS kéo-thả).
create table if not exists public.sections (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  title text not null,
  body text,
  position int not null default 0,
  is_visible boolean not null default true
);

alter table public.sections enable row level security;

create policy "anyone can read visible sections"
  on public.sections for select
  to anon, authenticated
  using (is_visible);

-- Khóa học / ngành học.
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  position int not null default 0,
  is_visible boolean not null default true
);

alter table public.courses enable row level security;

create policy "anyone can read visible courses"
  on public.courses for select
  to anon, authenticated
  using (is_visible);
