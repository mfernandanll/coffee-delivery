import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.5rem;
  
`

export const HeaderContent = styled.div`
  margin: 2rem auto;
  max-width: 70rem;

  display: flex;
  justify-content: space-between;
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;
`

const BaseButton = styled.button`
  background: transparent;
  border: 0;
  border-radius: 6px;

  height: 2.375rem;
  padding: 0.5rem;
`

export const ButtonLocation = styled(BaseButton)`
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};

  display: flex;
  gap: 0.25rem;
  align-items: center;

  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const CartButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-900']};

  position: relative;

  div {
    position: absolute;
    top: -8px;
    right: -8px;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 100px;

    background-color: ${(props) => props.theme['yellow-900']};
    
    display: grid;
    place-content: center;
  }

  span {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme['white']};
  }
`
