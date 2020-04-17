const router = require("express").Router();
const burger = require("../model/burgers");

router.get("/", (req, res) => {
    burger.all((burgers) => {
      console.log(burgers);
const templateData = {burgers:JSON.stringify(burgers,null,2)};
res.render("index",templateData)
    });
});

module.exports = router;