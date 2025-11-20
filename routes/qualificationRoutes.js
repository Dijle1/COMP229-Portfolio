import express from "express";
import { getQualifications, getQualification, createQualification, updateQualification, deleteQualification } from "../controllers/qualificationController.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Everyone can read
router.get("/", getQualifications);
router.get("/:id", getQualification);

// Only admin can CRUD
router.post("/", protect, admin, createQualification);
router.put("/:id", protect, admin, updateQualification);
router.delete("/:id", protect, admin, deleteQualification);

export default router;
