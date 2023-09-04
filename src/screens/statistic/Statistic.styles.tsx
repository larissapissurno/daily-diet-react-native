import { VariantProps } from "src/@types/styled";
import styled from "styled-components/native";

export const Container = styled.View<VariantProps>`
  padding-top: 24px;
  flex: 1;
  background-color: ${({ theme, variant }) =>
    variant === "success" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderContainer = styled.View`
  padding: 0 24px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 24px;
`;
