import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CardContent, Counter, ProductPrice, RemoveButton, ShoppingCartCardContainer } from "./styles";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartListContext";

interface ShoppingCartCardProps {
  cartItem: {
    quantity: number;
    id: string;
    name: string;
    description: string;
    price: number;
    tags: string[];
    image: string;
  };
}

export function ShoppingCartCard({ cartItem }: ShoppingCartCardProps) {
  const { 
    removeItem, 
    incrementItemQuantity, 
    decrementItemQuantity } = useContext(ShoppingCartContext);
  
  const formattedPrice = cartItem.price.toFixed(2).replace('.', ',');

  function handleIncreaseCoffeeQuantity(){
    incrementItemQuantity(cartItem.id)
  }

  function handleDecreaseCoffeeQuantity() {
    decrementItemQuantity(cartItem.id)
  }

  function handleRemoveItem(){
    removeItem(cartItem.id)
  }

  return (
    <ShoppingCartCardContainer>
      <img src={cartItem.image} alt={`${cartItem.name}`}  />

      <CardContent>
        <span>{cartItem.name}</span>

        <div>
          <Counter>
            <button
              onClick={handleDecreaseCoffeeQuantity}
            >
              <Minus size={14} weight="bold" />
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={handleIncreaseCoffeeQuantity}
            >
              <Plus size={14} weight="bold" />
            </button>
          </Counter>

          <RemoveButton
            onClick={handleRemoveItem}
          >
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </div>

      </CardContent>

      <ProductPrice>
        <span>R$</span>
        <span>{formattedPrice}</span>
      </ProductPrice>
    </ShoppingCartCardContainer>
  )
}