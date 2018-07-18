// COMPONENTS
class Bird{
  // creaza obiectul
  constructor(){
    this.top = Math.round( 500 * Math.random() );
    this.left = Math.round( 500 * Math.random() );
    this.color = 'red';
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
}

var b = new Bird();
    b.render();
