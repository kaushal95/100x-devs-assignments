const mongoose = require("mongoose");

// Connect to MongoDB

async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log("DB connected...");
  } catch (error) {
    console.log("DB connection failed !! ", error);
  }
}

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
  connectDB,
};
