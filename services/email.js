const nodemailer = require('nodemailer')
const config = require('config');


let sendingMail = (name, mail, pass) => {

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user: config.get('mail.from'),
           pass: config.get('mail.password')
        }
 });

    var mailOption = {
        from:config.get('mail.from'),
        to: mail,
        subject: 'Greetings from the venky ',
        text: `Hello  ${name},

    congratulations! you have succeesfully created your account.

              we do hope your doing well and good. we always here to help you in best way
    if you have any quareis feel free to ask in your accout.Here I'm you've accout details.          
    
    Name     :${name}
    Email Id : ${mail}
    Password : ${pass}
            
                Thanks for your time and have a greate day ahead of you.


   Regards,
   The whiteDevil,
   ${config.get('mail.from')}
    `
    }
    transport.sendMail(mailOption, function (error, info) {
        if (error){
            console.log(name+ " "+ mail +" "+ pass );
            
console.log( config.get('mail.password'))
 console.log( config.get('mail.from'))

            console.log("Some where went wrong :::" + error);
        }
        else {
            console.log(name+ " "+ mail +" "+ pass );
            
            console.log( config.get('mail.password'))
             console.log( config.get('mail.from'))

            console.log("mail sent successfully");
        }
    } )


}
module.exports={sendingMail}