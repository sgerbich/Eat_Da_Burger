var mysql = require("mysql");
JAWSDB_URL='mysql://ojnhfpec6ry3nvav:hujemz3q6v5rsri6@uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/w6s989xbou43dpm3'
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
