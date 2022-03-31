const express=require('express')
var path=require('path')
const bodyparser=require('body-parser')
var encoded=bodyparser.urlencoded();

const app=express();
var mysql=require('mysql')
 app.set('view engine','ejs')
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'login',
    password:'12345',

})
connection.connect(function(error,result){
    if(error) throw error
    else
    console.log("db is susseful connect")
})

app.get('/',function(req,res){
    //res.sendFile('klo.html');
    res.sendFile(path.join(__dirname+'/klo.html'));
})
app.post('/',encoded,function(req,res){
    var name=req.body.name;
    var pass=req.body.pass
    connection.query('select * from login where name=? and pass=?',[name,pass],function(error,result,field){
        if(result.length>0)
        {
            res.send(console.log("welcome"))
        }
        else throw error
    })
})

app.listen(5000)