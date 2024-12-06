import express from "express";
import dotenv from "dotenv";
import { authRoutes } from "./interfaces/routes/authRoutes";
import { userRoutes } from "./interfaces/routes/userRoutes";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

export { app };
