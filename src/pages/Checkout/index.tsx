import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "@phosphor-icons/react";
import coffee from "../../assets/Coffee.png"
import { AddressContainer, AddressThreeCollums, AddressTwoCollums, CheckoutContainer, Form, InputWrapper, PaymentContainer, PaymentOption, PaymentOptions, Price, ShopCartContainer, Title, TotalContainer, HeaderTitle, HeaderSubTitle } from "./styles";
import { useContext } from "react";
import { ShoppingCartListContext } from "../../contexts/ShoppingCartListContext";
import { ShoppingCartCard } from "./ShoppingCartListCard";

export function Checkout() {
  const { shoppingCartList } = useContext(ShoppingCartListContext);

  return (
    <CheckoutContainer>
      <div>
        <Title>Complete seu pedido</Title>
        <AddressContainer>
          <header>
            <MapPinLine size={19} />
            <div>
              <HeaderTitle>Endereço de Entrega</HeaderTitle>
              <HeaderSubTitle>Informe o endereço onde deseja receber seu pedido</HeaderSubTitle>
            </div>
          </header>

          <Form>
            <InputWrapper>
              <label htmlFor="cep"/>
              <input type="text" id="cep" placeholder="CEP" />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="street"/>
              <input type="text" id="street" placeholder="Rua" />
            </InputWrapper>

            <AddressTwoCollums>
              <InputWrapper>
                <label htmlFor="number"/>
                <input type="text" id="number" placeholder="Número" />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="complement"/>
                <input type="text" id="complement" placeholder="Complemento" />
              </InputWrapper>
            </AddressTwoCollums>

            <AddressThreeCollums>
              <InputWrapper>
                <label htmlFor="neighborhood"/>
                <input type="text" id="nuneighborhoodmber" placeholder="Bairro" />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="city"/>
                <input type="text" id="city" placeholder="Cidade" />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="state"/>
                <input type="text" id="state" placeholder="UF" />
              </InputWrapper>
            </AddressThreeCollums>
          </Form>
        </AddressContainer>

        <PaymentContainer>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <HeaderTitle>Pagamento</HeaderTitle>
              <HeaderSubTitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</HeaderSubTitle>
            </div>
          </header>
          <PaymentOptions>
            <PaymentOption 
              value="credit"
              selected={true}
            >
              <CreditCard size={22} />
              <span>Cartão de crédito</span>
            </PaymentOption>

            <PaymentOption 
              value="debit"
              selected={false}
            >
              <Bank size={22} />
              <span>Cartão de débito</span>
            </PaymentOption>

            <PaymentOption 
              value="money"
              selected={false}
            >
              <Money size={22} />
              <span>Dinheiro</span>
            </PaymentOption>
          </PaymentOptions>
        </PaymentContainer>
      </div>

      <div>
        <Title>Cafés selecionados</Title>

        <ShopCartContainer>
          {
            shoppingCartList.length > 0 &&

            shoppingCartList.map(item => (
              <ShoppingCartCard key={item.id} cartItem={item}/>
            ))
          }

          <TotalContainer>
            <div>
              <span>Total de itens</span>
              <Price>
                <span>R$</span>
                <span>9,90</span>
              </Price>
            </div>

            <div>
              <span>Entrega</span>
              <Price>
                <span>R$</span>
                <span>9,90</span>
              </Price>
            </div>

            <div>
              <span>Total</span>
              <div>
                <span>R$</span>
                <span>9,90</span>
              </div>
            </div>

            <button>Confirmar pedido</button>

          </TotalContainer>
        </ShopCartContainer>
      </div>
    </CheckoutContainer>
  )
}