$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = () => {
        const answers=[ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
        "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
        "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
        "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];
        let value1 =parseInt((Math.random()*100)%20);
        $("#QA").val(answers[value1]);
        $("#QA").highlight();
        $("#msg").text("question is been answered "+ value1);
        $("#QA").focus();
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        const data = {
            qa: $("#QA").val(),
            };
        $.get({
            url: "/",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess);
           // .fail(noSuccess);
        return false;
    });
});