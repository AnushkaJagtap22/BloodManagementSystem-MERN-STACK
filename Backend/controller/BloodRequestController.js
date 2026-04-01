import { BloodRequest } from "../models/BloodRequestSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { ErrorHandler } from "../middlewares/errorMiddleware.js";

export const createBloodRequest = catchAsyncErrors(async (req, res, next) => {
  const {
    patientName,
    bloodGroup,
    unitsRequired,
    hospital,
    location,
    contact,
    urgency,
    requiredDate,
  } = req.body;

  if (!patientName || !bloodGroup || !unitsRequired) {
    return next(new ErrorHandler("All fields required", 400));
  }

  const request = await BloodRequest.create({
    patientName,
    bloodGroup,
    unitsRequired,
    hospital,
    location,
    contact,
    urgency,
    requiredDate,
    requestedBy: req.user._id,
  });

  res.status(201).json({
    success: true,
    message: "Blood request created",
    request,
  });
});

export const getAllRequests = catchAsyncErrors(async (req, res) => {
  const requests = await BloodRequest.find().populate("requestedBy");

  res.status(200).json({
    success: true,
    requests,
  });
});