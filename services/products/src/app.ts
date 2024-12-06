import express, { Application } from "express";
import bodyParser from "body-parser";
import productRoutes from "./routes/product.routes";

export const createApp = (): Application => {
  const app = express();

  // Middleware
  app.use(bodyParser.json());
  app.use("/uploads", express.static("uploads"));

  // Routes
  app.use("/api/v1/products", productRoutes);

  return app;
};
