const crypto = require('./helper')
const express = require('express')

const app = express()
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const randomness = Array.from({ length: 5 }, () => Math.random());
    res.render('index',{numbers:randomness.slice(0,4),data:crypto.encryptDataWithPassword('<your solution>',String(randomness[4]))})
})

app.listen(3002,()=>{
    console.log('Listening at port 3002')
})