const express = require('express');
const path=require("path");
const app = express();
app.use("/resu lt",express.urlencoded({extended:false}));
app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();
    let csscode="";
    if(hour>=6 &&hour<=18)
    csscode= "<link href='/css/day.css' rel='stylesheet'>";
    else 
    csscode= "<link href='/css/night.css' rel='stylesheet'>";

    let response="<!DOCTYPE html>"+
    "<html>"+
        "<head>"+
            "<title>My App</title>"+
            csscode +
        "</head>"+
        "<body>"+
            "<form action='/result' method='POST'>"+
                "<label>Name <input type='text' name='name'></label>"+
                "<label>Age <input type='text' name='age'></label>"+
                "<input type='submit' value='submit query'></label>"+
            "</form>"+
        "</body>"+
    "</html>";
    res.send(response);
});
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.send(`Welcome ${name} you look younger than your age which is ${age}`);
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);