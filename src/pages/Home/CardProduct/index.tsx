import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
// import { Coffee } from "..";
import { ButtonCart, CardContainer, Counter, Price, ShopCartContainer, Tag, Tags } from "./styles";
import { Coffee } from "../../../data/Coffees";
import { useContext } from "react";
import { ShoppingCartListContext } from "../../../contexts/ShoppingCartListContext";
import { NavLink } from "react-router-dom";

interface CardProductProps {
  coffee: Coffee;
}

export function CardProduct({ coffee }: CardProductProps){  
  const {
    shoppingCartList,
    increaseCoffeeQuantityInTheList,
    descreaseCoffeeQuantityFromList } = useContext(ShoppingCartListContext);

  const formattedPrice = coffee.price.toFixed(2).replace('.', ',');

  const itemOnList = shoppingCartList.find(item => item.id === coffee.id);
  const quantityToShow = itemOnList ? itemOnList.quantity : coffee.quantity;

  function handleIncreaseCoffeeQuantity(){
    increaseCoffeeQuantityInTheList(coffee)
  }

  function handleDecreaseCoffeeQuantity() {
    descreaseCoffeeQuantityFromList(coffee.id)
  }

  return (
    <CardContainer>
      <img src={coffee.imgPath} alt={`${coffee.name}`} />
      <Tags>
        {
          coffee.tags.map(tag => (
            <Tag key={tag.toString()}>{tag}</Tag>
          ))
        }
      </Tags>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <ShopCartContainer>
        
        <Price>
          <span>R$</span>
          <strong>{formattedPrice}</strong>
        </Price>

        <Counter>
          <button
            onClick={handleDecreaseCoffeeQuantity}
          >
            <Minus size={14} weight="bold"/>
          </button>
          <span>{quantityToShow}</span>
          <button
            onClick={handleIncreaseCoffeeQuantity}
          >
            <Plus size={14} weight="bold"/>
          </button>
        </Counter>

        <NavLink to="/checkout" title="Checkout">
          <ButtonCart>
            <ShoppingCart size={18} weight="fill"/>
          </ButtonCart>
        </NavLink>
      </ShopCartContainer>
    </CardContainer>
  )
}