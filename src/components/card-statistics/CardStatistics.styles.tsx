import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import { VariantProps } from "src/@types/styled";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity<VariantProps>`
  align-items: center;
  justify-content: center;

  min-height: 102px;
  max-height: 102px;
  width: 100%;
  margin-top: 32px;
  border-radius: 8px;
  background-color: ${({ theme, variant }) =>
    variant === "success"
      ? theme.COLORS.GREEN_LIGHT
      : variant === "danger"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_200};
  padding: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const IconOpen = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
  weight: "bold",
}))`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const IconGoBack = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
  weight: "bold",
}))`
  position: absolute;
  top: 0;
  left: 0;
`;
