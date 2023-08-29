import { VariantProps } from "src/@types/styled";
import { css } from "styled-components";
import styled from "styled-components/native";
import feedbackPositiveImage from "@assets/new-meal-feedback-positive.png";
import feedbackNegativeImage from "@assets/new-meal-feedback-negative.png";

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
    font-size: ${theme.FONT_SIZE.XL};
    color: ${variant === "success"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    margin-top: 8px;
    color: ${theme.COLORS.GRAY_700};
    text-align: center;
  `}
`;

export const FeedbackImage = styled.Image`
  margin: 40px 0;
`;
