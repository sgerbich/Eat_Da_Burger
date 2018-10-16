var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, burg, cb) {

        var qS = "INSERT INTO " + table;
        qS += " (";
        qS += cols.toString();
        qS += ") ";
        qS += "VALUES (";
        qS += "?";
        qS += ") ";
        console.log(qS);
        connection.query(qS, [burg], function(err, result) {
            if (err) {
              throw err;
            }
      console.log("result" + result);
            cb(result);
          });
    },
    updateOne: function(table, col, condition, cb) {
        console.log(table, col, condition, cb);
        var qS = "UPDATE " + table;
    
        qS += " SET ";
        qS += col;
        qS += " =1";
        qS += " WHERE ";
        qS += condition;
    console.log(qS);
        connection.query(qS, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
}








module.exports = orm;