function allAnimation(){
    document.getElementById("start").onclick=start;
    document.getElementById("stop").onclick=stopAnim;
}
function pickFont(){
    document.getElementById("text-area").className=document.getElementById("fontsize").value;
}
function pickSpeed()
{
   // document.getElementById("text-area").value="Nader";
    if (document.getElementById("turbo").checked==true){
    speed=50;
    } else{
    speed=500;
    }
}

function stopAnim()
{
    document.getElementById("text-area").value=defaultarea;
    clearInterval(timer);
    document.getElementById("stop").disabled=true;
}

function start(){
    //clearInterval(timer);
    document.getElementById("stop").disabled=false;
    defaultarea=document.getElementById("text-area").value;
    pickFont();
    pickSpeed();
   // cleartext();
    playMotion();   
}
function wait(){
    document.getElementById("text-area").value=motionArr[motionIndex%motionArr.length];
    motionIndex++;
}
function play(a){
     
    
        if (timer===null){
       timer= setInterval(wait ,speed);
        }
        else {
            clearInterval(timer);
            timer=null;
        }
   
}
var timer=null;
var motionArr;
var motionIndex;
var speed;
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