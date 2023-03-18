const express =require( 'express')
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    con_pass:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    }
})

const user =new mongoose.model('admins', userSchema);
module.exports= user;