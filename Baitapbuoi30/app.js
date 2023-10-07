//Load file .env
require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var flash = require("connect-flash");
var session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const model = require("./models/index")

var indexRouter = require("./routes/index")
var loginsRouter = require("./routes/login");
var forgotPass = require("./routes/forgotP");
var resetPass = require("./routes/resetP");
const localPassport = require('./passport/localPassport');

var app = express();
app.use(
  session({
    secret: "F8",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  const user = await model.User.findByPk(id)
  done(null, user)
});
passport.use(
  'local',
  localPassport,
);

// view engine setup
const expressLayouts = require("express-ejs-layouts");
const { reset } = require("./controllers/resetPController");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/",indexRouter)
app.use("/login", loginsRouter);
app.use("/forgot", forgotPass);
app.use("/reset", resetPass);


app.use(
  "/login",
  async function (req, res, next) {
    if (req.session.login) {
      res.redirect("/customers");
    } else {
      next();
    }
  },
  loginsRouter
);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
