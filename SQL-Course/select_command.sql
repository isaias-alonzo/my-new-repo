
SELECT first_name, last_name FROM sakila.actor;
SELECT first_name, last_name FROM sakila.actor WHERE first_name = "Jennifer"; 
SELECT Name, Continent Population FROM world.country WHERE population >= 1000000; 

USE world;
SELECT Name, Region, surfaceArea FROM world.country;

SELECT * FROM world.city WHERE CountryCode = "NLD"; 

SELECT * FROM world.city WHERE CountryCode = "AGO" OR CountryCode = "ARE"; 

SELECT * FROM world.country ORDER BY GNP ASC; 