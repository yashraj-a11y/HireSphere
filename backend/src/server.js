
// "dev" : "node --watch server.js" 

// const express = require('express') 
import express from "express" 
const app = express()
import {ENV} from "./lib/env.js"











app.get('/help',(req,res) => {
    res.status(200).json({"msg" : "api is up and running"})
})





app.listen(ENV.PORT, (req,res) => {
    console.log("server is running on port" , ENV.PORT);
    
})

