import styled from "styled-components"

export const ShoppingCartCardContainer = styled.div`
  padding: 0.5rem 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  display: flex;

  img {
    height: 4rem;
    margin-right: 1.25rem;
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 3.125rem;

  > span {
    display: block;
    color: ${(props) => props.theme['gray-800']};
    line-height: 1.3;
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }

  &:nth-child(2) {
    display: flex;
    gap: 0.5rem;
  }

`

export const Counter = styled.div`
  
  padding: 0.75rem 0.5rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['gray-500']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  button {
    background: transparent;
    border: none;
    color: ${(props) => props.theme['purple-500']};

    cursor: pointer;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['gray-500']};
  border-radius: 6px;
  border: none;
 
  padding: 0.75rem 0.5rem;
  height: 2.375rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const ProductPrice = styled.div`
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme['gray-700']};
  
  line-height: 1.3;
  font-weight: 700;
`