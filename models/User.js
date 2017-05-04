var mongoose = require('mongoose');

// User Schema and Model
var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    //posts: [PostSchema]
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});
module.exports = mongoose.model('User', UserSchema);
