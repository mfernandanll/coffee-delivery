import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  cursor: pointer;

  white-space: nowrap;

  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.6;

  background-color: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};
  border: 1px solid transparent;
  border-radius: 6px;

  padding: 1rem;

  transition: all 0.2s;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  input {
    display: none;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
  }

  &[data-state='true'] {
    background-color: ${(props) => props.theme['purple-100']};
    border-color: ${(props) => props.theme['purple-500']};
  }
`
