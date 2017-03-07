<template>
<section>

    <div id="app" :style="appBackground" :class="appBackgroundClass">

        <ul id="slide-out" class="side-nav" v-if='true'>
            <div class="input-field">
                <input id="weather" type="text" placeholder="Where would you like to go?">
                <label for="weather">City</label>
                <span class="error" v-if='errorMsg'>{{ errorMsg }}</span>
                <br />
                <button class="btn" id="submit-weather" @click="findWeather()">Search</button>
                <br />
            </div>
        </ul>

        <div id="loader" v-if="city == ''"></div>
        <p class="text-center" v-if="city == ''" style="margin-top: 200px;">Loading current weather...</p>


        <a href="#!" data-activates="slide-out" class="button-collapse">
            <div class="menu" v-show="cityLat != ''">
                <div class="menu-icon"></div>
            </div>
        </a>

        <transition name="fade">

            <div class="main" v-if="city != ''">

                <div class="global-wrapper">
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
                        <div class="humidity detail">Humidity
                            <br>
                            <div class="separator"></div>{{ humidity }}%</div>
                        <div class="pressure detail">Pressure
                            <br>
                            <div class="separator"></div>{{ pressure }}hPa</div>
                        <div class="wind detail">Wind
                            <br>
                            <div class="separator"></div>{{ wind }}{{windUnit}}</div>
                    </div>
                    <div class="separator-big"></div>
                    <div class="city-info">
                        <div class="sunrise detail">Sunrise
                            <br>
                            <div class="separator"></div>{{ sunrise }}</div>
                        <div class="sunset detail">Sunset
                            <br>
                            <div class="separator"></div>{{ sunset }}</div>
                        <div class="geocoords detail">Geo coords
                            <br>
                            <div class="separator"></div><a :href="'https://www.google.pl/maps/@' + lat + ',' + long + ',12z?hl=en'">[{{ lat }}, {{ long }}]</a></div>
                    </div>

                </div>
            </div>
        </transition>

        <transition name="fade">
            <div class="details" v-if="city != ''">
              <div class="vue-chart-wrapper">
                <transition name="fade">
                    <vue-chart
                      chart-type="LineChart" :columns="chartTemperatures.columns" :rows="chartTemperatures.rows" :options="chartTemperatures.options" v-if="showChartTemp"></vue-chart>
                      sasda
                </transition>
                <!-- <transition name="fade">
                    <vue-chart
                      chart-type="LineChart" :columns="chartPressure.columns" :rows="chartPressure.rows" :options="chartPressure.options" v-if="showChartTemp"></vue-chart>
                      sasda
                </transition>
                <transition name="fade">
                    <vue-chart
                      chart-type="ColumnChart"
                      :columns="chartPrecipitation.columns"
                      :rows="chartPrecipitation.rows"
                      :options="chartPrecipitation.options" v-if="showChartPrecipitation"></vue-chart>
                </transition> -->

                  <div class="chart-buttons">
                      <button type="button" name="button">Buton</button>
                      <button type="button" name="button" @click="">Button</button>
                      <button type="button" name="button">Button</button>
                  </div>

              </div>

                <div class="forecast">
                    <div class="choose-view" v-if="city != ''">
                        <button @click="changeForecastType()" class="btn white black-text">{{ forecastType }}</button>
                    </div>


                    <transition name="fade">
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
                    </transition>
                    <transition name="fade">
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
                    </transition>

                </div>
            </div>
        </transition>
    </div>
</section>
</template>

<script>
export default {

    name: 'app',
    data() {
        return {
            viewportWidth: document.documentElement.clientWidth,
            errorMsg: '',
            city: '',
            cityLat: '',
            cityLon: '',
            coordsSet: false,
            country: '',
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
            dailyForecast: false,
            forecastType: 'Change to daily forecast',
            celsius: 'C',
            fahrenheit: 'F',
            forecastDays: [],
            forecastHours: [],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weatherDataForecast: [],
            weatherDataNow: [],
            weatherDataHourly: [],
            showChartTemp: true,
            // showChartPrecipitation: true,
            chartTemperatures: {
                columns: [{
                    'type': 'string',
                    'label': 'Day'
                }, {
                    'type': 'number',
                    'label': 'Temp'
                }],
                rows: [],
                options: {
                    title: 'Temperature chart',
                    hAxis: {
                        title: 'Date',
                    },
                    vAxis: {
                        title: 'Temp'
                    },
                    width: $('.details').width() * 0.9,
                    height: $('.vue-chart-wrapper').height() * 1,
                    curveType: 'function',
                    backgroundColor: 'transparent'
                }
            },
            // chartPressure: {
            //     columns: [{
            //         'type': 'string',
            //         'label': 'Day'
            //     }, {
            //         'type': 'number',
            //         'label': 'Temp'
            //     }],
            //     rows: [],
            //     options: {
            //         title: 'Temperature chart',
            //         hAxis: {
            //             title: 'Date',
            //         },
            //         vAxis: {
            //             title: 'Temp',
            //         },
            //         width: 200,
            //         height: 300,
            //         curveType: 'function',
            //         backgroundColor: 'transparent'
            //     }
            // },
            // chartPrecipitation: {
            //     columns: [{
            //         'type': 'string',
            //         'label': 'Date'
            //     }, {
            //         'type': 'number',
            //         'label': 'mm'
            //     }],
            //     rows: [],
            //     options: {
            //         title: 'Company Performance',
            //         hAxis: {
            //             title: 'Precipitation',
            //         },
            //         vAxis: {
            //             title: ''
            //         },
            //         width: 200,
            //         height: 300,
            //         curveType: 'function'
            //       }
            //   }
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
        findCity() {
            var self = this;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    self.cityLat = (position.coords.latitude).toFixed(4);
                    self.cityLon = (position.coords.longitude).toFixed(4);
                    self.coordsSet = true
                    console.log(self.cityLat + ', ' + self.cityLon)
                });
            }
        },
        findWeather() {
            if (document.getElementById('weather').value === '') {
                this.errorMsg = 'Wrong city, you geographical moron'
            } else if (document.getElementById('weather').value !== '') {
                $('#weather').sideNav('hide');
                this.errorMsg = '';
                console.log(this.viewportWidth);
                this.city = document.getElementById('weather').value;
                console.log(this.city)
                //for use inside axios.
                var self = this;
                //
                axios
                    .get("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + self.city + "&units=" + self.units + "&cnt=" + self.noOfDays + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                    .then(function(response) {

                        // here will go everything
                        console.log(1)
                        console.log(1)
                        console.log(1)

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
                        // self.chartTemperatures.rows = self.getChartTemps(weatherData);
                        // self.chartPrecipitation.rows = self.getChartPrecipitation(weatherData);
                        console.log(self.formattedDescription)

                    })
                    .catch(function(error) {
                        console.log(error);
                    })



                axios
                    .get("http://api.openweathermap.org/data/2.5/weather?q=" + self.city + "&units=" + self.units + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                    .then(function(response) {

                        self.weatherDataNow = response;
                        var weatherData = self.weatherDataNow;
                        console.log(response.data)
                        self.sunrise = self.showSunrise(weatherData)
                        self.sunset = self.showSunset(weatherData)
                        self.lat = self.showLat(weatherData)
                        self.long = self.showLong(weatherData)
                    })

                    .catch(function(error) {
                        console.log(error)
                    })


                axios
                    .get("http://api.openweathermap.org/data/2.5/forecast?q=" + self.city + "&units=" + self.units + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                    .then(function(response) {

                        self.weatherDataHourly = response;
                        self.forecastHours = response.data.list
                        var weatherData = self.weatherDataHourly;
                        console.log(3)

                    })

                    .catch(function(error) {
                        console.log(error)
                    })


            }


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
        getChartTemps(weatherData) {
            this.chartTemperatures.rows = [];
            for (var i = 0; i <= 5; i++) {
                this.chartTemperatures.rows.push([moment.unix(weatherData.data.list[i].dt).format("DD/MM"), weatherData.data.list[i].temp.day]);
                console.log(weatherData.data.list[i].rain)

            }
        },
        // getChartPressure(weatherData) {
        //     this.chartPressure.rows = [];
        //     for (var i = 0; i <= 5; i++) {
        //         this.chartPressure.rows.push([moment.unix(weatherData.data.list[i].dt).format("DD/MM"), weatherData.data.list[i].temp.day]);
        //         console.log(weatherData.data.list[i].pressure)
        //
        //     }
        // },
        // getChartPrecipitation(weatherData) {
        //     for (var i = 0; i <= 5; i++) {
        //       this.chartPrecipitation.columns.push([moment.unix(weatherData.data.list[i].dt).format("DD/MM"), weatherData.data.list[i].speed]);
        //
        //   }
        // },
        showDayMonthFromUnix(unixTime) {
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
                this.forecastType = 'Change to daily forecast';
                this.dailyForecast = false
            } else if (this.forecastType === 'Change to daily forecast') {
                this.forecastType = 'Change to hourly forecast';
                this.dailyForecast = true
            }
        }

    },
    created() {
        this.findCity()

    },
    watch: {
        // if coordsSet changes, fire show() function
        coordsSet: function() {
            console.log(2);
            this.errorMsg = '';
            console.log(this.viewportWidth);
            //for use inside axios.
            var self = this;
            //
            axios
                .get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + self.cityLat + "&lon=" + self.cityLon + "&units=" + self.units + "&cnt=" + self.noOfDays + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                .then(function(response) {

                    // here will go everything
                    console.log(1)
                    console.log(response.data)

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
                    self.formattedDescription = self.formatDescription();
                    self.chartTemperatures.rows = self.getChartTemps(weatherData);
                    // self.chartPressure.rows = self.getChartPressure(weatherData);
                    // self.chartPrecipitation.rows = self.getChartPrecipitation(weatherData);
                    console.log(self.formattedDescription)


                })
                .catch(function(error) {
                     console.log(error)
                     console.log('sieeema')

                })



            axios
                .get("http://api.openweathermap.org/data/2.5/weather?lat=" + self.cityLat + "&lon=" + self.cityLon + "&units=" + self.units + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                .then(function(response) {

                    self.weatherDataNow = response;
                    var weatherData = self.weatherDataNow;
                    console.log(2)
                    self.sunrise = self.showSunrise(weatherData)
                    self.sunset = self.showSunset(weatherData)
                    self.lat = self.showLat(weatherData)
                    self.long = self.showLong(weatherData)
                })

                .catch(function(error) {
                    console.log(error)
                })


            axios
                .get("http://api.openweathermap.org/data/2.5/forecast?lat=" + self.cityLat + "&lon=" + self.cityLon + "&units=" + self.units + "&APPID=c609a67002c7af9ecf56719e3992c66f")
                .then(function(response) {

                    self.weatherDataHourly = response;
                    self.forecastHours = response.data.list
                    var weatherData = self.weatherDataHourly;
                    console.log(3)

                })

                .catch(function(error) {
                    console.log(error)
                })


        }
    }


}
</script>

<style lang="scss">
body {
    max-width: 100vw;
    background: black;
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

/*PRELOADER*/

h4 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    font-weight: 200;
    opacity: 1;
    font-family: sans-serif;
    color: #fff;
}

#loader {
    animation: animate 1.5s linear infinite;
    clip: rect(0, 80px, 80px, 40px);
    height: 80px;
    width: 80px;
    position: absolute;
    left: calc(50% - 40px);
    top: calc(50% - 40px);
}
@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(220deg);
    }
}
#loader:after {
    animation: animate2 1.5s ease-in-out infinite;
    clip: rect(0, 80px, 80px, 40px);
    content: '';
    border-radius: 50%;
    height: 80px;
    width: 80px;
    position: absolute;
}
@keyframes animate2 {
    0% {
        box-shadow: inset #fff 0 0 0 2px;
        transform: rotate(-140deg);
    }
    50% {
        box-shadow: inset #fff 0 0 0 2px;
    }
    100% {
        box-shadow: inset #fff 0 0 0 2px;
        transform: rotate(140deg);
    }
}

/*END OF PRELOADER*/

.bgClass {
    background-position: center center;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

a {
    text-decoration: none;
    color: white;
    &:hover {
        color: white;
    }
}

hr {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
}

.menu {
    position: fixed;
    top: 32px;
    left: 5%;
    padding: 5px;
    width: 40px;
    height: 40px;
}

.menu-icon {
    width: 25px;
    height: 3px;
    background: #fff;
    position: relative;
    &:before {
        position: absolute;
        width: 30px;
        height: 3px;
        content: '';
        top: 10px;
        background: #fff;
    }
    &:after {
        position: absolute;
        width: 20px;
        height: 3px;
        content: '';
        top: 20px;
        background: #fff;
    }
}

.side-nav {
  left: 0 !important;
}

.input-field {
    padding: 30px !important;
    width: 100% !important;
    color: black !important;
    & label {
        top: 30px !important;
        left: 30px !important;
    }
}

.main {
    width: calc(40vw - 50px);
    height: calc(100vh - 50px);
}

.details {
    width: calc(60vw - 50px);
    height: calc(100vh - 50px);
}

.details,
.main {
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.user-input {
    width: 50%;
    margin: 0 auto;
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
    opacity: 0.7;
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
    margin-top: 30px;
    text-align: center;
}

h2.temp {
    font-size: 7rem;
    margin: 0;
}

h3.description {
    font-size: 1.5rem;
    text-align: center;
}

.format {
    margin-top: 15px;
    cursor: pointer;
}

.city-info,
.weather-details {
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
        margin: 0 auto;
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
    margin: 20px auto 0;
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
    ,
    .day-and-month {
        font-size: 1rem;
    }
    .forecast-humidity,
    .forecast-pressure,
    .forecast-wind {
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
    margin: 0 auto;

}

.forecast-day {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 0 10px;
    border-right: 1px solid rgba(255,255,255,0.4);
    padding-right: 5%;
    &:last-child {
        border: none;
    }
    & span {
        margin: 3px 0;
    }
}

.forecast-hour {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 3%;
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    &:after {
        content: '';
        background: rgba(255,255,255,0.4);
        position: absolute;
        bottom: 0;
        left: 10%;
        width: 80%;
        height: 1px;
        margin: 10px 0;
    }
}

.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave {
    opacity: 0;
}

.vue-chart-wrapper {
    display: flex;
}

.chart-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.vue-chart {
    & rect {
        fill: rgba(255,255,255,0.2);
    }
    & path {
        stroke: #ddd;
    }
    & text {
        fill: #ddd;
    }
    & svg {
      width: 100%;
    }
}
@media all and (max-width: 767px) {
    #app {
        flex-direction: column;
        min-height: 100vh;
    }
    .chart,
    .details,
    .main {
        height: 100%;
        width: 100%;
    }
    .input-field,
    .options {
        width: 100%;
    }
    .weather-forecast-daily {
        font-size: 0.9rem;
        ,
        .day-and-month {
            font-size: 0.9rem;
        }
        .forecast-humidity,
        .forecast-pressure,
        .forecast-wind {
            font-size: 0.9rem;
        }
    }
    .forecast-day {
        margin: 5px;
    }
    .weather-forecast-hourly {
        overflow-y: hidden;
    }
}
</style>
