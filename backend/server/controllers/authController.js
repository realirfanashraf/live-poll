import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import {generateToken} from '../utils/token.js'

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new userModel({
      username,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};




export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = generateToken(user);

    const sanitizedUser = {
      id: user.id,
      username: user.username,
      email: user.email
    };

    res.json({ user: sanitizedUser, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};