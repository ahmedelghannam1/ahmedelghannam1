$(()=>{

    const addedSuccess = () => {
      const car=   $("#cart").val();
      const pathhi= $("#proPathname");
      if (pathhi==0)
    {
    
    car[0]["0"]++;
    }
    else if (pathhi==1)
    {
        car[1]["1"]++;
    }
    else
    {
        car[2]["2"]++;
    }
    $("#cart").val(car);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        const data = {
            cartArr: car,
            pathnamea: $("#proPathname")

            };
        $.post({
            url: "/addtocart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess);
           // .fail(noSuccess);
        return false;
    });




  });
