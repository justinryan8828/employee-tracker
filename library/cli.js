const inquirer = require("inquirer");

const questions = [
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

  // New department
  {
    message: "What is the name of the new department?",
    name: "newDepartment",
    type: "input",
    when: function (answers) {
      return answers.firstSelection === "Add a department";
    },
  },

  // Add a new role

  {
    message: "What is the name of the new role?",
    name: "newRolename",
    type: "input",
    when: function (answers) {
      return answers.firstSelection === "Add a role";
    },
  },

  {
    message: "What is the salary of the new role?",
    name: "newRoleSalary",
    type: "input",
    when: function (answers) {
      return answers.firstSelection === "Add a role";
    },
  },

  {
    message: "What is the department of the new role?",
    name: "newRoleDepartment",
    type: "input",
    when: function (answers) {
      return answers.firstSelection === "Add a role";
    },
  },

  // Add a new employee
  {
    message: "What is the first name of the new employee?",
    name: "employeeFirstName",
    type: "input",
    when: function (answers) {
      return answers.firstSelection === "Add an employee";
    },
  },

  {
    message: "What is the last name of the new employee?",
    name: "employeeLastName",
    type: "input",
    when: function (answers) {
      return answers.firstSelection === "Add an employee";
    },
  },

  {
    message: "What is the role of the new employee?",
    name: "employeeRole",
    type: "input",
    when: function (answers) {
      return answers.firstSelection === "Add an employee";
    },
  },

  {
    message: "Who is the manager of the new employee?",
    name: "employeeManager",
    type: "input",
    when: function (answers) {
      return answers.firstSelection === "Add an employee";
    },
  },

  // Update employee role

  {
    message: "Which employees role do you want to update?",
    name: "updateRole",
    type: "list",
    choices: [],
    when: function (answers) {
      return answers.firstSelection === "Update employee role";
    },
  },
];
