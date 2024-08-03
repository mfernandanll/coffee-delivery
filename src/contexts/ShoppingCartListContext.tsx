
import { createContext, ReactNode, useState } from "react"
import { Coffee, coffees } from "../data/Coffees";
import { ShoppingFormData } from "../pages/Checkout";
import { useNavigate } from 'react-router-dom'


interface ShoppingCartListContextType {
  coffees: Coffee[];
  orders: Order[];
  shoppingCartList: Coffee[];
  increaseCoffeeQuantityInTheList: (coffee: Coffee) => void;
  descreaseCoffeeQuantityFromList: (coffeeId: string) => void;
  removeCoffeeFromList: (coffeeId: string) => void;
  createNewOrder: (data: ShoppingFormData) => void;
}

export const ShoppingCartListContext = createContext({} as ShoppingCartListContextType)

interface ShoppingCartListContextProviderProps {
  children: ReactNode;
}

interface Order {
  id: string;
  cep: number;
  street: string;
  addressNumber: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: 'money' | 'credit' | 'debit';
  orders: Coffee[];
  delivery: number;
  totalPrice: number;
}

export function ShoppingCartListContextProvider({ children }: ShoppingCartListContextProviderProps){
  const [shoppingCartList, setShoppingCartList] = useState<Coffee[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const navigate = useNavigate()
  
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
        const filteresList = prevState.filter(item => item.id !== coffeeId);
        return filteresList
      } else {
        return prevState
      }
    })
  }

  function removeCoffeeFromList(coffeeId: string){
    setShoppingCartList((prevState) => {
      const filteresList = prevState.filter(item => item.id !== coffeeId);
      return filteresList
    })
  }

  function createNewOrder(data: ShoppingFormData) {
    const id = String(new Date().getTime())

    const order: Order = {
      id,
      cep: data.cep,
      street: data.street,
      addressNumber: data.addressNumber,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      paymentMethod: data.paymentMethod,
      orders: data.orders,
      delivery: data.delivery,
      totalPrice: data.totalPrice
    }

    setOrders((prevState) => [...prevState, order])

    setShoppingCartList([])
    navigate(`/order/${order.id}/success`)
  }

  return (
    <ShoppingCartListContext.Provider
      value={{
        coffees,
        orders,
        shoppingCartList,
        increaseCoffeeQuantityInTheList,
        descreaseCoffeeQuantityFromList,
        removeCoffeeFromList,
        createNewOrder
      }}
    >
      {children}
    </ShoppingCartListContext.Provider>
  )
}