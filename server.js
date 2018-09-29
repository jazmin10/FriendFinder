/* Friend Finder 
Starting our server */

// npm packages required
var express = require("express");
var bodyParser = require("body-parser");

// Tells node we are creating an express server
var app = express();

// Setting our port
var PORT = process.env.PORT || 3000;

// For my static files
app.use(express.static("app/public"));

// bodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Requires the files that contain the routing of our Friend Finder
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start listening to our port
app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});