(function() {
	'use strict';
	angular.module('app')
	.controller('addBlogController', addBlogController);

	addBlogController.$inject = ["HomeFactory", "$state"];

	function addBlogController(HomeFactory, $state) {
		var vm = this;
		vm.blog_object = {};

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