import express from "express";
import { createBloodRequest, getAllRequests } from "../controller/BloodRequestController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/request", isAuthenticated(["Patient"]), createBloodRequest);
router.get("/all", isAuthenticated(["Admin", "Donor"]), getAllRequests);

export default router;