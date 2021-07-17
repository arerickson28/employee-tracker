USE hogwarts_DB;

INSERT INTO department (name)
VALUES ("Quidditch"), ("Potions"), ("Dark Art Defense"), ("Spells"), ("Fantastical Beast Caretaking"), ("Administration"), ("Gryffindor"), ("Ravenclaw"), ("Hufflepuff"), ("Slytherin");

INSERT INTO role (title, salary, department_id)
VALUES ("Intern", 10000, 1), ("Intern", 10000, 2), ("Head Manager", 500000, 6), ("Potion Manager", 300000, 2), ("Beast Manager", 60000, 5), ("Engineer", 80000, 4), ("Engineer", 80000, 3), ("Brand Ambassador", 15000, 7), ("Brand Ambassador", 15000, 8), ("Brand Ambassador", 15000, 9), ("Brand Ambassador", 15000, 10) ;

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Harry", "Potter", 1, NULL), ("Hermione", "Granger", 2, 4), ("Ronald", "Weasley", 5, 5), ("Neveil", "Longbottom", 7, NULL), ("Cedric", "Diggory", 9, NULL), ("Luna", "Lovegood", 10, NULL), ("Draco", "Malfoy", 11, NULL), ("Severus", "Snape", 4, 3), ("Albus", "Dumbledore", 3, NULL), ("Hagrid", '', 5, 3), ("Sirius", "Black", 7, NULL), ("Fred", "Weasley", 6, NULL);

-- res.map in choices that returns all names to get dynamic display

-- inquirer choices can take objects