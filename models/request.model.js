import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  type:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address1: {
    type: String,
    required: true
  },
  address2: {
    type: String,
    required: true
  },
  address3: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: function(){return this.type !== 'bclearance'}
  },
  businessName:{
    type: String,
    required: function(){return this.type === 'bclearance'}
  },
  businessAddress:{
    type: String,
    required: function(){return this.type === 'bclearance'}
  },
  lengthOfStay:{
    type: String,
    required: function(){return this.type === 'ftjs'}
  },
  status:{
    type: String,
    default: 'pending'
  }
},{
  timestamps: true
})

export const requestModel = mongoose.model('Request', requestSchema);