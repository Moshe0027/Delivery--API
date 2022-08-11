import mongoose from "mongoose";

export interface DeliveryDocument extends mongoose.Document {
    status: boolean;
    timeslot: string;
    address: string;
}

const DeliverySchema = new mongoose.Schema({
    status: { type: Boolean, required: true },
    timeslot: { type: String, required: true },
    address: { type: String, required: true },
  }
);

const DeliveryModel = mongoose.model<DeliveryDocument>("Delivers", DeliverySchema);

export default DeliveryModel;