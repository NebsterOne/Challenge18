const { User, Thought } = require("../models");

// Get all thoughts
module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => {
        return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single thoughts
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          {
            username: req.body.username,
          },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => {
        !user
          ? res.status(404).json({ message: "no user with that ID" })
          : res.json("Though successfully created");
      })
      .catch((err) => res.status(500).json(err));
  },

  // Delete user and delete thought
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then(() => {
        return User.findOneAndUpdate(
          {
            // username: req.body.username,
          },
          { $pull: { thoughts: req.params.thoughtId } },
          { new: true }
        );
      })
      .then((user) => {
        !user
          ? res.status(404).json({ message: "no thought with that ID" })
          : res.json("Though successfully removed");
      })
      .catch((err) => res.status(500).json(err));
  },

  // Add a Reaction
  addReaction(req, res) {
    console.log("You are adding an Reaction");
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought found with that ID :(" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Remove Reaction from a user
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Update user
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: "No touhgt found with that ID :(" })
          : res.json(thought);
      })
      .catch((err) => res.status(500).json(err));
  },
};
