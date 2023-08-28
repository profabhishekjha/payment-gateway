import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/razorpay-webhook", (req: Request, res: Response) => {
  const event = req.body;

  // Handle specific event types
  if (event.event === "payment.captured") {
    const paymentId = event.payload.payment.entity.id;
    // Perform actions like updating your database or sending notifications
    console.log(`Payment captured: ${paymentId}`);
  }

  // Respond to the webhook to acknowledge receipt
  res.status(200).send("Webhook received");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
