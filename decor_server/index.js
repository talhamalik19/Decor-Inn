const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const router = require('./Router/userRouter');
const ProductRouter = require ('./Router/productRouter')

const app=express();

app.use(cors({credentials: true, origin: true}));
app.use(express.json());
app.use(router); 
app.use(ProductRouter )


const port = 8080;

app.listen(port, ()=>{console.log(`Server is running on ${port} `)})
