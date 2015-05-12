export default angular.module('nts.pages.home', [])
.controller('HomeController', function($scope, ChartDataService) {
	$scope.title = 'Welcome back';

	$scope.message = ChartDataService.doSomething();

	$scope.chartData = 2;
});