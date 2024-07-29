import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { Coffee } from "..";
import { ButtonCart, CardContainer, Counter, Price, ShopCartContainer, Tag, Tags } from "./styles";

interface CardProductProps {
  coffee: Coffee;
}

export function CardProduct({ coffee }: CardProductProps){  
  const formattedPrice = coffee.price.toFixed(2).replace('.', ',');

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
          <button>
            <Minus size={14} weight="bold"/>
          </button>
          <span>1</span>
          <button>
            <Plus size={14} weight="bold"/>
          </button>
        </Counter>

        <ButtonCart>
          <ShoppingCart size={18} weight="fill"/>
        </ButtonCart>
      </ShopCartContainer>
    </CardContainer>
  )
}