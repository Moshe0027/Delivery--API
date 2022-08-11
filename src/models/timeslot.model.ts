import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz012345678910',10);

export interface ProductDocument extends mongoose.Document {
    title: string
    description: string
    price: number
    image: string
    createAt: Date
    updatedAt: Date
}

const ProductSchema = new mongoose.Schema({
    productId: {
        type: String, required: true, unique: true, default: () => `product_${nanoid()}`
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model<ProductDocument>("products", ProductSchema);

export default ProductModel;