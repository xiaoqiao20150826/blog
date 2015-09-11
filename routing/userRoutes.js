var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var user = mongoose.model('user');
var router = express.Router();
var jwt = require('express-jwt');


//Post newUser to Database
router.post('/api/user', function (req, res, next) {	
	var createUser = new user(req.body);
	createUser.setPassword(req.body.userPassword);
	createUser.save(function(err, user) {
		if(err) return next(err);
		res.json({token: user.generateJWT()});
	});
});

//User Login to Database
router.post('/api/logIn', function(req, res, next) {
	if(!req.body.username || !req.body.password) return res.status(400).send("Please fill out every field");
	passport.authenticate('local', function(err, user, info) {
		if(err) return next(err);
		if(user) return res.json({token : user.generateJWT()});
		return res.status(400).send(info);
	})(req, res, next);
});

router.use(function(err, req, res, next) {
	res.status(500).send(err);
});

module.exports = router;
