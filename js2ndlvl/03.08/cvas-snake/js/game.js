var canvas;

////// HELPERS //////
function randCoord(){
    return Math.floor( Math.random() * 500);
}
////// HELPERS //////

function startGame(){
    canvas = document.getElementById('map').getContext('2d')
    var snake = new Snake(canvas);
        snake.render();
    var bomb = new Bomb(canvas);
        bomb.render();
        setTimeout(function(){ bomb.clear(); },1000)
}
startGame()
// mouse