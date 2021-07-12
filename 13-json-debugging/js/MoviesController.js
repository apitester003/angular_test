function MoviesController(){
    this.person = {
        name: "Sam Sahoo",
        location: "Hyderabad, india"
    };
}

angular
    .module('app')
    .controller('MoviesController', MoviesController)