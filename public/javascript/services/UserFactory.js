(function() {
	'use strict';
	angular.module('app')
	.factory('UserFactory', UserFactory);

	UserFactory.$inject = ['$http', '$q'];

	function UserFactory($http, $q) {
		var o = {};
		o.status = {};
		if(getToken()) {
			o.status.isLoggedIn = true;
			o.status.username = getUsername();
		}
		o.setToken = setToken;
		o.getToken = getToken;
		o.removeToken = removeToken;
		o.register = register;
		o.login = login;
		o.logout = logout;
		return o;

		function register(user) {
			var q = $q.defer();
			$http.post('/api/user', user).success(function(res) {
				setToken(res.token);
				o.status.isLoggedIn = true;
				q.resolve();
			});
			return q.promise;
		}
		function login(user) {
			var u = { username: user.userName.toLowerCase(), password: user.userPassword};
			var q = $q.defer();
			$http.post('/api/logIn', u).success(function(res) {
				setToken(res.token);
				o.status.isLoggedIn = true;
				q.resolve();
			});
			return q.promise;
		}
		function logout() {
			o.status.isLoggedIn = false;
			removeToken();
		}
		function setToken(token) {
			localStorage.setItem('token', token);
			o.status.username = getUsername();
		}
		function getToken() {
			return localStorage.getItem('token');
		}
		function removeToken() {
			localStorage.removeItem('token');
			o.status.username = null;
		}

		function getUsername() {
			return JSON.parse(atob(getToken().split('.')[1])).username;
		}
	}
})();

