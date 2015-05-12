import {test} from './test-directive/test.module';
import {chartBox} from './chart-box/chart-box.module';

var directives = angular.module('nts.directives', [test.name, chartBox.name]);

export {directives};