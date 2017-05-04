var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/object_references');

var Post = require('./models/Post');
var User = require('./models/User');

Post.create({
    title: "Posts are pretty sweet around here - Part 2",
    content: "Black Blah Blah BLAH BLAH"
}, function(err, post) {
    if (err) {
      console.log(err);
    } else {
      User.findOne({ email: "sally@email.com" }, function(err, user) {
          if (err) {
              console.log(err);
          } else {
              user.posts.push(post);
              user.save(function(err, data) {
                  if (err) {
                      console.log(err);
                  } else {
                    console.log("post saved: " + data);
                  }
              });
          }
      });
    }
});
