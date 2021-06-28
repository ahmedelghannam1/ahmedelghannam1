window.onload=function(){
    function splitFunc(){
    return ANIMATIONS[document.getElementById("animation").value].split("=====");
    }

    function play(a){
        document.getElementById("text-area").value=a; 
    }
    function playMotion(){
   /*     var a =splitFunc();
        for (var i=0; i<a.length;i++){
          // play(a[i])
            setInterval(play, 250,a[i]);

        }
     */   
        document.getElementById("text-area").value="Ahmed";

    }
    playMotion();

    //document.getElementById("start").onclick=function(){
    //document.getElementById("text-area").value=ANIMATIONS[document.getElementById("animation").value];
    }
}