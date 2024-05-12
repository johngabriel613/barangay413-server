import mongoose from "mongoose";
import env from '../utils/environment.js';

export const dbConnection = async() => {
  try {
    const conn = await mongoose.connect(env.dbURI, {
      useNewURLParser : true,
      useUnifiedTopology : true
    })

    if(!conn) return console.error('Database Connection Failed')
    return console.log('Database Connected')

  } catch (error) {
    throw error
  }
}