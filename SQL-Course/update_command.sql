use some_database_name;

-- the update command is used when we need to update existing data in the database
update test set my_new_column = 82; -- open ended aka unsafe update because there is no restriction on what rows it will change, so it will update every single row to this value

-- all update commands should incluse a where clause to specify exactly which rows are being updated
update test
set my_new_column = 82
where some_text = "coffee";

update world.country
set Name = "Eswatini"
where Code = "SWZ";

-- as a more advanced aside, we could use a subquery to find the country code as well
update world.country
set Name = "Eswatini"
where Code = (select Code from world.country where Name = "Swaziland" limit 1);

update world.country
set Population = 3749000, LifeExpectancy = 66.6
where Code = "ERI";

select * from world.country where Code = "ERI" or Code = "SWZ";

-- the most important factor of updating is updating the right thing which depends entirely on the where clause