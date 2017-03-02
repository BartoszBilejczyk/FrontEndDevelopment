<template>
  <div id="app">
    <div class="weather container">

            <input class="input-field" type="text" id="city" name="city" placeholder="Insert a city"/>

            <span class="error" v-if='errorMsg'>{{ errorMsg }}</span>
            <br />
            <button id="submit-weather" @click="show">Search</button>
            <br />

            <div class="global-wrapper">
                <h1 class="city">{{city}}</h1>
                <div class="main-temp">
                    <h2 class="temp">{{temp}}</h2>
                    <div class="format">
                        <span @click="changeToCelsius()"><sup>o</sup>{{celsius}}</span>
                        <span>|</span>
                        <span @click="changeToFahrenheit()"><sup>o</sup>{{fahrenheit}}</span>
                    </div>
                </div>

                <h3 class="description"></h3>

                <div class="weather-details">
                    <div class="humidity">Humidity <br><div class="separator"></div>{{ humidity }}%</div>
                    <div class="pressure">Pressure <br><div class="separator"></div>{{ pressure }}hPa</div>
                    <div class="wind">Wind <br><div class="separator"></div>{{ wind }}{{windUnit}}</div>
                </div>

                <div class="weather-forecast">
                    <div class="forecast-day" v-for='(forecastDay, index) in forecastDays'>
                        <span class="day">{{ showDayFromUnix(forecastDay.dt) }}</span>
                        <i class="owf owf-2x" :class="['owf-' + forecastDay.weather[0].id]"></i>
                        <span class="forecast-day-temp">{{ parseInt(forecastDay.temp.day) }}<sup>o</sup> </span>
                        <span class="forecast-night temp">{{ parseInt(forecastDay.temp.night) }}<sup>o</sup> </span>
                    </div>
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
            errorMsg: '',
            city: 'London',
            units: 'metric',
            windUnit: 'km/h',
            noOfDays: 7,
            temp: '',
            weatherImage: '',
            tempNight: '',
            tempMin: '',
            tempMax: '',
            description: '',
            humidity: '',
            pressure: '',
            wind: '',
            isInCelsius: true,
            tempFormatActive: 'C',
            celsius: 'C',
            fahrenheit: 'F',
            forecastDays: [],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weatherData: [],
        }
    },
    methods: {
        show() {
            this.errorMsg = '';
            var rawCity = document.getElementById('city').value;
            var formattedCity = rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();

            //for use inside axios.
            var self = this;
            //
            axios
                .get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + formattedCity + "&units=" + self.units + "&cnt=" + self.noOfDays + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                .then(function(response) {

                    // here will go everything
                    console.log(response.data.list[0])

                    self.weatherData = response;
                    self.forecastDays = response.data.list
                    var weatherData = self.weatherData;

                    // how to make these variables from here change also in Vue data??


                    self.city = self.showCity(weatherData)
                    self.country = self.showCountry(weatherData)
                    self.temp = self.showTemp(weatherData)
                    self.tempNight = self.showTemp(weatherData)
                    self.weatherImage = self.showWeatherImage(weatherData)
                    self.tempMin = self.showTempMin(weatherData)
                    self.tempMax = self.showTempMax(weatherData)
                    self.description = self.showDescription(weatherData)
                    self.humidity = self.showHumidity(weatherData)
                    self.pressure = self.showPressure(weatherData)
                    self.wind = self.showWind(weatherData)

                })
                .catch(function(error) {
                    self.errorMsg = 'Wrong City'
                })

        },

        showCity(weatherData) {
            return weatherData.data.city.name
        },
        showCountry(weatherData) {
            return weatherData.data.city.country
        },
        showTemp(weatherData) {
            return parseInt(weatherData.data.list[0].temp.day)
        },
        showTempNight(weatherData) {
            return parseInt(weatherData.data.list[0].temp.night)
        },
        showWeatherImage(weatherData) {
            return weatherData.data.list[0].weather[0].id
        },

        showTempMin(weatherData) {
            return parseInt(weatherData.data.list[0].temp.min)
        },
        showTempMax(weatherData) {
            return parseInt(weatherData.data.list[0].temp.max)
        },
        showDescription(weatherData) {
            return weatherData.data.list[0].weather[0].description;
        },
        showHumidity(weatherData) {
            return weatherData.data.list[0].humidity;
        },
        showPressure(weatherData) {
            return weatherData.data.list[0].pressure;
        },
        showWind(weatherData) {
            return weatherData.data.list[0].speed;
        },
        showDayFromUnix(unixTime) {
            return moment.unix(unixTime).format("dddd").substr(0, 3)
        },
        changeToFahrenheit() {
            if (this.isInCelsius == true) {
                this.units = 'imperial';
                this.windUnit = 'mp/h'
                this.show()
                this.isInCelsius = false;
            }
        },
        changeToCelsius() {
            if (this.isInCelsius == false) {
                this.units = 'metric';
                this.windUnit = 'km/h'
                this.show();
                this.isInCelsius = true;
            }
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
    min-height: 100vh;
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

.format {
    margin-top: 15px;
    cursor: pointer
}


.weather-details {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    flex-wrap: nowrap;
}

.humidity, .pressure, .wind {
    margin: 10px;
}

.separator {
    width: 10%;
    height: 1px;
    background-color: aliceblue;
    margin: 5px auto;
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
    max-width: 700px;
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: nowrap;
}

.forecast-day {
    width: calc(100% / 7);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 10px;
}

@media screen and (max-width: 480px) {

    #app {
        background: #111 !important;

    }


    .options, .input-field{
        width: 100%;
    }

    .forecast-day {
        margin: 5px;
    }
}

</style>
