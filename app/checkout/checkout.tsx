"use client";
import { Button } from "@mui/material";
import checkout from "./actions/checkout";
import getStripe from "./stripe";

interface CheckoutProps {
  productId: number;
}

const Checkout = ({ productId }: CheckoutProps) => {
  const handleCheckout = async () => {
    const session = await checkout(productId);

    const stripe = await getStripe();
    console.log(session);
    await stripe?.redirectToCheckout({ sessionId: session.data.id });
  };
  return (
    <Button
      variant="contained"
      className="min-w-[25%]"
      onClick={handleCheckout}
    >
      Buy now
    </Button>
  );
};
export default Checkout;
