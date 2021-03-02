
const hbs = require('hbs')
const express = require('express')
const path = require('path')

const app = express()
//Middleware working time
app.use(function (req, res, next) {
  const date=new Date();
    if((date.getDay() === 0 || date.getDay() === 6) || (date.getHours() < 9 || date.getHours() > 17)){
      res.end('Return in Working Time, The Apllication is Closed')
    }
    next()
})

//template engine hbs

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views/partials'));
app.use(express.static(__dirname+'/public'))

//Middleware Router 
app.get('/', (req, res) => {
    res.render('index');
});
  app.get('/OurServices', function (req, res) {
    res.render('ourServices');
  });
  app.get('/ContactUs', function (req, res) {
    res.render('contactUs');
  });


 
app.listen(8080, (err)=>{
    if(err){
        throw (err)
    }
    else{
        console.log('server is run')
    }
})