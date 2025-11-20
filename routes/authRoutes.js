import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Correct assignment naming
router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.get("/signout", logoutUser);

// Protected route example
router.get("/profile", protect, (req, res) => {
  res.status(200).json({ user: req.user });
});

export default router;
