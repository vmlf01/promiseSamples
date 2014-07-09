'use strict';

angular.module('promiseSamplesApp')
	.controller('sample2Controller', ['SamplesService', 'LogService',
		function (SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 2';
			sample.desc = 'promise states, no regrets';
			sample.messages = LogService.messages;
			sample.notes = "The promise declaration starts by \
							rejecting the promise, so after that \
							it doesn't matter what you do, its \
							state will never change";

			LogService.log('sample 2 started');

			SamplesService.promiseStatesDontChange()
				.then(LogService.log, LogService.log);

			LogService.log('sample 2 ended');
		}
	]);