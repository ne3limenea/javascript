var road = document.getElementById('road');
var y    = 0;
var speed= 5;
function createCar() { // создаёт car и добавляет в road
  var car = document.createElement('div')
      car.setAttribute('id','car');
      road.appendChild(car);
}

function move() {
  y+=speed;
  road.style.backgroundPosition = '0px '+y+'px';
}

function action() {
  //alert("haha")
  if ( event.keyCode == 38){
    speed++;
  }
  if ( event.keyCode == 40){
    speed--;
  }
}

setInterval( move, 20);
createCar();

// lights - div + linear gradient    key = L   +2div class lights in car
//                                   key = L   -2div
