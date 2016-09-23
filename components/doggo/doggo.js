(function() {
  angular.module('App')
  .component('doggo', {
    bindings: {
      name: '@'
    },
    templateUrl: './doggo.html',
    controller: 'DoggoCtrl',
    controllerAs: 'doggo'
  });

  function DoggoCtrl() {
    var vm = this;
  }
})()