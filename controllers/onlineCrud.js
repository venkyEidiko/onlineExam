const schema = require('../model/onlineSchema');
const queSchema = require('../model/queSchema');
const sendMail = require('../services/email');
const db = require('../services/db');

// let admin = (adminId,adminPass) =>{

//     try{
//         if(schema.adminId == adminId && schema.adminPass == adminPass)
//         {
//             return `log_in successfully as admin`
//         }
//         else
//         {
//             return `logIn failed`
//         }
//     }
//     catch(error)
//     {
//         console.log("error occured in admin login  "+error);
//     }

// }
let findAll=async(email,pass)=>{
    console.log("inside find all")
    try{
        return await schema.find({});
    }
    catch(error){
        console.log(error);
    }
}

let findOne=async(email,password)=>{
    try{
        return await schema.find({stdMailId:email,stdPassword:password});
    }
    catch(error){
        console.log(error);
    }
}

let add = async (name,id,course,gender,phNum,add,mail,password)=>{
    try{
        console.log('----------')
        console.log(name,id,course,gender,phNum,add,mail,password)
        let newRecord = await new schema({stdName:name,stdId:id,stdCourse:course,stdGender:gender,stdNumber:phNum,stdAdd:add,stdMailId:mail,stdPassword:password}).save();
        sendMail.sendingMail(name,mail,password);
        return "your record has added successfully";

    }
    catch(err){
        console.log("error at registering crud "+err);
    }

}

let findEmail = async (mail)=>{
    try{
       let fullRecord = schema.find({stdMailId:mail})
        return fullRecord;
    }
    catch(error){
        console.log(error);
    }
}

let deleteStd =async(email)=>{
    try{
        return await schema.deleteOne({stdMailId:email});
    }
    catch(error){
        console.log(error);
    }
}

let updatePerson=async(name,id,number,email)=>{
    try{
        console.log("update person ")
        return await schema.updateOne({stdMailId:email},{stdName:name,stdId:id,stdNumber:number});
         
    }
    catch(error){
        console.log(error);
    }
}





module.exports={add,findAll,findOne,deleteStd,updatePerson,findEmail}