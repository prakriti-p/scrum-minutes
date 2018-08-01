var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scrumSchema = new Schema({
    "memberName" : {type: String},
    "updates" : {type: String},
    "actionItems" : {type: String},
    "date": {type: Date},
    "scrumId": {type: Number}
});

module.exports = mongoose.model('Scrum', scrumSchema, "scrums");  