const express=require('express')
const app=express()

app.get('/',function(req,res){
    res.sendFile(__dirname,'login.ejs')
})
app.listen(4000)