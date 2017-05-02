// Third time is the charm test. Can I write this without referring to app.js or app2.js?
// Adding pseudo-code first

// Create Mongoose connection
// Create Post Schema and Model first
// Create User Schema and Model with PostSchema embedded
// Create seed user
// Echo result
// Create post in seed user
// Echo result
// Done

// Create Mongoose connection
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/associated_data3");

// Create Post Schema and Model first
var PostSchema = mongoose.Schema({
    title: String,
    content: String,
    created: { type: Date, default: Date.now() }
});
var Post = mongoose.model('Post', PostSchema);

// Create User Schema and Model with PostSchema embedded
var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    posts: [PostSchema]
});
var User = mongoose.model('User', UserSchema);

// Create seed user
// var newUser = new User({
//     name: "Jim Brown",
//     email: "jim@brown.edu"
// });
// newUser.save(function(err, user) {
//     if (err) {
//         console.log(err);
//     } else {
           // Echo result
//         console.log("New User Saved! " + user);
//     }
// }); // Uncomment this above section on the first run; comment it after.

// Create post in seed user
var user = User.findOne({ email: "jim@brown.edu" }, function(err, foundUser) {
    if (err) {
        console.log(err);
    } else {
        foundUser.posts.push({
            title: "Ok, new post",
            content: "Testing whether or not we had success"
        });
        foundUser.save(function (err, savedUser) {
            if (err) {
                console.log(err);
            } else {
                // Echo result
                console.log("Updated User: " + savedUser);
            }
        });
    }
}); // Comment this above section on the first run; uncomment it after.

// Done
