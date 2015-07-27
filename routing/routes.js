var express =  require('express');
var router = express.Router();
var Guid = require('guid');
var blog_arr = [];

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

router.get('/', function (req, res){
	res.send(blog_arr);
});

router.post('/blog', function (req, res) {	
	req.body.id = Guid.create();
	blog_arr.push(req.body);
	console.log(blog_arr);
	res.end();
});

router.delete('/blog/:id', function (req, res) {
	for ( var i = 0; i < blog_arr.length; i++) {
		if (blog_arr[i].id.value === req.params.id) {
			blog_arr.splice(i, 1);
		}
	}	
	res.end();
});

router.put('/blog/:id', function (req, res) {
	var id = req.params.id;
	var i = req.blogIndex;
	blog_arr[i].blogTitle = req.body.blogTitle;
	blog_arr[i].blogTextArea = req.body.blogTextArea;
	res.send();
});

router.use('/', function(err, req, res, next) {
	res.status(400).send(err);
});

module.exports = router;