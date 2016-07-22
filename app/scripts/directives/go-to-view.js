'use-strict';

/**
 * @ngdoc function
 * @name tiktokFitnessApp.directive:goToView
 * @description
 * # goToView
 * Go to route with ng-click
 */
angular
    .module('tiktokFitnessApp')
    .directive('goToView', ['$location', function($location) {
        return {
            link: function(scope, element, attrs) {
                element.on('click', function() {
                    scope.$apply(function() {
                        $location.path(attrs.goToView);
                    });
                });
            }
        };
    }]);
