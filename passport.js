import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";
import dotenv from "dotenv";
dotenv.config();
passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
