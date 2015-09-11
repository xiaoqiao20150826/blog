(function() {
	'use strict';
	angular.module('app')
	.controller('editBlogController', editBlogController);

	editBlogController.$inject = ["HomeFactory", "UserFactory", "$state","$stateParams"];

	function editBlogController(HomeFactory, UserFactory, $state, $stateParams) {
		var vm = this;
		vm.blog_object = {};
		vm.userName = UserFactory.status.username;
		vm.logOut = UserFactory.logout();

		vm.editBlog = function () {
			HomeFactory.editBlog($stateParams.id).then(function(data) {
				vm.blog_object = data;
			});
		};

		vm.editBlogSubmitUpdate = function () {
			HomeFactory.editBlogSubmit(vm.blog_object, $stateParams.id)
			.then(function(data) {
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