import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createOrderOnRazorpay(amount: number) {
  const orderOptions = {
    amount: amount * 100,
    currency: "INR",
    receipt: "order_receipt",
  };

  return new Promise((resolve, reject) => {
    razorpay.orders.create(orderOptions, (err: any, order: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(order);
    });
  }) as Promise<any>; // Use 'as Promise<any>' to suppress TypeScript error
}
