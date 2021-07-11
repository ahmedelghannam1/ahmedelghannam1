const express = require('express');
const app = express();
const path =require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use("/result",express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    
    res.render("index.ejs", {

        });
});
app.post('/result', (req, res) => {
    let name1 = req.body.name;
    let age1 = req.body.age;
    if (!name1) {
        name1 = "person";
    }
    if(!age1){
        age1="unknown";
    }
    res.render("index.ejs", {
        name: name1,
        age: age1
        });
});
app.listen(3000);