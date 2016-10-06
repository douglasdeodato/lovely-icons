var App = angular.module('App', []);

App.controller('IconCtrl', function($scope, $http) {
  $http.get('app/icons.json')
       .then(function(res){
          $scope.icons = res.data;
        });
});

App.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
