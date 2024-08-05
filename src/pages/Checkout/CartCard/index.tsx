import { Trash } from "@phosphor-icons/react";
import { CardContent, ProductPrice, RemoveButton, ShoppingCartCardContainer } from "./styles";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartListContext";
import { QuantityCounter } from "../../../components/QuantityCounter";

interface CartCardProps {
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

export function CartCard({ cartItem }: CartCardProps) {
  const { 
    removeItem, 
    incrementItemQuantity, 
    decrementItemQuantity } = useContext(ShoppingCartContext);
  
  const formattedPrice = cartItem.price.toFixed(2).replace('.', ',');

  function handleIncrementQuantity(){
    incrementItemQuantity(cartItem.id)
  }

  function handleDecrementQuantity() {
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
          <QuantityCounter 
            quantity={cartItem.quantity}
            onDecrementItemQuantity={handleDecrementQuantity}
            onIncrementItemQuantity={handleIncrementQuantity}
          />

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