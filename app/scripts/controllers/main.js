'use strict';

/**
 * @ngdoc function
 * @name angularFilterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFilterApp
 */
angular.module('angularFilterApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('scripts/database.json')
    .then(function (response) {$scope.names = response.data.records;});
    $scope.myCategory = {
      'Id ascending' : {dbValue : 'id'},
      'Id descending' : {dbValue : '-id'},
      'Title ascending' : {dbValue : 'title'},
      'Title descending' : {dbValue : '-title'},
      'Time ascending' : {dbValue : 'date'},
      'Time descending' : {dbValue : '-date'}
    }
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
