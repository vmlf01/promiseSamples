'use strict';

angular.module('promiseSamplesApp')
	.controller('sample5Controller', ['SamplesService', 'LogService',
		function (SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 5';
			sample.desc = 'chainning promises';
			sample.messages = LogService.messages;
			sample.notes = "Because promises use a fluent API style, you can \
							chain multiple calls, and the fulfillment value \
							of each callback gets fed into the next callback.";

			LogService.log('sample 5 started');

			SamplesService.getListOfStuff()
				.then(LogService.log)
				.then(SamplesService.getFirstItem)
				.then(LogService.log);

			LogService.log('sample 5 ended');
		}
	]);