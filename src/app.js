const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const { checkOverLoad } = require('./helpers/check.connect')

// console.log("process",process.env);
//init middleware
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())
app.use(morgan('combined'))
app.use(helmet())
 app.use(compression(0))
//init db
require('./dbs/init.mongodb')
// checkOverLoad()
//init route


app.use('',require('./routes'))

//handle error


module.exports = app