var orm = require("../config/orm.js");
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
      insertOne: function(table, col, burg, cb) {
        orm.insertOne("burgers", col, burg, function(res) {
          cb(res);
        });
      },
      updateOne: function(table, col, condition, cb) {
        orm.updateOne("burgers", col, condition, function(res) {
          cb(res);
        });
      }

}

module.exports = burger;