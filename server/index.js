import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import propertyRoutes from "./routes/property.js";
import requestRoutes from "./routes/request.js";
import chatRoutes from "./routes/chat.js";
import stripeWebhook from "./webhooks/stripe.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/property", propertyRoutes);
app.use("/request", requestRoutes);
app.use("/chat", chatRoutes);
app.use("/webhook", stripeWebhook);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));