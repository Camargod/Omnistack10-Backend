const mongoose = require('mongoose');
const locationModel = require("../entities/pointMongoose")
const schema = new mongoose.Schema({
    name:String,
    github_user: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: 
    {
        type:locationModel
    }
});

module.exports = mongoose.model('Devs', schema);