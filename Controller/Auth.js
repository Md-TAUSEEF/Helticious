const User = require("../Module/Auth_modules");

// Registration Logic
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userexist = await User.findOne({ email });

    if (userexist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.getJWTToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//login page
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new Errorhandler("Please enter email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new Errorhandler("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparepassword(password);

    if (!isPasswordMatched) {
      return next(new Errorhandler("Invalid email or password", 401));
    }


    res.status(201).json({
      success: true,
      msg: "Login Successful",
      token: await user.getJWTToken(),
      userId: user._id.toString(),
    });

    
  } catch (err) {
    
   console.log(`this error is coming when user is login ${error}`);
  }
};



module.exports = {
  register,
  loginUser,
};
