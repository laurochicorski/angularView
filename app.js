/**
 * Created by lauro on 08/03/17.
 */
var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/',{
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        })
        .when('/uf',{
            templateUrl : 'cadastro_uf.html',
            controller : 'UfCtrl'
        })
        .otherwise({ redirectTo: '/'});
});

app.controller('HomeCtrl', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();
})