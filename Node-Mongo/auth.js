// using Passport for Authorization
const passport = require("passport");
const localStrategy = require("passport-local").Strategy; //used for username and passport based authentication
const Person = require("./Models/personSchema");

// username & password verification function
passport.use(new localStrategy(async (username, password, done) => {
    try {
      //  commented the console.log because it'll show the username and password of the users in the logs and it is a bad practice
      // console.log("Received credentials", username, password);
      const user = await Person.findOne({ username: username }); // here we are comparing the username provided in person schema
      if (!user) return done(null, false, { message: "Incorrect username" }); // done is a callback function and it only takes three parameters :done(error,user,info) if user found then error=null,user=true

      // const isPasswordMatch = user.password === password ? true : false;
      const isPasswordMatch = await user.comparePassword(password);
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
