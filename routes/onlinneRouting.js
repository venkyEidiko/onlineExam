
const express = require('express');
const router = express.Router();
const crud = require('../controllers/onlineCrud');


router.get('/', function (req, res) {
    console.log('in home routin');
    res.render('index.html');

})

router.get('/stdLogIn', function (req, res) {
    console.log("hahahahahahahahah");
    console.log(req.query.name, req.query.regId, req.query.course, req.query.gender, req.query.phone, req.query.add, req.query.email, req.query.pass);
    let status = crud.add(req.query.name, req.query.regId, req.query.course, req.query.gender, req.query.phone, req.query.add, req.query.email, req.query.pass);
    status.then(result => {
        console.log("addd astudent stdLohIn endpoibnt")
        res.render('stdLogIn', { msg: result });
    }).catch(error => console.log(error+"lslslslslslslslslslsl"));



})


router.get('/stdReg1', function (req, res) {
    console.log(req.query.name, req.query.regId, req.query.course, req.query.gender, req.query.phone, req.query.add, req.query.email, req.query.pass);
    let status = crud.add(req.query.name, req.query.regId, req.query.course, req.query.gender, req.query.phone, req.query.add, req.query.email, req.query.pass);
    const getStatus1=crud.findAll();
    getStatus1.then(result=>{
    res.render('adminLogIn' ,{admin:result})
    })
    .catch(error=> console.log(error))
})



router.get('/findOne', function (req, res) {
  
    

    const getStatus=crud.findOne(req.query.email,req.query.password)
    getStatus.then(result=>{
      

            res.render('stdProfile' ,{student:result});

      
        
        })
        .catch(error=> console.log(error)) 
   
});
router.get('/login',function(req,res)
{
    console.log("Inside login get "+req.query.mail +" " +req.query.password)
          
            if(req.query.mail=='admin@gmail.com' && req.query.password == 'admin'){
                const getStatus=crud.findAll();
                getStatus.then(result=>{
                res.render('adminLogIn' ,{admin:result})
                })
                .catch(error=> console.log(error))
            }
            else{
                console.log('pass or mail incorrect');
            }
          
})

router.get('/delete',function(req,res)
{   console.log("Inside Delete  "+req.query.mail)
  const deleteStatus=crud.deleteStd(req.query.mail);
  deleteStatus.then(result=>{
      const deleted = crud.findAll();
      deleted.then(result=>{
        res.render('adminLogIn' ,{admin:result})
        })
        .catch(error=> console.log(error))
      
    
})
.catch(error=> console.log(error))
})


router.get('/profile',function(req,res){
    const getStatus=crud.findOne(req.query.email,req.query.password)
    getStatus.then(result=>{
        res.render('stdProfile' ,{student:result})
        })
        .catch(error=> console.log(error)) 
   }    
)

router.get('/update',function(req,res){
    const getStatus=crud.findEmail(req.query.email)
    getStatus.then(result=>{
        res.render('stdUpdate' ,{msg:result})
        })
        .catch(error=> console.log(error)) 
   }    
)


router.get('/update1',function(req,res)
{


    console.log("Inside update get "+req.query.email)
    const updateStatus=crud.updatePerson(req.query.name,req.query.id,req.query.number,req.query.email);
    
    // console.log(req.query.name,req.query.id,req.query.number,req.query.add,req.query.email);
    // console.log(updateStatus);
    const data = crud.findEmail(req.query.email);
 data.then(result=>{
     console.log("spdate status then bloc "+result);
    res.render('stdProfile' ,{student:result} )})
  .catch(error=> console.log(error))

})















// router.get('/adminLogIn',function(req,res){
//     crud.admin
// })

module.exports = router;
