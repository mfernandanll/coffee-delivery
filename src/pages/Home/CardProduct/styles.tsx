import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['gray-400']};

  max-width: 16rem;
  padding: 1.25rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -2rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};

    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-600']};
    text-align: center;

    margin-bottom: 2.063rem;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;

  margin-bottom: 1rem;
`

export const Tag = styled.div`
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  color: ${(props) => props.theme['yellow-900']};
  background-color: ${(props) => props.theme['yellow-100']};
`

export const ShopCartContainer = styled.div`
  display: flex;

  
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-family: "Baloo 2", sans-serif;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const Counter = styled.div`
  margin-left: 1.438rem;
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

export const ButtonCart = styled.button`
  margin-left: 0.5rem;

  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;

  background: transparent;
  border: none;

  background-color: ${(props) => props.theme['purple-900']};
  color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  cursor: pointer;

  display: grid;
  place-items: center;
`
