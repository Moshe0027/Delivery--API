import mongoose from "mongoose";

export interface AddressDocument extends mongoose.Document {
    street: string;
    address_line1: string,
    address_line2: string,
    country: string,
    postcode:string,
}

const AddressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    address_line1: { type: String, required: true },
    address_line2: { type: String, required: true },
    country: { type: String, required: true },
    postcode: { type: String, required: false },
  }
);

const AddressModel = mongoose.model<AddressDocument>("Address", AddressSchema);

export default AddressModel;