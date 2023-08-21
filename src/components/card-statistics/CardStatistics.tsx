import { TouchableOpacityProps } from "react-native";
import {
  Container,
  IconOpen,
  Description,
  Title,
  IconGoBack,
} from "./CardStatistics.styles";
import { VariantProps } from "src/@types/styled";

type CardStatisticsProps = TouchableOpacityProps &
  VariantProps & {
    title: string;
    description: string;
    disabled?: boolean;
    showDetailsIcon?: boolean;
    showGoBackIcon?: boolean;
  };

export function CardStatistics({
  title,
  description,
  variant,
  showDetailsIcon = false,
  showGoBackIcon = false,
  ...rest
}: CardStatisticsProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {showDetailsIcon && <IconOpen />}
      {showGoBackIcon && <IconGoBack />}
    </Container>
  );
}
