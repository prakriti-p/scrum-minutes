var _ = require("underscore");

var scrumController = function(Scrum) {

    var post = function(request, response) {
        var scrum = new Scrum(request.body);
        if(!request.body.scrumId) {
            response.status(400);
            response.send("Scrum Id is required");
        } else {
            scrum.save();
            response.status(201);
            response.send(scrum);
        }        
    };

    var get = function(request, response) {
        var query = {};
        if(request.query.date) {
            query.scrumDate = request.query.date;
        } 
        Scrum.find(query, function(error, scrums) {
            if(error) {
                response.status(500);
                response.send(error);
            } else {
                response.json(scrums);
            }
        });
    }

    var getScrumByMemberId = function(request, response) {
        var query = {};
        if(request.body.memberId) {
            query.scrumMembers = request.body.memberId;
        } 
        Scrum.find(query, function(error, scrums) {
            if(error) {
                response.status(500);
                response.send(error);
            } else {
                var returningArray = [];
                for(let i in scrums) {
                    var scrumItem = _.filter(scrums[i].scrumItems, function(item) {
                        return item.memberId === request.body.memberId;
                    })[0];
                    returningArray.push({
                        scrumId: scrums[i].scrumId,
                        scrumDate: scrums[i].scrumDate,
                        scrumItems: scrumItem
                    })
                }
                response.json(returningArray);
            }
        });
    };

    return {
        post: post,
        get: get,
        getScrumByMemberId: getScrumByMemberId
    }

}

module.exports = scrumController;