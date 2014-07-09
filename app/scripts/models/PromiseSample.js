'use strict';

angular.module('promiseSamplesApp')
  .factory('PromiseSample', [
  	function () {
  		var PromiseSample = function(name, url) {
  			this.name = name;
  			this.href = url;
  		};

  		return PromiseSample;
  }]);
