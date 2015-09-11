var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('user');

passport.use(new LocalStrategy(function(username, userPassword, done) {
	User.findOne({userName: username}, function(err, user) {
		if(err) return done(err);
		if(!user) return done(null, false, {message: 'Incorrect username.'});
		if(!user.validatePassword(userPassword)) return done(null, false, {message: 'Password does not match.'});
		return done(null, user);
	});
}));