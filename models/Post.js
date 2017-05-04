var mongoose = require('mongoose');


// Post Schema and Model
var PostSchema = mongoose.Schema({
    title: String,
    content: String,
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Post', PostSchema);
