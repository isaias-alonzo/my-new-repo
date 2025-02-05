-- You can't do anytthing in MySQL without a database
CREATE DATABASE some_database_name;
-- Schema is the same thing as database in MySQL 
-- CREATE SCHEMA is the same as create database

CREATE TABLE some_database_name.user (
	-- Multiple columns are separated with commas
    user_id INT,
    first_name VARCHAR(35),
    last_name VARCHAR(35),
    date_created TIMESTAMP,
    birth_year YEAR,
    email VARCHAR(255),
    email_confirmed ENUM("T", "F"),
    PRIMARY KEY(user_id)
);

CREATE TABLE some_database_name.item (
	item_id INT PRIMARY KEY AUTO_INCREMENT,
    item_sku INT UNIQUE NOT NULL,
	item_name VARCHAR(255) NOT NULL,
    item_price DECIMAL(5,2) NOT NULL, -- DECIMAL(M,D) means a number with M total digits, where D of those digits follow the decimal point-max: 999.99, min: -999.99
    inventory MEDIUMINT UNSIGNED NOT NULL DEFAULT 1,
    item_length FLOAT,
    availability_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    item_description TEXT NOT NULL,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT CHK_sku CHECK (item_sku > 99999 AND item_sku < 1000000),
    CHECK (inventory != 0)
);

DROP TABLE item; 
CREATE TABLE some_database_name.order (
	order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    item1_id INT NOT NULL,
    item1_qty SMALLINT UNSIGNED NOT NULL DEFAULT 1,
    item2_id INT,
    item2_qty SMALLINT UNSIGNED,
    order_datetime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_fulfilled TINYINT DEFAULT 0,
    -- A foreign key creates a physical and enforced connection between two tables where the values of the foreign key MUST exist as values of the primary key
    FOREIGN KEY (user_id) REFERENCES user (user_id),
    FOREIGN KEY (item1_id) REFERENCES item (item_id),
    FOREIGN KEY (item2_id) REFERENCES item (item_id)
);

CREATE TABLE sakila.review (
	review_id INT PRIMARY KEY AUTO_INCREMENT, 
    rating INT, 
    review_text TEXT,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    FOREIGN KEY (film_id) REFERENCES sakila.film (film_id),
    FOREIGN KEY (customer_id) REFERENCES sakila.customer (customer_id)
);     
    