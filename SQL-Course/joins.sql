USE sakila; 

SELECT * FROM rental; 

SELECT * FROM inventory; 
SELECT * FROM rental WHERE rental_id = 1;
SELECT * FROM customer WHERE customer_id = 130;
SELECT * FROM inventory WHERE inventory_id = 367; 
SELECT * FROM film WHERE film_id = 80; 

SELECT * FROM store WHERE store_id = 1; 

SELECT * FROM store WHERE store_id = 1; 
-- you can combine all these queries; 

SELECT * FROM film WHERE film_id = (SELECT film_id FROM inventory WHERE inventory_id = (SELECT inventory_id FROM rental WHERE rental_id = 1)); 


SELECT * FROM rental; 
SELECT * FROM customer;
-- Now I want to join both

-- inner join below
SELECT * FROM rental
JOIN customer
ON rental.customer_id = customer.customer_id 
JOIN inventory 
ON inventory.inventory_id = rental.inventory_id
JOIN film
ON film.film_id = inventory.film_id;

-- use USING to simplify joining functions, be careful that during the last portion of the command because those tables aren't entirely directly related it may confuse the system
SELECT * FROM rental
JOIN customer
USING (customer_id)
JOIN inventory 
USING (inventory_id)
JOIN film
ON film.film_id = inventory.film_id;

-- more precise query below 
SELECT rental.rental_id, rental.rental_date, customer.first_name, customer.last_name, film.title, film.description, film.release_year, film.length, film.rating FROM rental
JOIN customer
USING (customer_id)
JOIN inventory 
USING (inventory_id)
JOIN film
ON film.film_id = inventory.film_id;

-- even more precise
SELECT rental.rental_id, rental.rental_date, customer.first_name, customer.last_name, film.title, film.description, film.release_year, film.length, film.rating FROM rental
JOIN customer
USING (customer_id)
JOIN inventory 
USING (inventory_id)
JOIN film
ON film.film_id = inventory.film_id
WHERE film.rating = "NC-17"; 


-- using order by and desc and asc commands 
SELECT rental.rental_id, rental.rental_date, customer.first_name, customer.last_name, film.title, film.description, film.release_year, film.length, film.rating FROM rental
JOIN customer
USING (customer_id)
JOIN inventory 
USING (inventory_id)
JOIN film
ON film.film_id = inventory.film_id
WHERE film.rating = "NC-17"
ORDER BY customer.last_name ASC, customer.first_name ASC; 

SELECT city.city_id, city.city, country.country, city.last_update FROM city
JOIN country
USING (country_id);

SELECT title, length FROM sakila.film; 

SELECT * FROM actor WHERE first_name = "Robert";

 SELECT * FROM actor; 
 
INSERT INTO customer (first_name, last_name, store_id, email, address_id, active) 
VALUES ('Hans', 'Gruber', 2, 'hans@volksfrei.org', 5, 1); 
SELECT * FROM sakila.customer;

Update sakila.customer
Set Active = 0
Where customer_id = 600;  
