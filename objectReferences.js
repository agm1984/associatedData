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
    //posts: [PostSchema]
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
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
// User.findOne({ email: "charlie@brown.edu" }, function(err, user) {
//   if (err) {
//       console.log(err);
//   } else {
//       user.posts.push({
//           title: "Goats suck",
//           content: "Just kidding, they are rad."
//       });
//       user.save(function(err, saved) {
//           if (err) {
//               console.log(err);
//           } else {
//               console.log("saved post");
//               console.log(saved);
//           }
//       });
//   }
// });

// Create another seed user (including callback function that displays result)
// User.create({
//     name: "Sally Gamanzo",
//     email: "sally@email.com"
// }, function(err, saved) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("user saved!");
//         console.log(saved);
//     }
// });

// Create a post
// Post.create({
//     title: "Posts are pretty sweet around here",
//     content: "Black Blah Blah"
// }, function(err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
// });

// Create a post and attach to user
// Post.create({
//     title: "Posts are pretty sweet around here - Part 2",
//     content: "Black Blah Blah BLAH BLAH"
// }, function(err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       User.findOne({ email: "sally@email.com" }, function(err, user) {
//           if (err) {
//               console.log(err);
//           } else {
//               user.posts.push(post);
//               user.save(function(err, data) {
//                   if (err) {
//                       console.log(err);
//                   } else {
//                     console.log("post saved: " + data);
//                   }
//               });
//           }
//       });
//     }
// });

// Doing another one
// Post.create({
//     title: "Crazy Post",
//     content: "WE GOT IT NOW"
// }, function(err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       User.findOne({ email: "sally@email.com" }, function(err, user) {
//           if (err) {
//               console.log(err);
//           } else {
//               user.posts.push(post);
//               user.save(function(err, data) {
//                   if (err) {
//                       console.log(err);
//                   } else {
//                     console.log("post saved: " + data);
//                   }
//               });
//           }
//       });
//     }
// });

// Find user and then find all posts for that user
User.findOne({ email: 'sally@email.com' }).populate('posts').exec(function(err, foundUser) {
    if (err) {
        console.log(err);
    } else {
        console.log(foundUser);
    }
});
