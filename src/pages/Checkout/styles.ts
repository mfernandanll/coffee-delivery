import styled from "styled-components";

export const CheckoutContainer = styled.section`
  margin: 2.5rem auto;
  max-width: 70rem;

  /* display: flex;
  gap: 2rem; */

  form {
    display: flex;
    gap: 2rem;
  }
`

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;

  margin-bottom: 0.938rem;
`

const BaseContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
`

export const AddressContainer = styled(BaseContainer)`
  margin-bottom: 0.75rem;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['yellow-900']};
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }
`

export const HeaderTitle = styled.p`
  line-height: 1.3;

  color: ${(props) => props.theme['gray-800']};
`
export const HeaderSubTitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;

  color: ${(props) => props.theme['gray-700']};
`

export const Form = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'addressNumber complement complement'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentContainer = styled(BaseContainer)`
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }

  > p {
    margin-top: 0.5rem;
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.75rem;
`

interface PaymentOptionProps {
  selected: boolean;
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  cursor: pointer;

  background: none;
  border: none;
  outline:  ${(props) => props.theme['purple-100']} 1px solid;
  white-space: nowrap;

  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.6;

  background-color: ${(props) => (props.selected ? props.theme['purple-100'] : props.theme['gray-400'])};
  border: ${(props) => (props.selected ? `1px solid ${props.theme['purple-500']}` : 'none')};
  color: ${(props) => props.theme['gray-700']};
  box-shadow: ${(props) => (props.selected ? `0 0 0 1px  ${props.theme['purple-500']};` : 'none')}; 
  border-radius: 6px;

  padding: 1rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }

  &:active {
    border: none;
    box-shadow: none;
    outline: none;
  }

  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
  }
`

export const CartContainer = styled(BaseContainer)`
  min-width: 28rem;
  border-radius: 6px 44px;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;

    font-size: 0.875rem;
    line-height: 1.3;
  }

  div:nth-child(3) {
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 700;

    margin-bottom: 1.5rem;
  }

  button {
    background: transparent;
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme['white']};
    
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;

    padding: 0.75rem;
    width: 100%;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['yellow-900']};
    }
  }
`
export const Price = styled.div`
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['gray-700']};
`
export const ProductPrice = styled(Price)`
  line-height: 1.3;
  font-weight: 700;
`