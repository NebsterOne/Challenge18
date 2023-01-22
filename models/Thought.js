const { Schema, model } = require("mongoose");
const { format_time } = require("../utils/helper");
const userSchema = require("./User");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => format_time(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

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
      default: Date.now,
      get: (timestamp) => format_time(timestamp),
    },

    // How can username be linked or added to thougts??
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
  },
  // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
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
