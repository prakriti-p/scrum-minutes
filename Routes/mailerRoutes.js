var express = require('express');
var nodemailer = require('nodemailer');

var routes = function() {      
    var mailerRouter = express.Router();

    var mailOptions = {
        from: 'prakritiallurs@gmail.com>', // sender address
        to: 'prakriti.patra@gmail.com', // list of receivers
        subject: 'Email Example', // Subject line
        text: "text" //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    teamRouter.route('/sendMail')
        .post(function(req,res) {
            // Not the movie transporter!
            console.log("bhhhh");
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'prakritiallurs@gmail.com', // Your email id
                    pass: '25092005#' // Your password
                }
            });
        
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                    res.json({yo: 'error'});
                }else{
                    console.log('Message sent: ' + info.response);
                    res.json({yo: info.response});
                };
            });
            
        }) 
    
    return mailerRouter;
}
 
module.exports = routes;
