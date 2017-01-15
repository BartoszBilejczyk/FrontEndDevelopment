/* 1. This is the app to add new receipts and the items to it.
   2. The user can see the default receipts
   3. The user can add a new receipt
   4. The user can add a new item to the receipt with price and quantity
   5. The user can see item's cost
   6. The user can see basket's cost
   // EXTRA
   7. The user can access previously made receipts (receipts ID?) and make changes
*/
// https://s-media-cache-ak0.pinimg.com/originals/ff/b7/1b/ffb71b573db815c33a9a947c81fef676.jpg
// http://assets1.ignimgs.com/2014/05/18/girl-zombie-the-walking-dead-amc-tv-show-imagejpg-95852b_1280w.jpg

//http://previews.123rf.com/images/zooco/zooco1410/zooco141000024/32500847-Green-monster-in-minimalist-style-with-a-stitched-wound-on-his-head-bolts-through-his-neck-funny-hai-Stock-Vector.jpg
//http://www.clipartkid.com/images/518/cute-monster-in-minimalist-style-with-green-skin-a-stitched-wound-on-yFvuov-clipart.jpg

new Vue({
    el: '#app',
    data: {
        inputsVisible: false,
        title: 'Biedronka',
        productInput: '',
        quantityInput: '',
        priceInput: '',
        newItem: {},
        vat: '8%',
        items: [
            {product: 'czekolada', quantity: '5', price: '2.99', vat: '8%', razem: 2.99},
            {product: 'sok', quantity: '2', price: '1.99', vat: '8%', razem: "10"}
        ]
    },
    methods: {
        showInputs: function (){
            this.inputsVisible = true;
        },

        storeProductInput: function(event) {
            this.productInput = event.target.value;
        },
        storeQuantityInput: function(event) {
            this.quantityInput = event.target.value;
        },
        storePriceInput: function(event) {
            this.priceInput = event.target.value;
        },

        addNewItem: function() {
            this.items.push({product: this.productInput, quantity: this.quantityInput, price: this.priceInput, vat: this.vat, razem: "robi się" });
            this.productInput = '';
            this.quantityInput = '';
            this.priceInput = '';
        },

    }
})
