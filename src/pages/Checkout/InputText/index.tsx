import { forwardRef, HTMLAttributes, LegacyRef } from "react";
import { Container, ErrorMessage, InputContainer } from "./styles";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement>{
  errorMessage?: string;
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export const InputText = forwardRef(
  function InputText(
    { errorMessage, optional = false, containerProps, ...rest }: InputTextProps,
    ref: LegacyRef<HTMLInputElement>
    ) {
    return (
      <Container {...containerProps}>
        <InputContainer>
          <input
            type="text"
            ref={ref}
            {...rest}
          />
          {optional ? <span>Opcional</span> : null}
        </InputContainer>

        {errorMessage ? (
          <ErrorMessage role="alert">{errorMessage}</ErrorMessage>
        ) : null}
      </Container>
    )
  }
)

