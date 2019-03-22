const cityURL = "https://byui-cit230.github.io/weather/data/towndata.json";
const eventRequest = new XMLHttpRequest();
eventRequest.open('GET', cityURL);
eventRequest.responseType = 'json';
eventRequest.send();
eventRequest.onload = function () {
    let citydata = eventRequest.response;
    let cities = citydata['towns'];
    let citylocation = document.title;
    let cityname = 'Fish Haven';
    if (citylocation.includes('Preston') == true) {
        cityname = "Preston";
    } else if (citylocation.includes('Soda Springs') == true) {
        cityname = "Soda Springs";
    } else if (citylocation.includes('Fish Haven') == true) {
        cityname = "Fish Haven";
    } else if (citylocation.includes('Home') == true || citylocation.includes('Storm Center') == true || citylocation.includes('Gallery') == true) {
        cityname = "Home";
    }
    let cityEvents = document.createElement('ul');
    for (i = 0; i < cities.length; i++) {

        if (cities[i].name == cityname) {
            let event = cities[i].events;
            for (let j = 0; j < event.length; j++) {
                let listItem = document.createElement('li');
                listItem.textContent = event[j];
                cityEvents.appendChild(listItem);
                document.getElementById('events').appendChild(cityEvents);
            }
        }
    }

    if (cityname == "Home") {
        for (let k = 0; k < cities.length; k++) {
            if (cities[k].name == "Preston" || cities[k].name == "Soda Springs" || cities[k].name == "Fish Haven") {
                let soon = cities[k].events;
                for (let j = 0; j < soon.length; j++) {
                    let n = months.indexOf(m);
                    let p = n + 1;
                    if (p > 11) {
                        p -= 12;
                    }
                    if (soon[j].includes(months[n]) == true || soon[j].includes(months[p]) == true) {
                        let citylist = document.createElement('li');
                        citylist.textContent = cities[k].name;
                        citylist.setAttribute('class', "name");
                        let citysub = document.createElement("ul");

                        let listItem = document.createElement('li');
                        listItem.textContent = soon[j];
                        citysub.appendChild(listItem);
                        citylist.appendChild(citysub);
                        cityEvents.appendChild(citylist);
                        document.getElementById('events').appendChild(cityEvents);
                    }
                }

            }
        }
    }
}