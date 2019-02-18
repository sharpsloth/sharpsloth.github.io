var d = new Date();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var wd = weekdays[d.getDay()];
var day = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var m = months[d.getMonth()];
var year = d.getFullYear();

document.getElementById("date").innerHTML = wd + ", " + day + " " + m + " " + year;