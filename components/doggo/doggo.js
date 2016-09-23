(function() {
  angular.module('App')
  .component('doggo', {
    templateUrl: './doggo.html',
    controller: 'DoggoCtrl',
    controllerAs: 'doggo'
  });

  function DoggoCtrl() {
    var vm = this;
  }
})()