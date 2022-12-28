import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {type: Number, required: true},
  description: {type: String, required: true},
  cost: {type: Object, required: true},
  gain: {
    type: Object,
    required: true,
  },
  building: {
    type: Object,
    required: false,
  },
});

export const Card =
  mongoose.models.Card || mongoose.model("Card", CardSchema, "cards");
