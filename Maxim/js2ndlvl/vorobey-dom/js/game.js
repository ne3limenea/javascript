var shots = 0;
var kills = 0;
var panel= document.getElementById('panel');

var b = new Bird();
    b.render();
    b.fly();
    b.div.onclick = shoot;

function shoot(){
  kills++;
  panel.innertHTML ='<h1>Kills '+kills+' </h1>'
  b.die();
  b = new Bird();
  b.render();
  b.fly();
  b.div.onclick = shoot;

}
