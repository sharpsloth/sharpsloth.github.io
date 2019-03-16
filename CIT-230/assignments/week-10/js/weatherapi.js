let apiURLstring = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=33581bcc8782f6905e49131b62e95192"
let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    let weather = weatherData['main'];
    let temperature = document.getElementById("current-temp");
    temperature.textContent = weather.temp;

}