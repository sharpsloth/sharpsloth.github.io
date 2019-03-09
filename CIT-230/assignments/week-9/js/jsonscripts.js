const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    let citydata = request.response;
    let cities = citydata['towns'];
    cities.forEach(city => {
        if (city.name == "Preston" || city.name == "Fish Haven" || city.name == "Soda Springs") {
            let citycard = document.createElement('article');
            let citylink = document.createElement('a');
            let cityname = document.createElement('h2');
            let citymotto = document.createElement('h3');
            let cityyear = document.createElement('p');
            let citypop = document.createElement('p');
            let cityrainfall = document.createElement('p');
            let cityimg = document.createElement('img');

            cityname.textContent = city.name;
            citymotto.textContent = "Motto: " + city.motto;
            cityyear.textContent = "Year Founded " + city.yearFounded;
            let population = city.currentPopulation;
            citypop.textContent = "Population: " + population.toLocaleString();
            cityrainfall.textContent = "Annual Rainfall: " + city.averageRainfall;
            cityimg.setAttribute('src', "images/" + city.name + "400.jpg");
            cityimg.setAttribute('alt', "City of " + city.name);
            let link = city.name;
            link = link.replace(/\s/g, '');
            let linkname= link.toLowerCase();
            citylink.setAttribute('href', "https://sharpsloth.github.io/CIT-230/assignments/week-9/" + linkname + ".html")

            citylink.appendChild(citycard);

            citycard.appendChild(cityname);
            citycard.appendChild(citymotto);
            citycard.appendChild(cityyear);
            citycard.appendChild(citypop);
            citycard.appendChild(cityrainfall);
            citycard.appendChild(cityimg);

            citylink.appendChild(citycard);

            document.getElementById("cityinfo").appendChild(citylink);
        }
    });
}