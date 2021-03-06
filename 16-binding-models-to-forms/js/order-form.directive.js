function orderForm(){
    return {
        resrtrict: 'E',  //A === Attribute or E === element etc.
        scope: {}, 
        bindToController: {
            data: '=', //two way data binding here
            submit: '&'
        }, 
        controller: 'OrderFormController as form', 
        template: `
            <pre>{{ form.data | json }}</pre>
            <pre>{{ orderForm | json }}</pre>
            <form name="orderForm" novalidate ng-submit="form.onSubmit();">
                <input name="name" type="text" ng-model="form.data.name" placeholder="Your name" />
                <div ng-show="orderForm.name.$error.required && orderForm.name.$touched">
                    Name is Required!!!
                </div>

                <input name="email" type="email" ng-model="form.data.email" placeholder="Your email" />
                <div ng-show="orderForm.email.$error.required && orderForm.email.$touched">
                    Email is Required!!!
                </div>
                <div ng-show="orderForm.email.$error.email && orderForm.email.$touched">
                    Email is Invalid!!!
                </div>
                <input name="location" type="text" ng-model="form.data.location" placeholder="Your location" />

                <select name="orderChoice" required="" ng-model="form.data.product" ng-options="product.label for product in form.products">
                    <option value="">Select...</option>
                </select>
                <textarea name="comments" placeholder="Any Messages (Optional)" ng-model="form.data.comments"></textarea>
                <button type="submit" ng-disabled="orderForm.$invalid">Order</button>
            </form>
        `
    };
}

angular 
    .module('app')
    .directive('orderForm', orderForm)