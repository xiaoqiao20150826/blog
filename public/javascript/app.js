(function() {
	'use strict';
	angular.module('app', ['ui.router', 'duScroll'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('welcome',{
			url: '/',
			templateUrl: 'views/welcome.html'
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
		})
		.state('signIn' ,{
			url: '/signIn' ,
			templateUrl: 'views/signIn.html'
		});


		$urlRouterProvider.otherwise('/');
	}
})();
