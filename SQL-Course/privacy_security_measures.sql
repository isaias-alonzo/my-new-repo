SHOW TABLES FROM information_schema;
SELECT * FROM information_schema.CHARACTER_SETS; 

-- find out all users
SELECT User, Host FROM mysql.user; 

-- GRANT command is most important of all, root user can grant permission by default making the root user the ideal user to create other user. 

CREATE USER `new_user` IDENTIFIED BY 'new-password'; 

GRANT SELECT ON sakila.* TO 'new_user';

-- give global select privileges to this user
GRANT SELECT ON *.* TO 'new_user';

-- give table SELECT privileges to this user

GRANT SELECT ON world.city TO 'new_user';

CREATE ROLE 'dev';
GRANT ALL ON world.* TO 'dev';
GRANT ALL ON sakila.* TO 'dev';
GRANT SELECT ON mysql.user TO 'dev';
GRANT SELECT ON *.* TO 'dev';

GRANT 'dev' to 'new_user'; 

REVOKE SELECT ON sakila.* FROM 'new_user'; 
SHOW GRANTS FOR 'new_user'; 
GRANT ALL ON some_database_name TO 'new_user'; 
