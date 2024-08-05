import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./styles";

interface QuantityCounterProps {
  quantity: number;
  onDecrementItemQuantity: () => void;
  onIncrementItemQuantity: () => void;
}

export function QuantityCounter({quantity, onDecrementItemQuantity, onIncrementItemQuantity}: QuantityCounterProps) {
  return (
    <Container>
      <button
        onClick={onDecrementItemQuantity}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button
        onClick={onIncrementItemQuantity}
      >
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  )
}