import { VariantProps } from "src/@types/styled";
import styled from "styled-components/native";

export const Container = styled.View<VariantProps>`
  padding-top: 24px; /**TODO: Remove this when safe area view is implemented */
  flex: 1;
  background-color: ${({ theme, variant }) =>
    variant === "success" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const HeaderContainer = styled.View`
  padding: 0 24px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 0 24px;
`;

export const Title = styled.Text`
  margin-top: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 24px;
`;
