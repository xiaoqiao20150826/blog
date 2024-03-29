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
		o.editBlogSubmit = editBlogSubmit;
		o.displayBlog();
		return o;


		//display all blogs 
		function displayBlog (res) {			
			$http.get('/api/').success(function(res){
				o.listBlog.blog = res;
			});
		}

		//add a new blog 
		function addNewBlog (newBlog, user) {
			console.log(newBlog, user);
			var q = $q.defer();
			$http.post('/api/blog', newBlog, user).success(function(res){
				q.resolve();
			});
			return q.promise;
		}

		//display blog by id
		function editBlog (id) {
			var q = $q.defer();
			$http.get('/api/' + id).success(function(res){
				q.resolve(res);
			});
			return q.promise;
		}

		//post blog update
		function editBlogSubmit (newBlog, id) {
			var q = $q.defer();
			$http.put('/api/blog/' + id, newBlog).success(function(data){
				
				q.resolve(data);
			});
			return q.promise;
		}

		//delete blog
		function deleteBlog (blog) {
			var q = $q.defer();
			$http.post('/api/blog/deleteBlog/' + blog._id).success(function(res) {
				q.resolve();
			});
			return q.promise;
		}

	}
})();