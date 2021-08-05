const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let response="<!DOCTYPE html>"+
    "<html>"+
        "<head>"+
            "<title>My App</title>"+
          "</head>"+
        "<body>"+
          "<div>Computer</div>"+
                "<div><input type='button' name='button1' value='1' ><input type='button' name='button2' value='2' ><input type='button' name='button3' value='3' ></div>"+
                "<div><label>computer speed: </label> <label id='speed'>click a button to load </label></div> "+
                "<div><label>Ram Amount: </label> <label id='ram'>click a button to load </label></div> "+
                "<div><label>Storage space: </label> <label id='store'>click a button to load </label></div> "+
                "<div><label>price  </label> <label id='price'>click a button to load </label></div> "+
                
          
        "</body>"+
    "</html>";
    res.send(response);
 
});
app.listen(3000);