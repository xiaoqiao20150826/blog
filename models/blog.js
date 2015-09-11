var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	blogTextArea: {
		type: String,
		required: true
	},
	blogTitle: {
		type: String,
		required: true
	},
	dateDeleted: {
		type: Date,
		default: null
	},
	dateTime: {
		type: Date,
		required: true
	},
	userName: {
		type: String,
		required: true
	}

});

mongoose.model('Blog', blogSchema);





