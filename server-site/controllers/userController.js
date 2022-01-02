const User = require("../models/userModel");
const ErrorResponse = require("../utilities/errorResponse");
const catchAsyncError = require("../middlewares/catchAsyncError");

// Register a User
exports.register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    message: "User created !",
    // user
    token,
  });
});

exports.login = catchAsyncError ( async (req, res, next) => {
  const { email, password } = req.body;

  // checcking email and password corect or not
  if(!email || !password){
    return new(new ErrorResponse("Please, enter email and password !", 400));
  }
  const user = User.findOne({ email }).select("+password");

  if(!user){
    return next(new ErrorResponse("Invalid user !", 401))
  }

  const isPasswordMatched = user.comparePassword(password);

  if(!isPasswordMatched){
    return next(new ErrorResponse("Invalid user !", 401))
  }

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    message: "Successfully logged in user... !",
    // user
    token,
  });

})