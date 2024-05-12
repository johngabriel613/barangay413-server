import { Router } from "express";
import { actionRequest, getRequestByType, handleRequest } from "../controllers/request.controller.js";
import { login, signup } from "../controllers/auth.controller.js";

export const router = Router();

//Check server status
router.get('/server-status', async(req, res) => {
  try {
    res.send('Server is currently running')
  } catch (error) {
    res.send('Server is not currently running')
  }
})

//Client request routes
router.post('/request', handleRequest)
router.get('/request', getRequestByType)
router.get('/request/:id', actionRequest)

//Admin Login
router.post('/auth', login)
router.post('/create', signup)

