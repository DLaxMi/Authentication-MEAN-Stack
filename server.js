var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/frontend'));
app.use('/api', appRoutes)

mongoose.connect('mongodb://localhost:27017/authentication', function(err){
	if(err){
		console.log("connect to mongodb" + err);
	}
	else{
		console.log("success");
	}
	
});
app.get('*', function(req, res){
	res.sendfile(path.join(__dirname + '/frontend/app/views/index.html'));
});





app.listen(3000);
