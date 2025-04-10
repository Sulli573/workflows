const express = require('express')

const app = express()

app.get('/',(req,res)=> {
    res.json('Hello from workflow gitactions')
})

app.get('/user',(req,res)=> {
    res.json('Hello from user')
})

app.listen('3001',()=>console.log('Server is running on 3001'))