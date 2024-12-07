import { Router } from 'express';
import axios from 'axios';

const router = Router();
const PRODUCTS_SERVICE_URL = process.env.PRODUCTS_SERVICE_URL || 'http://localhost:5000';

// GET all products
router.get('/', async (req, res) => {
  try {
    // Appeler le service `products`
    const response = await axios.get(`${PRODUCTS_SERVICE_URL}/api/v1/products`, {
      headers: { Authorization: req.headers['authorization'] }, // Transmettre le token JWT
    });

    // Retourner la réponse du service `products`
    res.status(response.status).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Vérifier si l'erreur provient d'Axios et transmettre les détails au client
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from product service' });
    } else {
      // Gérer les erreurs internes de l'API Gateway
      console.error((error as Error).message);
      res.status(500).json({ message: 'Error communicating with product service' });
    }
  }
});

export default router;
