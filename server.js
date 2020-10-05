var express = require("express");
var burgerRouter= require("./controllers/burgers_controller");
const burgers = require("./models/burger");
const handlebars = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8081;



app.set("view engine", "handlebars");


app.engine("handlebars", handlebars({
layoutsDir: __dirname + "/views/layouts",
}));

app.use(express.static('public'))

app.use("/", burgerRouter);




app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });

