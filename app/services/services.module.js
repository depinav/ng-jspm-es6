import {chartData} from './chart-data/chart-data.service';

var services = angular.module('nts.services', [chartData.name]);

export {services};