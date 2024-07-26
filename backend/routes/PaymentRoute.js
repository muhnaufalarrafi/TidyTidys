// routes/PaymentRoute.js
import express from "express";
import { processPayment } from "../controller/Payment.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.post('/payment', verifyUser, processPayment);
export default router;
