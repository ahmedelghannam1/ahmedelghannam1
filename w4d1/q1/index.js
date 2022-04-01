/**
 * Module dependencies.
 */

 var express = require('express');
 var app = express();
 var cookieParser = require('cookie-parser');
 
 app.use(cookieParser('my secret here'));
 
 // parses x-www-form-urlencoded
 app.use(express.urlencoded({ extended: false }))
 
 app.get('/', function(req, res){
   if (req.cookies.kCookie) {
     res.send('key :'+req.cookies.kCookie+' Value :'+req.cookies.vCookie);
   } else {
     res.send('<form method="post"> <label>'
       + 'key <input type="text" name="key"/> </label> '
       + 'value <input type="text" name="value"/> </label> '
       + '<input type="submit" value="Submit"/>.</p></form>');
   }
 });
 
 
 app.post('/', function(req, res){
   var minute = 60000;
   res.cookie('kCookie', req.body.key , { maxAge: minute });
   res.cookie('vCookie', req.body.value , { maxAge: minute });
   
   res.redirect('back');
 });
 
 /* istanbul ignore next */
 
   app.listen(3000);
   console.log('Express started on port 3000');
 