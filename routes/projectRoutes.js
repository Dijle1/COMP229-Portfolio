import express from "express";
import { getProjects, getProject, createProject, updateProject, deleteProject } from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Everyone can read
router.get("/", getProjects);
router.get("/:id", getProject);

// Only admin can mutate data
router.post("/", protect, admin, createProject);
router.put("/:id", protect, admin, updateProject);
router.delete("/:id", protect, admin, deleteProject);

export default router;
