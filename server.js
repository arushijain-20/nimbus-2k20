var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./userSchema.js');
//Creating Server using express()
var app = express();

//use method for static files
app.use(express.static(path.join(__dirname, 'public')));

//Connecting to mongodb loaclhost database
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/nimbus" ,{ useNewUrlParser: true });


//Using Body parser for middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({strict:false}));


app.get('/register',function (req,res){
  console.log("okay");
  res.sendFile(path.resolve(__dirname+'/public/register.html'));
});

app.get('/events',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+'/public/events.html');
});
app.get('/',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+'/public/main.html');
});
app.get('/team',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+'/public/team.html');
});
app.get('/sponsors',function (req,res){
  console.log("okay");
  res.sendFile(path.resolve(__dirname+'/public/sponsors.html'));
});
//Post Method
app.post('/adduser',function(req, res){
    var data = req.body;
    console.log(req.body.team);
      var user=new User(data);
      console.log(user);
      user.save(function(err,user,numAffected){
      if(err){
            console.log(err);
            res.send('500');
          }
       else{
        console.log("added",user);
        res.send(user);
       }
});
});

// Listening to port-number
app.listen(3000,function(){
    console.log("localhost at 3000");
});
