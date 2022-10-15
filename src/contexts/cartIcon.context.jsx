import { createContext, useState } from "react";

export const CartIconContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartIconProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return (
    <CartIconContext.Provider value={value}>
      {children}
    </CartIconContext.Provider>
  );
};
