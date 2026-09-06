import dotnev from "dotenv";
dotnev.config();

const requireEnv = (name, fallback) => {
  const value = process.env[name] ?? fallback;

  if (!value) {
    throw new Error(`${name} is required`);
  }

  return value;
};

export const env = {
  port: Number(process.env.PORT || 3000),
  mongoUri: requireEnv("MONGO_URI", "mongodb://127.0.0.1:27017/razorpay_local"),
  jwtSecret: requireEnv("JWT_SECRET"),
  razorpayKeyId: requireEnv("RAZORPAY_KEY_ID"),
  razorpayKeySecret: requireEnv("RAZORPAY_KEY_SECRET"),
};
