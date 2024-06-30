import userModel from "../models/userModel.js";

export const registerController = async (req, res, next) => {
  const { name, lastName, email, password } = req.body;
  //validate
  if (!name) {
    next("Name is required");
    // return res.status(400).send({ success: false, message: "Please provide Name" })
  }

  if (!email) {
    next("Email is required");
    // return res.status(400).send({ success: false, message: "Please provide Email" })
  }

  if (!password) {
    next("Password is required");
    //return res.status(400).send({ success: false, message: "Please provide Password" })
  }

  //Checking user not existing already
  const existinUser = await userModel.findOne({ email });
  if (existinUser) {
    next("Email Already register please login");
    // return res.status(200).send({
    //     success: false,
    //     message: 'Email Already register please login'
    // })
  }

  //create user
  const user = await userModel.create({ name, lastName, email, password });
  //token
  const token = user.createJWT();
  res.status(201).send({
    success: true,
    message: "User Registered Successfully",
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  //validation
  if (!email || !password) {
    next("Please provide all feilds");
  }
  //find user by email
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    next("Invalid Credentials");
  }
  //comapre password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    next("Invalid Credentials");
  }
  //hide password
  user.password = undefined;
  const token = user.createJWT();
  res.status(200).json({
    success: true,
    message: "Login Successfully",
    user,
    token,
  });
};
