User = require("./userSchema");

module.exports = function (req, res) {
  console.log(req.body);
  User.findOne({ admin: true })
    .then((admin) => {
      let ppass = admin.pass;
      if (req.body.pass == ppass) {
        User.find().then((users) => {
          res.json(users);
          return;
        });
      } else {
        res.json({ msg: "WP" });
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({ msg: "WP" });
    });

  return;
};
