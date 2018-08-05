var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scrumSchema = new Schema({
    "scrumDate": {type: Date},
    "scrumId": {type: Number},
    "scrumMembers": [String],
    "scrumItems": [{ memberId: String, memberName: String, updates: String, actionItems: String}]
});

module.exports = mongoose.model('Scrum', scrumSchema, "scrums");  
