(function  () {
	'use strict'

	angular.module('user')
		.controller('SignUpController', function  (Account, $state) {
			var self = this;
			
			self.message = "";

			self.checkUserName = function () {
				console.log("Function called");
				Account.getUserNames()
						.then(function (response) {

							if (!response.data) {
								self.enable = true;
							} else {
								if( Object.prototype.toString.call( response.data.username ) === '[object Array]' ) {
								var index = response.data.indexOf(self.email);
								

								if (index !== -1) {
									self.message = "You have already signed up....";
									self.enable = false;
								}
							} else {
									self.message = "";
									self.enable = true;
								}
							}

						})
						.catch(function(reason){
							console.log(reason);
						})
			};

			self.submit =function() {
				console.log(self);

				var data = {
					name: self.name,
					password: self.password,
					email: self.email,
					phone: self.phone
				};

				Account.signUp(data)
					.then(function  (response) {

						Account.login({
							email: data.email,
							password: data.password
						}).then(function () {
							$state.go('dash');
						}).catch(function (reason) {
							console.log(reason);
						})
					})
					.catch(function  (reason) {
						console.log(reason);
						//toaster.pop('error', 'Error', reason.data.err);
					});
			}
		});
})();