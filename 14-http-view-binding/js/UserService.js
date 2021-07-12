function UserService($http){
    var API = "//jsonplaceholder.typicode.com/users/";
    this.getUser = function(userId){
        return $http
                .get(API + userId)
                .then(function(response){
                    return response.data;
                }), function(reason){
                    //error
                }
    }
    this.getAllUsers = function(){
        
    };
}

angular
    .module('app')
    .service('UserService', UserService)