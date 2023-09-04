import { VariantProps } from "src/@types/styled";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text<VariantProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${variant === "success"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    margin-top: 8px;
    color: ${theme.COLORS.GRAY_700};
    text-align: center;
  `}
`;

export const FeedbackImage = styled.Image`
  margin: 40px 0;
`;
