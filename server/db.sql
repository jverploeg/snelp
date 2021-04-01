DROP TABLE IF EXISTS snow CASCADE;
CREATE TABLE snow (
 id     int GENERATED ALWAYS AS IDENTITY,
 resort   varchar UNIQUE,
 new_snow integer,
 area_open integer,
 base      integer,
 BvA       integer,
 PRIMARY KEY (id)
);
--TODO add unique constraints on email and name...
-- DROP INDEX if EXISTS product_key;
-- CREATE INDEX product_key ON reviews (product_id);

copy snow (resort, new_snow, area_open, base, BvA)from '/Users/jverploeg/Desktop/snow2edit.csv' delimiter ',' csv header;
-- DROP INDEX if EXISTS resort_key;
-- CREATE INDEX resort_key ON snow (resort);

-- SELECT * FROM snow
-- ORDER BY base ASC LIMIT 10


DROP TABLE IF EXISTS snow2;
CREATE TABLE snow2 (
 id     int GENERATED ALWAYS AS IDENTITY,
 resort   varchar UNIQUE,
 true_snow double precision,
 days_over6inches double precision,
 months_over90      double precision, -- not null,
 months_under30       double precision,
 snow_score       double precision,
 PRIMARY KEY (id)
);
copy snow2 (resort, true_snow, days_over6inches, months_over90, months_under30, snow_score) from '/Users/jverploeg/Desktop/snow1.csv' delimiter ',' csv header;