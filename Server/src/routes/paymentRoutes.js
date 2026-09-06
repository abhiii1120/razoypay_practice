import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { createPayment } from "../controllers/paymentController.js";

let router = Router()

router.post('/',requireAuth,createPayment)

export default router;