const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models');
const User = db.users;
const cors = require('cors')
const bodyParser = require('body-parser')
const router = express.Router();
var cookieParser = require('cookie-parser')
const CookieStrategy = require('passport-cookie')

//Passport
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// const session = require('express-session')
router.use(cookieParser())

// Boydy parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Passport khởi tạo
// router.use(session({secret : 'quoctung'}))
// router.use(passport.initialize());
// router.use(passport.session());

const authCheck = (req, res, next) => {
  if(!req.user){
      res.send('you need to login')
  } else {
      next();
  }
};

router.get('/profile', authCheck, (req, res) => {
  res.send('welcome');
});

// auth logout
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// auth with google+
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect to
router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send(req.user);
});



// auth with google+
router.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['profile']
}));

// callback route for facebook to redirect to
router.get('/auth/facebook/redirect', (req, res) => {
  res.send('you reached the redirect URI');
});





passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    //are there other options?
    //emailField did not seem to do anything
    passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
},
    async (req, email, password, done) =>{
        const user = await User.findOne({where : {email : email}})
        if(!user){
            return done(null, false, { message: 'Incorrect username.' })
        }
        const passwordUser = user.dataValues.password
        const isValidPass = await bcrypt.compare(password, passwordUser);
        if(user && isValidPass){
            return done(null, user)
        }
        else{
            return done(null, false , { message: 'Incorrect password.' })
        }
        }
    ))


router.get('/login' ,(req, res)=>{res.sendFile(__dirname + '/index.html')})
router.post('/login', cors(), function (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.json({message: 'something wrong  ', status: false}) }
    if (!user) { return  res.json({message: 'user không tồn tại', status: false})}//res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return res.json({message: 'sth wrong', status: false}) }
      res.json({message: 'hihi lam gi lam di' , status: true})
      // return res.redirect('/user/');
    });
  })(req, res, next);
});

// router.get("/profile",
//   passport.authenticate("cookie", { session: false }),
//   function(req, res) {
//     res.json(req.user);
//   });


// Profile
// router.get('/profile', passport.authenticate('local', { session: true }), (req, res, next) => {
//   res.json({user: req.user});
// });

router.post('/register',  async (req, res) => {
  
    const data = req.body;
    let {email , name , password , age, phone, active} = req.body
  
    const emailUpdate = await User.findOne({ where: { email } });
    
    try {
      // validation cho data
      if (emailUpdate) {
        return res.status(400).json({  httpCode: 400, message: 'email đã tồn tại trong hệ thống'  })
      }
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({  httpCode: 400, message: 'email không đúng định dạng'  })
      }
      const nameRegex = /^([a-zA-Z ]){2,30}$/;
      if (!nameRegex.test(name)) {
        return res.status(400).json({  httpCode: 400, message: 'Tên không đươc chứa ký tự đặc biệt'  })
      }
      var salt = await bcrypt.genSalt(10);
      let hashPass = await bcrypt.hash(password, salt);
        var response = await User.create({
            name,
            age,
            email,
            phone,
            password: hashPass,
            active
        });

        // await sendEmail(email, password)
        if (response) {
          res.status(200).json({ httpCode: 200, result: response , message: 'Đăng ký thành công, mở email để kích hoạt'})
        } else
        res.status(200).json({ httpCode: 400, message: 'Lỗi' })
    } catch (error) {
      throw Error(error.message)
    }
  })

module.exports = router;
