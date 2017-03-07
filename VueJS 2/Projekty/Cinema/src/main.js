import Vue from 'vue';
import './style.scss';

import genres from './util/genres'

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
      'movie-list': {
        props: ['genres', 'times'],
        template: `<div id="movie-list">
                      <div v-for="movie in filteredMovies" class="movie">{{ movie.title }}</div>
                   </div>`,
        data() {
          return {
            movies: [
              {title: 'Harry Potter 1', genre: genres.ACTION},
              {title: 'Harry Potter 2', genre: genres.FAMILY},
              {title: 'Harry Potter 3', genre: genres.ADVENTURE}
            ]
          }
        },
        methods: {
          moviePassesGenreFilter(movie) {
            // logic: Look through genre array, if in genre array there is an item that matches movie's genre
            // e.g. there are action and adventure inside this.genre. Our film has Family genre - return false.
            if (!this.genres.length) {
              return true;
            } else {
              return this.genres.find(genre => {return movie.genre === genre; });
            }
          }
        },
        computed: {
          filteredMovies() {
            // filter works like that: keep the element if it returns to true.
            // when length of genres is 0, keep every item to show list of movies. If it's not, check what movie should be displayed whether it's genre matches the genres that are checked.
            return this.movies.filter(this.moviePassesGenreFilter);
          }
        },
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
          checkFilter(category, title, checked) {
            this.$emit('check-filter', category, title, checked);
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
                this.$emit('check-filter', 'genres', this.genreForFilter, this.checked);
              }
            }
          }
        }
      }
    }
})
