const express = require('express')
const app = express()
const mainRoutes = require('./routes/main')


require('dotenv').config({path: './config/.env'})
// make sure you have the db string and env file

app.set('view engine', 'ejs')

app.use('/', mainRoutes)

app.listen(process.env.PORT, () => {
    console.log('This thing works')
})
