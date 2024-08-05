import styled from "styled-components";

export const Container = styled.div`
  
  padding: 0.75rem 0.5rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['gray-400']};
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