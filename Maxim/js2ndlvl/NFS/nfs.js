var road   = document.getElementById('road');
var light1 = document.createElement('div');
var light2 = document.createElement('div');
var y      = 0;
var speed  = 5;
var lights = false;

function createCar(){
  var car = document.createElement('div');
      car.id = 'car';
      road.appendChild( car );

}

function createLights(){
  light1.className = 'light';
  light2.className = 'light';
  car.appendChild( light1 );
  car.appendChild( light2 );
}

function move(){
  y+=speed;
  road.style.backgroundPosition='0px ' + y + 'px';
}


function action(){
  if ( event.keyCode == 38 ){
    speed++;
  }
  if ( event.keyCode == 40 ){
    speed--;
  }
  if ( event.keyCode == 76 ){
    lights = !lights;
  }
  if ( lights == true ){
    createLights();
  } else {
    car.removeChild( light1 );
    car.removeChild( light2 );
  }
}




setInterval ( move, 20 );
createCar();
