var express = require('express');
var nodemailer = require('nodemailer');

var routes = function() {      
    var mailRouter = express.Router();

    mailRouter.route('/mail')
        .get(function(request, response) {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'noreply.minutes@gmail.com',
                    pass: 'meqbfnnyabqnvhyb'
                }
              });
              
              var mailOptions = {
                from: 'noreply.minutes@gmail.com',
                to: 'prakriti.patra@gmail.com',
                subject: 'Sending Email using Node.js',
                text: 'That was easy!'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            response.json({"key": "value"});
        }) 

    return mailRouter;
}
 
module.exports = routes;
