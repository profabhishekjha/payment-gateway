import { NextApiRequest, NextApiResponse } from "next";
import { createOrderOnRazorpay } from "@/utils/razorpay";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Your authentication logic (if applicable)
  // ...

  // Create an order on Razorpay
  const amount = 1; // Get the amount from the client or your app logic
  const order = await createOrderOnRazorpay(amount);

  res.status(200).json({ orderId: order.id });
}
