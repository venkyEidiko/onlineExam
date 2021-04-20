const express = require('express');
const router = require('./routes/onlinneRouting');
const app = express();
const config = require('config');
const path = require('path');


// app.use(express.static(path.join(__dirname,'./public')));

app.use(express.static(path.join(__dirname,'./public')));
// // 
// app.set('view engine','ejs'); 
// app.set('views',path.join(__dirname,'view'));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./view'));




app.use('/',router);

app.listen(process.env.PORT  ||config.get('app.port'),()=>{
    console.log("server started")
})