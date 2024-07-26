// routes/PlatformPerformanceRoute.js
import express from "express";
import { getPlatformPerformance } from "../controller/PlatformPerformance.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/platform-performance', verifyUser, adminOnly, getPlatformPerformance);
export default router;
