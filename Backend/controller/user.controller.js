import User from "../models/user.model.js";
import bcrypt from "bcrypt";

//signup
export const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      fullName: fullName,
      email: email,
      password: hashPassword,
    });
    await createUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        fullName: fullName,
        email: email,
      },
    });
  } catch (err) {
    console.log("Error" + err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatched = await bcrypt.compare(password, user.password);
    if (!user || !isMatched) {
      return res.json(400).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({
        message: "Logged In successfully",
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    }
  } catch (err) {
    console.log("Error" + err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
