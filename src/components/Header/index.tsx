import { ButtonLocation, Buttons, CartButton, HeaderContainer, HeaderContent } from "./styles";

import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Logo do coffee delivery" />

        <Buttons>
          <ButtonLocation>
            <MapPin size={22} weight="fill" />
            <span>Manaus, AM</span>
          </ButtonLocation>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Buttons>
      </HeaderContent>
    </HeaderContainer>
  )
}