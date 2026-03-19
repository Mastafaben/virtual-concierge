import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Create Request
router.post("/", async (req, res) => {
  const { description, type, tenantId, propertyId } = req.body;
  try {
    const request = await prisma.request.create({
      data: { description, type, tenantId, propertyId },
    });
    res.json(request);
  } catch (err) {
    res.status(500).json({ error: "Unable to create request" });
  }
});

// Get requests for property
router.get("/:propertyId", async (req, res) => {
  const { propertyId } = req.params;
  const requests = await prisma.request.findMany({ where: { propertyId } });
  res.json(requests);
});

export default router;