import Cart from "../models/Cart.js";
import { createOrder } from "../services/payment.js";
import Payment from "../models/paymentModel.js";

/**
 * POST /api/payments
 * @description Create a payment for the user's cart using razorpay API
 */
export const createPayment = async (req, res) => {

    const user = req.userId;

    console.log("user",user)

    const cart = await Cart.findOne({ user }).populate('items.product');

      if (!cart || cart.items.length === 0) {
        return res.status(400).json({
            message: 'Your cart is empty'
        });
    }

    const totalAmount = cart.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);

    const order = await createOrder(totalAmount, "INR");

    const payment = Payment.create({
        user,
        amount: {
            value: totalAmount,
            currency: "INR"
        },
        razorpayDetails: {
            orderId: order.id
        },
        products: cart.items.map(item => ({
            product: item.product._id,
            quantity: item.quantity
        }))
    })

    return res.status(201).json({
        message: 'Payment created successfully',
        data: {
            order
        }
    });
}