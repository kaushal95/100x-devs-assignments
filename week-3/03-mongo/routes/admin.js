const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).send({ msg: "Bad Request" });
      return;
    }
    const user = await Admin.create({ username, password });
    res.status(201).send({ user, msg: "Admin Created Succefully" });
  } catch (err) {
    res.send(500).json({ msg: "Error while creating user " + err });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, imageLink, price } = req.body;
    const course = await Course.create({
      title,
      description,
      imageLink,
      price: Number(price),
    });
    return res.status(201).json({ course });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "something went wrong while creating course " + error });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    return res.status(200).json({ courses });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "something went wrong while creating course " + error });
  }
});

module.exports = router;
