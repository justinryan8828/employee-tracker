const mysql = require("mysql2");

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

const questions = require("./cli");

// Selecting = getting

function getAllDepartments() {
  db.query("SELECT * FROM department;", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\n");
      console.table(results);
      //   questions();
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

function addAllDepartment(name) {
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
    VALUES ("${title}", ${salary}, ${department_id});`,
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
  VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id})`,
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
  VALUES ("${first_name}", "${last_name}", ${role_id}, ${manager_id});`,
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    }
  );
}

// module.exports = { addAllDepartment };
exports.addAllDepartment = addAllDepartment
exports.getRoles = getRoles
exports.getEmployeeInfo = getEmployeeInfo
exports.getAllDepartments = getAllDepartments
exports.addRoles = addRoles