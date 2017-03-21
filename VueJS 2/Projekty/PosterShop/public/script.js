/*

What to do:

1. Display total
2. Display No items in the cart if no products in basket

*/

var PRICE = 9.99

new Vue({


    el: '#app',
    data: {
        total: 0,
        errorMessage: false,
        products: [],
        results: [],
        cart: [],
        newSearch: '',
        lastSearch: '',
        loading: false,
        price: 9.99,
        load_num: 10,
        scrolledDown: false,
    },
    methods: {
        appendItems: function () {
            // I wanna see whether there are elements in results that are not yet in products.
            if (this.products.length < this.results.length) {
                this.products = this.results.slice(0, this.products.length + this.load_num);
                // other way to do it;
                // var append = res.data.slice(this.products.length, this.products.length + this.load_num)
                // this.products = this.products.concat(append)
            } else if (this.products.length == this.results.length && this.results.length > 0) {
                this.scrolledDown = true;
                // could be done in HTML as well by v-if= products.length === results.length && results.length > 0
            }
        },
        searchPosters: function () {
            if (this.newSearch.length) {
                this.errorMessage = false
                this.products = [];
                this.loading = true;
                this.$http
                    .get('/search/'.concat(this.newSearch))
                    .then(function (res) {
                        this.lastSearch = this.newSearch
                        this.results = res.data;
                        //  if I use the second version aboce in appendItems, it needs to be called here as well
                        this.products = res.data.slice(0, this.load_num)
                        this.loading = false
               });
            } else {
                this.errorMessage = true
            }

        },
        addItem: function (index) {
            this.total += this.price;

            var item = this.products[index];
            var found = false;
            console.log(this.cart);

            for (var i = 0; i < this.cart.length; i++) {
                // check if the product being added is already in the cart, so that it's not shown again
                if (this.cart[i].id === item.id) {
                    found = true;
                    this.cart[i].qty++;
                    break;
                }
            }
            if (!found) {
                // if it's not, add it to the cart
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    image: item.link,
                    price: this.price
                })
            }
        },
        inc: function (item, index) {
            item.qty++;
            this.total += this.price
        },
        dec: function (item, index) {
            item.qty--;
            this.total -= this.price;
            if (item.qty <= 0) {
                this.cart.splice(index, 1)
            }

        }
    },
    filters: {
        currency: function (price) {
            return "$".concat(price.toFixed(2));
        }
    },
    mounted: function () {
        this.searchPosters();

        var vueInstance = this;
        var elem = document.getElementById('product-list-bottom');
        var watcher = scrollMonitor.create(elem);
        watcher.enterViewport(function () {
            vueInstance.appendItems(); // this.appendItems is wrong, won't work with Vue
        })
    }
})
