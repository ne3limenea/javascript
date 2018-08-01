// COMPONENTS
class Bird{
  // creaza obiectul
  constructor(){
    this.top = Math.round( (500 - 50) * Math.random() );
    this.left = Math.round( (500 - 50) * Math.random() );
    this.color = 'red';
    this.speed = Math.round( Math.random() * 1 + 1 );

  }
  die(){
    this.div.classList.add('dying');
    var self = this;
    clearInterval(this.timer);
    setTimeout (function() {
      self.div.parentElement.removeChild(self.div);
    }, 500);
  }


  // Afiseaza pasarea in html
  render(){
    this.div = document.createElement('div');
    this.div.setAttribute('class', `bird ${this.color}` );
    document.body.firstElementChild.appendChild( this.div );
    // position. left, top

    this.div.style.top = `${this.top}px`;
    this.div.style.left = `${this.left}px`;
  }
  fly(){
    var self = this;
    this.timer = setInterval(function(){
      if ( self.left > (250 + Math.random() * 200) || self.left < Math.random() * 200 ){
        self.speed *= -1;
        if( Math.abs(self.speed) < 20 ){
          self.speed *= 1;
        }
      }
      //// functia in functie si atunci el nu vede this asa ca o salvam in prima functie in variabila
      self.left+=self.speed;
      self.div.style.left = `${self.left}px`;
      console.log(self.left);
    },20);
  }
}
