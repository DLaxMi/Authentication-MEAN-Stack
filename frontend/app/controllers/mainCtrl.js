angular.module('mainController', ['authServices'])
  .controller('mainCtrl', function(Auth){
	var app = this;
	this.dologin = function(loginData, $location, $timeout)
	app.errorMsg = false;
	
	Auth.create(app.loginData).then(function(data){
		if(data.data.success){
			app.successMsg = data.data.message;
			$timeout(function(){
			$location.path('/');
		}, 2000);
		}
		else {
			app.errorMsg = data.data.message;

		}
	});
	
});