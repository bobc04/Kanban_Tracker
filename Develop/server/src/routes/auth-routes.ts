import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // VALIDATE INPUT
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // FIND USER
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // CHECK PASSWORD
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // CREATE JWT TOKEN
    const secret = process.env.JWT_SECRET || 'defaultsecret';
    const token = jwt.sign(
      { username: user.username },
      secret,
      { expiresIn: '1h' } // TOKEN EXPIRES IN 1 HOUR
    );

    // SEND TOKEN
    res.json({ token, username: user.username });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;