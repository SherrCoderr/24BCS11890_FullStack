import { CurrencyProvider } from "./context/CurrencyContext";
import StoreHeader from "./components/StoreHeader";
import ProductList from "./components/ProductList";
import CheckoutCart from "./components/CheckoutCart";

function App() {
  return (
    <CurrencyProvider>
      <div className="app">
        <StoreHeader />

        <main className="container">
          <ProductList />
          <CheckoutCart />
        </main>
      </div>
    </CurrencyProvider>
  );
}

export default App;