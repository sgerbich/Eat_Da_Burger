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
        qS += cols;
        qS += ") ";
        qS += "VALUES (";
        qS += burg;
        qS += ") ";
        connection.query(qS, burg, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
    },
    updateOne: function(table, col, condition, cb) {
        var qS = "UPDATE " + table;
    
        qS += " SET ";
        qS += col;
        qS += " =1";
        qS += " WHERE ";
        qS += condition;
    
        connection.query(qS, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
}








module.exports = orm;