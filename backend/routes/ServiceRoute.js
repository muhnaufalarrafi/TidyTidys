import express from "express";
import {
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService
} from "../controller/Services.js";
import { verifyUser, adminOrMitraOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/services', verifyUser, getServices);
router.get('/services/:id', verifyUser, getServiceById);
router.post('/services', verifyUser, adminOrMitraOnly, createService);
router.patch('/services/:id', verifyUser, adminOrMitraOnly, updateService);
router.delete('/services/:id', verifyUser, adminOrMitraOnly, deleteService);

export default router;
