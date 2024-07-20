import express from "express";
import {
    getCompanyProfiles,
    getCompanyProfileById,
    createCompanyProfile,
    updateCompanyProfile,
    deleteCompanyProfile
} from "../controller/CompanyProfiles.js";
import { verifyUser, adminOrMitraOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/company-profiles', getCompanyProfiles); // Pengguna biasa dapat mengakses daftar perusahaan
router.get('/company-profiles/:id', getCompanyProfileById); // Pengguna biasa dapat mengakses detail perusahaan
router.post('/company-profiles', verifyUser, adminOrMitraOnly, createCompanyProfile);
router.patch('/company-profiles/:id', verifyUser, adminOrMitraOnly, updateCompanyProfile);
router.delete('/company-profiles/:id', verifyUser, adminOrMitraOnly, deleteCompanyProfile);

export default router;
