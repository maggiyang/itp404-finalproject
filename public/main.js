angular
	.module('programBoard', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: '/templates/index.html',
				controller: 'FBEventController',
				controllerAs: 'vm',
				resolve: {
					events: function(FBEvents){
						return FBEvents.loadEvents(); 
					}
				}
			})
			// .when('/events', {
			// 	templateUrl: '/templates/events.html',
			// 	controller: 'FBEventController',
			// 	controllerAs: 'vm',
			// 	resolve: {
			// 		events: function(FBEvents){
			// 			return FBEvents.loadEvents(); 
			// 		}
			// 	}
			// })
			.otherwise({
				redirectTo: '/'
			}); 
	}); 


angular
	.module('programBoard')
	.controller('InstagramController', function($http){
	var vm = this;

	
	$http.get('/instagram').then(function(res){
		// console.log(res); 
		vm.instagrams = res.data.data; 
		// console.log(vm.instagrams);

	}); 
}); 

// app.controller('FacebookController', function($http){
// 	var vm = this; 

// 	$http.get('/facebook').then(function(res){
// 		vm.fbEvents = res.data.data; 
// 		console.log(vm.fbEvents);


// 	})


// });