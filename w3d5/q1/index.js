const express = require('express');
const app = express();
app.get('/', (req, res) => {
 let name = req.query.name;
 let age = req.query.age;
 
 if (!name) {
 name = "person";
 }
 if (!age)
 {age= "Unknown Age";
 res.send(`Welcome ${name} we want to know your age ${age}`);
}
else
console.log(age);
 res.send(`Welcome ${name} you look youger than your age which is ${age}`);
});
app.listen(3000);