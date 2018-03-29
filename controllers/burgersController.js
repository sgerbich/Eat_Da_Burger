var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/burgers", function (req, res) {
    console.log("hitpost");
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    });
});
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(condition, function () {

       res.redirect("/");
       
    });
});

module.exports = router;