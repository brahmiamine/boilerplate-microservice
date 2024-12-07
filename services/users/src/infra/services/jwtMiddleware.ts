import { Request, Response, NextFunction } from 'express';
import { JWTAuthService } from '../services/authService';

const authService = new JWTAuthService();

export const validateJwt = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers['authorization'];

  // Vérifier si l'en-tête Authorization est présent
  if (!authHeader) {
    res.status(401).json({ message: 'Unauthorized: Missing token' });
    return;
  }

  const token = authHeader.split(' ')[1]; // Format attendu : "Bearer <token>"

  // Valider le token en utilisant JWTAuthService
  const decoded = authService.verifyToken(token);

  if (!decoded) {
    res.status(403).json({ message: 'Forbidden: Invalid or expired token' });
    return;
  }

  // Ajouter les informations décodées (payload) à req.user
  req.user = decoded;
  next();
};
