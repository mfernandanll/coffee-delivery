import styled from "styled-components";

export const SuccessContainer = styled.section`
  margin: 5rem auto;
  max-width: 70rem;

  header {
    margin-bottom: 2.5rem;

    h1 {
      font-size: 2rem;
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-900']};
    }

    p {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`

export const CheckoutContent = styled.div`
  display: flex;
  gap: 6.375rem;
`

export const CheckoutDataContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  position: relative;
  background: ${(props) => props.theme['gray-100']};

  width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px; 
    z-index: -1; 
    border-radius: 7px 37px 7px 37px; 
    background: linear-gradient(
      102.89deg,
      #dbac2c 2.61%,
      #8047f8 98.76%
    ); 
  }
`

export const CheckoutItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ICON_COLORS = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  yellowDark: 'yellow-900',
}

interface CheckoutItemIconProps {
  color: keyof typeof ICON_COLORS;
}

export const CheckoutItemIcon = styled.div<CheckoutItemIconProps>`
  border-radius: 100px;
  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.theme[ICON_COLORS[props.color]]};
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const CheckoutItemData = styled.div`
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};
`