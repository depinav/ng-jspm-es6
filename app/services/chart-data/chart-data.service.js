var chartData = angular.module('nts.services.dataChart', []);
chartData.factory('ChartDataService', function() {
	return {
		doSomething: function() {
			return 'Service returned something!';
		}
	};
});

export {chartData};