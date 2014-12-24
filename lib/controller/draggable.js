'use strict';

angular.module(Constant.CONTROLLER)
  .controller('DraggableCtrl', function ($scope, $famous) {
    var EventHandler = $famous['famous/core/EventHandler'];
    $scope.handler = new EventHandler();
  });
