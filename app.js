var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/associated_data");

// USER - email, name
var UserSchema = new mongoose.Schema({
    email: String,
    name: String
});
var User = mongoose.model('User', UserSchema);

// POST - title, content
var PostSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model('Post', PostSchema);

// Create new user
// var newUser = new User({
//     email: "charlie@brown.edu",
//     name: "Charlie Brown"
// });
// newUser.save(function(err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

var newPost = new Post({
    title: "This is a blog title",
    content: "We have typed some content for the blog, and as of the end of this sentence, the post will be saved."
});
newPost.save(function(err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});
