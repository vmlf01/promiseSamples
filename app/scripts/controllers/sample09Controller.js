'use strict';

angular.module('promiseSamplesApp')
	.controller('sample9Controller', ['SamplesService', 'LogService',
		function (SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 9';
			sample.desc = 'callbacks can return promises';
			sample.messages = LogService.messages;
			sample.notes = "When a callback returns a promise \
							$q will wait for that promise to resolve \
							before proceding. The state of the promise \
							will determine which callback will be \
							executed next. It is just like if there was another \
							promise in the chain.";

			LogService.log('sample 9 started');

			// if a callback returns a promise
			// $q will wait for that promise to resolve
			// before continuing thru callback chain
			// with that promise state
			SamplesService.getListOfStuffTimedOut()
				.catch(function(reason) {
					LogService.log(reason);
					LogService.log('Retrying with alternative stuff source');
					return SamplesService.delay(2000)
						.then(SamplesService.getListOfStuff);	
				})
				.then(SamplesService.getFirstItem)
				.then(LogService.log)
				.catch(LogService.log);

			LogService.log('sample 9 ended');
		}
	]);