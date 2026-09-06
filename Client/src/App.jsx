import React from 'react'
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const App = () => {
    const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = () => {
    const options =  {
      key: "rzp_test_TYoqGWhxR47pKk",
      amount: 50000, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      order_id: "order_TYpHe6LZY20SvS", // Generate order_id on server
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <button onClick={handlePayment}>
      pay now
    </button>
  )
}

export default App