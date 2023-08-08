-- Seed Department Table

use employee_tracker_db;

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

-- Seed Role Table

use employee_tracker_db;

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

-- Seed Employee Table w/ Managers

use employee_tracker_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
       ("Ashley", "Rodriguez", 3, null),
       ("Kunal", "Singh", 5, null),
       ("Sarah", "Lourd", 7, null);

-- Seed Employee Table w/ Employees

use employee_tracker_db;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 2, 1),
       ("Kevin", "Tupik", 4, 2),
       ("Malia", "Brown", 6, 3),
       ("Tom", "Allen", 8, 4);