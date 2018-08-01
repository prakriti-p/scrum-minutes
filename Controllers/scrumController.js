var scrumController = function(Scrum) {

    var post = function(request, response) {
        var scrum = new Scrum(request.body);

        if(!request.body.name) {
            response.status(400);
            response.send("Name is required");
        } else {
            team.save();
            response.status(201);
            response.send(team);
        }        
    };
    var get = function(request, response) {
        var query = {};
        console.log("evefvc");
        Scrum.find(query, function(error, scrums) {
            if(error) {
                response.status(500);
                response.send(error);
            } else {
                response.json(scrums);
            }
        });
    }

    return {
        post: post,
        get: get
    }

}

module.exports = scrumController;