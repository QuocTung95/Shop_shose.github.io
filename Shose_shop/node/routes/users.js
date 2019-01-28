const express = require('express');
const router = express.Router();
const db = require('../models')
const cors = require('cors')
const User = db.users;
const fs = require('fs')
const jwt = require ('passport-jwt')
var bCrypt = require('bcrypt-nodejs');

const cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars')
const LocalStrategy = require('passport-local').Strategy

const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')


router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());
// Boydy parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Log in
router.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
router.use(passport.initialize());
 
router.use(passport.session({secret : "techmaster"})); // persistent login sessions



router.post('/login', async (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    const data = req.body
    const {email , password} = req.body
    try {
      const loginUser = await User.findOne({ where: { email : email } });
      if(!loginUser){
        return res.status(400).json({ httpCode: 400, message: "Email không tồn tại" })
      } 
    
    const match = await bCrypt.compare(password, loginUser.password);
    if(match) {
        //login
        return res.status(400).json({ httpCode: 400, message: "Đăng nhập thành công" })
    }else{
      return res.status(400).json({ httpCode: 400, message: "Mật khẩu ko đúng" })
    }
    } catch (error) {
      throw Error(error.message)
    }

    // res.redirect('/user/' + req.user.username);
  });


router.get('/signup', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})
router.post('/signup', passport.authenticate('jwt', { session: false }))

passport.use(new LocalStrategy(
(username, password, done) =>{
  const user = User.findOne({where : {email : username}})
    if(user){
      return done(null, user)
    }else {
      return done(null, false)
    }
  }
))
passport.serializeUser((user, done)=>{
  done(null, user.usr)
})





// app.get('/findUser', async (req, res, next) => {
//   passport.authenticate('jwt', { session: false }, (err, user, info) => {

//     try {
//       if (info != undefined) {
//         console.log(info.message);
//         res.status(401).send(info.message);
//       } else {
//         if (user.username === req.query.username) {
//           User.findOne({
//             where: {
//               username: req.query.username,
//             },
//           }).then(user => {
//             if (user != null) {
//               console.log('user found in db from findUser');
//               res.status(200).send({
//                 auth: true,
//                 first_name: user.first_name,
//                 last_name: user.last_name,
//                 email: user.email,
//                 username: user.username,
//                 password: user.password,
//                 message: 'user found in db',
//               });
//             } else {
//               console.log('no user exists in db with that username');
//               res.status(401).send('no user exists in db with that username');
//             }
//           });
//         } else {
//           console.log('jwt id and username do not match');
//           res.status(403).send('username and jwt token do not match');
//         }
//       }
//     } catch (error) {
//       throw Error(error.message)
//     }
//   })(req, res, next);
// });

// router.post('/loginUser', (req, res, next) => {
//   passport.authenticate('login', (err, user, info) => {
//     if (err) {
//       console.log('error');
//       console.log(err);
//     }
//     if (info != undefined) {
//       console.log(info.message);
//       if (info.message === 'bad username') {
//         res.status(401).send(info.message);
//       } else {
//         res.status(403).send(info.message);
//       }
//     } else {
//       req.logIn(user, err => {
//         User.findOne({
//           where: {
//             email: req.body.username,
//           },
//         }).then(user => {
//           const token = jwt.sign({ id: user.id }, jwtSecret.secret);
//           res.status(200).send({
//             auth: true,
//             token: token,
//             message: 'user found & logged in',
//           });
//         });
//       });
//     }
//   })(req, res, next);
// });

const nodemailer = require('nodemailer')
const PORT = 3000
const sendEmail = async (receiverEmail, password) => {	    
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "quoctung.haui@gmail.com", 
                pass: "Hung2011"
            }
        })
        let mailOptions = {
            from: '"Techmaster Test" <quoctung.haui@gmail.com>', //Email người gửi
            to: receiverEmail, 
            subject: 'Activate email',         
            html: `<h1>Please click here to activate your account:</h1>
                   http://${require('os').hostname()}:${PORT}/users/activateUser?password=${password}&email=${receiverEmail}` 
        }
        let info = await transporter.sendMail(mailOptions)
        console.log('Message sent: %s', info.messageId);
    } catch(error) {
        throw error
    }
}




/* GET user listing. */
router.get('/user', async (req, res, next) =>{
  try {
    const query = req.query; // Lấy thông tin query trên url
    const id = req.params;
    const response = await User.findAll();
    console.log('response :', response);
    res.status(200).json({ result: response, httpCode: 200 })
  } catch (error) {
    throw Error(error.message)
  }
});

router.get('/user/:id', async (req, res) =>{
  try {
    // Lấy thông tin params trên url
    const {id} = req.params;
    const response = await User.findOne({ where: { id } })
    res.status(200).json({ result: response, httpCode: 200 })
  } catch (error) {
    throw Error(error.message)
  }
})

router.post('/user', cors() ,  async (req, res) => {
  
  const data = req.body;
  let {email , name , password} = req.body

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
    // if(validation.status){
    //add user
    //  const encodePassword = await bCrypt.hash(password , 10)
      var response = await User.create(data);
      await sendEmail(email, password)
      if (response) {
        res.status(200).json({ httpCode: 200, result: response , message: 'Đăng ký thành công, mở email để kích hoạt'})
      } else
      res.status(200).json({ httpCode: 400, message: 'Lỗi' })
  } catch (error) {
    throw Error(error.message)
  }
})

const activateUser = async (email, password) => {
  try {
      let foundUser = await User.findOne({email, password})
      if (!foundUser) {
          throw "Không tìm thấy User để kích hoạt"
      }    
      if (foundUser.active === false) {
          foundUser.active = true
          await foundUser.save()            
      } else {
          throw "User đã kích hoạt"//foundUser.active = 1
      }
  } catch(error) {        
      throw error       
  }
}

router.get('/activateUser', async (req, res) => {
  const {email, password  } = req.params
  try {
    await activateUser(email, password)
    res.status(200).json({ httpCode: 400, message: 'Kich hoat thanh cong' })
  } catch (error) {
    throw error       
  }
})

router.put('/user/:id', cors(), async (req, res, next ) => {
  const data = req.body;
  let {email , name} = req.body;
  const {id} = req.params;
  name = name.toLowerCase()
  // const validation = validateData(data);

  // Select * from user where id = id;
  const emailUpdate = await User.findOne({ where: { email } });

  try {
    const user = await User.findOne({ where: { id } })
    if (!user) {
      return res.status(400).json({ httpCode: 400, message: 'user khong ton tai trong he thong', name: "UPDATE_user_ERROR" })
    }

    // validation data
    

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
    
    // UPDATE user
    // SET name = data.name, email = data.emai, ...
    // WHERE condition;
    const response = await User.update(data, { where: { id }, returning: true });
    if (response)
      res.status(200).json({ response, httpCode: 200 })
    else next();
  } catch (error) {
    throw Error(error.message)
  }
})


// DELETE USER
router.delete('/deleteuser/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await User.destroy({ where: { id } })
    res.status(200).json({ httpCode: 200, message: "xoa thanh cong" });
  } catch (error) {
    throw Error(error.message)
  }
})



async function validateData(data) {
  const result = {
    status: true,
    failures: [],
  }
  // Dinh nghia truoc bat buoc cua shipper do minh dat ra yeu cau
  // const requireProperty = [
  //   { field: 'name', title: 'Name' },
  //   { field: 'email', title: 'Email' },
  //   { field: 'mobile', title: 'Mobile' },
  // ]

  // requireProperty.forEach((pro) => {
  //   if (!data[pro.field] || data[pro.field] === '') {
  //     result.status = false;
  //     result.failures.push({ field: pro.field, message: `Please input ${pro.title}` });
  //   }
  // })
  // Kiem tra email dung dinh dang va co ton tai trong he thong hay khong
  if (!await isValidEmail(data.email)) {
    //
    result.status = false;
    result.failures.push({ field: 'email', message: 'Email da ton tai' })
  }

  // // Kiem tra nam co bi trung hay khong
  if (!isValidName(data.name)) {
    result.status = false;
    result.failures.push({ field: 'name', message: 'Name khong duoc chua ky tu dac biet' })

  }
  return result;
}



async function isValidEmail(email) {
  try {
    const response = await User.findOne({ where: { email } });
    if (response) {
      return false;
    }
    const emailRegex = /^[\w\.+@[\w+\.]+/;
    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  } catch (error) {
    throw Error(error.message);
  }

}
function isValidName(name) {
  name = name.toLowerCase()
  try {
    const nameRegex = /[*[!@#$&*]/;
    if (!nameRegex.test(name)) {
      return false;
    }
    return true;
  } catch (error) {
    throw Error(error.message);
  }
}

module.exports = router;
