angular.module('myApp', [
  'myApp.services',
  'myApp.calendar',
  'ngRoute'
  ])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/calendar'
    });
})
