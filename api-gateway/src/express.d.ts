import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // Remplace `any` par un type spécifique si tu as une interface utilisateur
    }
  }
}
