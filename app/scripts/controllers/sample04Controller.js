'use strict';

angular.module('promiseSamplesApp')
	.controller('sample4Controller', ['$scope', 'SamplesService', 'LogService',
		function ($scope, SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 4';
			sample.desc = 'integration with digest cycle';
			sample.messages = LogService.messages;
			sample.notes = "Because of the way Angular works, if you change \
							something outside of Angular's realm, you \
							need to notify Angular to check for the changes. \
							With $q promises, you don't need to do that, \
							because they are integrated with Angular's \
							digest cycle.";

			LogService.log('sample 4 started');

			setTimeout(function() {
				LogService.log("nobody was there to hear the tree fall!!!");
			}, 100);


			setTimeout(function() {
				LogService.log('setTimeout message working, but blargh!');
				$scope.$apply();
			}, 2000);

			SamplesService.delay(8000)
				.then(function(value) {
					LogService.log('awesome! promises integrated with digest cycle');
				});
		

			LogService.log('sample 4 ended');
		}
	]);