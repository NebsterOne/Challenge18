const { User, Thought } = require("../models");

module.exports = {
  // Get all students
  getStudents(req, res) {
    Student.find()
      .then(async (students) => {
        return res.json(studentObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single student
  getSingleStudent(req, res) {
    Student.findOne({ _id: req.params.studentId })
      .select("-__v")
      .populate("friends")
      .populate("thoughts")
      .then(async (student) =>
        !student
          ? res.status(404).json({ message: "No student with that ID" })
          : res.json({
              student,
              grade: await grade(req.params.studentId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
