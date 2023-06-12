const express = require("express");
const { createInitialSeats, updateLatestSeats, getLatestSeats } = require("../controller/latestSeats.controller");
const latestSeatsRouter = express.Router();

latestSeatsRouter.post("/create",createInitialSeats)
latestSeatsRouter.patch("/update/all",updateLatestSeats)
latestSeatsRouter.get("/get",getLatestSeats)

module.exports = latestSeatsRouter