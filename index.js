const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

const vehicle = require("./vehicle")

const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())



app.get('/',async(req,res)=>{
    var example;
    example = await vehicle.find();
    console.log(example)
    res.json(example); 
})

app.get('/:bus_no',async(req,res)=>{
    console.log("bus_no")
    var bus_no = req.params.bus_no;
    console.log(bus_no)
    var data = await vehicle.find({bus_no:bus_no});
    console.log(data)
    res.json(data); 
})


app.get('/home',(req,res)=>{
    res.send("Home page"); 
 })

 app.post('/insert',(req,res)=>{
    console.log(req.body)
    var details = new vehicle(req.body)
    details.save();
    res.redirect('http://127.0.0.1:5500/display.html')
 })

 app.delete('/delete/:id',async(req,res)=>{
    var deletedData = await vehicle.findByIdAndDelete(req.params.id);
    console.log(deletedData)
 } )

app.listen(2000,()=>{
    console.log("Server started");
    mongoose.connect("mongodb://127.0.0.1:27017/Vehicle")
    .then(()=>{
        console.log("DB connected")
    })
    .catch((err)=>{
        console.log("Error in DB connection",err)
    })
})
