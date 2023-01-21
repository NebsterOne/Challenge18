const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/usersController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/user/:userId/friends
router.route("/:userId/friends").post(addFriend);

// /api/students/:userID/friends/:friendID
router.route("/:userID/friends/:friendId").delete(removeFriend);

module.exports = router;
