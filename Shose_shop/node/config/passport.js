const db = require('../models');
const User = db.users;
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');

passport.serializeUser((user, done) =>{
    console.log('user :', user);
    done(null, user.dataValues.id)  
})

passport.deserializeUser((idIncoki, done) =>{
const userrecord = User.findOne({where : {id : idIncoki}})
console.log('idIncoki :', idIncoki);

if(userrecord){
  return done(null, userrecord)
} else{
  return done(null, false)
}
})


passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, async () => {
        // passport callback function
        // console.log('profile :', profile);
        // try {
        //     const user = await User.findOne({where: {id : Number(profile.id)}})
        //     if(user){ console.log('message : user already taken');
        //     }
        //     else{
        //        const newUser = await User.create({name: profile.name.familyName + profile.name.givenName})
        //        console.log('newUser :', newUser);
        //     }
        // } catch (error) {
        //     throw Error(error.message)
        // }
        
        
    })
);
passport.use(
  new facebookStrategy({
      // options for google strategy
      clientID: keys.facebook.clientID,
      clientSecret: keys.facebook.clientSecret,
      callbackURL: '/auth/facebook/redirect'
  }, () => {
      // passport callback function

  })
);
