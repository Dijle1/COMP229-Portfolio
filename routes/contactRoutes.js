import express from "express";
import { getContacts, getContact, createContact, updateContact, deleteContact } from "../controllers/contactController.js";
import { protect } from "../middleware/authMiddleware.js";
import { admin } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Everyone can read
router.get("/", getContacts);
router.get("/:id", getContact);

// Only admin can write
router.post("/", protect, admin, createContact);
router.put("/:id", protect, admin, updateContact);
router.delete("/:id", protect, admin, deleteContact);

export default router;
