import express from "express";
import { upload } from "../middlewares/file.middleware";
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  deleteProductByIdController,
  updateProductByIdController,
} from "../controllers/product.controller";

const router = express.Router();

// Routes CRUD pour les produits
router.post("/", upload.single("image"), createProductController);
router.get("/", getAllProductsController);
router.get("/:id", getProductByIdController);
router.delete("/:id", deleteProductByIdController);
router.put("/:id", upload.single("image"), updateProductByIdController);

export default router;
