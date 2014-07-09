'use strict';

angular.module('promiseSamplesApp')
	.controller('sample8Controller', ['SamplesService', 'LogService',
		function (SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 8';
			sample.desc = 'onReject are just try/catch blocks';
			sample.messages = LogService.messages;

			LogService.log('sample 8 started');

			SamplesService.getListOfStuffTimedOut()
				.catch(function(reason) {
					LogService.log(reason);
				})
				.then(SamplesService.getFirstItem)
				.then(LogService.log)
				.catch(LogService.log);

			LogService.log('sample 8 ended');
		}
	]);