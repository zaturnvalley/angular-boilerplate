!function(){angular.module("App",["ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(o,e,n){e.otherwise("/"),o.state("home",{url:"/",templateUrl:"./pages/home/home.html",controller:"HomeCtrl as vm"})}])}()(function(){function o(){var o=this;o.name="Mr. Doggo"}angular.module("App").controller("HomeCtrl",o)})()(function(){function o(){}angular.module("App").component("doggo",{bindings:{name:"@"},templateUrl:"./components/doggo/doggo.html",controller:o,controllerAs:"doggo"})})();