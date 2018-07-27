const KEY = '02ab868a101058d3160e97650482d972';
const URL = 'http://data.fixer.io/api/';
var  base = 'EUR';
var  date = '2018-07-26';
var  eur_to_mdl = 0;

function load(){
    var xhr = new XMLHttpRequest();
        xhr.open("GET",URL+date+'?access_key=' +KEY+ '&base=' +base);
        xhr.onload = function(){
            // convert JSON -> Object
            var data = JSON.parse(xhr.responseText);
           // alert(xhr.responseText);
           //console.log( data.rates );
           eur_to_mdl = data.rates.MDL;
           // загружаем список валют в селект
           var rates = Object.keys(data.rates);
           for(var i=0;i<rates.lenght;i++){
                rates[i];
           }
           console.log( rates );
        }
        xhr.send();
}
function convert(){
    var convert = document.getElementById('convert');
    var eurmdl = document.getElementById('eurmdl');
    //alert( convert.value);
    eurmdl.value = convert.value * eur_to_mdl;
}
load()