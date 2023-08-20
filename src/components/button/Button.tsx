import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./Button.styles";
import { PropsWithChildren } from "react";
import { IStyledComponent } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonProps = TouchableOpacityProps &
  PropsWithChildren & {
    icon: keyof typeof MaterialIcons.glyphMap;
  };

export function Button({ children, icon, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {!!icon && <Icon name={icon} />}
      <Title>{children}</Title>
    </Container>
  );
}
