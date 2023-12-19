'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000

const countConnect = () => {
    const numConnection =  mongoose.connections.length
    console.log(`Number connections::: ${numConnection}`);
}


const checkOverLoad = () => {
    setInterval(() => {
        const cpuUsage = os.cpus().length
        const numConnection =  mongoose.connections.length
    
        const memoryUsage = process.memoryUsage().rss
        console.log(`Active connections::: ${numConnection}`);
    
        console.log(`Use: ${cpuUsage} cpu with ${memoryUsage/1024/1024} MB memory`);
    
        if(numConnection > cpuUsage*20 -10 ) {
            console.log("overload db");
        }

    },_SECONDS)
}
module.exports = {
    countConnect,
    checkOverLoad
}