'use strict';

/**
 * @ngdoc function
 * @name pizzaCodesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pizzaCodesApp
 */
angular.module('pizzaCodesApp')
  .controller('AboutCtrl', ['$scope', '$location', 
  	function ($scope, $location) {
    $scope.search = $location.search().search;
  }]);
