var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/associated_data");

// Define Post Schema (must occur before User Schema that uses it)
var PostSchema = new mongoose.Schema({
    title: String,
    content: String
});
// Define User Schema
var UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [PostSchema]
});
// Define User Model
var User = mongoose.model('User', UserSchema);
// Define Post Model
var Post = mongoose.model('Post', PostSchema);

// Create new user
// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });
// newUser.posts.push({
//     title: "We made some kind of post",
//     content: "Harry was born with extra chromosomes"
// });
//
// newUser.save(function(err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "This is a blog title",
//     content: "We have typed some content for the blog, and as of the end of this sentence, the post will be saved."
// });
// newPost.save(function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({ name: "Hermione Granger" }, function(err, user) {
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
          title: "Here is a new post, WOW!",
          content: "Voldemort went full retard yesterday."
        });
        user.save(function(err, user) {
          if (err) {
              console.log(err);
          } else {
              console.log(user);
          }
        });
    }
});
