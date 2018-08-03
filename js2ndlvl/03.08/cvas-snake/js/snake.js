//component SNAKE
class Snake{
    constructor(canvas){
        this.icon_head = 'img/snake.png';
        this.icon_tail = 'img/snake-tail.png';
        this.x    = randCoord();
        this.y    = randCoord();
        this.direction = 'up';
        this.canvas = canvas;
        this.segments = [{ x: 10, y: 0 },{ x: 10, y: 24 },{ x: 10, y: 48 }];
    }
    //render to canvas
    render(){
        // segments
        for(var i=0;i<this.segments.length;i++){
            if(i==0){//head
                var image_head = new Image();
                image_head.src = this.icon_head;
                var self = this;
                image_head.onload = function(){
                    self.canvas.drawImage(image_head,self.segments[0].x,self.segments[0].y);
                }
            }else{
                var image_tail = new Image();
                image_tail.src = this.icon_tail;
                var self = this;
                image_tail.onload = function(){
                    self.canvas.drawImage(image_tail,self.segments[1].x,self.segments[1].y);
                }
            }
            this.canvas.fillRect(this.segments[i].x,this.segments[i].y,24,24);
        }
        //this.canvas.fillRect(this.x,this.y,24,24);

    }

}