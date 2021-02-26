"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _User = _interopRequireDefault(require("./models/User"));

var _passportGithub = _interopRequireDefault(require("passport-github"));

var _userController = require("./controllers/userController");

var _routes = _interopRequireDefault(require("./routes"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

_dotenv["default"].config();

_passport["default"].use(_User["default"].createStrategy());

_passport["default"].use(new _passportGithub["default"]({
  clientID: process.env.GH_ID,
  clientSecret: process.env.GH_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].githubCallback)
}, _userController.githubLoginCallback));

_passport["default"].use(new GoogleStrategy({
  clientID: process.env.GG_ID,
  clientSecret: process.env.GG_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].googleCallback)
}, _userController.googleLoginCallback));

_passport["default"].serializeUser(function (user, done) {
  done(null, user);
});

_passport["default"].deserializeUser(function (id, done) {
  _User["default"].findById(id, function (err, user) {
    done(err, user);
  });
});