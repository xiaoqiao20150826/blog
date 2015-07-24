(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		
		o.listBlog = {};
		o.addNewBlog = addNewBlog;
		o.displayBlog = displayBlog;
		// o.editBlog = editBlog;
		// o.deleteBlog = deleteBlog;

		return o;

		function displayBlog (res) {			
			$http.post('/api/').success(function(res){
			});
		}

		function addNewBlog (newBlog) {
			var q = $q.defer();
			$http.post('/api/blog', newBlog).success(function(res){
				q.resolve();
			});
			return q.promise;
		}

		// function editBlog (newBlog) {
		// 	var q = $q.defer();
		// 	$http.post('/api/blog', newBlog).success(function(res){
		// 		q.resolve();
		// 	});
		// 	return q.promise;
		// }

		// function deleteBlog (newBlog) {
		// 	var q = $q.defer();
		// 	$http.post('/api/blog', newBlog).success(function(res){
		// 		q.resolve();
		// 	});
		// 	return q.promise;
		// }

	}
})();