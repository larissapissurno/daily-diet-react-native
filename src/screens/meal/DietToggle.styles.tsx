import { VariantProps } from "src/@types/styled";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;
  margin-top: 8px;
`;

type OptionProps = VariantProps & {
  isActive: boolean;
};
export const Option = styled.Pressable<OptionProps>`
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};

  ${({ theme, isActive, variant }) =>
    isActive &&
    css`
      background-color: ${variant === "success"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};

      border: 1px solid
        ${variant === "success"
          ? theme.COLORS.GREEN_DARK
          : theme.COLORS.RED_DARK};
    `};
`;

export const OptionText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const OptionStatus = styled.View<VariantProps>`
  ${({ theme, variant }) => css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${variant === "danger"
      ? theme.COLORS.RED_DARK
      : theme.COLORS.GREEN_DARK};
  `}
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  /* margin-top: 8px; */
`;
