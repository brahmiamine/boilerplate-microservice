import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware pour valider le token JWT
export const validateJwt = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];

  // Vérifier si l'en-tête Authorization est présent
  if (!authHeader) {
    res.status(401).json({ message: 'Unauthorized: Missing token' });
    return;
  }

  const token = authHeader.split(' ')[1]; // Format attendu : "Bearer <token>"

  try {
    // Vérifier et décoder le token JWT
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Ajouter les informations décodées à req.user
    next();
  } catch (error) {
    res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
  }
};
