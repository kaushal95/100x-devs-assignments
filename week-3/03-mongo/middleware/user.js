const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    const { username, password } = req.headers;
    if (!username || !password) {
      res.status(400).json({ msg: "Bad Request" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ msg: "No user found with username: " + username });
    }
    if (user.password === password) {
      req.username = username;
      next();
    } else {
      res
        .status(403)
        .json({ msg: "Incorrect password for username: " + username });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong!!" });
  }
}

module.exports = userMiddleware;
