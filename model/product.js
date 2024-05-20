const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema
const productSchema = new Schema({
  title: String, // shorthand for {type: String}
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

// model
exports.Product = mongoose.model("Product", productSchema);
