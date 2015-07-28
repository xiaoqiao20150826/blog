var express =  require('express');
var router = express.Router();
var mongoose = require('mongoose');
var blog = mongoose.model('blog');


function findBlog (id) {
	for(var i = 0; i < blog_arr.length; i++) {
		if(blog_arr[i].id.value === id){
			return i;
		}
	}
	return null;
}

router.param('id', function (req, res, next, id) {
	req.blogIndex = findBlog(id);
	if(req.blogIndex === null) return next("Id does not exist");
	next();
});

router.get('/api', function (req, res, next) {
	var query = blog.find({dataDeleted: null});
	query.exec(function(err, blog) {
		if(err) return next(err);
		res.json(blog);
	});
});


router.post('/api/blog', function (req, res, next) {	
	var createdBlog = new blog(req.body);
	createdBlog.save(function(err, blog) {
		if(err) return next(err);
		res.send({id: blog._id});
	});
});

router.delete('/api/blog/:id', function (req, res) {
	for ( var i = 0; i < blog_arr.length; i++) {
		if (blog_arr[i].id.value === req.params.id) {
			blog_arr.splice(i, 1);
		}
	}	
	res.end();
});

router.put('/api/blog/:id', function (req, res) {
	var id = req.params.id;
	var i = req.blogIndex;
	blog_arr[i].blogTitle = req.body.blogTitle;
	blog_arr[i].blogTextArea = req.body.blogTextArea;
	res.send();
});

router.use(function(err, req, res, next) {
	res.status(400).send(err);
});

module.exports = router;