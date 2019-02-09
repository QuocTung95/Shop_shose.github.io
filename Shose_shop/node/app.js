const createError = require('http-errors');
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const cors = require('cors')
const path = require('path');
var cookieParser = require('cookie-parser')
const keys = require('./config/keys')
const logger = require('morgan');
const env = require('dotenv').load();
var exphbs = require('express-handlebars')
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const passportSetup = require('./config/passport');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Open API
app.use(cors())
app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-type');
      res.setHeader('Access-Control-Allow-Headers', 'X-Signature');
      res.setHeader('Access-Control-Allow-Headers', 'X-Key');
      next();
    }
);

app.use(logger('dev'));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));
// Boydy parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport khởi tạo
// app.use(session({secret : 'quoctung'}))
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());


app.get('/private', (req, res) =>{
  if(req.isAuthenticated()){
    res.send('wellcom')
  } else {
    res.send('pls log in')
  }
})

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});






module.exports = app;
