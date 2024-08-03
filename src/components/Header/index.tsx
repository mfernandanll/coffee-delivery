import { ButtonLocation, Buttons, CartButton, HeaderContainer, HeaderContent } from "./styles";

import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { ShoppingCartListContext } from "../../contexts/ShoppingCartListContext";
import { Link } from "react-router-dom";

export function Header() {
  const { shoppingCartList } = useContext(ShoppingCartListContext);

  const totalProducts = shoppingCartList.reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logo} alt="Logo do coffee delivery" />
        </Link>

        <Buttons>
          <ButtonLocation>
            <MapPin size={22} weight="fill" />
            <span>Manaus, AM</span>
          </ButtonLocation>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
            <div><span>{totalProducts}</span></div>
          </CartButton>
        </Buttons>
      </HeaderContent>
    </HeaderContainer>
  )
}