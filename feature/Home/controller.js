(function () {
    'use strict'
    angular.module('app')
        .controller('controller', function ($scope, $http, api_url) {
            var api_url = 'http://private-anon-56c7a0ba32-testbinar.apiary-mock.com/v1/';
            $http.get(api_url + "/products", {
                headers: { 'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MTU1ODA2Njh9.ezqLNjvL6z18Kw5n1j_ak-fFEB5oBCSncGUUXF3zYAs'}
            }).then(function (response) {
                console.log(response.result);
                $scope.result = response.result;
            });
        });
})();