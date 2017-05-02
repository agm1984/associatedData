var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/associated_data2");

// Define Post Schema and Model (before User due to embedding)
var PostSchema = mongoose.Schema({
    title: String,
    content: String,
    created: { type: Date, default: Date.now() }
});
var Post = mongoose.model('Post', PostSchema);
// Define User Schema
var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    posts: [PostSchema]
});
var User = mongoose.model('User', UserSchema);

// 1- Create new user
var newUser = new User({
    name: "Steven Seagull",
    email: "steve@seagull.com"
});
newUser.save(function(err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log("User saved: " + user);
    }
});

// 2- Add a post to existing user
User.findOne({ email: "ronny@mcd.com" }, function(err, foundUser) {
    if (err) {
        console.log(err);
    } else {
        foundUser.posts.push({
            title: "New post was successful",
            content: "Wow, it worked and it was not even a problem."
        });
        foundUser.save(function(err, savedUser) {
          if (err) {
              console.log(err);
          } else {
              console.log("Ok, saved post: " + savedUser);
          }
        });
    }
});
