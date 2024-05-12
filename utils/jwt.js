import jwt from "jsonwebtoken";
import env from './environment.js';

export const generateJwt = (id, username) => {
  const payload = {
    id,
    username
  }
  const accessToken = jwt.sign(payload, env.accessTokenKey, {expiresIn: "7d"})
  return accessToken
}