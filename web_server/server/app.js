var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var passport = require('passport');
var path = require('path');

// Add Routers
var authRouter = require('./routes/auth');
var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');

var app = express();

var config = require('./config/config.json');
require('./models/main.js').connect(config.mongodbUri);

app.use(bodyParser.json());

// view engine setup: _dirname is build folder path in client end
app.set('views', path.join(__dirname, '../client/build/'));
app.set('view engine', 'jade');
app.use(
  '/static',
  express.static(path.join(__dirname, '../client/build/static/'))
);

// TODO: remove this after development is done, allow open two server at different port
app.use(cors());

// load passport strategies
app.use(passport.initialize());
var localSignUpStrategy = require('./passport/signup_passport.js');
var localLoginStrategy = require('./passport/login_passport.js');
passport.use('local-signup', localSignUpStrategy);
passport.use('local-login', localLoginStrategy);

const authChecker = require('./middleware/auth_checker.js');

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/news', authChecker);
app.use('/news', newsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
});

module.exports = app;
