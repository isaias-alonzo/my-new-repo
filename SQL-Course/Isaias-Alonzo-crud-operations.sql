-- PART 1
SHOW DATABASES; 

SELECT DATABASE (); 

-- PART 2
SHOW TABLES; 

-- PART 3
INSERT INTO candy (name, year_released, price, net_weight_oz, manufacturer_id) 
VALUES ("Cookies ‘N’ Crème", 1994, 1.59, 1.55, 105);

SELECT * FROM manufacturer;

INSERT INTO candy (name, year_released, price, net_weight_oz, manufacturer_id) 
VALUES ("Cookies ‘N’ Crème", 1994, 1.59, 1.55, 105);
-- The foreign key in the candy table is the manufacturer_id. 
-- PART 4
INSERT INTO candy (name, year_released, price, net_weight_oz, manufacturer_id)
VALUES ("Fun Dip", 1973, 0.95, 0.5, 127);

INSERT INTO candy (name, year_released, price, net_weight_oz, manufacturer_id)
VALUES ("LUCAS Muecas", 1999, 0.50, 0.88, 112);

INSERT INTO candy (name, year_released, price, net_weight_oz, manufacturer_id)
VALUES ("Nerds", 1983, 0.40, 0.53, 127);

-- PART 5
-- add the large database, after a few minutes, I noticed that the "Bounty" candy had the manufacturer_id incomplete 

SELECT * FROM candy;
 
-- PART 6
UPDATE manufacturer 
set founding_year = 1894
WHERE manufacturer_id = 105; 

UPDATE manufacturer 
set chief_executive = "Gary Viljoen" 
where manufacturer_id = 133; 

UPDATE candy 
set price = 2.05
where candy_id = 149; 

UPDATE candy 
set price = 1.9
where candy_id = 139; 

-- PART 7
-- delete the following duplicate entries: Haribo, Cadbury, and America Licorice Cmpany with messed up net sales data
SELECT * FROM manufacturer;
DELETE FROM manufacturer WHERE manufacturer_id = 138; 

SELECT * FROM manufacturer;
DELETE FROM manufacturer WHERE manufacturer_id = 139; 

SELECT * FROM manufacturer;
DELETE FROM manufacturer WHERE manufacturer_id = 140; 

-- PART 8
SELECT * FROM manufacturer WHERE founding_year < 1980; 
SELECT name, year_released FROM candy; 
SELECT * FROM candy WHERE year_released < 2000 AND year_released > 1950; 
SELECT * FROM manufacturer WHERE annual_net_sales_usd > 1e9 ORDER BY annual_net_sales_usd DESC; 
SELECT name, price, net_weight_oz FROM candy WHERE manufacturer_id = 105; 

-- PART 9 
-- 1. We got the foreign key error code because we tried to populate information for a foreign key which did not correlate on that corresponding table. 
-- 2. Adding LIMIT to a SELECT query just limits the total number of columns that show up. 
-- 3. Using the name "Chocolate Bar" as an indicator for a change to take place can change data if other tables use this same term for data. 
-- 4. You can delete multiple rows with the DELETE command if you provide a specific indicator that allows SQL to select and delete multiple columns. 
