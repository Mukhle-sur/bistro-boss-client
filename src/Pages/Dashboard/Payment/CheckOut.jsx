import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import "./CheckOut.css";
const CheckOut = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");

  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        cartItemsId: cart.map((item) => item._id),
        status: "Service Pending",
        menuItemsId: cart.map((item) => item.menuItemsId),
        itemName: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-secondary btn-sm mt-5 text-center"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>

      {error && <p className="text-red-600">{error}</p>}
      {transactionId && (
        <p className="text-green-400">
          Your Payment Is Success. Your TransactionId Is :{" "}
          <span className="font-medium text-black">{transactionId}</span>
        </p>
      )}
    </form>
  );
};

export default CheckOut;
