import Vue from 'vue';
import './style.scss';

import MovieList from './components/MovieList'
import MovieFilter from './components/MovieFilter'

new Vue({
    el: '#app',
    data: {
      genres: [],
      times: [],
    },
    methods: {
      // receives information from grandchild about what checkbox was clicked so I can process it to filter movies.
      checkFilter(category, title, checked) {
        // if checked, push the title to the array of proper category
        if (checked) {
          this[category].push(title);
        } else {
          let index = this[category].indexOf(title);
          if (index > -1) {// if it's not in the array, it will return -1 - in other words if it is in the array
            this[category].splice(index, 1);
          }
        }
        this.$emit('')
      }
    },
    components: {
      MovieList,
      MovieFilter,
    }
})
