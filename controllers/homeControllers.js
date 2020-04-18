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
router.put("/api/burgers/:id",(req,res)=>{
    // const newDevoured = req.body.devoured;
    // if (req.body.burger_name !==undefined || !req.body.devoured){
    //     return res.sendStatus(405)
    // }
    const id = parseInt(req.params.id);
    if (Number.isNaN(id)){
        return res.sendStatus(200)
    }
    burger.markDevoured(req.params.id, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });


});
module.exports = router;