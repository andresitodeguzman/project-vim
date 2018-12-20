angular.module('vimApp').config([
  '$routeProvider','$locationProvider',
  function config($routeProvider,$locationProvider){
  
    $routeProvider
      .when('/about',{
	template:'<about></about>'
      })
      .when('/home',{
	template:'<home></home>'
      })
      .when('/commands/:commandCode',{
	template:'<commands></commands>'
      })
      .otherwise('/home');

    $locationProvider.html5Mode(true);

  }
]);
