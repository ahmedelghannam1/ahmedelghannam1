function allAnimation(){
    document.getElementById("start").onclick=start;
   
 
}
function start(){
    playMotion();   
}
function play(a){
    document.getElementById("text-area").value=a; 
}
function playMotion(){
    var a =splitFunc();
    for (var i=0; i<a.length;i++){
      var timerplay=setInterval(play, 250,a[i]);
      //cleartext();

    }
   
}

function cleartext(){
    document.getElementById("text-area").value=""; 
}




function splitFunc(){
    var x= ANIMATIONS[document.getElementById("animation").value].split("=====");
    
    return x;
}

window.onload=allAnimation;