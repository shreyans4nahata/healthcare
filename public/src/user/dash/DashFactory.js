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
            	},
              getAnswers: function(question){
              	return $http.get('/answers/'+question);
              },
              getTags: function(){
              	return $http.get('/tags/');
              },
              getComments: function(question){
              	return $http.get('/comments/'+question);
              }
            }
        })
})();