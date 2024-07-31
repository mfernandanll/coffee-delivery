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

export const GradientContainer = styled.div`
  position: relative;
  border-radius: 6px 36px;
  padding: 2px;

  max-height: 17rem;

  background: linear-gradient(135deg, ${(props) => props.theme['yellow-500']}, ${(props) => props.theme['purple-500']});
`

export const CheckoutDataContainer = styled.div`
  padding: 2.5rem;

  border-radius: 4px 34px;
  background-color: ${(props) => props.theme['gray-200']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
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