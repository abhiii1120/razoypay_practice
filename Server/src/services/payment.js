import Razorpay from "razorpay";
import { env } from "../config/env.js";

const razorpay = new Razorpay({
  key_id: env.razorpayKeyId,
  key_secret: env.razorpayKeySecret,
});

export const createOrder = async (amount, currency) => {
  const options = {
    amount: amount * 100,
    currency,
  };
  try {
    const order = await razorpay.orders.create(options);
    return order;
  } catch (err) {
    console.error('Razorpay order creation failed:', err.error || err.message || err);
    throw err;
  }
};