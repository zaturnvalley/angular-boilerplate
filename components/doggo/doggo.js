(function() {
  angular.module('App')
  .component('doggo', {
    bindings: {
      name: '@'
    },
    templateUrl: './components/doggo/doggo.html',
    controller: DoggoCtrl,
    controllerAs: 'doggo'
  });

  function DoggoCtrl() {
    var vm = this;
  }
})()