$(function() {
    
    function youlose (){
        if ($(this).attr("id")==="boundary1")
        $(this).addClass("youlose");
        else
        $(".boundary").addClass("youlose");
        alert("you lose");    
        }
        
        $("#boundary1").mouseenter(youlose)
        $(".boundary").mouseenter(youlose)

  

    const strt= function () {
       location.reload();
        

    }
    $("#start").mouseover(strt);
    

});