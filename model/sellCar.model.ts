import mongoose, { Schema, models, model } from "mongoose";

const additionalFeatureSchema = new Schema(
  {
    id: { type: Number, required: true },
    text: { type: String, required: true },
  },
  { _id: false },
); // Don't create _id for subdocuments

// Define schema for image URLs
const imageSchema = new Schema(
  {
    url: { type: String, required: true },
    originalName: { type: String },
    size: { type: Number },
    mimeType: { type: String },
    uploadedAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

const sellCarSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false, // Make optional if not always available
  },

  // Current Vehicle Information
  vehicleModel: { type: String, required: true },
  vehicleType: { type: String, required: true },
  makeYear: { type: Number, required: true }, // Changed from String to Number
  vehicleColor: { type: String, required: true },
  kmDriven: { type: Number, required: true }, // Changed from String to Number
  expectedValuation: { type: Number, required: true }, // Changed from String to Number
  features: { type: String, required: true },
  fuelType: { type: String, required: true },
  condition: { type: String, required: true },
  accidents: { type: String, required: true },
  accidentInfo: { type: String, default: "" },
  engineType: { type: String, required: true }, // Added required: true
  transmission: { type: String, required: true },

  // Additional Information
  additionalInfo: { type: String, default: "" },

  // Files and Features
  images: [imageSchema], // Array of image objects with metadata
  additionalFeatures: [additionalFeatureSchema],
});

const SellCar = mongoose.model("SellCar", sellCarSchema);

export default SellCar;
