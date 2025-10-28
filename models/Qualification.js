import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  institution: { type: String, required: true },
  year: { type: Number },
}, { timestamps: true });

const Qualification = mongoose.model("Qualification", qualificationSchema);
export default Qualification;
