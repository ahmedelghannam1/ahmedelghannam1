function allAnimation(){
    document.getElementById("start").onclick=start;
   
 
}
function start(){
    cleartext();
    playMotion();   
}
function play(a){
    document.getElementById("text-area").value=a; 
}
function wait (){

}
wait (){

}
function playMotion(){
    var a =splitFunc();
   
    for (var i=0;i<a.length;i++)
    {
        
        setTimeout(wait, 1000);
        play(a[i]);
        
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