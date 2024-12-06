import { Request, Response } from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById,
  } from "../services/product.service";
import { CreateProductDTO } from "../dto/product.dto";
import { AppError } from "../types/error.type";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const productData: CreateProductDTO = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.file?.path, // Image optionnelle
    };
    const product = await createProduct(productData);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    const err = error as AppError;
    res
      .status(err.statusCode || 500)
      .json({ success: false, message: err.message || "Internal Server Error" });
  }
};

export const getAllProductsController = async (_req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    const err = error as AppError;
    res
      .status(err.statusCode || 500)
      .json({ success: false, message: err.message || "Internal Server Error" });
  }
};




export const getProductByIdController = async (req: Request, res: Response) => {
    try {
      const product = await getProductById(req.params.id);
      if (!product) {
        res.status(404).json({ success: false, message: "Product not found" });
        return; // Arrêter l'exécution ici
      }
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to fetch product" });
    }
  };
  
  
  
  export const deleteProductByIdController = async (req: Request, res: Response) => {
    try {
      const product = await deleteProductById(req.params.id);
      if (!product) {
        res.status(404).json({ success: false, message: "Product not found" });
        return; // Arrêter l'exécution ici
      }
      res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to delete product" });
    }
  };
  
  
  
  
  export const updateProductByIdController = async (req: Request, res: Response) => {
    try {
      const productData = {
        ...req.body,
        image: req.file?.path, // Si une nouvelle image est fournie
      };
      const product = await updateProductById(req.params.id, productData);
      if (!product) {
        res.status(404).json({ success: false, message: "Product not found" });
        return; // Arrêter l'exécution ici
      }
      res.status(200).json({ success: true, data: product });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to update product" });
    }
  };
  
