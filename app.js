require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT


//Handlebars
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {})

function visitPage(url, callback) {
  if (!url) {
      // We're done
      return;
  }
}


//Servir contenido estatico
app.use(express.static('public'))


app.get('/',(req, res)=> {
  res.render('home',{
    nombre:'Nefer',
    titulo: 'Curso node'
  }) 
});

//No es necesaria esta linea porque el app.use es el que predomina


app.get('/generic',(req, res)=> {
  res.render('generic',{
    nombre:'Nefer',
    titulo: 'Curso node'
  })
});

app.get('/elements',(req, res)=>{
  res.render('elements',{
    nombre:'Nefer',
    titulo: 'Curso node'
  })
});

app.get('*',(req, res)=>{
  res.sendFile (__dirname + '404 | page not found')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})