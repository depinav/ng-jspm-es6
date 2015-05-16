var testService = angular.module('nts.services.test', []);
testService.factory('TestService', function() {
	return {
		doSomething: function() {
			return 'Service returned something!';
		}
	};
});

export {testService};
