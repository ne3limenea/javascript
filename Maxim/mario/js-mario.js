// 0 - empty
// 1 - player
// 2 - coin
// 3 - bomb 
// 4 - wall
// map[row][col]
var mario_r = 9; //coordenatele de start lui mario
var mario_c = 9;
var money = 0;
var health = 3;
var victory = 0;
var map = [ 
    [7,9,8,4,8,3,2,2,2,3], //0
    [3,2,8,4,2,4,2,4,5,4], //1
    [2,8,8,4,2,2,3,4,2,2], //2
    [6,4,4,2,3,4,2,2,4,2], //3
    [5,2,3,6,0,0,2,4,2,2], //4
    [2,4,0,0,2,4,4,2,2,2], //5
    [2,2,4,0,4,2,0,8,4,2], //6
    [2,4,2,0,3,2,4,2,3,2], //7
    [3,5,4,0,4,2,4,2,4,4], //8
    [4,8,2,3,4,2,2,2,2,1]  //9
   //0,1,2,3,4,5,6,7,8,9
] ;

var div= document.getElementById("map");
var go= document.getElementById("gov");
var span= document.getElementById("money");
var span_h= document.getElementById("health");



function move(){
    if (health<=0) {
        go.innerHTML =  ` <h1> GAME OVER</h1> `;
    } else if (victory>0) {
        go.innerHTML =  ` <h1>VICTORY !!!!</h1> `;
    } else {

    if (event.keyCode==37 && mario_c >0 ) // left
    {
        if(map[mario_r][mario_c-1] == 2){
            money+=5;
        }
        if(map[mario_r][mario_c-1] == 3){
            health--;
        } 
        if(map[mario_r][mario_c-1] == 4){
            wall;
        }
        if(map[mario_r][mario_c-1] == 5){
            health++;
        }
        if(map[mario_r][mario_c-1] == 6){
            health-=2;
        }
        if(map[mario_r][mario_c-1] == 7){
            queen;
        }
        if(map[mario_r][mario_c-1] == 8){
            money+=50;
        }
        if(map[mario_r][mario_c-1] == 9){
            victory++;
        }
    map[mario_r][mario_c] = 0; // sterge coordinatele  
    mario_c--;
    map[mario_r][mario_c] =1; // adauga coordinatele
        
    } else if (event.keyCode==38 && mario_r >0 ) // up
    {
        if(map[mario_r-1][mario_c] == 2){
            money+=5;
        }
        if(map[mario_r-1][mario_c] == 3){
            health--;
        }
        if(map[mario_r-1][mario_c] == 4){
            wall;
        }
        if(map[mario_r-1][mario_c] == 5){
            health++;
        }
        if(map[mario_r-1][mario_c] == 6){
            health-=2;
        }
        if(map[mario_r-1][mario_c] == 7){
            queen;
        }
        if(map[mario_r-1][mario_c] == 8){
            money+=50;
        }
        if(map[mario_r-1][mario_c] == 9){
            victory++;
        }
    map[mario_r][mario_c] = 0;   
    mario_r--;
    map[mario_r][mario_c] =1; 
        
    } else if (event.keyCode==39 && mario_c <9) // right
    {
        if(map[mario_r][mario_c+1] == 2){
            money+=5;
        }
        if(map[mario_r][mario_c+1] == 3){
            health--;
        }
        if(map[mario_r][mario_c+1] == 4){
            wall;
        }
        if(map[mario_r][mario_c+1] == 5){
            health++;
        }
        if(map[mario_r][mario_c+1] == 6){
            health-=2;
        }
        if(map[mario_r][mario_c+1] == 7){
            queen;
        }
        if(map[mario_r][mario_c+1] == 8){
            money+=50;
        }
        if(map[mario_r][mario_c+1] == 9){
            victory++;
        }
    map[mario_r][mario_c] = 0;   
    mario_c++;
    map[mario_r][mario_c] =1; 
        
    } else if (event.keyCode==40 && mario_r <9) // down
    {
        if(map[mario_r+1][mario_c] == 2){
            money+=5;
        }
        if(map[mario_r+1][mario_c] == 3){
            health--;
        }
        if(map[mario_r+1][mario_c] == 4){
            wall;
        }
        if(map[mario_r+1][mario_c] == 5){
            health++;
        }
        if(map[mario_r+1][mario_c] == 6){
            health-=2;
        }
        if(map[mario_r+1][mario_c] == 7){
            queen;
        }
        if(map[mario_r+1][mario_c] == 8){
            money+=50;
        }
        if(map[mario_r+1][mario_c] == 9){
            victory++;
        }
    map[mario_r][mario_c] = 0;   
    mario_r++;
    map[mario_r][mario_c] =1; 
        
    }
     
    showMap();
}
}
function showMap(){
    div.innerHTML = '';
    for(var row = 0; row < 10; row++ ){
        for(var col = 0; col < 10; col++ ){
        // console.log(map[row][col]);
       
        if (map[row][col] == 0 ) {
            div.innerHTML += ` <div>  </div> `;
        } else if (map[row][col] == 1 ) {
            div.innerHTML += ` <div class="player">  </div> `;
            
        }else if (map[row][col] == 2 ) {
            div.innerHTML += ` <div class="coin">  </div> `;
            
        }else if (map[row][col] == 3 ) {
            div.innerHTML += ` <div class="bomb">  </div> `;
            
        }else if (map[row][col] == 4 ) {
            div.innerHTML += ` <div class="wall">  </div> `;
            
        }else if (map[row][col] == 5 ) {
            div.innerHTML += ` <div class="heart">  </div> `;
            
        }else if (map[row][col] == 6 ) {
            div.innerHTML += ` <div class="monster">  </div> `;
            
        }else if (map[row][col] == 7 ) {
            div.innerHTML += ` <div class="queen">  </div> `;
            
        }else if (map[row][col] == 8 ) {
            div.innerHTML += ` <div class="rich">  </div> `;
            
        }else if (map[row][col] == 9 ) {
            div.innerHTML += ` <div class="flag">  </div> `;
            
        }
    }   
    }

    span.innerHTML=money;
    span_h.innerHTML=health;
}
showMap();