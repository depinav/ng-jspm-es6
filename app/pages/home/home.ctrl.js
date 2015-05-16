export default angular.module('nts.pages.home', [])
.controller('HomeController', function($scope, TestService) {
	$scope.title = 'Welcome back';

	$scope.message = TestService.doSomething();
});
