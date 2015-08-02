(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('signIn',{
			url: '/',
			templateUrl: 'views/signIn.html'
		})
		.state('home' ,{
			url: '/home',
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
		})
		.state('addUser' ,{
			url: '/addUser' ,
			templateUrl: 'views/addUser.html'
		});

		$urlRouterProvider.otherwise('/');
	}
})();
