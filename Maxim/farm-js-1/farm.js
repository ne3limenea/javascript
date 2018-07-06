//LEGEND
// 0 - land
// 1 - corn
// 2 - potato
// 3 - tomato
var farm_map = [2,2,3,1,1,3,2,3,3,0];
var farm_div = document.getElementById('farm');
var prices   = {
  corn:   15,
  potato: 5,
  tomato: 10
};
// new button to check SUM of prices
function plantCorn(){
  var cell = prompt("vvedite cell")
  //если свободен сработает, если нет выдать ошибку
  // не больше 10 ячеек поставить ограничение 10 ячеек
  //
  farm_map[cell-1] = 1;
  showMap();
}
function plantPotato(){
  farm_map[9] = 2;
  showMap();
}
function plantTomato(){
  farm_map[9] = 3;
  showMap();
}

function showMap(){
  //удаляем старое и добавляем новое
  farm_div.innerHTML = '';
  for(var i=0; i<farm_map.length;i++){
    if( farm_map[i] == 1){
      farm_div.innerHTML += `<div class="box corn"></div>`

    }else if( farm_map[i] == 2 ){
      farm_div.innerHTML += `<div class="box potato"></div>`

    }else if( farm_map[i] == 3 ){
      farm_div.innerHTML += `<div class="box tomato"></div>`

    }else{
      farm_div.innerHTML += `<div class="box"></div>`

    }
  }
}
showMap();
