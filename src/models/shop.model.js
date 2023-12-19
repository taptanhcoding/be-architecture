"use strict"

//!dmgb
const {Schema,model,Types} = require('mongoose');
const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'
// Erase if already required

// Declare the Schema of the Mongo model
var shopSchema = new Schema({
    name:{
        type:String,
        trim:true,
        maxLength: 150
    },
    email:{
        type:String,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    status: {
        type: String,
        enum: ['active','inactive'],
        default:'inactive'
    },
    verify :{
        type: Schema.Types.Boolean,
        default: false
    },
    role: {
        type: Array,
        default: []
    }
}, {
    timestamps:true,
    collection: COLLECTION_NAME
});

//Export the model
module.exports = model(DOCUMENT_NAME, shopSchema);