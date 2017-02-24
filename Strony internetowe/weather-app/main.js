$(document).ready(function () {

    var temp = '';
    var temp_min = ''
    var temp_max = ''
    var description = '';
    var humidity = '';
    var pressure = '';
    var wind = '';
    var isInCelsius = true;
    var tempFormat = '';
    var tempFormatToChange = '<sup>o</sup>F';
    var weatherImage = '';
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    function showWeatherImage(data) {
        return data.list[0].weather[0].id
    }

    function showTemp(data) {
        return parseInt(data.list[0].main.temp)
    }

    function showTempMin(data) {
        return parseInt(data.list[0].main.temp_min)
    }

    function showTempMax(data) {
        return parseInt(data.list[0].main.temp_max)
    }

    function showDescription(data) {
        return data.list[0].weather[0].description;
    }

    function showHumidity(data) {
        return data.list[0].main.humidity;
    }

    function showPressure(data) {
        return data.list[0].main.pressure;
    }

    function showWind(data) {
        return data.list[0].wind.speed;
    }

    function returnDayName(data) {
        return moment.unix(data.list[0].dt)
    }



    $('#submit-weather').click(function () {
        var city = $('#city').val();
        var units = 'metric'

        if (city != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast/find?q=" + city + "&units=" + units + "&APPID=c609a67002c7af9ecf56719e3992c66f",
                type: "GET",
                dataType: 'jsonp',
                success: function (data) {

                    console.log(data);
                    weatherImage = showWeatherImage(data);
                    temp = showTemp(data);
                    temp_min = showTempMin(data);
                    temp_max = showTempMax(data);
                    description = showDescription(data);
                    tempFormat = '<sup>o</sup>C';
                    humidity = showHumidity(data);
                    pressure = showPressure(data);
                    wind = showWind(data);


                    $('.temp').html(temp);
                    $('.format').html(tempFormat);
                    $('.description').html(description);
                    $('.humidity').html("Humidity<br />" + humidity + '%')
                    $('.pressure').html("Pressure<br />" + pressure + 'hPa')
                    $('.wind').html("Wind<br />" + wind + "km/h")
                    $('.city').html(data.city.name + ", " + data.city.country);
                    $('.description').html(description);
                    $('.detail').css("padding", "20px");
                    $('.error').html('');

                    for (var i = 1; i <= 4; i++) {
                        console.log(moment.unix(1487905200).format("DD/MM"));

                        $('.day' + i).html(moment.unix(data.list[8 * i].dt).format("dddd").substr(0, 3));
                        $('.owf-small' + i).addClass("owf-" + data.list[i].weather[0].id);
                        $('.forecast-temp-max-' + i).html(temp_max + tempFormat);
                        $('.forecast-temp-min-' + i).html(temp_min + tempFormat + " ").css("color", "rgba(255,255,255,0.6)");


                    }
                    // add a day to .day

                    // add the small image for the day to.

                    // add the date to .date

                }
            })
        } else {
            $('.error').html("Field cannot be empty")
        }
    })


    $('#temp').html(temp + tempFormat);
    $('#change-button').html("Change to " + tempFormatToChange);

    $('#change-button').click(function () {
        if (isInCelsius) {
            tempFormat = '<sup>o</sup>F';
            tempFormatToChange = '<sup>o</sup>C';
            temp = parseInt(temp * 9 / 5 + 32).toFixed(0);
            temp_min = parseInt(temp_min * 9 / 5 + 32).toFixed(0);
            temp_max = parseInt(temp_max * 9 / 5 + 32).toFixed(0);
            $('.temp').html(temp);
            $('.format').html(tempFormat);

            for (var i = 1; i <= 4; i++) {

                $('.forecast-temp-max-' + i).html(temp_max + tempFormat);
                $('.forecast-temp-min-' + i).html(temp_min + tempFormat + " ").css("color", "rgba(255,255,255,0.6)");
            }



            $('#temp-min').html("min<br />" + temp_min + tempFormat);
            $('#temp-max').html("max<br />" + temp_max + tempFormat);
            $(this).html("Change to " + tempFormatToChange)
            isInCelsius = false;

        } else {
            tempFormat = '<sup>o</sup>C';
            tempFormatToChange = '<sup>o</sup>F';
            //Deduct 32, then multiply by 5, then divide by 9
            temp = parseInt(((temp - 32) * 5 / 9).toFixed(0))
            temp_min = parseInt(((temp_min - 32) * 5 / 9).toFixed(0))
            temp_max = parseInt(((temp_max - 32) * 5 / 9).toFixed(0))
            $('.temp').html(temp);
            $('.format').html(tempFormat)
            for (var i = 1; i <= 4; i++) {

                $('.forecast-temp-max-' + i).html(temp_max + tempFormat);
                $('.forecast-temp-min-' + i).html(temp_min + tempFormat + " ").css("color", "rgba(255,255,255,0.6)");
            }
            $(this).html("Change to " + tempFormatToChange)
            isInCelsius = true;

        }
    })


});
