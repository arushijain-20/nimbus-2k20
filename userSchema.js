var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  fname: { type: String, required: true },
  team: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  college: { type: String, required: true },
  city: { type: String, required: true },
  // hostel: { type: String, required: false }
  // event:{type:String,required:true},
});

var User = mongoose.model("User", userSchema);
module.exports = User;
