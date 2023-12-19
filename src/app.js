const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
//init middleware
app.use(morgan('combined'))
app.use(helmet())
 app.use(compression(0))
//init db
require('./dbs/init.mongodb')

//init route
app.get('/',(req,res,next) => {
    const strECo = "Hello sdfakbvafbkshdua"
    return res.json({
        'ms': 'hello world',
        metadata : strECo.repeat(20)
    })
})

//handle error


module.exports = app