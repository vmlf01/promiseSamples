'use strict';

angular.module('promiseSamplesApp')
	.controller('sample1Controller', ['SamplesService', 'LogService',
		function (SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 1';
			sample.desc = 'a simple promise, always async'
			sample.messages = LogService.messages;
			sample.notes = "Even though aSimplePromise is fulfilled \
							in it's declaration, the callback handlers \
							always get called async, so the sample 1 ended \
							message always gets printed before the \
							then callback gets called.";

			LogService.log('sample 1 started');

			var p = SamplesService.aSimplePromise()
				.then(function (value) {
					LogService.log(value);
				})

/*
			SamplesService.aSimplePromise()
				.then(LogService.log);
*/

			LogService.log('sample 1 ended');

		}
	]);