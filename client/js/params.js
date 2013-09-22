console.log('params.js running');

var prmstr = window.location.search.substr(1);
var prmarr = prmstr.split ("&");

params = {};

for ( var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
}