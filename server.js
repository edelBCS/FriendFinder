var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, "app/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });