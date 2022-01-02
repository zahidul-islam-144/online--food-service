const express = require("express");
const userRouter = express.Router();
const { register, login } = require("../controllers/userController");


// userRouter.route("/register").get(register);
userRouter.post("/register", register);
userRouter.post("/login", login);


/* 
  user routes connection checking
*/
userRouter.get("/user-router", (req, res) => {
  res.send("Connected to eCommerce's user authentication routes successfully....");
});

module.exports = userRouter;
