function MoviesController(){
    this.likesList = [];
    this.addToLikes = function(movie){
        this.likesList.push(movie);
    };
    this.unlike = function(index){
        this.likesList.splice(index, 1);
    };
    this.list = [
        {
            title: 'The Shawshank Redemption', 
            year: '1994', 
            popular: true, 
            category: 'thriller'
        }, 
        {
            title: 'Inception', 
            year: '2010', 
            popular: false, 
            category: 'fantasy'
        }, 
        {
            title: 'The Matrix', 
            year: '1999', 
            popular: true, 
            category: 'action'
        }, 
        {
            title: 'Saving Private Ryan', 
            year: '1998', 
            popular: true, 
            category: 'action'
        }, 
        {
            title: 'The Lord of the Rings', 
            year: '1998', 
            popular: true, 
            //category: 'fantasy'
        },
    ];
}

angular
    .module('app')
    .controller('MoviesController', MoviesController)