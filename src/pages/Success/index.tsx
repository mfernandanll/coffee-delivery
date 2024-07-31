import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { CheckoutContent, CheckoutDataContainer, CheckoutItem, CheckoutItemData, CheckoutItemIcon, GradientContainer, SuccessContainer } from "./styles";

import successImg from "../../assets/success-img.png";

export function Success() {
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
                <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                <p>Farrapos - Porto Alegre, RS</p>
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
                <strong>Cartão de Crédito</strong>
              </CheckoutItemData>
            </CheckoutItem>
          </CheckoutDataContainer>
        </GradientContainer>


        <img src={successImg} alt="Ilustração de um motoboy em uma moto indo entregar uma encomenda que está em uma caixa" />

      </CheckoutContent>
    </SuccessContainer>
  )
}