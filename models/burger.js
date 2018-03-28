var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
      insertOne: function(col, burg, cb) {
        console.log("burgers.js" + col + burg );
        orm.insertOne("burgers", col, burg, function(res) {
          cb(res);
        });
      },
      updateOne: function(table, col, condition, cb) {
        orm.updateOne("burgers", "devoured", condition, function(res) {
          cb(res); 
        });
      }

}

module.exports = burger;