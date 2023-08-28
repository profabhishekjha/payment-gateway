"use client";
import { useEffect, useState } from "react";

interface RazorpayButtonProps {
  amount: number;
}

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
};

const RazorpayButton: React.FC<RazorpayButtonProps> = ({ amount }) => {
  const [payment, setPayment] = useState<any>(null); // Use any for now

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js", () => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: amount * 100,
        currency: "INR",
        name: "Your Company Name",
        description: "Payment for your service",
        handler: (response: any) => {
          // Handle payment success or failure here
          console.log(response);
        },
      };

      // Declare Razorpay on window explicitly
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const paymentObject: any = new (window as any).Razorpay(options);
      setPayment(paymentObject);
    });
  }, [amount]);

  const handleClick = () => {
    if (payment) {
      payment.open();
    }
  };

  return <button onClick={handleClick}>Pay Now</button>;
};

export default RazorpayButton;
