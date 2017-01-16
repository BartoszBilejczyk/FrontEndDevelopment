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
        sum: Number,
        total: 0,
        newItem: {},
        vat: '8',
        vatValue: 0,
        date: '',
        day: '',
        month: '',
        year: '',
        hours: '',
        minutes: '',
        seconds: '',
        receiptId: '',
        attachRotation: false,
        items: [
        //    {product: 'czekolada', quantity: '5', price: 2.99, vat: 8 + "%", sum: 10},
        //    {product: 'sok', quantity: '2', price: '1.99', vat: '8%', sum: 10}
        ]
    },
    methods: {

        getTime: function() {

            this.day = new Date().getDate();
            console.log(this.day);
            this.month = new Date().getMonth() + 1;
            this.year = new Date().getFullYear();
            this.hours = new Date().getHours();
            this.minutes = new Date().getMinutes();
            this.seconds = new Date().getSeconds();

            this.date = this.day + "-" + this.month + "-" + this.year + " " + this.hours + ":" + this.minutes + ":" + this.seconds;

        },
        showInputs: function (){
            this.inputsVisible = true;
            this.receiptId = Math.floor(Math.random() * (1000 - 1) + 1);
            this.getTime();
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

            this.sum = Number(this.quantityInput) * Number(this.priceInput);
            this.sum = this.sum.toFixed(2);
            console.log(this.sum)

            this.items.push({
                product: this.productInput,
                quantity: this.quantityInput,
                price: this.priceInput,
                vat: this.vat + "%",
                sum: this.sum
                });
            this.productInput = '';
            this.quantityInput = '';
            this.priceInput = '';

            this.total += Number(this.items[this.items.length-1].sum);
            this.total = this.total.toFixed(2)

            this.vatValue = this.vat /100 * this.total
            this.vatValue = this.vatValue.toFixed(2)

        },
        cancelLastItem: function() {
            this.items.pop();
        }
    },
    computed: {
        fabRotation: function() {
            return {
                fabRotate: this.attachRotation
            }
        }
    }
})

console.log(new Date().getMinutes())
