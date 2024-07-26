// routes/SupportRequestRoute.js
import express from "express";
import { getSupportRequests } from "../controller/SupportRequests.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/support-requests', verifyUser, adminOnly, getSupportRequests);
export default router;
