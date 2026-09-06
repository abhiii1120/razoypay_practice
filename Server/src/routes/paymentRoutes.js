import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { createPayment, verifyPayment } from "../controllers/paymentController.js";

let router = Router()

router.post('/',requireAuth,createPayment)
router.post('/verify',requireAuth,verifyPayment)

export default router;