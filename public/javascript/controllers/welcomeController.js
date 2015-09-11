(function() {
	'use strict';
	angular.module('app')
	.controller('welcomeController', welcomeController);

	welcomeController.$inject = ["HomeFactory", "UserFactory", "$state", "$scope"];

	function welcomeController(HomeFactory, UserFactory, $state, $scope) {
		var vm = this;
		vm.listBlog = HomeFactory.listBlog;


		
		

// Chart.js Data
$scope.data = [
{
	value: 40,
	color:'#ff0039',
	highlight: '#cc002e',
	label: 'AngularJS'
},
{
	value: 30,
	color: '#2780e3',
	highlight: '#1967be',
	label: 'HTML/CSS'
},
{
	value: 20,
	color: '#3fb618',
	highlight: '#2f8912',
	label: 'Express'
},
{
  value: 10,
  color: '#9954bb',
  highlight: '#7e3f9d',
  label: 'MongoDB'
}
];

    // Chart.js Options
    $scope.options =  {

      // Sets the chart to be responsive
      responsive: true,

      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : false,

      //String - The colour of each segment stroke
      segmentStrokeColor : '#fff',

      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 75, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps : 100,

      //String - Animation easing effect
      animationEasing : 'easeOutBounce',

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : true,

      //String - A legend template
      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'

    };














  }

})();