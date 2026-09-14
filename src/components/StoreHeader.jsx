import { useCurrency } from "../context/CurrencyContext";

const StoreHeader = () => {
  const { currency, changeCurrency } = useCurrency();

  return (
    <header className="header">
      <div>
        <h1>Global Store</h1>
        <p>Choose your preferred currency</p>
      </div>

      <div className="currency-buttons">
        <button
          className={currency === "USD" ? "active" : ""}
          onClick={() => changeCurrency("USD")}
        >
          USD
        </button>

        <button
          className={currency === "EUR" ? "active" : ""}
          onClick={() => changeCurrency("EUR")}
        >
          EUR
        </button>

        <button
          className={currency === "GBP" ? "active" : ""}
          onClick={() => changeCurrency("GBP")}
        >
          GBP
        </button>

        <button
          className={currency === "JPY" ? "active" : ""}
          onClick={() => changeCurrency("JPY")}
        >
          JPY
        </button>
      </div>
    </header>
  );
};

export default StoreHeader;