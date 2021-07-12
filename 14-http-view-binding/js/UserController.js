function UserController(UserService){
    var ctrl = this;
    var API = "//jsonplaceholder.typicode.com/users/";
    this.userId = '';
    this.chosenUser = {};
    this.getUser = function(){
        if(!this.userId){
            return;
        }
        UserService
            .getUser(this.userId)
            .then(function(response){
                ctrl.chosenUser = response;
            })
    };
}

angular
    .module('app')
    .controller('UserController', UserController)