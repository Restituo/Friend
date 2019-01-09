// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static("app"));
//app.use(express.static("public"));
//app.use(express.static("assets"));

// Defines Routes to different JS files

require("./app/routing/apiRouting")(app);
require("./app/routing/htmlRouting")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  