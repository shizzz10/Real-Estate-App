import { Children, createContext, useState } from "react";
export const CounterContext = createContext(0);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);


  const updateCount = (isFavorite) => {
    setCount((prevCount) => (isFavorite ? prevCount - 1 : prevCount + 1));
  };

  return (
    <CounterContext.Provider value={{ count, updateCount }}>
      {children}
    </CounterContext.Provider>
  );
};
