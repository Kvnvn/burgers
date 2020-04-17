const express = require("express");
const exphbs = require("express-handlebars");
const homecontroller = require("./controllers/homeControllers")

const app = express();

const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(homecontroller)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });