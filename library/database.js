const mysql2 = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL Username
    user: "root",
    // TODO: Add MySQL Password
    password: "",
    database: "employee_tracker_db",
  },
  console.log(`Connected to the employee_tracker_db database.`)
);

// Selecting = getting

function getAllDepartments() {
  db.query("SELECT * FROM department;", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\n");
      console.table(results);
    }
  });
}

function getRoles() {
  db.query(
    "SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department on role.department_id = department.id",
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.table(results);
      }
    }
  );
}

function getEmployeeInfo() {
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, concat(manager.first_name, ' ', manager.last_name) as manager FROM employee JOIN role on employee.role_id = role.id join department on role.department_id = department.id join employee as manager on employee.manager_id = manager.id;`,
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.table(results);
      }
    }
  );
}

// ADD Department, Role and employee

function addAllDepartment() {
  db.query(
    `INSERT INTO department (name) VALUES ("${name}");`,
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    }
  );
}

function addRoles() {
  db.query(
    `INSERT INTO role (title, salary, department_id) 
    VALUES 
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Account Manager", 160000, 3),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);;`,
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    }
  );
}

function addEmployeeManager() {
  db.query(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES 
    ("John", "Doe", 1, null),
    ("Ashley", "Rodriguez", 3, null),
    ("Kunal", "Singh", 5, null),
    ("Sarah", "Lourd", 7, null);`,
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    }
  );
}

function addEmployeeStaff() {
  db.query(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES ("Mike", "Chan", 2, 1),
         ("Kevin", "Tupik", 4, 2),
         ("Malia", "Brown", 6, 3),
         ("Tom", "Allen", 8, 4);`,
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    }
  );
}
