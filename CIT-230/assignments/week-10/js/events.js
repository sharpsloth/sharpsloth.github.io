const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    let citydata = request.response;
    let cities = citydata['towns'];
    let citylocation = document.title;
    console.log(citylocation);
    let cityname = 'Fish Haven';
    if (citylocation.includes('Preston') == true) {
        cityname = "Preston";
    } else if (citylocation.includes('Soda Springs') == true) {
        cityname = "Soda Springs";
    }
    let cityEvents = document.createElement('ul');
    for (i = 0; i < cities.length; i++) {

        if (cities[i].name == cityname) {
            var event = cities[i].events;
            for (let j = 0; j < event.length; j++) {
                let listItem = document.createElement('li');
                listItem.textContent = event[j];
                cityEvents.appendChild(listItem);
                document.getElementById('events').appendChild(cityEvents);
            }
        }
        console.log(cities);
    }
}