import mongoose from "mongoose";

const QualificationSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  firstname: { type: String, trim: true },
  lastname: { type: String, trim: true },
  email: { type: String, trim: true },
  completion: { type: Date },
  description: { type: String, trim: true },
});

export default mongoose.model("Qualification", QualificationSchema);
