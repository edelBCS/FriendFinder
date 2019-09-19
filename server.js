var express = require("express");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

var app = express();

app.use("/", htmlRoutes);
app.use("/", apiRoutes);

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, "app/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });