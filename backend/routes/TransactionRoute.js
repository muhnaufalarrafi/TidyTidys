// routes/TransactionRoute.js
import express from "express";
import { getTransactions } from "../controller/Transactions.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/transactions', verifyUser, adminOnly, getTransactions);
export default router;
