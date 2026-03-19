import express from "express";
const router = express.Router();

router.post("/", express.raw({ type: "application/json" }), (req, res) => {
  const event = req.body;

  switch (event.type) {
    case "checkout.session.completed":
      console.log("Payment succeeded:", event.data.object);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.sendStatus(200);
});

export default router;