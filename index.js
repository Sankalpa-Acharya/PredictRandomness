const crypto = require('./helper')
const express = require('express')

const app = express()
app.set('view engine','ejs')
const port = process.env.PORT || 3002

app.get('/',(req,res)=>{
    const randomness = Array.from({ length: 5 }, () => Math.random());
    res.render('index',{numbers:randomness.slice(0,4),data:crypto.encryptDataWithPassword('<your solution>',String(randomness[4]))})
})

app.get('/greet',(req,res)=>{
    res.send('this is test route')
})

app.listen(port,()=>{
    console.log('Listening at port 3002')
})