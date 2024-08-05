import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { CheckoutContent, CheckoutDataContainer, CheckoutItem, CheckoutItemData, CheckoutItemIcon, GradientContainer, SuccessContainer } from "./styles";
import { useParams } from 'react-router-dom'

import successImg from "../../assets/success-img.png";
import { ShoppingCartContext } from "../../contexts/ShoppingCartListContext";
import { useContext } from "react";

export function Success() {
  const { orders } = useContext(ShoppingCartContext);
  const { orderId } = useParams()
  const orderInfo = orders.find(order => order.id === Number(orderId));
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>

      <CheckoutContent>
        <GradientContainer>
          <CheckoutDataContainer>
            <CheckoutItem>
              <CheckoutItemIcon color="purple">
                <MapPin size={16} weight="fill" />
              </CheckoutItemIcon>

              <CheckoutItemData>
                <p>Entrega em <strong>{orderInfo.street}, {orderInfo.addressNumber}</strong></p>
                <p>{orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}</p>
              </CheckoutItemData>
            </CheckoutItem>

            <CheckoutItem>
              <CheckoutItemIcon color="yellow">
                <Timer size={16} weight="fill" />
              </CheckoutItemIcon>

              <CheckoutItemData>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </CheckoutItemData>
            </CheckoutItem>

            <CheckoutItem>
              <CheckoutItemIcon color="yellowDark">
                <CurrencyDollar size={16} />
              </CheckoutItemIcon>

              <CheckoutItemData>
                <p>Pagamento na entrega</p>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </CheckoutItemData>
            </CheckoutItem>
          </CheckoutDataContainer>
        </GradientContainer>


        <img src={successImg} alt="Ilustração de um motoboy em uma moto indo entregar uma encomenda que está em uma caixa" />

      </CheckoutContent>
    </SuccessContainer>
  )
}