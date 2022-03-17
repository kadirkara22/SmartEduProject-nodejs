const express = require('express')
const mongoose = require('mongoose')
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')

const app = express()

//Templete engine
app.set('view engine', 'ejs')

//Connect
mongoose.connect('mongodb://localhost/smartedu-db')
    .then(() => {
        console.log('DB Connected Successfull')
    })

//Middlewares
app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Router
app.use('/', pageRoute)
app.use('/courses', courseRoute)


const port = 3000;
app.listen(port, () => {
    console.log(`App started on port ${port}`)
})