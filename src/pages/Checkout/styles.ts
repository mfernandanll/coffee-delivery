import styled from "styled-components";

export const CheckoutContainer = styled.section`
  margin: 2.5rem auto;
  max-width: 70rem;

  display: flex;
  gap: 2rem;
`

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;

  margin-bottom: 0.938rem;
`

const BaseContainer = styled.div`
  background-color: ${(props) => props.theme['gray-400']};
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div:nth-child(1) {
    width: 12.5rem;
    flex: none;
  }

  > div:nth-child(2) {
    flex: 1;
  }
`

export const InputWrapper = styled.div`
  color: ${(props) => props.theme['gray-700']};
  background-color: ${(props) => props.theme['gray-300']};

  
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  
  input {
    background: transparent;
    border: none;

    width: 100%;
    padding: 0.75rem;
  }

  input::placeholder{
    color: ${(props) => props.theme['gray-600']};
  }

`

export const AddressTwoCollums = styled.div`
  display: flex;
  gap: 0.75rem;

  > div:nth-child(1) {
    flex: 4;
  }

  > div:nth-child(2) {
    flex: 6;
  }
 
`

export const AddressThreeCollums = styled.div`
  display: flex;
  gap: 0.75rem;

  > div:nth-child(1) {
    flex: 4;
  }

  > div:nth-child(2) {
    flex: 5;
  }

  > div:nth-child(3) {
    flex: 1;
  }
  
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
  outline: none;
  white-space: nowrap;

  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.6;

  background-color: ${(props) => (props.selected ? props.theme['purple-100'] : props.theme['gray-500'])};
  border: ${(props) => (props.selected ? `2px solid ${props.theme['purple-500']}` : 'none')};
  color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;

  padding: 1rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  &::select{
    background-color: ${(props) => props.theme['purple-100']};
    border: 1px solid ${(props) => props.theme['purple-500']};
  }  
`

export const ShopCartContainer = styled(BaseContainer)`
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