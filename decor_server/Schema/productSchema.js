const express =require( 'express')
const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const productSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    categories:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    user_num:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }

})

const product =new mongoose.model('products', productSchema);
module.exports= product;