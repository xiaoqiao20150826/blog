(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home',{
			url: '/',
			templateUrl: 'views/Home.html'
		})
		.state('add' ,{
			url: '/add',
			templateUrl: 'views/addBlog.html'
		})
		.state('edit' ,{
			url: '/edit/:id',
			templateUrl: 'views/editBlog.html'
		})
		.state('about' ,{
			url: '/about/',
			templateUrl: 'views/about.html'
		});

		$urlRouterProvider.otherwise('/');
	}
})();
