<template>
  <div id="app">
    <div class="weather container">

            <input class="input-field" type="text" id="city" name="city" placeholder="Insert a city" v-model.lazy="city" />

            <span class="error"></span>
            <br />
            <button id="submit-weather" @click="show">Search</button>
            <br />
            <button id="change-button" @click="showHumidity">{{weatherImage}}</button>


            <h1 class="city">{{city}}</h1>
            <div class="main-temp">
                <h2 class="temp">{{temp}}</h2><span class="format"><sup>o</sup>{{tempFormat}}</span>
            </div>

            <h3 class="description"></h3>

            <div class="weather-details">
                <div class="humidity"></div>
                <div class="pressure"></div>
                <div class="wind"></div>
            </div>


            <div class="weather-forecast">
                <div class="forecast-day">
                    <span class="day1"></span>
                    <i class="owf owf-small1 owf-2x"></i>
                    <span class="forecast-temp-max-1"></span>
                    <span class="forecast-temp-min-1"></span>
                </div>
                <div class="forecast-day">
                    <span class="day2"></span>
                    <i class="owf owf-small2 owf-2x"></i>
                    <span class="forecast-temp-max-2"></span>
                    <span class="forecast-temp-min-2"></span>
                </div>
                <div class="forecast-day">
                    <span class="day3"></span>
                    <i class="owf owf-small3 owf-2x"></i>
                    <span class="forecast-temp-max-3"></span>
                    <span class="forecast-temp-min-3"></span>
                </div>
                <div class="forecast-day">
                    <span class="day4"></span>
                    <i class="owf owf-small4 owf-2x"></i>
                    <span class="forecast-temp-max-4"></span>
                    <span class="forecast-temp-min-4"></span>
                </div>
            </div>

        </div>
  </div>
</template>



<script>
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            city: 'london',
            units: 'metric',
            temp: '30',
            temp_min: '3',
            temp_max: '',
            description: '',
            humidity: '',
            pressure: '',
            wind: '',
            isInCelsius: true,
            tempFormat: 'C',
            tempFormatToChange: 'F',
            weatherImage: '',
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weatherData: []
        }
    },
    methods: {
        show() {
            var self = this;
            this.temp = '';
            axios
                .get("http://api.openweathermap.org/data/2.5/forecast/find?q=" + this.city + "&units=" + this.units + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                .then(function(response) {

                    // here will go everything

                    self.weatherData = response;
                    var weatherData = self.weatherData;

                    self.weatherImage = self.showWeatherImage(weatherData);
                    self.showTemp(weatherData);
                    self.showTempMin(weatherData);
                    self.showTempMax(weatherData);
                    self.showDescription(weatherData);
                    self.showHumidity(weatherData);
                    self.showPressure(weatherData);
                    self.showWind(weatherData);
                    self.showDayName(weatherData);

                })
                .catch(function(error) {
                    console.log(error)
                })

        },
        showWeatherImage(weatherData) {
            console.log(weatherData.data.list[0].weather[0].id)
        },
        showTemp(weatherData) {
            console.log(weatherData.data.list[0].main.temp)
        },
        showTempMin(weatherData) {
            console.log(parseInt(weatherData.data.list[0].main.temp_min))
        },
        showTempMax(weatherData) {
            console.log(parseInt(weatherData.data.list[0].main.temp_max))
        },
        showDescription(weatherData) {
            console.log(weatherData.data.list[0].weather[0].description);
        },
        showHumidity(weatherData) {
            console.log(weatherData.data.list[0].main.humidity);
        },
        showPressure(weatherData) {
            console.log(weatherData.data.list[0].main.pressure);
        },
        showWind(weatherData) {
            console.log(weatherData.data.list[0].wind.speed);
        },
        showDayName(weatherData) {
            console.log(moment.unix(weatherData.data.list[0].dt))
        }
    }

}
</script>



<style lang="scss">
body {
    max-width: 100vw;
}

#app::before {
    filter: brightness(20%);


}

.full-bg {
    background-color: #111;
    background-repeat: no-repeat;
    background-size: cover;
}

* {
    box-sizing: border-box;
    font-family: Lato
}

#app {
    width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: url('assets/clouds.jpg')
}

.weather {
    width: 80%;
    color: white;
    text-align: center;
    max-width: 320px;
}

.owf {
    margin: 10px 0;
}



h1.city {
    font-size: 2rem;
    margin-top: 20px;
}

.main-temp {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

h2.temp {
    font-size: 7rem;
}

h3.description {
    font-size: 1.5rem;
}

span.format {
    margin-top: 10px;
}


.weather-details {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    flex-wrap: wrap;
}

.humidity, .pressure, .wind {
    margin: 10px;
}

.detail {
    background-color: rgba(255, 255, 255, 0.9);
    width: 20%;
    min-width: 150px;
    height: 100%;
    color: #111;
    margin: 0 3%;
}

.input-field {
    position: relative;
    display: inline-block;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0;
    background: transparent;
    padding: 0.85rem 0.15rem;
    color: #eee;
    max-width: 320px;
    margin: 20px auto 0 auto;
    &:focus {
        outline: none;
    }
}

button {
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 10px 0;
    &:focus {
        outline: none;
    }
}

#weather-image {
    margin-top: 20px;
}

.weather-forecast {
    max-width: 400px;
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: nowrap;
}

.forecast-day {
    width: calc(100% / 5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

@media screen and (max-width: 480px) {

    #app {
        min-height: 100%;
        background-color: #111 !important;

    }


    .options, .input-field{
        width: 100%;
    }
}

</style>
