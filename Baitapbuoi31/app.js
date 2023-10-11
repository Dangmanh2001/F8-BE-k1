require("dotenv").config();
const https = require("https");
const expressSanitizer = require("express-sanitizer");
const fs = require("fs");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var flash = require("connect-flash");
var session = require("express-session");
var expressLayouts = require("express-ejs-layouts");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var loginRouter = require("./routes/login");
const facebookPassport = require("./passport/facebookPassport");
const passport = require("passport");
const githubPassport = require("./passport/githubPassport");

const options = {
  key: fs.readFileSync("./config/cert.key"),
  cert: fs.readFileSync("./config/cert.crt"),
};

var app = express();

app.use(
  session({
    secret: "Manh",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());
app.use(expressLayouts);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSanitizer());

// app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", express.static("public"), indexRouter);

passport.serializeUser(function (user, done) {
  process.nextTick(function () {
    return done(null, {
      id: user.id,
    });
  });
});

passport.deserializeUser(async function (user, done) {
  process.nextTick(function () {
    return done(null, user);
  });
});

passport.use("facebook", facebookPassport);
passport.use("github", githubPassport);

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

https.createServer(options, app).listen(8080, () => {
  console.log(`HTTPS server started on port 8080`);
});

module.exports = app;
