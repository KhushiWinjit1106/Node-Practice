const dotenv = require("dotenv");
dotenv.config();

const mongoURI = process.env.MONGO_URI;  // Fetching from .env

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookiePaser = require("cookie-parser");
 
const Blog = require("./models/blog");
 
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

// console.log("MONGO_URI:", process.env.MONGO_URI);
 
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");
 
const app = express();
const PORT = process.env.PORT || 8000;
 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

 
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
 
app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));
 
app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});
 
app.use("/user", userRoute);
app.use("/blog", blogRoute);
 
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));