import { Bank,  CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { AddressContainer, AddressThreeCollums, AddressTwoCollums, CheckoutContainer, Form, InputWrapper, PaymentContainer, PaymentOption, PaymentOptions, Price, ShopCartContainer, Title, TotalContainer, HeaderTitle, HeaderSubTitle } from "./styles";
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
  cep: zod.string(),
  street: zod.string(),
  addressNumber: zod.string(),
  complement: zod.string().optional(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.string(),
  orders: zod.array(ordersShema),
  delivery: zod.number(),
  totalPrice: zod.number()
})

export type ShoppingFormData = zod.infer<typeof shoppingDataSchema>

export function Checkout() {
  const { shoppingCartList, createNewOrder } = useContext(ShoppingCartListContext);
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const shoppingDataForm = useForm<ShoppingFormData>({
    resolver: zodResolver(shoppingDataSchema),
    defaultValues: {
      cep: '',
      street: '',
      addressNumber: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'credit',
      orders: shoppingCartList,
      delivery: 0,
      totalPrice: 0
    }
  })

  const { handleSubmit, register, reset, setValue } = shoppingDataForm

  const formatPrice = (price: number) => price.toFixed(2).replace('.', ',');

  const totalProductsPrice = shoppingCartList.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalProductsPriceFormatted = formatPrice(totalProductsPrice);

  const delivery = 9.9;
  const deliveryFormatted = formatPrice(delivery);

  const totalPrice = totalProductsPrice + delivery;
  const totalPriceFormatted = formatPrice(totalPrice);

  setValue('totalPrice', totalPrice);
  setValue('delivery', delivery);
  
  function handleCreateNewOrder(data: ShoppingFormData) {
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
                <label htmlFor="cep" />
                <input 
                  type="text" 
                  id="cep" 
                  placeholder="CEP" 
                  {...register('cep')}
                />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="street" />
                <input 
                  type="text" 
                  id="street" 
                  placeholder="Rua" 
                  {...register('street')}
                />
              </InputWrapper>

              <AddressTwoCollums>
                <InputWrapper>
                  <label htmlFor="addressNumber" />
                  <input 
                    type="text" 
                    id="addressNumber" 
                    placeholder="Número" 
                    {...register('addressNumber')}
                  />
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="complement" />
                  <input 
                    type="text" 
                    id="complement" 
                    placeholder="Complemento" 
                    {...register('complement')}
                  />
                </InputWrapper>
              </AddressTwoCollums>

              <AddressThreeCollums>
                <InputWrapper>
                  <label htmlFor="neighborhood" />
                  <input 
                    type="text" 
                    id="neighborhood" 
                    placeholder="Bairro" 
                    {...register('neighborhood')}
                  />
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="city" />
                  <input 
                    type="text" 
                    id="city" 
                    placeholder="Cidade" 
                    {...register('city')}
                  />
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="state" />
                  <input 
                    type="text" 
                    id="state" 
                    placeholder="UF" 
                    {...register('state')}
                  />
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