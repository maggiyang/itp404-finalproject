var express = require('express'); 
var instagram = require('./app/instagram.js'); 
var facebook = require('./app/facebook.js')

var app = express(); 

var port = process.env.PORT || 3000; 

app.use(express.static(__dirname + '/public')); 

app.get('/instagram', function(req, res){
	instagram.loadPosts(function(instagramPosts){
		res.json(instagramPosts); 
	}); 		
}); 

app.get('/facebook', function(req, res){
	facebook.loadEvents(function(facebookEvents){
		res.json(facebookEvents); 
	})

})

app.listen(port, function(){
	console.log('Listening on port'); 
}); 