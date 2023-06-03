import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_payment_key);
const Payment = () => {
  const [cart] = useCart();
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(totalAmount.toFixed(2));
  return (
    <div className="w-full h-full px-20">
      <SectionTitle
        subHeading={"Payment Process"}
        heading={"Payment"}
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckOut price={price} cart={cart}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
