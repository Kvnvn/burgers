const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const homecontroller = require("./controllers/homeControllers");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(homecontroller)


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });