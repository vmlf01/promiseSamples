'use strict';

angular.module('promiseSamplesApp')
  .controller('samplesMenuController', ['$location', 'PromiseSample',
  	function ($location, PromiseSample) {

  		this.samples = [
  			new PromiseSample('sample 1', '#/sample1'),
  			new PromiseSample('sample 2', '#/sample2'),
  			new PromiseSample('sample 3', '#/sample3'),
  			new PromiseSample('sample 4', '#/sample4'),
  			new PromiseSample('sample 5', '#/sample5'),
  			new PromiseSample('sample 6', '#/sample6'),
  			new PromiseSample('sample 7', '#/sample7'),
  			new PromiseSample('sample 8', '#/sample8'),
  			new PromiseSample('sample 9', '#/sample9'),
  			new PromiseSample('hidden track', '#/sample10'),
  		];

  		this.isActive = function(sample) {
  			var currentUrl = $location.absUrl();
  			return currentUrl.match(new RegExp('.*' + sample.href + '$')); //.match(currentUrl);
  		};
  }]);
