let x = document.title;
let cityID = "4406831";
if (x.includes("Preston") == true) {
    cityId = "5604473";
} else if (x.includes("Soda Springs") == true) {
    cityId = "5678757";
}

let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=imperial&APPID=33581bcc8782f6905e49131b62e95192"

/* let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=33581bcc8782f6905e49131b62e95192" */

let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    let temperature = weatherData.main.temp_max;
    document.getElementById("temp").innerHTML = temperature;

    let current = weatherData.weather[0].description;
    document.getElementById("current").innerHTML = current;


    let humid = weatherData.main.humidity;
    document.getElementById("humidity").innerHTML = humid;

    let wind = weatherData.wind.speed;
    document.getElementById("speed").innerHTML = wind;

    windchill();
}

/* function windchill() {
    let t = parseFloat(document.getElementById('temp').innerHTML);
    let s = parseFloat(document.getElementById('speed').innerHTML);
    
    let result = 35.74 + .6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    
    document.getElementById('windchill').innerHTML = result.toFixed(1);
    
    } */