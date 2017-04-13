var app = angular.module('MyApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('verifyemail');
    $stateProvider

    .state('form', {
        url: '/form', /// '/form'
        templateUrl: '/MyViews/form.html',
        controller: 'EmailVerifyController'
        })

        .state('home', {
             url: '/verifyemail',
             templateUrl: '/MyAngular/EmailVerify/mainPage.html',
             controller: 'EmailVerifyController'
            
        })

        .state('otherwise', {
            url: 'form/verifyemail',
            templateUrl: '/MyAngular/EmailVerify/mainPage.html',

        })

     .state('form.result', {
         url: '/result',
         templateUrl: '/MyAngular/EmailVerify/resultPage.html',

     })
    
    //$locationProvider.html5Mode(true)

//    $locationProvider.html5Mode(true).hashPrefix("!");
    
});