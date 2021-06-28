function allAnimation(){
    document.getElementById("start").onclick=start;
    document.getElementById("stop").onclick=stopAnim;
}
function pickFont(){
    document.getElementById("text-area").className=document.getElementById("fontsize").value;
}
function pickSpeed()
{
    if (document.getElementById("turbo").value=true){
    speed=50;
    } else{
    speed=250;
    }
}

function stopAnim()
{
    document.getElementById("text-area").value=defaultarea;
}

function start(){
    document.getElementById("stop").disabled=false;
    defaultarea=document.getElementById("text-area").value;
    pickFont();
    pickSpeed();
    cleartext();
    playMotion();   
}
function wait(){
    document.getElementById("text-area").value=motionArr[motionIndex%motionArr.length];
    motionIndex++;
}
function play(a){
     
    var timer=null;
        if (timer===null){
        setInterval(wait ,1000);
        }
        else {
            clearInterval(timer);
            timer=null;
        }
   
}

var motionArr;
var motionIndex;
function playMotion(){
    motionArr =splitFunc();
    motionIndex=0;
   play(motionArr);
    
}

function cleartext(){
    document.getElementById("text-area").value=""; 
}




function splitFunc(){
    var x= ANIMATIONS[document.getElementById("animation").value].split("=====");
    
    return x;
}

window.onload=allAnimation;