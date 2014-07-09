'use strict';

angular.module('promiseSamplesApp')
  .factory('LogMessage', [
  	function () {
  		var LogMessage = function(index, msg) {
  			this.index = index;
  			this.message = msg;
  		};

  		return LogMessage;
  }]);
