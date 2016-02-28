'use strict';

/* Controllers */

var videoControllers = angular.module('videoControllers', []);
videoControllers.controller('VideoController',['$scope',VideoController]);
videoControllers.controller('AboutCtrl', ['$scope', 'Me',
  function($scope, Me) {
    console.log('about page')
    $scope.me = Me;
  }
]);
function VideoController($scope){
  //localStorage.setItem('videos','[]');
  var data = (localStorage.getItem('videos')!==null) ? JSON.parse(localStorage.getItem('videos')) : [];
  $scope.link = '';
  $scope.data = data;
  $scope.addVideo = function(){
    var video = {
      id : $scope.link,
      image: 'http://img.youtube.com/vi/' + $scope.link + '/default.jpg',
      link: 'https://www.youtube.com/embed/' + $scope.link
    };
    console.log('video',video);
    $scope.data.push(video);
    console.log('data',data);
    localStorage.setItem('videos',JSON.stringify($scope.data));
  }
}
/*phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Video',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);*/
