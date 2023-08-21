import { TextInputProps } from "react-native";
import { Container, Input, Label } from "./InputText.styles";

type InputTextProps = TextInputProps & {
  label: string;
};

export function InputText({ label, ...rest }: InputTextProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input {...rest} />
    </Container>
  );
}
