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
        'images/first-bg.jpeg',
        'images/second-bg.jpg'
    ];

    preloader.preloadImages(this.imageLocations);
  });
