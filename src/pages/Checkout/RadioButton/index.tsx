import { forwardRef, InputHTMLAttributes, LegacyRef } from "react"
import { Container } from "./styles"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const RadioButton = forwardRef(function RadioButton(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
    return (
      <Container data-state={isSelected}>
        <input type="radio" ref={ref} {...rest} />
        {children}
      </Container>
    )
}) 