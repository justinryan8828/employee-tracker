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

function getAllDepartments() {
  db.query("SELECT * From department;", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log("\n");
      console.table(results);
    }
  });
}
