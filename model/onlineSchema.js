const mongoose = require('mongoose');


let adminSchema = mongoose.Schema({
    adminName: {type:String},
    adminId:{type:Number},
        adminPass:{type:String},
    stdName :{type:String},
    stdId :{type:String},
    stdCourse:{type:String},
    
    stdGender:{type:String},
    stdNumber : {type:Number},
    stdAdd : {type:String},
    stdMailId : {type:String,required:true,unique : true},
    stdPassword : {type:String},
    

})


module.exports=mongoose.model('admin',adminSchema);

// module.exports =mongoose.model('admin',adminSchema,'admin')