const inquirer = require("inquirer");
const mysql = require("mysql2");
const { prompt } = require("inquirer");
const database = require("./database.js");


function newDepartment() {
  prompt([
    {
      message: "What do you want the departments name to be?",
      name: "departmentName",
      type: "input",
    },
  ]).then((res) => {
    let name = res.departmentName;
    database.addAllDepartment(name)
    questions();
  });
}

function questions() {
  prompt([
    {
      message: "What would you like to do?",
      name: "firstSelection",
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update Employee Role",
        "Quit",
      ],
    },

  ]).then((res) => {
    let choice = res.firstSelection;
    switch (choice) {

      case "View all departments":
        database.getAllDepartments();
        break;

      case "View all roles":
        database.getRoles();
        break;

      case "View all employees":
        database.getEmployeeInfo();
        break;

      case "Add a department":
        // call function for adding new department
        newDepartment();
        break;

      case "newRoleName":
        // call function for adding new role name
        break;
    }
  });
}



questions();
