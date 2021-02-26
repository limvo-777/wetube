import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import passport from "passport";
import session from "express-session";
import path from "path";
import { localMiddlewares } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";

import mongoose from "mongoose";
import MongoStore from "connect-mongo";

import "./passport";

const app = express();

const CokieStore = MongoStore(session);
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(function (req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(localMiddlewares);

app.use(routes.home, globalRouter);
// app.get(routes.users, (req, res) => res.send("User"));
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

app.use(routes.api, apiRouter);

export default app;
