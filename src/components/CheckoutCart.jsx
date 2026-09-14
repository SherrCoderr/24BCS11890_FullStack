import { useCurrency } from "../context/CurrencyContext";

const CheckoutCart = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="card checkout">
      <h2>Checkout Cart</h2>

      <div className="subtotal">
        <span>Subtotal</span>
        <strong>{formatPrice(150)}</strong>
      </div>

      <button className="checkout-button">
        Proceed to Checkout
      </button>
    </section>
  );
};

export default CheckoutCart;