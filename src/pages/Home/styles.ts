import styled from "styled-components"
import background from "../../assets/background.png"

export const BannerContainer = styled.section`
  background-image: url(${background}); 
  background-size: cover; 
  background-position: center; 
  
  width: 100%;
  height: 34rem;

  padding: 5.875rem 0 6.75rem;

  box-shadow: inset 0 4px 20px 14px ${(props) => props.theme['gray-100']};
`

export const BannerContent = styled.div`
  margin: 0 auto;
  max-width: 70rem;

  display: flex;
  gap: 3.5rem;

`

export const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const BenefitsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;

  max-width: 35.438rem;
  margin-top: 3.125rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  white-space: nowrap;

  p {
    font-size: 1rem;
    line-height: 1.3;
  }
`

const BUTTONS_COLORS = {
  yellowDark: 'yellow-900',
  gray: 'gray-700',
  yellowLight: 'yellow-500',
  purple: 'purple-500',
} as const 

interface ButtonsProps {
  buttonsColor: keyof typeof BUTTONS_COLORS
}


export const ButtonItem = styled.button<ButtonsProps>`
  background: transparent;
  border: 0;
  border-radius: 999px;

  height: 2rem;
  width: 2rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme[BUTTONS_COLORS[props.buttonsColor]]};
  color: ${(props) => props.theme['white']};

`

export const ProductsContainer = styled.section`  
  padding: 5.875rem 0 6.75rem;
  margin: 2rem auto;
  max-width: 70rem;

  h2 {
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 3.375rem;
  }
`

export const GridProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`