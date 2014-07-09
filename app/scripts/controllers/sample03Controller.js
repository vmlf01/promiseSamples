'use strict';

angular.module('promiseSamplesApp')
	.controller('sample3Controller', ['$timeout', 'SamplesService', 'LogService',
		function ($timeout, SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 3';
			sample.desc = 'handlers always get called';
			sample.messages = LogService.messages;
			sample.notes = "Promise onFulfill/onReject callbacks \
							always get called, no matter when you attach \
							them, so even if we chain a new .then() handler \
							5 seconds after the promise is resolved, it \
							still gets called.";

			LogService.log('sample 3 started');

			var promise = SamplesService.aSimplePromise()
				.then(LogService.log);

			$timeout(function() {
				promise.then(function() {
					LogService.log('never too late to keep a promise');
				});
			}, 5000);

			LogService.log('sample 3 ended');
		}
	]);