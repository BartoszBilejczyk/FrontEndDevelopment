<template>
  <div id="app" :style="appBackground" :class="appBackgroundClass">

        <div class="main">
           <transition name="fade">
           <div class="user-input">
              <input class="input-field" type="text" id="city" name="city" placeholder="Insert a city"/>

                <span class="error" v-if='errorMsg'>{{ errorMsg }}</span>
                <br />
                <button class="btn white black-text" id="submit-weather" @click="show">Search</button>
                <br />
           </div>
           </transition>


           <transition name="fade">
            <div class="global-wrapper" v-if="city != ''">
                <h1 class="city">{{city}}, {{country}}</h1>
                <h3 class="description">{{description}}</h3>
                <i class="owf owf-huge" :class="['owf-' + weatherImage]"></i>
                <div class="main-temp">
                    <h2 class="temp">{{temp}}</h2>
                    <div class="format">
                        <span :class="addTransparencyToCelsius" @click="changeToCelsius()"><sup>o</sup>{{celsius}}</span>
                        <span>|</span>
                        <span :class="addTransparencyToFahrenheit" @click="changeToFahrenheit()"><sup>o</sup>{{fahrenheit}}</span>
                    </div>
                </div>

                <h3 class="description"></h3>

                <div class="weather-details">
                    <div class="humidity detail">Humidity<br><div class="separator"></div>{{ humidity }}%</div>
                    <div class="pressure detail">Pressure<br><div class="separator"></div>{{ pressure }}hPa</div>
                    <div class="wind detail">Wind<br><div class="separator"></div>{{ wind }}{{windUnit}}</div>
                </div>
                <div class="separator-big"></div>
                <div class="city-info">
                    <div class="sunrise detail">Sunrise<br><div class="separator"></div>{{ sunrise }}</div>
                    <div class="sunset detail">Sunset<br><div class="separator"></div>{{ sunset }}</div>
                    <div class="geocoords detail">Geo coords<br><div class="separator"></div><a :href="'https://www.google.pl/maps/@' + lat + ',' + long + ',12z?hl=en'">[{{ lat }}, {{ long }}]</a></div>
                </div>

            </div>
        </transition>
        </div>
    <transition name="fade">
        <div class="details" v-if="city != ''">
            <div class="chart">
                <img class="img-fluid" style="height: 32vh" src="src/assets/chart.png" alt="">
            </div>

            <div class="forecast">
               <div class="choose-view" v-if="city != ''">
                    <button @click="changeForecastType()" class="btn white black-text">{{ forecastType }}</button>
               </div>
                    <div class="weather-forecast-daily" v-if="dailyForecast">
                        <div class="forecast-day" v-for='(forecastDay, index) in forecastDays'>
                            <span class="day">{{ showDayFromUnix(forecastDay.dt) }}</span>
                            <span class="day-and-month">{{ showDayMonthFromUnix(forecastDay.dt) }}</span>
                            <i class="owf owf-2x" :class="['owf-' + forecastDay.weather[0].id]"></i>
                            <span class="forecast-day-temp">{{ parseInt(forecastDay.temp.max) }}<sup>o</sup> </span>
                            <span :class="addTransparencyToNightTemps" class="forecast-night temp">{{ parseInt(forecastDay.temp.min) }}<sup>o</sup> </span>
                            <span class="forecast-humidity">{{ parseInt(forecastDay.humidity) }}%</span>
                            <span class="forecast-pressure">{{ parseInt(forecastDay.pressure) }} <span v-if="viewportWidth > 480">hPa</span></span>
                            <span v-if="viewportWidth > 480" class="forecast-wind">{{ forecastDay.speed }} {{windUnit}}</span>
                        </div>
                    </div>

                    <div class="weather-forecast-hourly" v-if="dailyForecast == false">
                        <div class="forecast-hour" v-for="(forecastHour, index) in forecastHours">
                            <span class="hour-and-date">{{ showDayMonthFromUnix(forecastHour.dt) }} | {{ showHourFromUnix(forecastHour.dt) }}</span>
                            <i class="owf owf-2x" :class="['owf-' + forecastHour.weather[0].id]"></i>
                            <span class="temp">{{ parseInt(forecastHour.main.temp) }}<sup>o</sup></span>
                            <span class="forecast-humidity">{{ parseInt(forecastHour.main.humidity) }}%</span>
                            <span class="forecast-pressure">{{ parseInt(forecastHour.main.pressure) }} <span v-if="viewportWidth > 480">hPa</span></span>
                            <span v-if="viewportWidth > 480" class="forecast-wind">{{ forecastHour.wind.speed }} {{windUnit}}</span>
                        </div>
                    </div>

            </div>
        </div>
    </transition>
  </div>



</template>



<script>

export default {
    name: 'app',
    data() {
        return {
            viewportWidth: document.documentElement.clientWidth,
            errorMsg: '',
            city: this.findCity(),
            country: 'PL',
            units: 'metric',
            windUnit: 'km/h',
            noOfDays: 5,
            temp: '',
            weatherImage: '',
            tempNight: '',
            tempMin: '',
            tempMax: '',
            description: '',
            formattedDescription: 'gradient2',
            humidity: '',
            pressure: '',
            wind: '',
            lat: '',
            long: '',
            sunrise: '',
            sunset: '',
            isInCelsius: true,
            dailyForecast: true,
            forecastType: 'Change to hourly forecast',
            celsius: 'C',
            fahrenheit: 'F',
            forecastDays: [],
            forecastHours: [],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weatherDataForecast: [],
            weatherDataNow: [],
            weatherDataHourly: []


        }
    },
    computed: {
        addTransparencyToCelsius() {
            return {
                'half-transparent': !this.isInCelsius
            }
        },
        addTransparencyToFahrenheit() {
            return {
                'half-transparent': this.isInCelsius
            }
        },
        addTransparencyToNightTemps() {
            return {
                'half-transparent': true
            }
        },
        appBackground() {
            return {
                background: "url('src/assets/" + this.formattedDescription + ".jpg')",
            }
        },
        appBackgroundClass() {
            return {
                bgClass: true,
            }
        }

    },
    methods: {
            show() {
            console.log(this.city)
            this.errorMsg = '';
            var rawCity = document.getElementById('city').value;
            console.log(this.viewportWidth);

            var formattedCity = rawCity.charAt(0).toUpperCase() + rawCity.slice(1).toLowerCase();

            //for use inside axios.
            var self = this;
            //
            axios
                .get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + formattedCity + "&units=" + self.units + "&cnt=" + self.noOfDays + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                .then(function(response) {

                    // here will go everything
                    console.log(response.data.list[0].weather[0])

                    self.weatherData = response;
                    self.forecastDays = response.data.list
                    var weatherData = self.weatherData;
                    self.formattedDescription = self.description.replace(/\s+/g, '-');


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
                    self.formattedDescription = self.formatDescription()
                    console.log(self.formattedDescription)

                })
                .catch(function(error) {
                    self.errorMsg = 'Wrong City'
                })



            axios
                .get("http://api.openweathermap.org/data/2.5/weather?q=" + formattedCity + "&units=" + self.units + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                .then(function(response) {

                    self.weatherDataNow = response;
                    var weatherData = self.weatherDataNow;

                    self.sunrise = self.showSunrise(weatherData)
                    self.sunset = self.showSunset(weatherData)
                    self.lat = self.showLat(weatherData)
                    self.long = self.showLong(weatherData)
                })

                .catch(function(error) {
                    console.log(error)
                })


            axios
                .get("http://api.openweathermap.org/data/2.5/forecast?q=" + formattedCity + "&units=" + self.units + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                .then(function(response) {

                    self.weatherDataHourly = response;
                    self.forecastHours = response.data.list
                    var weatherData = self.weatherDataHourly;
                console.log(self.forecastHours)

                })

                .catch(function(error) {
                    console.log(error)
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
            return parseFloat(weatherData.data.list[0].temp.min)
        },
        showTempMax(weatherData) {
            return parseFloat(weatherData.data.list[0].temp.max)
        },
        showDescription(weatherData) {
            return weatherData.data.list[0].weather[0].description;
        },
        showHumidity(weatherData) {
            return weatherData.data.list[0].humidity;
        },
        showPressure(weatherData) {
            return parseInt(weatherData.data.list[0].pressure);
        },
        showWind(weatherData) {
            return parseFloat(weatherData.data.list[0].speed);
        },
        showLat(weatherData) {
            return weatherData.data.coord.lat;
        },
        showLong(weatherData) {
            return weatherData.data.coord.lon;
        },
        showSunrise(weatherData) {
            return moment.unix(weatherData.data.sys.sunrise).format("hh:mm a");
        },
        showSunset(weatherData) {
            return moment.unix(weatherData.data.sys.sunset).format("hh:mm a");
        },
        showDayFromUnix(unixTime) {
            return moment.unix(unixTime).format("dddd").substr(0, 3)
        },
        showHourFromUnix(unixTime) {
            return moment.unix(unixTime).format("hh:mm a")
        },
        showDayMonthFromUnix(unixTime){
            return moment.unix(unixTime).format("DD/MM")
        },
        formatDescription() {
            return this.description.replace(/\s+/g, '-')
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
        },
        changeForecastType() {
            if (this.forecastType === 'Change to hourly forecast') {
                this.forecastType = 'Daily';
                this.dailyForecast = false
            } else if (this.forecastType === 'Change to daily forecast') {
                this.forecastType = 'Hourly';
                this.dailyForecast = true
            }
        }

    },
    mounted() {
        this.show();
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

* {
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
}

#app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100vw;
    min-height: 100vh;
    content: '';
    color: white;
    overflow-x: hidden;
}

.bgClass {
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

a {
    text-decoration: none;
    color: white;
    &:hover {
        color: white
    }
}

hr {
    border-top: 1px solid rgba(255,255,255,0.7)
}

.main {
    width: calc(40vw - 50px);
    height: calc(100vh - 50px);
    padding: 0 25px;
}

.user-input {
    width: 50%;
    margin: 0 auto;
}

.details {
    width: calc(60vw - 50px);
    height: calc(100vh - 50px);
    padding: 0 25px;
}

.choose-view {
    display: flex;
    justify-content: center;
    & button {
        width: auto;
        margin: 15px;
    }
}

.chart {
    height: calc(40vh - 25px);
    padding: 25px;
    display: flex;
    justify-content: center;
}

.forecast {
    height: calc(60vh - 25px);
    padding: 10px;
}

.half-transparent {
    opacity: 0.7
}

.owf {
    margin: 10px 0;
}

.owf-huge {
    font-size: 10rem;
    display: block;
    text-align: center;
}

.main-temp {
    display: flex;
    justify-content: center;
}


h1.city {
    font-size: 2rem;
    margin-top: 20px;
    text-align: center;
}

h2.temp {
    font-size: 7rem;
    margin: 0
}

h3.description {
    font-size: 1.5rem;
    text-align: center;
}

.format {
    margin-top: 15px;
    cursor: pointer
}

.weather-details, .city-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    flex-wrap: nowrap;
}

.detail {
    margin: 10px;
    text-align: center;
}

.separator {
    width: 10%;
    height: 1px;
    background-color: aliceblue;
    margin: 5px auto;
    &-big {
        height: 1px;
        width: 70%;
        background-color: aliceblue;
        margin: 0 auto
    }
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
    padding: 5px 8px;
    margin: 10px 0;
    width: 100%;
    &:focus {
        outline: none;
    }
}

#weather-image {
    margin-top: 20px;
}

.weather-forecast-daily {
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: nowrap;
    font-size: 1.5rem;
    .day-and-month, {
        font-size: 1rem;
    }
    .forecast-humidity, .forecast-pressure, .forecast-wind {
        font-size: 1rem;
        margin-top: 10px;
    }
    i {
        margin-top: 20px;
    }

}

.weather-forecast-hourly {
    height: calc(40vh);
    overflow-y: scroll;
}


.forecast-day {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 10px;
}


.forecast-hour {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255,255,255,0.7);
    padding: 1% 0;
}


    .fade-enter {
        opacity: 0
    }

    .fade-enter-active {
        transition: opacity 1s
    }


    .fade-leave {
        opacity: 0
    }


@media all and (max-width: 900px) {

    #app {
        flex-direction: column;
        min-height: 100vh;
    }

    .main, .details, .chart {
        height: 100%;
        width: 100%;
    }

    .options, .input-field{
        width: 100%;
    }

    .weather-forecast-daily {
        font-size: 0.9rem;
        .day-and-month, {
            font-size: 0.9rem;
        }
        .forecast-humidity, .forecast-pressure, .forecast-wind {
            font-size: 0.9rem;
        }
    }

    .forecast-day {
        margin: 5px;
    }


}

</style>
