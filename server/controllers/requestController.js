const { RequestModel } = require("../models/modelsIndex");
const sequelize = require("../db");
const { Router } = require("express");
const requestController = Router();

/******************
 * POST: Create request item
 ******************/
requestController.post("/createRequest", async (req, res) => {
  let {
    requestName,
    requestApproved,
    requestComment,
  } = req.body.request;

  try {
    await RequestModel.create({
      requestName: requestName,
      requestApproved: requestApproved,
      requestComment: requestComment,
    }).then((data) => {
      res.status(200).json({
        data: data,
        message: "Request successfully created!",
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Request creation failed ${err}`,
    });
  }
});

/************************
 * GET: all requests
 ************************/
requestController.get("/viewRequests", async (req, res) => {
  try {
    let allRequests = await RequestModel.findAll().then((data) => {
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "No requests found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve request ${err}`,
      });
    }
  }
});

/************************
 * GET: single request
 ************************/
requestController.get("/requestInfo/:id", async (req, res) => {
  try {
    let requestInfo = await RequestModel.findOne({
      where: {id: req.params.id}
    }
    ).then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Request not found." });
      }
    });
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve request ${err}.`,
      });
    }
  }
});

/************************
 * PUT: Update request
 ************************/
requestController.put("/updateRequest/:id", async (req, res) => {
  const requestID = req.params.id;
  let {
    requestApproved,
    requestComment,
  } = req.body.request;
 
  try {
    let updateRequest = await RequestModel.findOne({
      where: { id: itemID },
    })
      if (updateRequest) {
        updateRequest.update({
          // requestName should not be updated
          requestApproved: requestApproved,
          requestComment: requestComment
      });
      res.status(200).json({updateRequest,
      message: 'Request successfully updated'})
      } 
      else {
        res.status(404).json({ message: "Request not found." });
      }
  } catch (err) {
    {
      res.status(500).json({
        message: `Failed to retrieve item ${err}`,
      });
    }
  }
});

module.exports = requestController;
