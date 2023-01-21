const { Schema, model } = require("mongoose");
const assignmentSchema = require("./Assignment");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    thought: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

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
