'use strict';

angular.module('promiseSamplesApp')
	.factory('LogService', ['LogMessage',
		function (LogMessage) {
			var logIndex = 1;
			var messages = [];

			function clear() {
				while(messages.length > 0) {
					messages.pop();
				}
				logIndex = 1;
			}
			
			function log(msg) {
				messages.push(new LogMessage(logIndex++, msg));
				return msg;
			}

			return {
				messages: messages,
				log: log,
				clear: clear
			};
		}
	]);