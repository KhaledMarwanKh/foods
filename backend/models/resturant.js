import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    default: "", // صورة افتراضية إن أردت
  },
  phone: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Fast Food", "Seafood", "Oriental", "Desserts", "Cafe", "Other"],
    default: "Other",
  },
  openingHours: {
    type: String,
    default: "9:00 AM - 11:00 PM",
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // لو عندك سكيمة مستخدمين
    required: false,
  },
}, {
  timestamps: true,
});

const Restaurant = mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
