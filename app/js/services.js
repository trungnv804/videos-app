'use strict';

/* Services */

var videoServices = angular.module('videoServices', ['ngResource']);

videoServices.factory('Youtube', ['$resource',
  function($resource){
    var datas = (localStorage.getItem('videos')!==null) ? JSON.parse(localStorage.getItem('videos')) : [];
    localStorage.setItem('todos', JSON.stringify($scope.todos));
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
