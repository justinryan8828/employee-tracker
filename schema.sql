-- Drop Database
drop database if exists employee_tracker_db;
-- Create Database
create database employee_tracker_db;

-- Create Department Table

use employee_tracker_db;

create table department (
	id INT not null auto_increment primary key,
	name VARCHAR(255) not null
);

-- Create Role Table

use employee_tracker_db;

create table role (
  id INT not null auto_increment primary key,
  title VARCHAR(255) not null,
  salary DECIMAL not null,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

-- Create Employee Table

use employee_tracker_db;

create table employee (
  id INT not null auto_increment primary key,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);

-- Select and Join Roles

SELECT role.id, role.title, role.salary, department.name FROM role
JOIN department on role.department_id = department.id;

-- Select employee, JOIN role, JOIN department, JOIN manager

SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, concat(manager.first_name, ' ', manager.last_name) as manager FROM employee
JOIN role on employee.role_id = role.id
join department on role.department_id = department.id
join employee as manager on employee.manager_id = manager.id;

-- Add Department

INSERT INTO department (name)
VALUES ("Service")