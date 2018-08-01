var road   = document.getElementById('road');
var light1 = document.createElement('div');
var light2 = document.createElement('div');
var y      = 0;
var speed  = 5;
var lights = false;
var x      = 0;
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
  land.style.backgroundPosition='0px ' + y + 'px';
  car.style.left = x +'px';
  if( x > 160 || x < -10 ){
    speed *= 0.98;
  }
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
    if ( lights == true ){
      createLights();
    } else {
      car.removeChild( light1 );
      car.removeChild( light2 );
    }
  }
  if (event.keyCode == 37 && x>-50) {
    x-=130;
  }
  if (event.keyCode == 39 && x<200) {
    x+=130;
  }
}

function slow(){
  speed*=0.99;
}



setInterval ( move, 20 );
setInterval ( slow, 50 );
createCar();
