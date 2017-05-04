// Hook in Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/object_references');

// Post Schema and Model
var PostSchema = mongoose.Schema({
    title: String,
    content: String,
    created: { type: Date, default: Date.now() }
});
var Post = mongoose.model('Post', PostSchema);

// User Schema and Model
var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    posts: [PostSchema]
});
var User = mongoose.model('User', UserSchema);

// Create seed user
// var newUser = new User({
//     name: "Charlie Brown",
//     email: "charlie@brown.edu"
// });
// newUser.save(function(err, test) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("user saved");
//         console.log("test: " + test);
//     }
// });

// Push post into seed user
User.findOne({ email: "charlie@brown.edu" }, function(err, user) {
  if (err) {
      console.log(err);
  } else {
      user.posts.push({
          title: "Goats suck",
          content: "Just kidding, they are rad."
      });
      user.save(function(err, saved) {
          if (err) {
              console.log(err);
          } else {
              console.log("saved post");
              console.log(saved);
          }
      });
  }
});
