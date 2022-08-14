import mongoose from "mongoose";

export interface DeliveryDocument extends mongoose.Document {
  user:string,
  timeslotId: string;
}
export interface CompleteDeliveryDocument extends mongoose.Document {
  delivery_id: string;
  status: boolean;
}
export interface DeleteDeliveryDocument extends mongoose.Document {
  _id: string;
}

const DeliverySchema = new mongoose.Schema({
  user:{ type: String, required: true},
  status: { type: Boolean, required: false, default: false },
  timeslotId: { type: String, required: true },
}
);

const DeliveryModel = mongoose.model<DeliveryDocument>("Delivers", DeliverySchema);

export default DeliveryModel;