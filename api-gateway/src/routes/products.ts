import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();
const PRODUCTS_SERVICE_URL = process.env.PRODUCTS_SERVICE_URL || 'http://localhost:5000';

// GET all products
router.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${PRODUCTS_SERVICE_URL}/api/v1/products`, {
      headers: { Authorization: req.headers['authorization'] },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from product service' });
    } else {
      res.status(500).json({ message: 'Error communicating with product service' });
    }
  }
});

// GET product by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${PRODUCTS_SERVICE_URL}/api/v1/products/${req.params.id}`, {
      headers: { Authorization: req.headers['authorization'] },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from product service' });
    } else {
      res.status(500).json({ message: 'Error communicating with product service' });
    }
  }
});

// POST new product
router.post('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(`${PRODUCTS_SERVICE_URL}/api/v1/products`, req.body, {
      headers: { Authorization: req.headers['authorization'] },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from product service' });
    } else {
      res.status(500).json({ message: 'Error communicating with product service' });
    }
  }
});

// DELETE product by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const response = await axios.delete(`${PRODUCTS_SERVICE_URL}/api/v1/products/${req.params.id}`, {
      headers: { Authorization: req.headers['authorization'] },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from product service' });
    } else {
      res.status(500).json({ message: 'Error communicating with product service' });
    }
  }
});

// PUT (update) product by ID
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const response = await axios.put(`${PRODUCTS_SERVICE_URL}/api/v1/products/${req.params.id}`, req.body, {
      headers: { Authorization: req.headers['authorization'] },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error from product service' });
    } else {
      res.status(500).json({ message: 'Error communicating with product service' });
    }
  }
});

export default router;
