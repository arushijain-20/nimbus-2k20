User = require("./userSchema");

module.exports = function(req, res) {
  console.log(req.body);

  User.findOne({ admin: true }).then(admin => {
    let ppass = JSON.parse(JSON.stringify(admin)).pass;
    if (req.body.pass == ppass) {
      User.find().then(users => {
        res.json(users);
      });
    } else {
      res.json({ msg: "WP" });
    }
  });
};
