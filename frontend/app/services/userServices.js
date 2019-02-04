angular.module('userServices', [])
  
 .factory('User', function($http){
	  userFactory ={};
	
	userFactory.create = function(loginData){
		return $http.post('/api/authenticate', loginData);
	}
	
	return userFactory;
});