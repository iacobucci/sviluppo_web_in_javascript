import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../model/User.js'

dotenv.config()

const authMiddleware = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    res.json({ error: 'Token non presente' })
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ where: { id: decoded.user.id } });


    if (!req.user) {
      res.json({ error: 'Utente non esistente' });
      return;
    }

    next();
  } catch (error) {
    res.json({ error: 'Token non valido' })
    return;
  }
};

export default authMiddleware;
