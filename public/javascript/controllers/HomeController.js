(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory", "UserFactory", "$state"];

	function HomeController(HomeFactory, UserFactory, $state) {
		var vm = this;
		vm.pageTitle = 'myBlog!';
		vm.listBlog = HomeFactory.listBlog;
		vm.userName = UserFactory.status.username;
		vm.logOut = UserFactory.logout;

		if (vm.userName === undefined) {
			$state.go('signIn');
		}

		vm.deleteBlog = function (blog) {
			HomeFactory.deleteBlog(blog).then(function (){
				$state.go('home');
				HomeFactory.displayBlog();
			});
		};
	}

})();