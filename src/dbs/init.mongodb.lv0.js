'use strict'

const mongoose = require('mongoose')
const connectString  = `mongodb+srv://chuyendev:zbgxnZGCFOGQ8ANz@cluster0.hjmpkyj.mongodb.net/handle-account?retryWrites=true&w=majority`

mongoose.connect(connectString).then(_ => {
    console.log('Connect Mongodb sucess');
})
.catch(err => {
    console.log('error connect');
})


if(1===0) {
    mongoose.set('debug',true)
    mongoose.set('debug', {
        color: true 
    })
}

module.exports = mongoose