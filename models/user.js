var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	userName: {
		type: String,
		required: true,
		unique: true
	},
	passwordHash: String,
	salt: String,
});

userSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validatePassword = function(password) {
	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
	return (hash === this.passwordHash);
};

userSchema.methods.generateJWT = function() {
	var today = new Date();
	var exp = new Date(today);
	exp.setDate(today.getDate() + 14); //expires in 14 days
	return jwt.sign({
		id: this._id,
		username: this.userName,
		exp: parseInt(exp.getTime() / 1000) //get the time in milliseconds and convert to seconds
	}, 'Hashbrowns');
};

mongoose.model('user', userSchema);


