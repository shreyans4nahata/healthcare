(function () {
    'use strict'

    angular.module('user')
        .controller('DashController', function (Account, $stateParams, Dashboard) {
          var self = this;
          var tags = Account.getTags();
          //console.log(uidno);
          Dashboard.getQuestions(tags)
            .then(function (response) {
              console.log(response);
              self.questions = response.data.questions;
            })
            .catch(function (reason) {
              console.log(reason);
            })
         Dashboard.getTags()
            .then(function (response) {
              console.log(response);
              self.tags = response.data.tags;
            })
            .catch(function (reason) {
              console.log(reason);
            })
        Dashboard.getAnswers(Question)
            .then(function (response) {
              console.log(response);
              self.solutions = response.data.answers;
            })
            .catch(function (reason) {
              console.log(reason);
            })
        Dashboard.getComments(Question)
            .then(function (response) {
              console.log(response);
              self.comments = response.data.comments;
            })
            .catch(function (reason) {
              console.log(reason);
            })       
        })
})();