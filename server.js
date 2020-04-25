const express = require("express");

const PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
var exphbs = require("express-handlebars");
app.engine("hanldebars", exphbs({ extended: true }));
app.set("view engine", "handlebars");
