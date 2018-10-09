var mysql = require("mysql");
JAWSDB_URL='mysql://qxhzq9kqt300zgsn:j2jzuwvv3nulijq4@uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/u37bd9e884ptachu'
// Set up our connection information
var connection;

if (process.env.JAWSDB_URL) {
  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

// Connect to the database
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
