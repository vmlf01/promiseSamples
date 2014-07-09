'use strict';

angular.module('promiseSamplesApp')
	.controller('sample10Controller', ['SamplesService', 'LogService',
		function (SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 10';
			sample.desc = '$q.all(), $q.when(), finally() & notify()';
			sample.messages = LogService.messages;

			LogService.log('sample 10 started');

			SamplesService.bonusTrack()
				.then(LogService.log, LogService.log, LogService.log)
				.finally(function() {
					LogService.log('That one was for free!');
				});

			// notify doesn't always work as expected!!!
			// it seems you need to attach the notify callback
			// directly to the notifying promise
			// and the notification must occur after the callback
			// is attached
			SamplesService.delay(5000)
				.then(SamplesService.numberOfTheBeastPromise)
				.then(LogService.log, LogService.log, LogService.log);

			LogService.log('sample 10 ended');
		}
	]);