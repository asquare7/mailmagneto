var app = angular.module('MyApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/form/home');
    $stateProvider

    .state('form', {
        url: '/form',
        templateUrl: '/MyViews/form.html',
        controller: 'EmailVerifyController'
        })

        .state('form.home', {
             url: '/home',
             templateUrl: '/MyAngular/EmailVerify/mainPage.html',
            
        })

     .state('form.result', {
         url: '/result',
         templateUrl: '/MyAngular/EmailVerify/resultPage.html',

     })
    
    //$locationProvider.html5Mode(true)

//    $locationProvider.html5Mode(true).hashPrefix("!");
    
});