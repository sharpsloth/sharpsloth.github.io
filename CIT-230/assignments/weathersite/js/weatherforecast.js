let z = document.title;
let forecastID = "4406831";
if (z.includes("Preston") == true) {
    forecastId = "5604473";
} else if (z.includes("Soda Springs") == true) {
    forecastId = "5678757";
}

let forecastURLstring = "https://api.openweathermap.org/data/2.5/forecast?id=" + forecastID + "&units=imperial&APPID=33581bcc8782f6905e49131b62e95192"
let forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastURLstring, true);
forecastRequest.send();
forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    let forecastIcon = [];
    let forecastAlt = [];
    let forecastTemp = [];

    for (let i = 0; i < forecastData.list.length; i++) {
        let n = forecastData.list[i].dt_txt;
        let b = n.endsWith("18:00:00");
        if (b == true) {

            forecastIcon.push(forecastData.list[i].weather[0].icon);

            forecastAlt.push(forecastData.list[i].weather[0].description);

            forecastTemp.push(forecastData.list[i].main.temp);

        }

    }


    document.getElementById("1temp").textContent = forecastTemp[0].toFixed();
    document.getElementById("2temp").textContent = forecastTemp[1].toFixed();
    document.getElementById("3temp").textContent = forecastTemp[2].toFixed();
    document.getElementById("4temp").textContent = forecastTemp[3].toFixed();
    document.getElementById("5temp").textContent = forecastTemp[4].toFixed();

    let icon1 = document.getElementById("1icon");
    icon1.setAttribute("src", "https://openweathermap.org/img/w/" + forecastIcon[0] + ".png");
    icon1.setAttribute("alt", forecastAlt[0]);
    let icon2 = document.getElementById("2icon");
    icon2.setAttribute("src", "https://openweathermap.org/img/w/" + forecastIcon[1] + ".png");
    icon2.setAttribute("alt", forecastAlt[1]);
    let icon3 = document.getElementById("3icon");
    icon3.setAttribute("src", "https://openweathermap.org/img/w/" + forecastIcon[2] + ".png");
    icon3.setAttribute("alt", forecastAlt[2]);
    let icon4 = document.getElementById("4icon");
    icon4.setAttribute("src", "https://openweathermap.org/img/w/" + forecastIcon[3] + ".png");
    icon4.setAttribute("alt", forecastAlt[3]);
    let icon5 = document.getElementById("5icon");
    icon5.setAttribute("src", "https://openweathermap.org/img/w/" + forecastIcon[4] + ".png");
    icon5.setAttribute("alt", forecastAlt[4]);
}

let weekday = [];
for (let i = 1; i < 6; i++) {
    let dia = d.getDay() + i;
    if (dia > 6) {
        dia = dia - 7;
    }
    weekday.push(weekdays[dia]);

}
document.getElementById("1day").innerHTML = weekday[0];
document.getElementById("2day").innerHTML = weekday[1];
document.getElementById("3day").innerHTML = weekday[2];
document.getElementById("4day").innerHTML = weekday[3];
document.getElementById("5day").innerHTML = weekday[4];