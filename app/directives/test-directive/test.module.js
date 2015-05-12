var test = angular.module('nts.directives.test', []);
test.directive('test', function() {
	return {
		restrict: 'A',
		templateUrl: './app/directives/test-directive/test.html',
		replace: true,
		scope: {
		},
		link: function(scope) {
		}
	};
});

export {test};