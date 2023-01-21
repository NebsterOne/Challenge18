const { Schema, model } = require("mongoose");
const { format_time } = require("../utils/helper");
const userSchema = require("./User");

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: format_time(Date.now),
    },

    // How can username be linked or added to thougts??
    username: [
      {
        type: Schema.Types.ObjectUsername,
        ref: "user",
        required: true,
      },
    ],

    reactions: [reactionSchema],
  },
  // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
  {
    toJSON: {
      getters: true,
    },
  }
);

reactionCount
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return `${reactions.length}`;
  });
// Initialize our User model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
