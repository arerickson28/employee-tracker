DROP DATABASE IF EXISTS hogwarts_DB;

CREATE DATABASE hogwarts_DB;

USE hogwarts_DB;

CREATE TABLE `employee` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(30),
  `last_name` varchar(30),
  `role_id` int,
  `manager_id` int
);

CREATE TABLE `role` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(30),
  `salary` decimal,
  `department_id` int
);

CREATE TABLE `department` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `department_name` varchar(30)
);

ALTER TABLE `role` ADD FOREIGN KEY (`department_id`) REFERENCES `department` (`id`);

ALTER TABLE `employee` ADD FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
