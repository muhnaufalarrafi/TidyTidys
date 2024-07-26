// routes/OrderRoute.js
import express from "express";
import { getOrders, getOrderHistory } from "../controller/Orders.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/orders', verifyUser, getOrders);
router.get('/order-history', verifyUser, getOrderHistory);
export default router;
