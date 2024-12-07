import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

// Middleware pour parser le corps des requêtes JSON
app.use(express.json());

// Utiliser les routes définies
app.use('/api/v1', routes);

// Middleware de gestion des erreurs
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
