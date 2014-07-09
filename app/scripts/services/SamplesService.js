'use strict';

angular.module('promiseSamplesApp')
	.service('SamplesService', ['$q', '$timeout',
		function ($q, $timeout) {

			this.aSimplePromise = function () {
				var deferedTask = $q.defer();

				deferedTask.resolve(
					'I always keep my promises!'
				);

				return deferedTask.promise;
			}

			this.delay = function (milliseconds) {
				return $timeout(function() { 
					// do nothing
				}, milliseconds);
			};

			this.promiseStatesDontChange = function () {
				var deferedTask = $q.defer();

				deferedTask.reject(
					"I'm sorry, Dave. I'm afraid I can't do that."
				);

				deferedTask.resolve(
					"Alright, HAL. I'll go in through the emergency airlock."
				);

				deferedTask.reject(
					"Dave, this conversation can serve no purpose anymore. Goodbye."
				);

				return deferedTask.promise;
			};

			this.getListOfStuff = function() {
				var deferedTask = $q.defer();

				$timeout(function() {
					deferedTask.resolve([
						'first thing',
						'something',
						'something else',
						'stuff'
						]);
				}, 2000);

				return deferedTask.promise;
			};

			this.getListOfStuffTimedOut = function() {
				var deferedTask = $q.defer();

				$timeout(function() {
					deferedTask.reject('Looks like server could not be reached!');
				}, 2000);

				return deferedTask.promise;
			};

			this.getFirstItem = function(items) {
				var deferedTask = $q.defer();

				if (items && items[0]) {
					deferedTask.resolve(items[0]);
				}
				else {
					deferedTask.reject('No items available');
				}

				return deferedTask.promise;
			}

			this.aNumberPromise = function(value) {
				return $q.when(value);
			};

			this.numberOfTheBeastPromise = function() {
				var deferedTask = $q.defer();

				deferedTask.notify('I am not a number!');

				$timeout(function() {
					deferedTask.notify('I am not a number!');
					deferedTask.notify('I am not a number!');
					deferedTask.notify('I am not a number!');

					$timeout(function() {
						deferedTask.resolve('You are number 2');
					}, 1000);
				}, 1000);

				return deferedTask.promise;
			}

			this.bonusTrack = function() {
				var p1 = this.aNumberPromise(2);
				var p2 = this.numberOfTheBeastPromise();

				return $q.all([p1, p2]);
			};
		}
	]);