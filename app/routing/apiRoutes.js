var apiRoutes = require("express").Router();
var path = require("path");

var friendFinder = require("../data/friends.js");

// var app = express();

// var PORT = 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

apiRoutes.get("/api/friends", (req, res) => {
    res.json(friendFinder);
});

apiRoutes.post("/api/friends", (req, res) => {

});

module.exports = apiRoutes;

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
  