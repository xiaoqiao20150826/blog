(function() {
	'use strict';
	angular.module('app')
	.controller('addBlogController', addBlogController);

	addBlogController.$inject = ["HomeFactory", "UserFactory", "$state"];

	function addBlogController(HomeFactory, UserFactory , $state) {
		var vm = this;
		vm.blog_object = {};
		vm.userName = UserFactory.status.username;
		vm.logOut = UserFactory.logout();

		vm.addBlog = function () {
			console.log(vm.userName);
			HomeFactory.addNewBlog(vm.blog_object, vm.userName)
			.then(function() {
				vm.blog_object = {};
				$state.go('home');
				HomeFactory.displayBlog();
			});
		};

		vm.goHome = function () {
			$state.go('home');
			HomeFactory.displayBlog();
		};


	}
})();