var express = require("express");
var path = require("path");

var friendFinder = require("../data/friends.js");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", (req, res) => {
    res.json(friendFinder);
});

app.post("/api/friends", (req, res) => {

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  