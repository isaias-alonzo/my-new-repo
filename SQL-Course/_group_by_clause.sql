SELECT AVG(Population) FROM world.country WHERE Continent = "Asia"; 
SELECT AVG(Population) FROM world.country GROUP BY Continent;
SELECT Continent, AVG(Population) FROM world.country GROUP BY Continent;
SELECT * FROM world.country GROUP BY Continent; 
SELECT AVG(Population) FROM world.country; 
SELECT Continent, AVG(Population) FROM world.country GROUP BY Continent ORDER BY AVG(Population) DESC; 
SELECT AVG(GNP) FROM world.country; 
SELECT STDDEV(Population) FROM world.country; 
