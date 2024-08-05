import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { ButtonCart, CardContainer, Price, ShopCartContainer, Tag, Tags } from "./styles";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartListContext";
import { QuantityCounter } from "../../../components/QuantityCounter";

interface CardProductProps {
  coffee: {
    id: string
    name: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function CardProduct({ coffee }: CardProductProps) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)
  const { addItem } = useContext(ShoppingCartContext);

  const formattedPrice = coffee.price.toFixed(2).replace('.', ',');

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => {
        setIsItemAdded(false)
      }, 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

  return (
    <CardContainer>
      <img src={coffee.image} alt={`${coffee.name}`} />
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

        <QuantityCounter
          quantity={quantity}
          onDecrementItemQuantity={handleDecrementQuantity}
          onIncrementItemQuantity={handleIncrementQuantity}
        />

        <ButtonCart
          disabled={isItemAdded}
          onClick={handleAddItem}
          $itemAdded={isItemAdded}
        >
          {isItemAdded ? (
            <CheckFat
              weight="fill"
              size={18}
            />
          ) : (
            <ShoppingCart size={18} weight="fill" />
          )}
        </ButtonCart>
      </ShopCartContainer>
    </CardContainer>
  )
}