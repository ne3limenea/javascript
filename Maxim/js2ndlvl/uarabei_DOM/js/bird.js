// COMPOTENTS
class Bird{
  //создание объекта
  constructor(){
    this.top = Math.round(500 * Math.random());
    this.left = Math.round(500 * Math.random());
    this.color = 'red';
  }
  // выводит птицу в хтмл
  render(){
  //  var div = document.createElement('div');
    this.div = document.createElement('div');
    this.div.className
    this.div.setAttribute(`class`,`bird ${this.color}`);
    document.body.firstElementChild.appendChild(this.div);
    // position CSS left,top должна появится птица ????
  }
}
var b = new Bird();
    b.render();
