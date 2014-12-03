'use strict';

/**
 * @ngdoc function
 * @name pizzaCodesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pizzaCodesApp
 */
angular.module('pizzaCodesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
