
import { createContext, ReactNode, useState } from "react"
import { Coffee, coffees } from "../data/Coffees";


interface ShoppingCartListContextType {
  coffees: Coffee[];
  shoppingCartList: Coffee[];
  addCoffee: (coffee: Coffee) => void;
  removeCoffeeFromList: (coffeeId: string) => void;
}

export const ShoppingCartListContext = createContext({} as ShoppingCartListContextType)

interface ShoppingCartListContextProviderProps {
  children: ReactNode;
}

export function ShoppingCartListContextProvider({ children }: ShoppingCartListContextProviderProps){
  const [shoppingCartList, setShoppingCartList] = useState<Coffee[]>([]);
  
  function addCoffee(coffee: Coffee){
    setShoppingCartList((prevState) => {
      const itemInCart = prevState.find(item => item.id === coffee.id);
  
      if (itemInCart) {
        return prevState.map(item =>
          item.id === coffee.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevState, { ...coffee, quantity: 1 }];
      }
    });
  }

  function removeCoffeeFromList(coffeeId: string) {
    setShoppingCartList((prevState) => {
      const itemInCart = prevState.find(item => item.id === coffeeId);

      if (itemInCart) {
        const filteresList = prevState.filter(item => item.id !== coffeeId);
        return filteresList
      } else {
        return prevState
      }
    })
  }

  return (
    <ShoppingCartListContext.Provider
      value={{
        coffees,
        shoppingCartList,
        addCoffee,
        removeCoffeeFromList
      }}
    >
      {children}
    </ShoppingCartListContext.Provider>
  )
}