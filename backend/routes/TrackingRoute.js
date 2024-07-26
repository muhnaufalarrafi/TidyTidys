// routes/TrackingRoute.js
import express from "express";
import { getTracking } from "../controller/Tracking.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/tracking/:id', verifyUser, getTracking);
export default router;
