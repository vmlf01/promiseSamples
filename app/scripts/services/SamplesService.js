'use strict';

angular.module('promiseSamplesApp')
	.service('SamplesService', ['$q', '$timeout',
		function ($q, $timeout) {

			this.aSimplePromise = function () {
				var deferredTask = $q.defer();

				deferredTask.resolve(
					'I always keep my promises!'
				);

				return deferredTask.promise;
			}

			this.delay = function (milliseconds) {
				return $timeout(function() { 
					// do nothing
				}, milliseconds);
			};

			this.promiseStatesDontChange = function () {
				var deferredTask = $q.defer();

				deferredTask.reject(
					"I'm sorry, Dave. I'm afraid I can't do that."
				);

				deferredTask.resolve(
					"Alright, HAL. I'll go in through the emergency airlock."
				);

				deferredTask.reject(
					"Dave, this conversation can serve no purpose anymore. Goodbye."
				);

				return deferredTask.promise;
			};

			this.getListOfStuff = function() {
				var deferredTask = $q.defer();

				$timeout(function() {
					deferredTask.resolve([
						'first thing',
						'something',
						'something else',
						'stuff'
						]);
				}, 2000);

				return deferredTask.promise;
			};

			this.getListOfStuffTimedOut = function() {
				var deferredTask = $q.defer();

				$timeout(function() {
					deferredTask.reject('Looks like server could not be reached!');
				}, 2000);

				return deferredTask.promise;
			};

			this.getFirstItem = function(items) {
				var deferredTask = $q.defer();

				if (items && items[0]) {
					deferredTask.resolve(items[0]);
				}
				else {
					deferredTask.reject('No items available');
				}

				return deferredTask.promise;
			}

			this.aNumberPromise = function(value) {
				return $q.when(value);
			};

			this.numberOfTheBeastPromise = function() {
				var deferredTask = $q.defer();

				deferredTask.notify('I am not a number!');

				$timeout(function() {
					deferredTask.notify('I am not a number!');
					deferredTask.notify('I am not a number!');
					deferredTask.notify('I am not a number!');

					$timeout(function() {
						deferredTask.resolve('You are number 2');
					}, 1000);
				}, 1000);

				return deferredTask.promise;
			}

			this.bonusTrack = function() {
				var p1 = this.aNumberPromise(2);
				var p2 = this.numberOfTheBeastPromise();

				return $q.all([p1, p2]);
			};
		}
	]);