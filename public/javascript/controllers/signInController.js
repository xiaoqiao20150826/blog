(function() {
	'use strict';
	angular.module('app')
	.controller('signInController', signIn);

	signIn.$inject = ["UserFactory", "$state"];

	function signIn(UserFactory, $state) {
		var vm = this;
		vm.user_object = {};
		vm.pageTitle = "myBlog!";

		vm.login = function () {
			UserFactory.login(vm.user_object)
			.then(function() {
				vm.user_object = {};
				$state.go('home');

			});
		};

	}

})();