'use strict';

angular
	.module('promiseSamplesApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute'
	])
	.config(function ($routeProvider) {
		var i = 1;
		for(i = 1; i < 11; i++) {
			$routeProvider
				.when('/sample' + i, {
					templateUrl: 'views/sample.html',
					controller: 'sample' + i + 'Controller',
					controllerAs: 'sample'
				});
		}
	});