function OrderController(){
    this.customerOrder = {
        name: '', 
        email: '', 
        location: '', 
        product: {
            label: '', 
            id: ''
        }, 
        comments: ''         
    };
    this.submitOrder = function(){
        //Communicate with the API
    };
}

angular
    .module('app')