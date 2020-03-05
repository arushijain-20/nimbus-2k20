var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./userSchema.js");
var admin = require("./admin");
//Creating Server using express()
var app = express();

//use method for static files
app.use(express.static(path.join(__dirname, "public")));

//Connecting to mongodb loaclhost database
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nimbus", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(conn => {
    console.log("Database Connected..");
  });

//Using Body parser for middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/register", function(req, res) {
  console.log("Register");
  res.send("Coming Soon...");
  // res.sendFile(path.resolve(__dirname + "/public/register.html"));
});

app.get("/events", function(req, res) {
  console.log("events");
  res.sendFile(__dirname + "/public/departmental_events.html");
});
app.get("/schedule", function(req, res) {
  console.log("schedule");
  res.sendFile(__dirname + "/public/events.html");
});
app.get("/workshops", function(req, res) {
  console.log("workshops");
  res.sendFile(__dirname + "/public/workshops.html");
});
app.get("/lectures", function(req, res) {
  console.log("lectures");
  res.sendFile(__dirname + "/public/lectures.html");
});
app.get("/", function(req, res) {
  console.log("Home");
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/about", function(req, res) {
  console.log("About");
  res.sendFile(__dirname + "/public/about.html");
});
app.get("/team", function(req, res) {
  console.log("team");
  res.sendFile(__dirname + "/public/team.html");
});
app.get("/sponsors", function(req, res) {
  console.log("sponsors");
  res.sendFile(path.resolve(__dirname + "/public/sponsors.html"));
});
app.get("/admin", function(req, res) {
  console.log("Admin");
  res.sendFile(path.resolve(__dirname + "/public/admin.html"));
});
app.post("/admin", admin);

//Post Method
app.post("/adduser", function(req, res) {
  var data = req.body;
  console.log("post request");
  console.log(req.body);
  var user = new User(data);
  user
    .save()
    .then(result => {
      console.log("added", user);
      res.status(200).json({
        message: "successfully registered"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Some Error Occured"
      });
    });
});

app.use("/", (req, res) => {
  console.log("404: Not found");
  res.sendFile(path.resolve(__dirname + "/public/e404.html"));
});

// Listening to port-number
app.listen(3000, function() {
  console.log("localhost at 3000");
});
