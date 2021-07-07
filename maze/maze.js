$(function() {
    var wallHit=0;
    var startVisited=0;

    
    function youlose (){
        if ($(this).attr("id")==="boundary1")
        $(this).addClass("youlose");
        else
        $(".boundary").addClass("youlose");
        alert("you lose");  
        wallHit=1;  
        }
        
        $("#boundary1").mouseenter(youlose)
        $(".boundary").mouseenter(youlose)

  

    const strt= function () {
       wallHit=0;
      // alert($("#start").hoverdir()+"ahmed");
        $(".boundary").removeClass("youlose");
        startVisited=1;

    }
    $("#start").on("click",()=>{strt();});
    const end= function () {
       
        if (wallHit===0 && startVisited===1)
        {
            alert("you win");
            startVisited=0;
        }

    }
    $("#end").mouseover(end);
    

});