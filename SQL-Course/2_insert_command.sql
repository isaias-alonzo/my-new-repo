-- The insertions that we do here will be based on tables previous created in the CREATE command coverage
-- Before we can run standard CRUD operations the tables we are going to work with have to exist--check!
USE some_database_name; -- sets default database
INSERT INTO test (my_new_column) VALUES (49);
SELECT * FROM test;

INSERT INTO test (my_new_column) VALUES (63);
INSERT INTO test (my_new_column, some_text) VALUES (63, 21);
INSERT INTO test (some_text, my_new_column) VALUES (10, 30);
-- Everything above is only inserting a single row of data
-- In order to insert multiple rows of data, we need multiple value lists in their own sets of parentheses
INSERT INTO test (my_new_column, some_text) VALUES (35, "coffee"), (999, "soup");
INSERT INTO test (my_new_column, some_text)
VALUES	(21, "toffee"),
		(42, "glasses");
        
-- Although it's rare, if you are inserting rows with values for every single column, you can omit the column titles, but you have to list your data in the order that the columns exist in the table
INSERT INTO test VALUES (25, "grass");
-- INSERT INTO test VALUES (44); -- Error because column count doesn't match value count
-- One very common reason the above is not so normally used is that many tables have auto-incrementing ids

SELECT * FROM test;

INSERT INTO user (user_id, first_name, last_name, date_created, birth_year, email, email_confirmed)
VALUES (1, "Jack", "Sun", "2025-01-07 10:05:10", 1986, "jack@example.com", "F");
SELECT * FROM user;

INSERT INTO item (item_sku, item_name, item_price, inventory, item_description)
VALUES (982543, "Ciabatta Rolls", 4.99, 12, "Fresh and delicious ciabatta rolls for all your sandwich needs!");
INSERT INTO item (item_sku, item_name, item_price, inventory, item_description)
VALUES (285493, "Ground Beef", 12.99, 9, "Fresh ground 80/20 beef");
INSERT INTO item (item_sku, item_name, item_price, inventory, item_description)
VALUES (285498, "Ground Beef", 6.99, 11, "Fresh ground 80/20 beef");

SELECT * FROM item;

INSERT INTO `order` (user_id, item1_id, item1_qty, item2_id, item2_qty) VALUES (1,1,3,5,2);
INSERT INTO `order` (user_id, item1_id, item1_qty, item2_id, item2_qty) VALUES (1,1,3,5,2);
INSERT INTO `order` (user_id, item1_id, item1_qty) VALUES (1,1,2);
-- Whenever you get an error on "foreign key constraint fails", it's almost always because the value you supplied to the foreign key column does not match any values on the other end of the foreign key
-- INSERT INTO `order` (user_id, item1_id, item1_qty, item2_id, item2_qty) VALUES (1,112,3,5,2); -- error because there is no product with id 112
SELECT * FROM `order`;

