const express = require("express");
const exphbs = require("express-handlebars");
// const routes = require("./routes");

// Import routes and give the server access to them.
const routes = require("./routes");
// require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars middleware
app.engine("handlebars", exphbs({ 
  defaultLayout: "main"
 }));

app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });