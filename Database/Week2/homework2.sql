// Question 2
CREATE DATABASE IF NOT EXITS todo;

CREATE TABLE IF NOT EXITS todo_list1 (id INTEGER PRIMARY KEY, activity TEXT, minutes INTEGER);
INSERT INTO todo_list VALUES (1, "Wash the dishes", 15);
INSERT INTO todo_list VALUES (2, "vacuuming", 20);
INSERT INTO todo_list VALUES (3, "Learn some stuff on mysql", 60);
INSERT INTO todo_list VALUES (4, "Eat", 25);


CREATE TABLE IF NOT EXITS todo_list2 (id INTEGER PRIMARY KEY , item TEXT, amount INTEGER );
INSERT INTO todo_list VALUES (1, "bread", 15);
INSERT INTO todo_list VALUES (2, "milk", 20);
INSERT INTO todo_list VALUES (3, "fruits", 30);
INSERT INTO todo_list VALUES (4, "meat", 25);


