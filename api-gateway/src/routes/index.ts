import { Router } from 'express';
import productsRoutes from './products';
import authRoutes from './auth';
import userRoutes from './user';
import { validateJwt } from '../middlewares/auth';

const router = Router();

router.use('/products',validateJwt, productsRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;
