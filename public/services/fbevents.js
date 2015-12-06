angular
	.module('programBoard')
	.factory('FBEvents', function($http){
		return{
			loadEvents : function(){
				var pageId = '484621014888154';
				var accessToken = 'CAANMseuvoOUBAHNmIKMjZCd5D1f3Yw0FHiqJZAQZAFJ7rMnQkP7uZCTrj1pcMiYIQGi3usgOLRBuV6XXSxUZA3UYWYUOHhK0wZB2TrLyDPggVJFxhKgjcVzFZBdCNU9Mbu4PrWShnZBTZAianspZAjR8ulsJ8YS4VUUWVaKZCcZCfhtTYqj867rvlPmkRDJYsdV1lP0ZD'; 
				var url = 'https://graph.facebook.com/v2.5/' + pageId + '/events/?access_token=' + accessToken;
				
				return $http.get(url).then(function(response){
					console.log(response.data.data); 
					return response.data.data;
				});
			}
		}
	})