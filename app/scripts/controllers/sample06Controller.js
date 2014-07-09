'use strict';

angular.module('promiseSamplesApp')
	.controller('sample6Controller', ['SamplesService', 'LogService',
		function (SamplesService, LogService) {
			var sample = this;

			LogService.clear();

			sample.name = 'Sample 6';
			sample.desc = 'resolving with callback values';
			sample.messages = LogService.messages;
			sample.notes = "The return value of a promise handler acts as the \
							fulfillment value for the promise where it is \
							defined. Same thing goes for errors, they reject \
							their promises. It doesn't matter if the handler \
							is an onFulfillment or onReject callback!";

			LogService.log('sample 6 started');

			SamplesService.getListOfStuff()
				.then(function (value) {
					if (value.indexOf('stuff') !== -1) {
						return 'We have stuff.';
					}
					else {
						throw new Error('No stuff available!');
					}
				})
				.then(LogService.log);


			SamplesService.delay(5000)
				.then(SamplesService.getListOfStuff)
				.then(function (value) {
					if (value.indexOf('other stuff') !== -1) {
						return 'We have other stuff also.';
					}
					else {
						throw new Error('There is no other stuff in there!');
					}
				})
				.catch(LogService.log);

			LogService.log('sample 6 ended');
		}
	]);