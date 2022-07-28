const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('index');
});

app.get('/about',(req,res)=>{
  res.render('about',{qs: req.query});
});

app.post('/about', urlencodedParser,(req, res)=>{
  console.log(req.body)
  res.render('about-success',{data: req.body});
})

app.get('/profile/:name',(req,res)=>{
  const data = {age: 23, job: 'developer'};
  res.render('profile',{person: req.params.name, data});
})

app.listen(3000);
