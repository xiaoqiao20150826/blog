var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
//defines mongoose
var mongoose = require('mongoose');
var passport = require('passport');
//define the models
require('./models/blog');
require('./models/user');
require('./config/passport');
//connect to the server
mongoose.connect('mongodb://philip:KraftWerk83@ds041581.mongolab.com:41581/philip');

var routes = require('./routing/routes');
var userRoutes = require('./routing/userRoutes');


app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(bodyParser.json());
var blogexpress = require('./routing/routes.js');

app.use('/', blogexpress);

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

app.use('/', routes);
app.use('/', userRoutes);
var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});