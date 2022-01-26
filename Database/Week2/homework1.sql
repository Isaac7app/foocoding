-- 1. What is the capital of country X ? (Accept X from user)

prepare city from 'select ci.name from city ci inner join country co on 
ci.countrycode = co.code where lower(co.name) = ? limit 1';

set @a = 'sweden';
execute city using @a;

-- 2. List all the languages spoken in the region Y (Accept Y from user)

prepare lang from 'select countrylanguage.Language from countrylanguage inner join country on 
countrylanguage.CountryCode = country.code where Region = ?';

set @a = 'Western Africa';
execute lang using @a;

--3. Find the number of cities in which language Z is spoken (Accept Z from user)