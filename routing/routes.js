var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Blog = mongoose.model('Blog');


router.param('id', function (req, res, next, id) {
	Blog.findOne({_id: id}, function(err, blog){
		if(err) return next(err);
		req.blog = blog;
		next();
	});
});
//Get from Database
router.get('/api/', function (req, res, next) {
	var query = Blog.find({dateDeleted: null});
	query.exec(function(err, blog) {
		if(err) return next(err);
		res.json(blog);
	});
});

//Get from Database by id
router.get('/api/:id', function (req, res) {
	res.json(req.blog);
});

//Post to Database
router.post('/api/blog', function (req, res, next) {	
	var createdBlog = new Blog(req.body);
	createdBlog.dateTime = new Date();
	createdBlog.save(function(err, blog) {
		if(err) return next(err);
		res.send({id: blog._id});
	});
});

//Delete blog but remains on the server
router.post('/api/blog/deleteBlog/:id', function(req, res, next) {
	Blog.update({_id : req.blog.id}, {dateDeleted: new Date()}, function(err, numberAffected) {
		if(err) return next(err);
		if(numberAffected.nModified > 1) res.status(400).send("YOU HAVE DELETED TOO MANY TASKS!!!");
		else if(numberAffected.nModified !== 1) res.status(400).send("Nothing has been deleted. You have failed.");
		else res.send("You have deleted the blog.");
	});
});

//Update post on Database
router.put('/api/blog/:id', function (req, res) {
	var id = req.params.id;
	var blogTitle = req.body.blogTitle;
	var blogTextArea = req.body.blogTextArea;
	Blog.update({
		_id : id},{
			blogTitle : blogTitle,
			blogTextArea : blogTextArea
		}, function (err) {
			if(err) return next(err);
		});
	res.send();
});

router.use(function(err, req, res, next) {
	res.status(400).send(err);
});

module.exports = router;