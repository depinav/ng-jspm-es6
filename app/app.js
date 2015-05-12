import angular from 'angular';
import * as uiRouter from 'angular-ui-router';

import {pages} from './pages/pages.module';
import {directives} from './directives/directives.module';

angular.module('MainApp', ['ui.router', pages.name, directives.name])
.config(function($stateProvider, $urlRouterProvider) {
    
	let pagesPath = './app/pages/';
	$urlRouterProvider.otherwise('/');

	$stateProvider
        .state('home', {
            url: '/',
            templateUrl: `${pagesPath}home/home.html`,
            controller: 'HomeController'
        });		
})
.controller('MainController', function($scope) {
});