'use strict';

angular.module('cinqApp')
        .constant('baseURL','http://localhost:8090/rest/')

        .service('peopleFactory', ['$resource', 'baseURL', '$http', function($resource,baseURL,$http) {
            this.getPeople = function(){                
                return $http.get(baseURL+'people');
            };
        }]);




