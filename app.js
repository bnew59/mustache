const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const PORT = 3000

let trips = []
app.use(express.static('trips'))
app.use(bodyParser.urlencoded({extended:false}))
app.engine('mustache', mustacheExpress())
app.use(express.static('css'))
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', (req, res)=> {
    console.log("HERE!")
    res.json({title: "WORK"})
})

app.get('/home', (req, res)=> {
    res.render("home", {fullName: "Trip"})
})

app.post("/add-trip",function(req,res){

    let title = req.body.tripTitle
    trips.push({title : title })
  
    // redirect will invoke the /trips route
    res.redirect("/trips")
  
  })

  app.get("/add-trip",function(req,res){
    res.render("add-trip")
  })

  app.get('/trips',(req,res) => {

  res.render('trips',{ tripList : trips })
})

app.listen(PORT, ()=>{
})