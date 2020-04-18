const router = require("express").Router();
const burger = require("../model/burgers");

router.get("/", (req, res) => {
    burger.all((burgers) => {
      console.log(burgers);
const templateData = {burgers: burgers}
res.render("index",templateData)
    });
});
router.post("/api/burgers", (req,res)=>{
    const  newBurgerText = req.body.burger_name;
    burger.create(newBurgerText,(results)=>{
       res.redirect(303,"/"); 
    })
})
module.exports = router;