import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { AddressContainer, AddressThreeCollums, AddressTwoCollums, CheckoutContainer, Form, InputWrapper, PaymentContainer, PaymentOption, PaymentOptions, Price, ShopCartContainer, Title, TotalContainer, HeaderTitle, HeaderSubTitle, ErrorMessage, InputContent } from "./styles";
import { useContext, useState } from "react";
import { ShoppingCartListContext } from "../../contexts/ShoppingCartListContext";
import { ShoppingCartCard } from "./ShoppingCartListCard";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const ordersShema = zod.object({
  id: zod.string(),
  name: zod.string(),
  description: zod.string(),
  price: zod.number(),
  quantity: zod.number(),
  tags: zod.array(zod.string()),
  imgPath: zod.string(),
});

const shoppingDataSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  addressNumber: zod.string().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'money'], {
    required_error: 'Informe um método de pagamento'
  }),
  orders: zod.array(ordersShema, {
    required_error: 'É preciso ter pelo menos um item no carrinho'
  }),
  delivery: zod.number(),
  totalPrice: zod.number()
})

export type ShoppingFormData = zod.infer<typeof shoppingDataSchema>

export function Checkout() {
  const { shoppingCartList, createNewOrder } = useContext(ShoppingCartListContext);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const shoppingDataForm = useForm<ShoppingFormData>({
    resolver: zodResolver(shoppingDataSchema),
  })

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors } } = shoppingDataForm

  const formatPrice = (price: number) => price.toFixed(2).replace('.', ',');

  const totalProductsPrice = shoppingCartList.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalProductsPriceFormatted = formatPrice(totalProductsPrice);

  const delivery = 9.9;
  const deliveryFormatted = formatPrice(delivery);

  const totalPrice = totalProductsPrice + delivery;
  const totalPriceFormatted = formatPrice(totalPrice);

  setValue('totalPrice', totalPrice);
  setValue('delivery', delivery);
  setValue('orders', shoppingCartList);

  function handleCreateNewOrder(data: ShoppingFormData) {
    if (shoppingCartList.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    createNewOrder(data)
    reset()
  }

  function handlePaymentSelect(method: 'money' | 'credit' | 'debit') {
    setSelectedPaymentMethod(method);
    setValue('paymentMethod', method, { shouldValidate: true });
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
              <PaymentOption
                type="button"
                selected={selectedPaymentMethod === 'credit'}
                onClick={() => handlePaymentSelect('credit')}
              >
                <CreditCard size={22} />
                <span>Cartão de crédito</span>
              </PaymentOption>

              <PaymentOption
                type="button"
                selected={selectedPaymentMethod === 'debit'}
                onClick={() => handlePaymentSelect('debit')}
              >
                <Bank size={22} />
                <span>Cartão de débito</span>
              </PaymentOption>

              <PaymentOption
                type="button"
                selected={selectedPaymentMethod === 'money'}
                onClick={() => handlePaymentSelect('money')}
              >
                <Money size={22} />
                <span>Dinheiro</span>
              </PaymentOption>

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

          <ShopCartContainer>
            {
              shoppingCartList.length > 0 &&

              shoppingCartList.map(item => (
                <ShoppingCartCard key={item.id} cartItem={item} />
              ))
            }

            <TotalContainer>
              <div>
                <span>Total de itens</span>
                <Price>
                  <span>R$</span>
                  <span>{totalProductsPriceFormatted}</span>
                </Price>
              </div>

              <div>
                <span>Entrega</span>
                <Price>
                  <span>R$</span>
                  <span>{shoppingCartList.length > 0 ? deliveryFormatted : '0.00'}</span>
                </Price>
              </div>

              <div>
                <span>Total</span>
                <div>
                  <span>R$</span>
                  <span>{shoppingCartList.length > 0 ? totalPriceFormatted : '0.00'}</span>
                </div>
              </div>

              <button type="submit" form="order">Confirmar pedido</button>

            </TotalContainer>
          </ShopCartContainer>
        </div>
      </form>
    </CheckoutContainer>
  )
}