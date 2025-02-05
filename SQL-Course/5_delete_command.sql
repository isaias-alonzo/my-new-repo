-- DELETE is used to remove one or more rows

DELETE FROM some_database_name.test; -- open-ended aka "unsafe" delete because there is no restriction on what rows it will delete, so this will delete every single row

-- Same story as UPDATE--the WHERE clause is critical to ensuring that only the desired rows are deleted
DELETE FROM world.country WHERE Name = "Yugoslavia"; -- safe update error since the Name column is not unique
DELETE FROM world.country WHERE Code = "YUG"; -- fails because the row has a primary key with foreign keys connected to it

SELECT * FROM world.city WHERE CountryCode = "YUG";
DELETE FROM world.city WHERE CountryCode = "YUG";
DELETE FROM world.country WHERE Code = "YUG"; -- Fails due to a foreign key constraint involving the CountryLanguage table

SELECT * FROM world.countrylanguage WHERE CountryCode = "YUG";
DELETE FROM world.countrylanguage WHERE CountryCode = "YUG";
DELETE FROM world.country WHERE Code = "YUG"; -- success

DELETE FROM world.country WHERE Code = "ABC"; -- 0 rows affected because no country matches--not an error