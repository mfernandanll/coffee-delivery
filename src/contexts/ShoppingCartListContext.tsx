
import { createContext, ReactNode, useState } from "react"
import { Coffee, coffees } from "../data/Coffees";


interface ShoppingCartListContextType {
  coffees: Coffee[];
  shoppingCartList: Coffee[];
  increaseCoffeeQuantityInTheList: (coffee: Coffee) => void;
  descreaseCoffeeQuantityFromList: (coffeeId: string) => void;
}

export const ShoppingCartListContext = createContext({} as ShoppingCartListContextType)

interface ShoppingCartListContextProviderProps {
  children: ReactNode;
}

export function ShoppingCartListContextProvider({ children }: ShoppingCartListContextProviderProps){
  const [shoppingCartList, setShoppingCartList] = useState<Coffee[]>([]);
  
  function increaseCoffeeQuantityInTheList(coffee: Coffee){
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

  function descreaseCoffeeQuantityFromList(coffeeId: string) {
    setShoppingCartList((prevState) => {
      const itemInCart = prevState.find(item => item.id === coffeeId);

      if (itemInCart && itemInCart.quantity > 1) {
        return prevState.map(item =>
          item.id === coffeeId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else if (itemInCart && itemInCart.quantity == 1) {
        return removeCoffeeFromList(prevState, coffeeId)
      } else {
        return prevState
      }
    })
  }

  function removeCoffeeFromList(coffeelist: Coffee[], coffeeId: string){
    const filteresList = coffeelist.filter(item => item.id !== coffeeId);
    return filteresList
  }

  return (
    <ShoppingCartListContext.Provider
      value={{
        coffees,
        shoppingCartList,
        increaseCoffeeQuantityInTheList,
        descreaseCoffeeQuantityFromList
      }}
    >
      {children}
    </ShoppingCartListContext.Provider>
  )
}