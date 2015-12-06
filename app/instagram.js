var request = require('request'); 

module.exports = {
	loadPosts : function(callback){
		var userId = '224515982';
		var accessToken = '6576391.247c887.673a0dad70cb4c5ca42342fc4d58002f'; 
		var url = 'https://api.instagram.com/v1/users/'+ userId + '/media/recent/?access_token=' + accessToken;
	
		request(url, function(error, response, body){
			if(!error && response.statusCode === 200){
				var json = JSON.parse(body); 
				callback(json); 
			}
		}); 
	}
}
