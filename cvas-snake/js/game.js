var canvas;
var snake;
var mouse;
var items = []; // snake, bombs, mouses

//HW 4 save to localStorage / load from localStorage
//smotreti v who i zapustit live
////////////////////////Helpers/////////////////////////
function randCoord(){
    return Math.floor( Math.random() * maxLimit() / 24 ) * 24 ;
}
function maxLimit(){
    return ( 504 - 24 );
}
function minLimit(){
    return 0;
}
function samePlace(item1, item2){
    return item1.x == item2.x && item1.y == item2.y;  //daca apara 2 in acelasi loc <<
}
function placeMice(){
    var mouse = new Mouse(canvas);
    mouse.live();
    items.push(mouse);
}
function placeBomb(){
    var bomb = new Bomb(canvas);
    bomb.render();
    items.push(bomb);
}
////////////////////////Helpers/////////////////////////

////////////////////////Interaction/////////////////////
function action(){
    switch(event.keyCode){
        case 37: 
            snake.turnLeft();
        break;
        case 38: 
            snake.turnUp();
        break;
        case 39:
            snake.turnRight();
        break;
        case 40:
            snake.turnDown();
        break;

    }
}
////////////////////////Interaction/////////////////////

function startGame(){
    canvas = document.getElementById('map').getContext('2d');
     snake = new Snake(canvas);
        snake.render(canvas);
        items.push(snake);
        placeBomb();
        // setTimeout(function(){ bomb.clear();}, 1000);
        placeMice();
}
startGame();
//localStorage.setItem('game', JSON.stringify(items));
//JSON.parse(localStorage.getItem('game'));