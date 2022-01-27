-- 1. What is the capital of country X ? (Accept X from user)

prepare city from 'select ci.name from city ci inner join country co on 
ci.countrycode = co.code where lower(co.name) = ? ';

set @a = 'sweden';
execute city using @a;

-- 2. List all the languages spoken in the region Y (Accept Y from user)

prepare language from 'select countrylanguage.Language from countrylanguage inner join country on 
countrylanguage.CountryCode = country.code where Region = ?';

set @a = 'Western Africa';
execute language using @a;

-- 3. Find the number of cities in which language Z is spoken (Accept Z from user)

 prepare numberofcities from 'select count(city.name) as number_of_cities from city inner join country 
on city.countryCode = country.Code inner join countrylanguage on 
countrylanguage.countryCode = country.code where Language = ?';

set @a = 'French';
execute numberofcities using @a;

-- 4. .List all the continents with the number of languages spoken in each continent

select Continent, count(1) as total_language_spoken from country inner join countrylanguage on 
countrylanguage.CountryCode = country.code group by Continent;