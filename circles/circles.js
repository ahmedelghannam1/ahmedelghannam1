
$(document).ready(function(){

  var timer=null;
  const rem= function (){
        $(".circle").hide();
      clearInterval(timer);
        //timer=null;
    }
   
    var i=1;
    const shw=function(id){
        
       var num=parseInt($("#nrCir").val());
        var pos=0;
        
        for ( i=1;i<num;i++)
        {
            $("<body>").append($("<div>", {
                "class": "circle"                
               }));
            
            
       }
            clearInterval(timer);
            setsz(1,$("#width").val());
            $(".circle").toggle('show');
            var del= parseInt( $("#interval").val());
            var gro= parseInt($("#grossAmount").val());
            
            timer=setInterval(()=>{enlargeCircle(gro)},del);

        }
  
   const setsz= function setsize(id,size){
       
        $(".circle" ).css("height", size+"px"); 
        $(".circle" ).css("width", size+"px");  

    }
    function enlargeCircle(delta) {
       var id=1;
        $(".circle").css("height", function(idx, old) {
            return parseInt(old) + delta + "px";
           }); 
        $(".circle" ).css("width", function(idx, old) {
            return parseInt(old) + delta + "px";
           }); 
          

    }
    timer=setInterval(()=>{enlargeCircle(10)},250);
    
    $(document).on( 'click', '.circle',()=>{ rem(1)});
    $(document).on( 'click', '#start',()=>{ shw(1)});
     // document.getElementById(1).onclick=removeElement; 
});
//window.onload=animation;





