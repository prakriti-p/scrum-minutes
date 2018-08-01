var express = require('express');

var routes = function(Scrum) {      
    var scrumRouter = express.Router();
    var scrumController = require('../Controllers/scrumController')(Scrum);

    scrumRouter.route('/scrum')
        .get(scrumController.get) 
        .post(scrumController.post) 
        .put()
        .delete();

    //MIDDLEWARE - INTERCEPTOR BETWEEN REQUEST FROM CLIENT AND RESPONSE FROM SERVER
    scrumRouter.use('/scrum/:scrumId', function(request, response, next) {
        Scrum.findById(request.params.scrumId, function(error, scrumItem) {
            if(error) {
                response.status(500).send(error)
            } else if(scrumItem) {
                request.scrumItem = scrumItem;
                next();
            }
            else {
                response.status(404).send("No Member Found")
            } 
        });
    });

    scrumRouter.route('/scrum/:scrumId')
        .get(function(request, response) {
            response.json(request.scrumItem);
        })
    return scrumRouter;
}
 
module.exports = routes;
