(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home',{
			url: '/',
			templateUrl: 'views/home.html'
		})
		.state('add' ,{
			url: '/add',
			templateUrl: 'views/addBlog.html'
		})
		.state('edit' ,{
			url: '/edit',
			templateUrl: 'views/editBlog.html'
		});

		$urlRouterProvider.otherwise('/');
	}
})();
