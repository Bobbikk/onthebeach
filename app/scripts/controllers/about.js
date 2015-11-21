'use strict';

/**
 * @ngdoc function
 * @name onthebeachApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onthebeachApp
 */
angular.module('onthebeachApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
