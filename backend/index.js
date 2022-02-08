import express from "express";
import connectToMongo from './database/db.js'
import cors from 'cors'
import bodyParser from "body-parser";
import Router from "./router/router.js";
const port = process.env.PORT || 8000



const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/', Router)

app.listen(port, ()=>{
    console.log('port is running at',port)
}) 


connectToMongo()