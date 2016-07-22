'use strict';

/**
 * @ngdoc function
 * @name tiktokFitnessApp.controller:SoundCtrl
 * @description
 * # SoundCtrl
 * Controller for video volume
 */
angular.module('tiktokFitnessApp')
  .controller('SoundCtrl', function () {
      this.volumeIcon = 'glyphicon-volume-up';
      this.video = document.getElementById('mainVideo');
      
      this.volume = function() {
          this.video.muted = this.video.muted ? false : true;
      };
  });
