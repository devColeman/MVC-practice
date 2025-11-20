const express = require('express')
const app = express()
const mainRoutes = require('./routes/main')
const connectDB = require('./config/database')
const mongoose = require('mongoose')
const cors = require('cors')

connectDB()


require('dotenv').config({path: './config/.env'})
// make sure you have the db string and env file

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.use('/', mainRoutes)

app.listen(process.env.PORT, () => {
    console.log('This thing works')
})



// let think about the rest of the app its blog enginge so we need a way to post maybe sepater page
// then we need to work on creating the post and adding it to the page
// im think of a home page with the posts in order then you comment on then maybe like
// also a seperate page for when you add a post 
// we need to think about what route like / we are on