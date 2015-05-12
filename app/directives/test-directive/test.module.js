var test = angular.module('nts.directives.test', []);
test.directive('Test', function() {
	return {
		restrict: 'A',
		templateUrl: './test.html',
		replace: true,
		scope: {

		},
		link: function(scope) {
			scope.title = 'Show!';
		}
	};
});

export {test};