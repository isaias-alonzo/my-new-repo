SELECT user, host FROM mysql.user;

CREATE USER 'guest'@'%'; 

CREATE USER 'mscott'@'%' IDENTIFIED BY 'password123'; 

CREATE USER 'cjudge'@'192.0.2.111' IDENTIFIED BY 'indeed1'; 

CREATE USER 'ptook'@'localhost' IDENTIFIED BY '2ndbfst432'; 

CREATE USER 'ltorvalds'@'localhost' IDENTIFIED BY '%&lzcsE`Y5S4\\*Q=1_zQ_u8D£kW29'; 

SELECT user, host FROM mysql.user;

DROP USER IF EXISTS 'guest'; 

GRANT SELECT ON business.* TO 'mscott'@'%';

GRANT ALL ON business.employee TO 'cjudge'@'192.0.2.111';

GRANT SELECT, INSERT, UPDATE, DELETE, ALTER ON business.employee TO 'ptook'@'localhost';

GRANT ALL ON *.* TO 'ltorvalds'@'localhost'; 

SHOW GRANTS FOR 'ptook'@'localhost'; 

CREATE ROLE 'developer';
GRANT CREATE ON *.* TO 'developer';
GRANT DROP ON *.* TO 'developer';
GRANT ALTER ON *.* TO 'developer';
GRANT SUPER ON *.* TO 'developer';

GRANT 'developer' to 'cjudge'@'192.0.2.111'; 

GRANT 'developer' to 'ptook'@'localhost'; 

REVOKE ALTER ON business.employee FROM 'ptook'@'localhost'; 

REVOKE SUPER ON *.* FROM 'developer'; 

-- 1. The hostname in my SQL shows the server location of each user. 
-- 2. The '%' leaves the host name unrestricted, % is a wildcard placeholder usually. 
-- 3. The principle of least privilege is the compartmentalization of access to data in order to prevent unauthorized or unwitting slippage of information. 
-- 4. The risk of giving the DROP command has the possibility of a user unknowingly deleting important information. 
-- 5. The GRANT privilege gives a user the power to alter user privileges and access for all users within the specified system. 