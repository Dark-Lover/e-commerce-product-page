import React, { ReactNode, createContext, useState } from "react";

interface CartContextProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  added: number;
  setAdded: React.Dispatch<React.SetStateAction<number>>;
}
export const cartContext = createContext<CartContextProps | null>(null);

interface CountProviderProps {
  children: ReactNode;
}

function CountProvider({ children }: CountProviderProps) {
  const [cartCount, setCartCount] = useState<number>(0);
  const [added, setAdded] = useState(0);

  return (
    <cartContext.Provider value={{ cartCount, setCartCount, added, setAdded }}>
      {children}
    </cartContext.Provider>
  );
}
export default CountProvider;
