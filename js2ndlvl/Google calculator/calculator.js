const KEY = 'AIzaSyCtSDlDthX1SYhLldUm6jzuOs3XrhKKohc';
const URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';



function calculate(){
    var from   = document.getElementById('first').value;
    var to     = document.getElementById('second').value;
    var result = document.getElementById('result');
    var lang   = document.getElementById('lang').value;
    var mode   = document.getElementById('mode').value;
    var xhr = new XMLHttpRequest();
    xhr.open( 
        "GET", 
        URL + '?origins=' + from
            + '&destinations=' + to
            + '&key=' + KEY
            + '&language=' + lang
            + '&mode=' + mode
    );
    xhr.onload = function(){
        var data = JSON.parse( xhr.responseText );
        console.log(data);
        if ( data.rows[0].elements[0].status == "NOT_FOUND" ){
            result.innerHTML = "Sorry that city doesn't exist!";
        } else {
            result.innerHTML = 'Distance: ' + data.rows[0].elements[0].distance.text + '<br>Duration: ' + data.rows[0].elements[0].duration.text;
        }
        
    };
    xhr.send();
    
}

// select (language)
// select (transport)

// ?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY