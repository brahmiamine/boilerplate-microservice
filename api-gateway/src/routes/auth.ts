import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();
const USERS_SERVICE_URL = process.env.USERS_SERVICE_URL || 'http://localhost:4000';

// POST register
router.post('/register', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${USERS_SERVICE_URL}/api/v1/auth/register`, req.body);
    res.status(response.status).json(response.data); // Renvoie directement la réponse du service backend
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Erreur Axios : transmettre les détails au client
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from user service' });
    } else {
      // Erreur interne (non Axios)
      console.error((error as Error).message);
      res.status(500).json({ message: 'Error communicating with user service' });
    }
  }
});

// POST login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${USERS_SERVICE_URL}/api/v1/auth/login`, req.body);
    res.status(response.status).json(response.data); // Renvoie directement la réponse du service backend
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Erreur Axios : transmettre les détails au client
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from user service' });
    } else {
      // Erreur interne (non Axios)
      console.error((error as Error).message);
      res.status(500).json({ message: 'Error communicating with user service' });
    }
  }
});

export default router;
