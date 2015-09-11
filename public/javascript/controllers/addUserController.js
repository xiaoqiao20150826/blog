(function() {
	'use strict';
	angular.module('app')
	.controller('addUserController', addUser);

	addUser.$inject = ["UserFactory", "$state"];

	function addUser(UserFactory, $state) {
		var vm = this;
		vm.user_object = {};

		vm.addNewUser = function () {
			UserFactory.register(vm.user_object)
			.then(function() {
				vm.user_object = {};
				$state.go('signIn');
			});
		};

		vm.cancel = function () {
			$state.go('signIn');
		};
	}

})();