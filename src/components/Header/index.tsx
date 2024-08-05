import { Location, Aside, Cart, HeaderContainer, HeaderContent } from "./styles";

import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartListContext";
import { Link } from "react-router-dom";

export function Header() {
  const { cart } = useContext(ShoppingCartContext);

  const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logo} alt="Logo do coffee delivery" />
        </Link>

        <Aside>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Manaus, AM</span>
          </Location>

          <Cart to={`checkout`} aria-disabled={cart.length === 0}>
            <ShoppingCart size={22} weight="fill" />
            <div><span>{totalProducts}</span></div>
          </Cart>
        </Aside>
      </HeaderContent>
    </HeaderContainer>
  )
}