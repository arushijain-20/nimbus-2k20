var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var FeedbackSchema = new Schema({
  fname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

var Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
