import express from "express";
import dotenv from "dotenv";
import { authRoutes } from "./interfaces/routes/authRoutes";
import { userRoutes } from "./interfaces/routes/userRoutes";
import { addresseRoutes } from "./interfaces/routes/AddressRoutes";


dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use('/api/v1/addresses', addresseRoutes);


export { app };
