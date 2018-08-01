function showBtnAnimated(){
    var canvas = document.querySelector('#play-btn').getContext('2d'); //only for canvas назначили объект художником
    console.log(canvas);

   // for(var radius=40;radius>=10;radius-=5){
    var radius=40;
    var start_angle=0;
    var color = 255;
    var timer = setInterval(function(){
        canvas.strokeStyle= 'rgb(0,'+color+',0)';
        for(var angle=0;angle<2;angle+=0.2){
            canvas.lineWidth=3;
            canvas.beginPath();
            canvas.arc(50,50,radius,  (0.0+ angle +start_angle)*Math.PI,  (0.15+ angle +start_angle)*Math.PI);
            //canvas.closePath();
            canvas.stroke();
        }
        radius-=5;
        start_angle+=0.03;
        color-=30;
        if(radius<15) clearInterval(timer);

    },30);
    //}
    

}
//onmouseout function hideBtnAnimated()
function hideBtnAnimated(){
    //.arc() + white() interval
}
//showBtnAnimated()

