
import { createContext, ReactNode } from "react"
import { Coffee, coffees } from "../data/Coffees";


interface ShoppingCartListContextType {
  coffees: Coffee[]
}

export const ShoppingCartListContext = createContext({} as ShoppingCartListContextType)

interface ShoppingCartListContextProviderProps {
  children: ReactNode;
}

export function ShoppingCartListContextProvider({ children }: ShoppingCartListContextProviderProps){
  
  return (
    <ShoppingCartListContext.Provider
      value={{
        coffees
      }}
    >
      {children}
    </ShoppingCartListContext.Provider>
  )
}