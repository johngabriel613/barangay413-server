import { requestModel } from "../models/request.model.js";

export const handleRequest = async(req, res) => {
  try {
    const data = req.body

    const response = new requestModel(data).save();

    if(!response) return res.status(400).json('Cannot handle request right now')

    res.status(202).json({status: 'ok', msg: 'Your request has been submitted'})
    console.log(data)
  } catch (error) {
    throw error
  }
}

export const getRequestByType = async(req, res) => {
  try {
    const {type} = req.query

    const response = await requestModel.find({type: type})

    if(!response) return res.json({
      status: 'failed',
      msg: 'No data found'
    })

    return res.json(response)
  } catch (error) {
    throw error.message
  }
}

export const actionRequest = async(req, res) => {
  try {
    // localhost:8080/api/request/:id
    const {id} = req.params
    const {action} = req.query

    const response = await requestModel.findByIdAndUpdate(id,{status: action}, {new: true})

    if (!response) {
      return res.status(404).json({
        status: 'failed',
        msg: 'Request not found'
      });
    }

    return res.json({
      status: 'success',
      msg: 'Request approved successfully',
      data: response
    });
  } catch (error) {
    throw error
  }
}