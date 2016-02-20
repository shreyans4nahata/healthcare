/*
Shreyansh Nahata 

*/

(function () {
    'use strict'

    angular.module('user')
        .factory('Dashboard', function ($http) {
            return {
              getQuestions: function (tags) {
                return $http.get('/questions/'+tags);
              }
            }
        })
})();
