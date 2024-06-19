require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')


const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/',(req, res)=>{
  res.redirect('/contacts')
})


const contacts = require('./routes/contact.router')
app.use('/contacts',contacts)

const mongoSting = process.env.MONGO_URI || "mongodb://localhost:27017/SampleDB"
mongoose.connect(mongoSting);  //connect to db
const database = mongoose.connection

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server run on port ${port}`)
})