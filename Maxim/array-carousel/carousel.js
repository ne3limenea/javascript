var slides = [
  {
    title: "My first slide",
    url: "https://ws.ai/wp-content/uploads/postthumb-3-600x400.png"
  },
  {
    title: "The second slide",
    url: "http://shantest.wordpress.ncsu.edu/files/2015/08/2010_mercedes_F_800_Style_5_600-600x400.jpg"
  },
  {
    title: "The last slide",
    url: "http://pipeline.staradvertiserblogs.com/files/2012/04/Pipeline_041412_419-600x400.jpg"
  }
];

function showSlide( index ){
  // console.log( slides[index] );
  var div = document.body.children[0];
  div.innerHTML += `
    <div>
      <h2>${slides[index].title}</h2>
      <img src="${slides[index].url}">
    </div>
  `;
}

function showCarousel(){
  //clear
  var div = document.body.children[0];
  div.innerHTML = '';
  for(var i=0; i<3; i++)
  showSlide(i);
}
function prev(){
  //push, pop, shift, unshift
  slides.unshift( slides.pop() );
  showCarousel();
}
function next(){

  slides.push( slides.shift() );
  showCarousel();
}
/////////////////////////////////////////

showCarousel();
setInterval( next, 3000 )
// JAVASscript
// setTimeout( function, interval )
// setInterval( function, interval )
// clearTimeout( id )
// clearInterval( id )
