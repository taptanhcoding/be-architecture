'use strict'

const mongoose = require('mongoose')
const countConnect = () => {
    const numConnection =  mongoose.connections.length
    console.log(`Number connections::: ${numConnection}`);
}

module.exports = {
    countConnect
}