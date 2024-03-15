const jwt = require("jsonwebtoken");
const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization?.split("Bearer ")[1];
  if (token) {
    let username;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        res.status(403).json({ msg: "Token not verifed " + err });
      } else {
        username = decoded.username;
      }
    });
    const adminExists = await Admin.findOne({ username });
    if (adminExists) {
      req.user = username;
      next();
    } else {
      res.status(403).json({ msg: "No admin with username " + username });
    }
  } else {
    res.status(403).json({ msg: "No token present" });
  }
}

module.exports = adminMiddleware;
