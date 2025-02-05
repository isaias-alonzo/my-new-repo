USE some_database_name;
create table test (
	my_new_column INT,
	some_text VARCHAR (255)
);

INSERT INTO test (my_new_column) VALUES (125); 
SELECT * FROM test;

INSERT INTO test (my_new_column) VALUES (63);
INSERT INTO test (my_new_column, some_text) VALUES (63, 11);
INSERT INTO test (some_text, my_new_column) VALUES (10, 30);
INSERT INTO test (my_new_column, some_text) VALUES (35, "coffee"), (999, "soup");
INSERT INTO test (my_new_column, some_text) VALUES (21, "toffee"), (42, "glasses");
SELECT * FROM test; 

INSERT INTO user (user_id, first_name, last_name, date_created, birth_year, email, email_confirmed)
VALUES (1, "jack", "Sun", "2025-01-07 10:05:10", 1986, "jack@example.com", "F"); 



INSERT INTO item (item_sku, item_name, item_price, inventory, item_description)
VALUES (982543, "Ciabatta Rolls", 4.99, 12, "Fresh and delicious ciabatta rolls for all your sandwich needs!");
SELECT * FROM item;

INSERT INTO item (item_sku, item_name, item_price, inventory, item_description)
VALUES (285493, "Ground Beef", 12.99, 9, "Fresh ground 80/20 beef");
SELECT * FROM item;
INSERT INTO item (item_sku, item_name, item_price, inventory, item_description)
VALUES (285498, "Ground Beef", 6.99, 11, "Fresh ground 80/20 beef");
SELECT * FROM user; 

INSERT INTO `order` (user_id, item1_id, item1_qty, item2_id, item2_qty) VALUES (1,1,3,3,2); 
INSERT INTO `order` (user_id, item1_id, item1_qty, item2_id, item2_qty) VALUES (1,1,3,3,2); 
SELECT * FROM `order`;

