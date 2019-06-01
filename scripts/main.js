// main
// create the module and name it iro_org_br
// also include ngRoute for all our routing needs

var iro_org_br = angular.module('iro_org_br', ['ngRoute', 'ngAnimate']);

// configure our routes
iro_org_br.config(function($routeProvider, $locationProvider) {
  $routeProvider
    // route for the home page
    .when('/iro/', {
        templateUrl : 'iro/pages/home.html',
        controller  : 'mainController'
    })

    // route for the sobre page
    .when('/iro/sobre', {
        templateUrl : 'iro/pages/sobre.html',
        controller  : 'sobreController'
    })

    // route for the pregacoes page
    .when('/iro/pregacoes', {
        templateUrl : 'iro/pages/pregacoes.html',
        controller  : 'pregacoesController'
    })

    // route for the contato page
    .when('/iro/contato', {
        templateUrl : 'iro/pages/contato.html',
        controller  : 'contatoController'
    });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
iro_org_br.controller('mainController', function($scope) {
  $scope.message = "pls don't break anything, i'm still working";
  $scope.pageClass = 'page-home';
});

iro_org_br.controller('sobreController', function($scope) {
  $scope.message = "here i'll put something nice sobre me (and maybe mechanical keyboards too)";
  $scope.pageClass = 'page-sobre';
});

iro_org_br.controller('pregacoesController', function($scope) {
  $scope.message = "here it'll be a list of my current pregacoes";
  $scope.pageClass = 'page-pregacoes';
});

iro_org_br.controller('contatoController', function($scope) {
  $scope.message = "and here a nice contato form";
  $scope.pageClass = 'page-contato';
});