import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { 
  AddressContainer, 
  AddressThreeCollums, 
  AddressTwoCollums, 
  CheckoutContainer, 
  Form, 
  InputWrapper, 
  PaymentContainer, 
  PaymentOptions, 
  Price, 
  CartContainer, 
  Title, 
  TotalContainer, 
  HeaderTitle, 
  HeaderSubTitle, 
  ErrorMessage, 
  InputContent } from "./styles";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartListContext";
import { CartCard } from "./CartCard";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { coffees } from '../../data/coffees.json'
import { RadioButton } from "./RadioButton";

const newOrder = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  addressNumber: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'money'], {
    required_error: 'Informe um método de pagamento'
  })
})

export type OrderInfo = zod.infer<typeof newOrder>

const shippingPrice = 7.9;

export function Checkout() {
  const { cart, checkout } = useContext(ShoppingCartContext);

  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors } 
  } = useForm<OrderInfo>({
    resolver: zodResolver(newOrder),
  })
  
  const selectedPaymentMethod = watch('paymentMethod');
  
  const formatPrice = (price: number) => price.toFixed(2).replace('.', ',');

  const shippingPriceFormatted = formatPrice(shippingPrice);

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const totalItemsPriceFormatted = formatPrice(totalItemsPrice);

  const totalPrice = totalItemsPrice + shippingPrice;
  const totalPriceFormatted = formatPrice(totalPrice);

  function handleCreateNewOrder(data: OrderInfo) {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <form id="order" onSubmit={handleSubmit(handleCreateNewOrder)} >
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
                <InputContent>
                  <label htmlFor="cep" />
                  <input
                    type="number"
                    id="cep"
                    placeholder="CEP"
                    {...register('cep', { valueAsNumber: true })}
                  />
                </InputContent>
                {errors.cep?.message ? (
                  <ErrorMessage role="alert">{errors.cep.message}</ErrorMessage>
                ) : null}
              </InputWrapper>

              <InputWrapper>
                <InputContent>
                  <label htmlFor="street" />
                  <input
                    type="text"
                    id="street"
                    placeholder="Rua"
                    {...register('street')}
                  />
                </InputContent>
                {errors.street?.message ? (
                  <ErrorMessage role="alert">{errors.street.message}</ErrorMessage>
                ) : null}
              </InputWrapper>

              <AddressTwoCollums>
                <InputWrapper>
                  <InputContent>
                    <label htmlFor="addressNumber" />
                    <input
                      type="text"
                      id="addressNumber"
                      placeholder="Número"
                      {...register('addressNumber')}
                    />
                  </InputContent>
                  {errors.addressNumber?.message ? (
                    <ErrorMessage role="alert">{errors.addressNumber.message}</ErrorMessage>
                  ) : null}
                </InputWrapper>

                <InputWrapper>
                  <InputContent>
                    <label htmlFor="complement" />
                    <input
                      type="text"
                      id="complement"
                      placeholder="Complemento"
                      {...register('complement')}
                    />
                    <span>Opcional</span>
                  </InputContent>
                  {errors.complement?.message ? (
                    <ErrorMessage role="alert">{errors.complement.message}</ErrorMessage>
                  ) : null}
                </InputWrapper>
              </AddressTwoCollums>

              <AddressThreeCollums>
                <InputWrapper>
                  <InputContent>
                    <label htmlFor="neighborhood" />
                    <input
                      type="text"
                      id="neighborhood"
                      placeholder="Bairro"
                      {...register('neighborhood')}
                    />
                  </InputContent>
                  {errors.neighborhood?.message ? (
                    <ErrorMessage role="alert">{errors.neighborhood.message}</ErrorMessage>
                  ) : null}
                </InputWrapper>

                <InputWrapper>
                  <InputContent>
                    <label htmlFor="city" />
                    <input
                      type="text"
                      id="city"
                      placeholder="Cidade"
                      {...register('city')}
                    />
                  </InputContent>
                  {errors.city?.message ? (
                    <ErrorMessage role="alert">{errors.city.message}</ErrorMessage>
                  ) : null}
                </InputWrapper>

                <InputWrapper>
                  <InputContent>
                    <label htmlFor="state" />
                    <input
                      type="text"
                      id="state"
                      placeholder="UF"
                      {...register('state')}
                    />
                  </InputContent>
                  {errors.state?.message ? (
                    <ErrorMessage role="alert">{errors.state.message}</ErrorMessage>
                  ) : null}
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
              <RadioButton
                isSelected={selectedPaymentMethod === 'credit'}
                {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard size={22} />
                <span>Cartão de crédito</span>
              </RadioButton>

              <RadioButton
                isSelected={selectedPaymentMethod === 'debit'}
                {...register('paymentMethod')}
                value="debit"
              >
                <Bank size={22} />
                <span>Cartão de débito</span>
              </RadioButton>

              <RadioButton
                isSelected={selectedPaymentMethod === 'money'}
                {...register('paymentMethod')}
                value="money"
              >
                <Money size={22} />
                <span>Dinheiro</span>
              </RadioButton>

            </PaymentOptions>
            {errors.paymentMethod?.message ? (
              <ErrorMessage role="alert">
                {errors.paymentMethod.message}
              </ErrorMessage>
            ) : null}
          </PaymentContainer>
        </div>

        <div>
          <Title>Cafés selecionados</Title>

          <CartContainer>
            {
              coffeesInCart.length > 0 &&

              coffeesInCart.map(item => (
                <CartCard key={item.id} cartItem={item} />
              ))
            }

            <TotalContainer>
              <div>
                <span>Total de itens</span>
                <Price>
                  <span>R$</span>
                  <span>{totalItemsPriceFormatted}</span>
                </Price>
              </div>

              <div>
                <span>Entrega</span>
                <Price>
                  <span>R$</span>
                  <span>{cart.length > 0 ? shippingPriceFormatted : '0.00'}</span>
                </Price>
              </div>

              <div>
                <span>Total</span>
                <div>
                  <span>R$</span>
                  <span>{cart.length > 0 ? totalPriceFormatted : '0.00'}</span>
                </div>
              </div>

              <button type="submit" form="order">Confirmar pedido</button>

            </TotalContainer>
          </CartContainer>
        </div>
      </form>
    </CheckoutContainer>
  )
}