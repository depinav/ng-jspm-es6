var chartBox = angular.module('nts.directives.chartBox', []);
chartBox.directive('chartBox', function() {
	return {
		restrict: 'A',
		replace: 'true',
		templateUrl: './app/directives/chart-box/chart-box.template.html',
		scope: {
			someData: '='
		},
		link: function() {

		}
	};
});

export {chartBox};