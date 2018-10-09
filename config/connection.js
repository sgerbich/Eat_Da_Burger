var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

var connection2 =
  {
    production: {
      username: "ojr7hbmab1wa8pa2",
      password: "rm6yqc4v5tiuvpgh",
      database: "lxgb2h1fmsdrhcsx",
      host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect: "mysql"
    }
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
module.exports = connection2;
