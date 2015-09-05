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

		vm.deleteBlog = function (blog) {
			HomeFactory.deleteBlog(blog).then(function (){
				$state.go('home');
				HomeFactory.displayBlog();
			});
		};
	}

})();