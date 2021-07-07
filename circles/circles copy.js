
$(document).ready(function(){

  var timer=null;
  const rem= function (){
        $("#1").hide();
      clearInterval(timer);
        //timer=null;
    }
    const shw=function(id){
        clearInterval(timer);
        setsz(1,$("#width").val());
        $("#"+id).toggle('show');
        var del= parseInt( $("#interval").val());
        var gro= parseInt($("#grossAmount").val());
        
        timer=setInterval(()=>{enlargeCircle(gro)},del);


    }
  
   const setsz= function setsize(id,size){
       
        $("#" + id ).css("height", size+"px"); 
        $("#" + id ).css("width", size+"px");  

    }
    function enlargeCircle(delta) {
       var id=1;
        $("#" + id ).css("height", function(idx, old) {
            return parseInt(old) + delta + "px";
           }); 
        $("#" + id ).css("width", function(idx, old) {
            return parseInt(old) + delta + "px";
           }); 
           $("#" + id ).css("top", "50%"); 
           $("#" + id ).css("right", "50%"); 

    }
    timer=setInterval(()=>{enlargeCircle(10)},250);
    $(document).on( 'click', '#1',()=>{ rem(1)});
    $(document).on( 'click', '#start',()=>{ shw(1)});
     // document.getElementById(1).onclick=removeElement; 
});
//window.onload=animation;





