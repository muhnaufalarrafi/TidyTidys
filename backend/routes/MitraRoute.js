// routes/MitraRoute.js
import express from "express";
import { getMitra } from "../controller/Mitra.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();
router.get('/mitra', verifyUser, adminOnly, getMitra);
export default router;
