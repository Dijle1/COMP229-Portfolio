import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  createAdmin
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// PUBLIC → first admin setup
router.post("/create-admin", createAdmin);

// PROTECTED ADMIN ROUTES
router.get("/", protect, admin, getUsers);
router.get("/:id", protect, admin, getUser);
router.post("/", protect, admin, createUser);
router.put("/:id", protect, admin, updateUser);
router.delete("/:id", protect, admin, deleteUser);

export default router;
