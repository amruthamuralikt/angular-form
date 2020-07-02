var app=angular.module("app1", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/course", {
        templateUrl : "course.html",
        controller:"courseCtrl"
    })
    .when("/home", {
        templateUrl : "home.html",
        controller:"homeCtrl"
    });
    
    });

app.controller("courseCtrl",function($scope) {
    $scope.courses=["php","AngularJS","Bootstrap","JavaScript"];
});
