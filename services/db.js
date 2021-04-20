
const mongoose=require('mongoose');
const config=require('config');
// const mongoClint = require('mongoclient');



var host=config.get('db.host');
var port=config.get('db.port');
var db=config.get('db.name');

// mongoose.connect(`mongodb://${host}:${port}/${db}`);

mongoose.connect(`mongodb+srv://venky123:online123@cluster0.hjdib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);




// mongoose.connect(url);

const conn=mongoose.connection;

conn.on('open',()=>{
    console.log('DB connected...');
});
module.exports={conn}