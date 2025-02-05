SELECT SUM(Population) FROM world.country; 
SELECT SUM(GNP) FROM world.country WHERE Continent = "North America"; 
SELECT COUNT(*) FROM world.country WHERE Continent = "North America"; 
SELECT MIN(Population)  FROM world.country WHERE Population > 0;
SELECT Name FROM world.country WHERE Population = 50;
SELECT Name FROM world.country WHERE Population = (SELECT MIN(Population)  FROM world.country WHERE Population > 0);
SELECT Name FROM world.country WHERE Population = (SELECT MAX(Population)  FROM world.country);
