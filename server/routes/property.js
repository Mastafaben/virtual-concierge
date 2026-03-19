import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Create Property
router.post("/", async (req, res) => {
  const { address, ownerId } = req.body;
  try {
    const property = await prisma.property.create({
      data: { address, ownerId },
    });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: "Unable to create property" });
  }
});

// Get properties by owner
router.get("/:ownerId", async (req, res) => {
  const { ownerId } = req.params;
  const properties = await prisma.property.findMany({ where: { ownerId } });
  res.json(properties);
});

export default router;