(function() {
  angular.module('App', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './pages/home/home.html',
      controller: 'HomeCtrl as vm'
    });
  }])
})()