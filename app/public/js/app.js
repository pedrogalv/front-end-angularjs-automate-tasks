'use strict';

angular.module('cinqApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                   'content': {
                        templateUrl : 'views/people.html',
                        controller  : 'PeopleController'
                    }
                }

            });
        $urlRouterProvider.otherwise('/');
    })
;