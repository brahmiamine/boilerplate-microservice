import { Router } from "express";
import {getAllUsers  } from "../controllers/userController";
import { validateJwt } from '../../infra/services/jwtMiddleware';

export const userRoutes = Router();

userRoutes.get("/",validateJwt, getAllUsers);

