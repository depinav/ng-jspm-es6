import {testService} from './test-service/test.service';

var services = angular.module('nts.services', [testService.name]);

export {services};
