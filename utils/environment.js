import { config as configDotenv } from "dotenv";

configDotenv();

export default {
  dbURI: process.env.MONGODB_URI,
  accessTokenKey: process.env.ACCESS_TOKEN_KEY
}