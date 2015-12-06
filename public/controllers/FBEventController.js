angular
	.module('programBoard')
	.controller('FBEventController', function(events){
		var vm = this; 

		vm.fbEvents = events; 
	});

