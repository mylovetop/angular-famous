/**
 * Created by zdsoft on 14-12-24.
 */
'use strict';

angular.module(Constant.CONTROLLER)
  .controller('ScrollViewCtrl', function ($scope, $famous) {
    var EventHandler = $famous['famous/core/EventHandler'];
    $scope.eventHandler = new EventHandler();
    $scope.list = [{content: "famous", color: "'red'"},
      {content: "angular",color: "'gray'"},
      {content: "rocks!", color: "'black'"},
      {content: "famous", color: "'red'"},
      {content: "angular",color: "'gray'"},
      {content: "rocks!", color: "'black'"},
      {content: "famous", color: "'red'"},
      {content: "angular",color: "'gray'"},
      {content: "rocks!", color: "'black'"},
      {content: "famous", color: "'red'"},
      {content: "angular",color: "'gray'"},
      {content: "rocks!", color: "'black'"},
      {content: "famous", color: "'red'"},
      {content: "angular",color: "'gray'"},
      {content: "rocks!", color: "'black'"},
      {content: "famous", color: "'red'"},
      {content: "angular",color: "'gray'"},
      {content: "rocks!", color: "'black'"}];

    $scope.options = {
      scrollViewOuter: {
        direction: 0,
        paginated: true
      },
      scrollViewInner :{
        direction: 1
      }
    };
    $scope.itemClick = function(content){
      alert(content);
    }

//    $scope.p = {
//      color: '#404040',
//      fontSize : '60px',
//      lineHeight : '50px',
//      textAlign : 'center',
//      pointerEvents : 'none'
//    };

    $scope.cssApp = 'app';

  });
