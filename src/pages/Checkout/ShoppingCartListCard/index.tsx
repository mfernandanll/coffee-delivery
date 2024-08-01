import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CardContent, Counter, ProductPrice, RemoveButton, ShoppingCartCardContainer } from "./styles";
import { Coffee } from "../../../data/Coffees";
import { useContext } from "react";
import { ShoppingCartListContext } from "../../../contexts/ShoppingCartListContext";

interface ShoppingCartCardProps {
  cartItem: Coffee;
}

export function ShoppingCartCard({ cartItem }: ShoppingCartCardProps) {
  const { 
    removeCoffeeFromList, 
    increaseCoffeeQuantityInTheList, 
    descreaseCoffeeQuantityFromList } = useContext(ShoppingCartListContext);
  
  const formattedPrice = cartItem.price.toFixed(2).replace('.', ',');

  function handleIncreaseCoffeeQuantity(){
    increaseCoffeeQuantityInTheList(cartItem)
  }

  function handleDecreaseCoffeeQuantity() {
    descreaseCoffeeQuantityFromList(cartItem.id)
  }

  function handleRemoveItem(){
    removeCoffeeFromList(cartItem.id)
  }

  return (
    <ShoppingCartCardContainer>
      <img src={cartItem.imgPath} alt={`${cartItem.name}`}  />

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