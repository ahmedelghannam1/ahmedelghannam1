const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var temp=0;
const getNumber=function(){


    rl.question("please enter number", number=> {
        if (number==='stop'){
            console.log('the sum of all you have entered is '+ temp);
           return rl.close();
        }
        else 
        {
            temp=temp+Number(number);
            getNumber();
        }

    });
}
getNumber();
