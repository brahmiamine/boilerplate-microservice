import { Router } from "express";
import { addAddress } from "../controllers/AddressController";
import { validateJwt } from '../../infra/services/jwtMiddleware';

export const addresseRoutes = Router();

addresseRoutes.post("/", addAddress);

