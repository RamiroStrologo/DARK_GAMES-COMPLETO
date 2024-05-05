const mongoose = require('mongoose');
const mongoPaginate = require('mongoose-paginate-v2');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  code: { type: String, require: true, unique: true },
  price: {
    type: Number,
    required: true,
  },
  status: { type: Boolean, default: true },
  stock: {
    type: Number,
    default: 0,
  },
  genre: {
    type: String,
    required: true,
    required: true,
  },
  thumbnails: { type: String, required: true },
  plataform: { type: String, enum: ['ps3', 'ps4', 'xone'] },
});
ProductSchema.plugin(mongoPaginate);
const Product = mongoose.model('products', ProductSchema);
module.exports = Product;
