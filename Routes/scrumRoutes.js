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
        .delete(function(request, response) {
            request.scrumItem.remove(function(error) {
                if(error) {
                    response.status(500).send(error);
                } else {
                    response.status(200).send("Removed");
                }
            });
        })

    scrumRouter.route('/getScrumByMemberId')
        .post(scrumController.getScrumByMemberId)
        
    return scrumRouter;
}
 
module.exports = routes;
