
const mongoose=require('mongoose');
const config=require('config');
// const mongoClint = require('mongoclient');



var host=config.get('db.host');
var port=config.get('db.port');
var db=config.get('db.name');

// mongoose.connect(`mongodb://${host}:${port}/${db}`);

mongoose.connect("mongodb+srv://venkatakrishna9397:sarasu10@cluster0.hjdib.mongodb.net/onlineExam?retryWrites=true&w=majority");
// mongoose.connect("mongodb+srv://prashanth123:prashanth123@cluster0.kkcwp.mongodb.net/person?retryWrites=true&w=majority")
 

// const url = `mongodb+srv://login:sarasu10@cluster0.12vww.mongodb.net/person?retryWrites=true&w=majority`;




// mongoose.connect(url);

const conn=mongoose.connection;

conn.on('open',()=>{
    console.log('DB connected...');
});
module.exports={conn}