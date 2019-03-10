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
            /*let citycard = document.createElement('article');*/
            let citytext = document.createElement('div');
            let citylink = document.createElement('a');
            let cityname = document.createElement('h2');
            let citymotto = document.createElement('h3');
            let cityyear = document.createElement('span');
            let citypop = document.createElement('span');
            let cityrainfall = document.createElement('span');
            let cityimg = document.createElement('img');
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            let span1 = document.createElement('span');
            let span2 = document.createElement('span');
            let span3 = document.createElement('span');

            span1.setAttribute('class', "citylabel");
            span2.setAttribute('class', "citylabel");
            span3.setAttribute('class', "citylabel");

            cityname.textContent = city.name;
            citymotto.textContent = city.motto;
            span1.textContent = "Year Founded: ";
            cityyear.textContent = city.yearFounded;
            span2.textContent = "Population: "
            let population = city.currentPopulation;
            citypop.textContent = population.toLocaleString();
            span3.textContent = "Annual Rainfall: ";
            cityrainfall.textContent = city.averageRainfall;
            let link = city.name;
            link = link.replace(/\s/g, '');
            let linkname = link.toLowerCase();
            cityimg.setAttribute('src', "images/" + linkname + "400.jpg");
            cityimg.setAttribute('alt', "City of " + city.name);

            citylink.setAttribute('href', "https://sharpsloth.github.io/CIT-230/assignments/week-9/" + linkname + ".html");

            para1.appendChild(span1);
            para1.appendChild(cityyear);

            para2.appendChild(span2);
            para2.appendChild(citypop);

            para3.appendChild(span3);
            para3.appendChild(cityrainfall);


            /*citylink.appendChild(citycard);*/

            citytext.appendChild(cityname);
            citytext.appendChild(citymotto);
            citytext.appendChild(para1);
            citytext.appendChild(para2);
            citytext.appendChild(para3);

            /*citycard.appendChild(citytext);
            citycard.appendChild(cityimg);*/

            citylink.appendChild(citytext);
            citylink.appendChild(cityimg);

            document.getElementById("cityinfo").appendChild(citylink);
        }
    });
}