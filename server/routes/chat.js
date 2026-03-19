import express from "express";
import { PrismaClient } from "@prisma/client";
import OpenAI from "openai";

const router = express.Router();
const prisma = new PrismaClient();
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Send message and get AI response
router.post("/", async (req, res) => {
  const { message, senderId, receiverId } = req.body;
  try {
    // Save user message
    await prisma.message.create({ data: { content: message, senderId, receiverId } });

    // AI response
    // const completion = await openai.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: [{ role: "user", content: message }],
    // });

    // const aiMessage = completion.choices[0].message.content;
    const aiMessage = "This is a mock AI response for preview purposes.";
    await prisma.message.create({ data: { content: aiMessage, senderId: "AI", receiverId: senderId } });

    res.json({ aiMessage });
  } catch (err) {
    res.status(500).json({ error: "Chat error" });
  }
});

export default router;