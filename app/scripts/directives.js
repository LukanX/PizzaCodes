'use strict';

angular.module('pizzaCodesApp')
  .directive('siteHeader', function () {
    return{
    	restrict: 'E',
    	templateUrl: 'views/site-header.html'
    };
  });