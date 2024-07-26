// routes/OrderStatusRoute.js
import express from "express";
import { getOrderStatus } from "../controller/OrderStatus.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/order-status/:id', verifyUser, getOrderStatus);
export default router;
