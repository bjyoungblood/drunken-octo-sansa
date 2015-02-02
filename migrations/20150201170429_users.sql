---!> MARINER:MIGRATE:UP:
BEGIN;

CREATE TABLE users (
  id serial primary key,
  email character varying(254) unique,
  password character varying(254) not null,
  last_login timestamp,
  created_at timestamp not null default now(),
  updated_at timestamp not null default now(),
  is_enabled boolean not null default true
);

COMMIT;

---!> MARINER:MIGRATE:DOWN:
BEGIN;

DROP TABLE users;

COMMIT;
