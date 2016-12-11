(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "";
  $scope.msgMenu="";
  $scope.menu= function () {
    var count = calculatecommas($scope.name);
    if ($scope.name == 0){
      $scope.msgMenu= "Please enter data first";
    }else if(count <3){
      $scope.msgMenu="Enjoy";
    }else if (count >= 3){
      $scope.msgMenu="Too much!";
    }
  };

  function calculatecommas(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) == 44)
      totalStringValue += 1;
    }

    return totalStringValue;
  }

}

})();
