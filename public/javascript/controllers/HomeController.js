(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory", "$state"];

	function HomeController(HomeFactory, $state) {
		var vm = this;
		vm.pageTitle = 'myBlog!';
		vm.listBlog = HomeFactory.listBlog;

		vm.deleteBlog = function (blog) {
			HomeFactory.deleteBlog(blog).then(function (){
				$state.go('home');
				HomeFactory.displayBlog();
			});
		};
	}

})();