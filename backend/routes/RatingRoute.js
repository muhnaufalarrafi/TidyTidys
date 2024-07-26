// routes/RatingRoute.js
import express from "express";
import { createRating, getRatings } from "../controller/Ratings.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();
router.post('/ratings', verifyUser, createRating);
router.get('/ratings', verifyUser, getRatings);
export default router;
