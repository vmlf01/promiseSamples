'use strict';

angular.module('promiseSamplesApp')
	.controller('sample7Controller', ['SamplesService', 'LogService',
		function (SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 7';
			sample.desc = 'callback passthru';
			sample.messages = LogService.messages;

			LogService.log('sample 7 started');

			// promises will go on through the method chain until the 
			// required callback if specified
			// 
			// in this case, we throw an error which will look for the
			// next onReject/catch callback
			SamplesService.getListOfStuff()
				.then(SamplesService.getFirstItem)
				.then(LogService.log)
				.then(function(value) {
					throw new Error("I'm sorry we can't continue!");
					// next two .then will not be executed
					// because there is no onReject callback defined
				})
				.then(SamplesService.aSimplePromise)
				.then(LogService.log)
				.catch(function(reason) {
					// this will be executed, because we have 
					// a rejected promise above
					LogService.log('Looks like an error to me: ' + reason);
				});

			// same thing happens with onFulfilled callbacks too
			SamplesService.delay(5000)
				.then(SamplesService.getListOfStuff)
				.then(function (value) {
					if (value.indexOf('stuff') !== -1) {
						return 'We have stuff.';
					}
					else {
						throw new Error('No stuff available!');
					}
				})
				.catch(LogService.log)
				.then(LogService.log);

			LogService.log('sample 7 ended');
		}
	]);