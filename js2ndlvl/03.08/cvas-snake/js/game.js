var canvas;
var snake;
var mouse;
var items = []; //snake, bombs, mouses, 
////////////////////////Helpers/////////////////////////
function randCoord(){
    return Math.floor( Math.random() * maxLimit() / 24) * 24;
}
function maxLimit(){
    return ( 504 - 24 );
}
function minLimit(){
    return ( 0 );
}
function samePlace(item1,item2){ // logic for items in same place
    return item1.x == item2.x && item1.y == item2.y;
}
////////////////////////Helpers/////////////////////////

////////////////////////Interaction/////////////////////
function action(){
    switch (event.keyCode){ //decoupling
        case 37: snake.turnLeft(); break;
        case 38: snake.turnUp(); break;
        case 39: snake.turnRight(); break;
        case 40: snake.turnDown(); break;
    }
    // console.log(snake);
}
////////////////////////Interaction/////////////////////

function startGame(){
    canvas = document.getElementById('map').getContext('2d');
        snake = new Snake(canvas);
        snake.render(canvas);
        items.push(snake);
    var bomb = new Bomb(canvas);
        bomb.render();
        items.push(bomb);
        setTimeout(function(){ bomb.clear();}, 1000);
        mouse = new Mouse(canvas);
        mouse.live();
        items.push(mouse);
}
startGame();