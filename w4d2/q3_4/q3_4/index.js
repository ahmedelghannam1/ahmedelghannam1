const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path=require("path");
const app = express();
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(cookieParser('my secret here'));
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'salt for cookie signing',
  }));

  
//app.use('/prod/tomato', express.static(path.join(__dirname, 'prod')));

app.use("/addToCart",express.urlencoded({extended:false}));
app.use(function (req, res, next) {
    if (!req.session.cart) {
      req.session.cart =[ 
          {"0":0,"price":30,"name":"Tomatoes"},
          {"1":1,"price":50, "name":"Banana"},
          {"2":2,"price":10, "name":"Pumpkin"}
     ] ; // put views object into session
    }
  req.session.pathname = "";
  next();
  });
var minute = 60000;


app.get("/product/tomato", (req, res) => {
    res.cookie('pathname',0,{maxAge: minute});
    res.render("product.ejs", {
        pPrice: req.session.cart[0]["price"] ,
        pName: req.session.cart[0]["name"],
        cartArrSession: req.session.cart,
        pathnameHidden:0
     });
});
app.get("/product/banana", (req, res) => {
    res.cookie("pathname",1,{maxAge:minute})
    res.render("product.ejs", {
        pPrice: req.session.cart[1]["price"],
        pName: req.session.cart[1]["name"],
        cartArrSession: req.session.cart,
        pathnameHidden:1
     });
});
app.get("/product/pumpkin", (req, res) => {
    res.cookie("pathname",2,{maxAge:minute})
    res.render("product.ejs", {
        pPrice: pPrice2,
        pName: pName2,
        cartArrSession: req.session.cart,
        pathnameHidden:2
     });
});

app.post('/addToCart', (req, res) => {
    //res.send(req.body.proPathname);
    /*if (req.cookies.pathname==0)
    {
    
    req.session.cart[0]["0"]++;
    }
    else if (req.body.proPathname==1)
    {
       req.session.cart[1]["1"]++;
    }
    else
    {
        req.session.cart[2]["2"]++;
    }
*/
    res.render("cart.ejs", {
        cartArr: req.body.cart,
        pathnamea:req.session.pathname 
        });
});
app.listen(3000);
