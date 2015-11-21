'use strict';

/**
 * @ngdoc overview
 * @name onthebeachApp
 * @description
 * # onthebeachApp
 *
 * Main module of the application.
 */
angular
  .module('onthebeachApp', [
    'ngRoute',
    'ngSanitize',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
  });
