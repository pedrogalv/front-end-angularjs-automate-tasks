'use strict';

angular.module('cinqApp')

    .controller('PeopleController', ['$scope', 'peopleFactory', function($scope,peopleFactory) {

        $scope.showDetails = false;

        $scope.people= {};
        
        $scope.message = 'Loading ...';
                    
        peopleFactory.getPeople()
        .then(
            function(response) {
                console.log(response.data);
               $scope.people = response.data;
               $scope.showDetails = true;
            },
            function(response) {
                $scope.message = 'Error: '+response.status + ' ' + response.statusText;
            }
        );
                        
}]);