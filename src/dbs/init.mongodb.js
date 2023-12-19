'use strict'

const mongoose = require('mongoose')

const connectString  = `mongodb+srv://chuyendev:zbgxnZGCFOGQ8ANz@cluster0.hjmpkyj.mongodb.net/handle-account?retryWrites=true&w=majority`






class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if(type == 'mongodb') {
            mongoose.set('debug',true)
            mongoose.set('debug', {
                color: true 
            })
        }
        mongoose.connect(connectString).then(_ => {
            console.log('Connect Mongodb sucess pro');
        })
        .catch(err => {
            console.log('error connect');
        })
        
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}
const instanceMongoDb =  Database.getInstance()

module.exports = instanceMongoDb