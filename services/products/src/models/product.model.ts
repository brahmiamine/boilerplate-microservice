import { Schema, model, Document } from "mongoose";
import { CreateProductDTO } from "../dto/product.dto";

export interface ProductDocument extends Document, CreateProductDTO {}

const ProductSchema = new Schema<ProductDocument>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
});

export const Product = model<ProductDocument>("Product", ProductSchema);
