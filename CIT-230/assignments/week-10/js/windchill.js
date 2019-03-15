let t = parseInt(document.getElementById('temp').innerHTML);
let s = parseInt(document.getElementById('speed').innerHTML);

let result = 35.74 + .6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

document.getElementById('windchill').innerHTML = result.toFixed(1);