import { TextInputProps } from "react-native";
import { Container, FormHelper, Input, Label } from "./InputText.styles";
import { FieldError } from "react-hook-form";

type InputTextProps = TextInputProps & {
  label: string;
  required?: boolean;
  error?: FieldError;
};

export function InputText({
  label,
  multiline,
  error,
  ...rest
}: InputTextProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input multiline={multiline} error={!!error} {...rest} />
      {!!error && <FormHelper error>{error.message}</FormHelper>}
    </Container>
  );
}
