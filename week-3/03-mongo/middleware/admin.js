// Middleware for handling auth
const { Admin } = require("../db/index");
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  if (!username || !password) {
    res.status(400).json({ msg: "Bad Request" });
    return;
  }
  const user = await Admin.findOne({ username });
  if (!user) {
    res.status(404).json({ msg: "No user found with username: " + username });
    return;
  }
  if (user.password === password) {
    req.username = username;
    next();
  } else {
    res
      .status(403)
      .json({ msg: "Incorrect password for username: " + username });
  }
}

module.exports = adminMiddleware;
