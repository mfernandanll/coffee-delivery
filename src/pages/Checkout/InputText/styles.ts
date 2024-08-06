import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

`

export const InputContainer = styled.label`
  color: ${(props) => props.theme['gray-700']};
  background-color: ${(props) => props.theme['gray-300']};

  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  display: flex;
  align-items: center;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  input {
    background: transparent;
    border: none;

    width: 100%;
    padding: 0.75rem;
  }

  input::placeholder{
    color: ${(props) => props.theme['gray-600']};
  }

  input#complement {
    padding-right: 4.25rem; 
  }

  span {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;
    line-height: 130%;
    font-style: italic;
    pointer-events: none;
  }
`

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: red;

`