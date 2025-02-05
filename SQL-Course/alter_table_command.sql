-- alter table command to change an existing tables structure
ALTER TABLE sakila.customer
ADD adrdess VARCHAR(50);

ALTER TABLE sakila.customer 
RENAME COLUMN adrdess TO address;

ALTER TABLE sakila.customer
DROP COLUMN address; 

ALTER TABLE some_database_name.user
ADD PRIMARY KEY (name); 

-- add a foreign key without a specific name
ALTER TABLE some_database_name.`order`
ADD FOREIGN KEY (user_id) REFERENCES user (user_id);

-- add foreign key with a specific name
ALTER TABLE some_database_name.`order`
ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES user (user_id);

-- drop that FK
ALTER TABLE some_database_name.user
DROP FOREIGN KEY fk_user_id; 

