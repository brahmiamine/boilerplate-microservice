import { Router } from 'express';
import axios from 'axios';

const router = Router();
const USERS_SERVICE_URL = process.env.USERS_SERVICE_URL || 'http://localhost:4000';

// Route sécurisée pour GET /users
router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${USERS_SERVICE_URL}/api/v1/users`, {
      headers: {
        Authorization: req.headers['authorization'], // Transmettre le token au service backend
      },
    });
    res.status(response.status).json(response.data); // Renvoie la réponse directement au client
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios Error : transmettre les détails de l'erreur au client
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from user service' });
    } else {
      // Erreur non Axios (interne)
      res.status(500).json({ message: 'Error communicating with user service' });
    }
  }
});

export default router;
