function windchill() {

    let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=33581bcc8782f6905e49131b62e95192"
    let weatherRequest = new XMLHttpRequest();
    weatherRequest.open('GET', apiURLstring, true);
    weatherRequest.send();
    weatherRequest.onload = function () {
        let weatherData = JSON.parse(weatherRequest.responseText);


        let t = parseFloat(weatherData.main.temp);
        let s = parseInt(document.getElementById('speed').innerHTML);

        let result = 35.74 + .6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);



        if (t <= 50 || s > 3) {

            document.getElementById('windchill').innerHTML = result.toFixed();
        } else {
            document.getElementById('windchill').innerHTML = "n/a";
        }
    }



}