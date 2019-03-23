let x = document.title;
let cityID = "4406831";
if (x.includes("Preston") == true) {
    cityID = "5604473";
} else if (x.includes("Soda Springs") == true) {
    cityID = "5678757";
}

let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=imperial&APPID=33581bcc8782f6905e49131b62e95192"

let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById("temp").innerHTML = weatherData.main.temp_max.toFixed();
    document.getElementById("current").innerHTML = weatherData.weather[0].description;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("speed").innerHTML = weatherData.wind.speed.toFixed();

    windchill();
}