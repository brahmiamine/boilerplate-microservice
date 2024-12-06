import { Router } from "express";
import {getAllUsers  } from "../controllers/userController";

export const userRoutes = Router();

userRoutes.get("/", getAllUsers); // Nouvelle route ajoutée

