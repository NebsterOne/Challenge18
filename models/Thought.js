const { Schema, model } = require("mongoose");
const assignmentSchema = require("./User");

// Schema to create User model
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min_length: 1,
    max_length: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Create a virtual property `friendCoutns` that gets and sets the list of friends
userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return `${friends.length}`;
  });

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
