/*
Shreyansh Nahata 

*/
(function () {
    'use strict'

    angular.module('ubmkuser')
        .controller('LoginController', function (Account, $state, $rootScope) {
            var self = this;

            self.submit = function () {
                Account.login({
                    email: self.email,
                    password: self.password
                }).then(function () {
                    $state.go('quest');
                }).catch(function (reason) {
                    console.log(reason);
                    self.Message = reason;
                })
            }
        });
})();