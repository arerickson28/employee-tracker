USE hogwarts_DB;

INSERT INTO employee (first_name, last_name)
VALUES ("Harry", "Potter"), ("Hermione", "Granger"), ("Ronald", "Weasley");

INSERT INTO department (name)
VALUES ("Quidditch"), ("Potions"), ("Dark Art Defense"), ("Spells"), ("Fantastical Beast Caretaking"), ("Divination"), ("Administration"), ("Gryffindor"), ("Ravenclaw"), ("Hufflepuff"), ("Slytherin");

INSERT INTO role (title, salary, deparent_id)
VALUES ("Student", 0, 1)

-- res.map in choices that returns all names to get dynamic display

-- inquirer choices can take objects