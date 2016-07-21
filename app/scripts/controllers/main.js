'use strict';

/**
 * @ngdoc function
 * @name tiktokFitnessApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tiktokFitnessApp
 */
angular.module('tiktokFitnessApp')
  .controller('MainCtrl', function (preloader) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.imageLocations = [
        'images/training-train-lime-barbell-39688.jpeg',
        'images/logo.png',
        'images/large.jpg'
    ];

    preloader.preloadImages(this.imageLocations)
        .then(function(resp) {
            console.log(resp);
        }, function(error) {
            console.log(error);
        });
  });
