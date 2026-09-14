import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext();

const EXCHANGE_RATES = {
  USD: { rate: 1.0, symbol: "$" },
  EUR: { rate: 0.85, symbol: "€" },
  GBP: { rate: 0.75, symbol: "£" },
  JPY: { rate: 110.0, symbol: "¥" }
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  const changeCurrency = (currencyCode) => {
    setCurrency(currencyCode);
  };

  const formatPrice = (usdAmount) => {
    const currencyInfo = EXCHANGE_RATES[currency];

    if (currencyInfo) {
      const convertedAmount = usdAmount * currencyInfo.rate;

      return `${currencyInfo.symbol}${convertedAmount.toFixed(2)}`;
    }

    return `${usdAmount.toFixed(2)} ${currency}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        changeCurrency,
        formatPrice
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  return useContext(CurrencyContext);
};