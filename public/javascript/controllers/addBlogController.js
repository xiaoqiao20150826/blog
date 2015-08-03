(function() {
	'use strict';
	angular.module('app')
	.controller('addBlogController', addBlogController);

	addBlogController.$inject = ["HomeFactory", "UserFactory", "$state"];

	function addBlogController(HomeFactory, UserFactory , $state) {
		var vm = this;
		vm.blog_object = {};
		vm.userName = UserFactory.status.username;

		vm.addBlog = function () {
			HomeFactory.addNewBlog(vm.blog_object)
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