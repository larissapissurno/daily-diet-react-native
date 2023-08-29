import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./Button.styles";
import { PropsWithChildren, ReactElement } from "react";

type ButtonProps = TouchableOpacityProps &
  PropsWithChildren & {
    iconElement?: ReactElement;
  };

export function Button({ children, iconElement, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {!!iconElement && iconElement}
      <Title>{children}</Title>
    </Container>
  );
}
