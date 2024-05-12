import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isSuperAdmin: {
    type: Boolean,
    default: false
  }
});

export const adminModel = mongoose.model('Admin', adminSchema);
