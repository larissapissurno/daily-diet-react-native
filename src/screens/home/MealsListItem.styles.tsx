import { VariantProps } from "src/@types/styled";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 50px;

  padding: 14px 12px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`;

export const TimeContainer = styled.View`
  margin-right: 12px;
  padding-right: 12px;

  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-right-style: "solid";
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XSM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const Status = styled.View<VariantProps>`
  ${({ theme, variant }) => css`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${variant === "danger"
      ? theme.COLORS.RED_MID
      : theme.COLORS.GREEN_MID};
  `}
`;

export const SwipeToDeleteContainer = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.RED_DARK};
    border-left-width: 5px;
    border-left-color: ${theme.COLORS.WHITE};
  `};
`;

export const SwipeToDeleteContent = styled.TouchableOpacity`
  height: 100%;
  display: flex;
  padding: 16px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SwipeToDeleteText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;
