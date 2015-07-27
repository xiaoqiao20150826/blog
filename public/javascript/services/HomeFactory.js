(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		
		o.listBlog = {};
		o.displayBlog = displayBlog;
		o.addNewBlog = addNewBlog;
		o.editBlog = editBlog;
		o.deleteBlog = deleteBlog;
		o.displayBlog();
		return o;

		function displayBlog (res) {			
			$http.get('/api/').success(function(res){
				o.listBlog.blog = res;
			});
		}

		function addNewBlog (newBlog) {
			var q = $q.defer();
			$http.post('/api/blog', newBlog).success(function(res){
				q.resolve();
			});
			return q.promise;
		}

		function editBlog (newBlog, id) {
			var q = $q.defer();
			$http.put('/api/blog/' + id, newBlog).success(function(data){
				q.resolve(data);
			});
			return q.promise;
		}

		function deleteBlog (newBlog) {
			var q = $q.defer();
			$http.delete('/api/blog/' + newBlog.id).success(function(res){
				q.resolve();
			});
			return q.promise;
		}

	}
})();