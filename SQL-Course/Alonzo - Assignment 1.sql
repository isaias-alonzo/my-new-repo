CREATE DATABASE candy_store; 

USE candy_store; 

SELECT * FROM `candy`; 

CREATE TABLE manufacturer (
manufacturer_id INT PRIMARY KEY NOT NULL,
manufacturer_name VARCHAR (100) NOT NULL,
founding_year INT 
);

CREATE TABLE candy (
candy_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
candy_name VARCHAR (100) NOT NULL,
candy_price DECIMAL(5,2) NOT NULL, 
candy_weight FLOAT NOT NULL, 
FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(manufacturer_id)
);  

-- 1) You will get an error because after running the first line of code the database already exists and cannot be created again.
-- 2) A DECIMAL will allow you to specify the number of total digits for the number and how many decimal places there are.
-- 3) In this case, the best data type for email storage is VARCHAR because you can limit the amount of characters. COMMENT
-- 4) for storing a phone number the best data type is CHAR but modified to specify the characters to domestic phone numbers (10) or international numbers. 