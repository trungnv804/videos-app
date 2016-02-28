'use strict';

/* App Module */

var videosApp = angular.module('videosApp', [
  'ngRoute',
  //'phonecatAnimations',
  'videoControllers',
  //'phonecatFilters',
  //'phonecatServices'
]);

videosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'VideoController'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      //when('/phones/:phoneId', {
      //  templateUrl: 'partials/phone-detail.html',
      //  controller: 'PhoneDetailCtrl'
      //}).
      otherwise({
          redirectTo: '/home'
      });
  }]);
