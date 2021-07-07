
$(document).ready(function(){

  const rem= function removeElement(){
        $("#1").remove();
        clearInterval(this._timer);
    }
  /* 
   document.getElementById("#1").onclick=removeElement;
    var timer=null;*/

    function enlargeCircle(delta) {
       var id=1;
        $("#" + id +"").css("height", function(idx, old) {
            return parseInt(old) + delta + "px";
           }); 
        $("#" + id +"").css("width", function(idx, old) {
            return parseInt(old) + delta + "px";
           }); 
           $("#" + id +"").css("top", "50%"); 
           $("#" + id +"").css("right", "50%"); 

    }
    timer=setInterval(()=>{enlargeCircle(10)},250);
    $(document).on( 'click', 'div', rem);
     // document.getElementById(1).onclick=removeElement; 
});
//window.onload=animation;





