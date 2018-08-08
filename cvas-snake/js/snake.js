// snake component
class Snake{
    constructor(canvas){
        // this.icon_head = 'img/snake.png';
        // this.icon_tail = 'img/tail.png';
        this.canvas = canvas;
        this.speed = 2;
        this.segments = [
            { x: randCoord(), y: randCoord(), d: 'u'}
        ];
        this.who = 'snake';
    }
    // movement
    turnLeft(){
        this.segments[0].d = 'l';
    }
    turnUp(){
        this.segments[0].d = 'u';
    }
    turnRight(){
        this.segments[0].d = 'r';
    }
    turnDown(){
        this.segments[0].d = 'd';
    }
    // render to canvas
    render(){
        // segments
        for( var i = 0; i < this.segments.length; i++ ){
            var src = 'img/' + (i==0?'snake':'tail') + '_' + this.segments[i].d + '.png'; 
            var image = new Image();
                image.src = src;
                var self = this;
                image.onload = function(){
                    self.canvas.drawImage(this.image,self.segments[this.i].x,self.segments[this.i].y);
                }.bind({i:i,image:image})
            // this.canvas.fillRect(this.segments[i].x,this.segments[i].y,24,24);
        }
        // this.canvas.fillRect(this.x,this.y,24,24);   
    }
    move(){
        this.clear();
        var head = this.segments[0];
        var new_x = head.x;
        var new_y = head.y;
        switch(head.d){
            case 'l':                
                new_x = head.x - 24;
                new_x = new_x < minLimit() ? new_x = maxLimit(): new_x;
            break;
            case 'u':
                new_y = head.y - 24;
                new_y = new_y < minLimit() ? new_y = maxLimit(): new_y;
            break;
            case 'r':
                new_x = head.x + 24;
                new_x = new_x > maxLimit() ? new_x = minLimit(): new_x;
            break;
            case 'd':
                new_y = head.y + 24;
                new_y = new_y > maxLimit() ? new_y = minLimit(): new_y;
            break;
        }
        this.segments.unshift({ 
            x: new_x, 
            y: new_y, 
            d: head.d 
        });
        for(var j=0;j<items.length;j++){
            // intersects items?
            if ( samePlace(this.segments[0], items[j]) ){
                if( items[j].who=='mouse'){
                    this.segments.push( this.segments[this.segments.length-1]);
                    items[j].die();
                    items.splice(j,1);
                    placeMice();
                }else if( items[j].who=='bomb'){
                    this.segments.pop();
                    this.segments.pop();
                    items[j].die();
                    items.splice(j,1);
                    placeBomb();
                    ////HW ??????????
                }
            } else {
               
            }
        }
        this.segments.pop();
        this.render(); 
        //     if ( samePlace(this.segments[0], bomb) ){
        //         if ( this.segments.length <= 1 ){
        //             alert('GAME OVER');                
        //         }else{
        //             setTimeout(function(){ bomb.clear();}, 10);
        //             this.segments.pop();
        //             this.segments.pop();
        //         }
        //     } 
        // this.render();
    }
    // life cycle
    live(){
        var self = this;
        setInterval(function(){ self.move(); }, 500/self.speed);
    }
    // clear it's place
    clear(){
        for( var i = 0; i < this.segments.length; i++ ){
            this.canvas.clearRect(this.segments[i].x, this.segments[i].y, 24, 24);
        } 
    }
}