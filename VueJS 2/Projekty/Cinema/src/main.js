import Vue from 'vue';
import './style.scss';

import VueResource from 'vue-resource';
Vue.use(VueResource)

import moment from 'moment-timezone';
moment.tz.setDefault("UTC");

Object.defineProperty(Vue.prototype, '$moment', {get() { return this.$root.moment } })

import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'

new Vue({
    el: '#app',
    data: {
      genres: [],
      times: [],
      movies: [],
      moment,
      day: moment()
    },
    methods: {
      // receives information from grandchild about what checkbox was clicked so I can process it to filter movies.
      checkFilter(category, title, checked) {
        // if checked, push the title to the array of proper category
        if (checked) {
          console.log(title)
          console.log(category)

          this[category].push(title);
          console.log(category)

        } else {
          let index = this[category].indexOf(title);
          if (index > -1) {// if it's not in the array, it will return -1 - in other words if it is in the array
            this[category].splice(index, 1);
          }
        }
      }
    },
    components: {
      MovieList,
      MovieFilter
    },
    created() {
      this.$http.get('/api')
        .then((response) => {
         this.movies = response.data;
       })
        .catch((error) => {
          console.log(eror)
        })
    }
})
