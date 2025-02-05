USE  sakila; 
SELECT * FROM sakila.actor; 

CREATE INDEX idx_actor_first_and_last_name ON sakila.actor(first_name, last_name);

CREATE INDEX idc_actor_first_and_last_name ON sakila.actor(first_name, last_name); 

SELECT * FROM sakila.actor WHERE first_name = "Mary"; 

SELECT * FROM sakila.actor WHERE first_name = "Mary" OR last_name = "Gable"; 
