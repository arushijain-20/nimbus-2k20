const Feedback = require("./models");

module.exports = function (req, res) {
  console.log(req.body);
  res.json({
    message: "This route is not working.",
  });

  return;
};
