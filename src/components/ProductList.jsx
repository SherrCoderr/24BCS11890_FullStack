import { useCurrency } from "../context/CurrencyContext";

const ProductList = () => {
  const { formatPrice } = useCurrency();

  return (
    <section className="card">
      <h2>Product List</h2>

      <div className="product">
        <div>
          <h3>Wireless Headphones</h3>
          <p>Premium wireless headphones with noise cancellation.</p>
        </div>

        <strong>{formatPrice(100)}</strong>
      </div>
    </section>
  );
};

export default ProductList;