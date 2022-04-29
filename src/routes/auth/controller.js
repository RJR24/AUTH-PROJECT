const controller = require("./../controller");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const { times } = require("lodash");

module.exports = new (class extends controller {
  async register(req, res) {
    console.log("yess");
    let user = await this.User.findOne({ email: req.body.email });
    if (user) {
      return this.response({
        res,
        code: 400,
        message: "this user is already registerd",
      });
    }
    //  const {email, name, password} = req.body;
    //  user = new this.User({email, name, password});
    user = new this.User(_.pick(req.body, ["name", "email", "password"]));

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrpt.hash(user.password, salt);

    await user.save();

    this.response({
      res,
      message: "the user successfully registered",
      data: _.pick(user, ["_id", "name", "email"]),
    }); 
  }

  async login(req, res) {
    res.send("login");
  }
})();
