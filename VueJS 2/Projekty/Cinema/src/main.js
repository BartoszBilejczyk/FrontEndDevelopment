import Vue from 'vue';
import './style.scss';

import genres from './util/genres'

new Vue({
    el: '#app',
    components: {
      'movie-list': {
        template: `<div id="movie-list">
                      <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
                   </div>`,
        data() {
          return {
            movies: [
              {title: 'Harry Potter 1'},
              {title: 'Harry Potter 2'},
              {title: 'Harry Potter 3'}
            ]
          }

        }
      },
      'movie-filter': {
        data() {
          return {
            genres
          }
        },
        template: `<div id="movie-filter">
                      <h2>Filter results</h2>
                      <div class="filter-group">
                        <check-filter v-for="genre in genres" :genreForFilter="genre" @check-filter="checkFilter"></check-filter>
                      </div>

                   </div>`,
        methods: {
          checkFilter() {
            console.log('checked')
          }
        },
// how props work: bind genre (something from the parent) to something Y. This Y will be passed to child as a prop and then can be used (name the same as prop's)
        components: {
          'check-filter': {
            props: ['genreForFilter'],
            data() {
              return {
                checked: false
              }
            },
            template: `<div :class="{'check-filter': true, active: checked }" @click="checkFilter()">
                        <span class="checkbox"></span>
                        <span class="check-filter-title"> {{ genreForFilter }} </span>
                      </div>`,
            methods: {
              checkFilter() {
                this.checked = !this.checked
                this.$emit('check-filter');
              }
            }
          }
        }
      }
    }
})
