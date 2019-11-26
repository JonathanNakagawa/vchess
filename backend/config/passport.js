const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');

const User = require('../models/user.model');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = fs.readFileSync('./config/public.key', 'utf8');
opts.algorithms = ['RS256'];

module.exports = passport => {
    passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
          .then(user => {
            if (user) {
              return done(null, user);
            }
            return done(null, false);
          })
          .catch(err => console.log(err));
      })
    );
  };