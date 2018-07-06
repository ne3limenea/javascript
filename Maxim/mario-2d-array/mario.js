// 0 - empty
// 1 - player
// 2 - coin
// 3 - bomb
// 4 - wall
// map[row][col] правильное обращение
var mario_r = 8; // изначальные коорды марио ряд
var mario_c = 8; // изначальные коорды марио столбец
var money   = 0;
var health  = 3;
var map = [
  [0,0,0,0,0,0,4,0,0,0], // 0
  [0,0,0,0,0,0,0,0,3,0], // 1
  [0,0,0,0,0,2,0,0,0,0], // 2
  [0,0,0,0,0,0,0,0,0,0], // 3
  [0,0,3,3,0,3,0,0,0,0], // 4
  [0,0,0,0,0,0,0,0,0,0], // 5
  [0,0,0,0,0,0,0,0,0,0], // 6
  [0,0,0,0,0,0,0,0,0,0], // 7
  [0,0,0,0,0,0,0,0,1,0], // 8
  [0,0,0,0,0,0,0,0,0,0]  // 9
// 0 1 2 3 4 5 6 7 8 9
];
var div = document.getElementById('map');
var span_money = document.getElementById('money');
var span_life = document.getElementById('life');


function move(){
  if(event.keyCode == 37 && mario_c > 0){ // left
    if(map[mario_r][mario_c-1] == 2){
      money+=5;
    }
    if(map[mario_r][mario_c-1] == 3){
      health-=1;
    }
    map[mario_r][mario_c] = 0; // удаляем марио с текущец позиции
    mario_c--;
    map[mario_r][mario_c] = 1; // добавляем марио в новые координаты
  }
  if(event.keyCode == 38 && mario_r > 0){ // up
    if(map[mario_r-1][mario_c] == 2){
      money+=5;
    }
    if(map[mario_r-1][mario_c] == 3){
      health-=1;
    }
    map[mario_r][mario_c] = 0; // удаляем марио с текущец позиции
    mario_r--;
    map[mario_r][mario_c] = 1;
  }
  if(event.keyCode == 39 && mario_c < 9){ // right
    if(map[mario_r][mario_c+1] == 2){
      money+=5;
    }
    if(map[mario_r][mario_c+1] == 3){
      health-=1;
    }
    map[mario_r][mario_c] = 0; // удаляем марио с текущец позиции
    mario_c++;
    map[mario_r][mario_c] = 1;
  }
  if(event.keyCode == 40 && mario_r < 9){ // down
    if(map[mario_r+1][mario_c] == 2){
      money+=5;
    }
    if(map[mario_r+1][mario_c] == 3){
      health-=1;
    }
    map[mario_r][mario_c] = 0; // удаляем марио с текущец позиции
    mario_r++;
    map[mario_r][mario_c] = 1;
  }
  showMap();
}

function showMap() {

  div.innerHTML = ``;
  if( health > 0){
    for (var row = 0; row < 10; row++) {
      for (var col = 0; col < 10; col++) {
        // console.log(map[row][col]);
        if (map[row][col] == 0){
          div.innerHTML += `<div></div>`;
        }else if (map[row][col] == 1){
          div.innerHTML += `<div class="player"></div>`;
        }else if( map[row][col] == 2){
          div.innerHTML += `<div class="coin"></div>`

        }else if( map[row][col] == 3){
          div.innerHTML += `<div class="bomb"></div>`

        }else if ( map[row][col] == 4){
          div.innerHTML += `<div class="wall"></div>`
        }
      }
    }
  }else{
    div.innerHTML = ``;
    alert("GAME OVER");
  }

  span_money.innerHTML = money;
  span_life.innerHTML = health;

}
showMap();
