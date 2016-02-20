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
              self.results = response.data.questions;
            })
            .catch(function (reason) {
              console.log(reason);
            })
        })
})();
