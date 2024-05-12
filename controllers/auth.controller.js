import { adminModel } from "../models/admin.model.js";
import { generateJwt } from "../utils/jwt.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log("Received credentials:", username, password); // Debugging

    // Find admin using findOne and await its result
    const admin = await adminModel.findOne({ username: username, password: password });

    console.log("Found admin:", admin); // Debugging

    // Check if admin is found
    if (!admin) {
      return res.status(401).json({
        status: 'failed',
        msg: 'Invalid Credentials, If password forgotten please contact your administrator'
      });
    }

    // Generate JWT token
    const token = await generateJwt(admin._id, admin.username);

    // Send token as response
    res.status(200).json({
      status: "success",
      msg: "Authenticated successfully", 
      accessToken: token
    });

  } catch (error) {
    // Catch any errors and handle them
    console.error(error);
    res.status(500).json({ status: 'error', msg: 'Internal Server Error' });
  }
};

export const signup = async(req, res) => {
  try {
    const credentials = req.body

    const response = await new adminModel(credentials).save()

    if(!response) return res.json('invalid')

    return res.json('created')
  } catch (error) {
    throw error
  }
}
