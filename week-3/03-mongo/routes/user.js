const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).send({ msg: "Bad Request" });
    }
    const user = await User.create({ username, password });
    res.status(201).send({ user, msg: "User Created Succefully" });
  } catch (err) {
    res.send(500).json({ msg: "Error while creating user " + err });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const userCourses = await User.find({ username: req.username }).select(
      "courses"
    );
    res.status(200).send({ courses: userCourses });
  } catch (error) {}
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const { courseId } = req.params;
    const updateUserCourses = await User.findOne({ username: req.username });
    updateUserCourses.courses.push(courseId);
    await updateUserCourses.save();
    res.status(200).json({ msg: "purchase successfull", updateUserCourses });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "something went wrong while purchasing", error });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const purchasedCourses = await User.findOne({
      username: req.username,
    }).populate({path: "courses", select:"courses"});
    // console.log()
    res.status(200).json({ purchasedCourses });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "something went wrong getting the courses", error });
  }
});

module.exports = router;
