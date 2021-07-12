const express= require('express');
const app= express();
const path= require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use("/addToCart",express.urlencoded({extended:false}));
var pId1= 123;
var pPrice1=100;
var pDescription1= "Iphone 10 64GB";
var pName1= "Iphone";
app.get('/', (req, res) => {
    
    res.render("product.ejs", {
        pId: pId1,
        pPrice: pPrice1,
        pDescription: pDescription1,
        pName: pName1


     });
});
app.post('/addToCart', (req, res) => {
    let name1 = req.body.proName;
    let price1 = req.body.proPrice;
    let Id1 = req.body.proId;
    let description1 = req.body.proDescription;
    
    res.render("product.ejs", {
        name: name1,
        price: price1,
        description: description1,
        id: Id1,
        });
});
app.listen(3000);
