const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    let citydata = request.response;
    let cities = citydata['towns'];
    /*let citylocation = document.referrer;
    console.log(citylocation);
    if (citylocation.includes('preston') = true) {
        let cityname = "Preston";
    } else if (citylocation.includes('sodasprings') = true) {
        let cityname = "Soda Springs";
    } else {
        let cityname = "Fish Haven";
    }
    */
   let cityname = "Preston";
    let cityEvents = document.createElement('ul');
    for (i = 0; i < cities.length; i++) {

        if (cities[i].name = cityname) {
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