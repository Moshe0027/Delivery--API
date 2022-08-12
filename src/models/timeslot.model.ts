import mongoose from "mongoose";
export interface TimeslotDocument extends mongoose.Document {
    startTime: Date
    endTime: Date
    address: string
}

const TimeslotSchema = new mongoose.Schema({
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    address: { type: String, required: true },
  }
);

const TimeSlotModel = mongoose.model<TimeslotDocument>("timeslot", TimeslotSchema);

export default TimeSlotModel;