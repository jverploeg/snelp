DROP TABLE IF EXISTS snow CASCADE;
CREATE TABLE snow (
 id     int GENERATED ALWAYS AS IDENTITY,
 resort   varchar UNIQUE,
 new_snow integer,
 area_open integer,
 base      integer, -- not null,
 BvA       integer,
 PRIMARY KEY (id)
);
--TODO add unique constraints on email and name...
-- DROP INDEX if EXISTS product_key;
-- CREATE INDEX product_key ON reviews (product_id);

copy snow (resort, new_snow, area_open, base, BvA)from '/Users/jverploeg/Downloads/snow2.csv' delimiter ',' csv header;
-- DROP INDEX if EXISTS resort_key;
-- CREATE INDEX resort_key ON snow (resort);

-- SELECT * FROM snow
-- ORDER BY base ASC LIMIT 10