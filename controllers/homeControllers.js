const router = require("express").Router();
const burger = require("../model/burgers");

router.get("/", (req, res) => {
    burger.all((burgers) => {
      console.log(burgers);
const templateData = {burgers: burgers}
res.render("index",templateData)
    });
});

module.exports = router;