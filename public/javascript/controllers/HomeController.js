(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory", "$state"];

	function HomeController(HomeFactory, $state) {
		var vm = this;
		vm.title = 'Welcome to our Blog!';
	}
})();