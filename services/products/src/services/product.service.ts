import { Product } from "../models/product.model";
import { CreateProductDTO } from "../dto/product.dto";

export const createProduct = async (data: CreateProductDTO) => {
  return await Product.create(data);
};

export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id: string) => {
    return await Product.findById(id);
  };
  
export const deleteProductById = async (id: string) => {
    return await Product.findByIdAndDelete(id);
  };
  
export const updateProductById = async (id: string, data: any) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  };
