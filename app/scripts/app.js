'use strict';

/**
 * @ngdoc overview
 * @name tiktokFitnessApp
 * @description
 * # tiktokFitnessApp
 *
 * Main module of the application.
 */
angular
  .module('tiktokFitnessApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            views: {
                'main@': {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                }
            }
        })
        .state('training', {
            url: '/training',
            views: {
                'training': {
                    templateUrl: 'views/training.html',
                    controller: 'TrainingCtrl',
                    controllerAs: 'training'
                }
            }
        })
        .state('testimonials', {
            url: '/testimonials',
            views: {
                'testimonials': {
                    templateUrl: 'views/testimonials.html',
                    controller: 'TestimonialsCtrl',
                    controllerAs: 'testimonials'
                }
            }
        })
        .state('getstarted', {
            url: '/getstarted',
            views: {
                'getstarted@': {
                    templateUrl: 'views/getstarted.html',
                    controller: 'GetStartedCtrl',
                    controllerAs: 'getstarted'
                }
            }
        });


    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl',
    //     controllerAs: 'main'
    //   })
    //   .when('/training', {
    //     templateUrl: 'views/training.html',
    //     controller: 'TrainingCtrl',
    //     controllerAs: 'training'
    //   })
    //   .when('/getstarted', {
    //     templateUrl: 'views/getstarted.html',
    //     controller: 'GetStartedCtrl',
    //     controllerAs: 'getstarted'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  })
  .run(['$rootScope', '$location', function($rootScope, $location) {
      var path = function() {
          return $location.path();
      };

      $rootScope.$watch(path, function(newVal, oldVal) {
          $rootScope.activePane = newVal;
      });
  }]);
