function OrderFormController(){
    this.products = [
        {
            label: 'Product One', 
            id: 1
        }, 
        {
            label: 'Product Two', 
            id: 2
        }, 
        {
            label: 'Product Three', 
            id: 3
        }
    ];
    this.onSubmit = function(){
        //pre-processing-------------- Calling the parent controller function
        this.onSubmit();
    };
}

angular
    .module('app')
    .controller('OrderFormController', OrderFormController)