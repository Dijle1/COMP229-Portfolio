import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

// Import routes
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import qualificationRoutes from "./routes/qualificationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ✅ CORS EKLENECEK YER
app.use(
  cors({
    origin: "http://localhost:5173",   // FRONTEND URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true,                 // Token gönderimi için gerekli
  })
);

// Auth Routes (FIRST)
app.use("/api/auth", authRoutes);

// CRUD Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/users", userRoutes);

// Root
app.get("/", (req, res) => res.send("Welcome to Full Stack Portfolio API (Assignment 3)"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}/`)
);
