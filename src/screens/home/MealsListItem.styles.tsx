import { VariantProps } from "src/@types/styled";
import styled, { css } from "styled-components/native";
import Animated from "react-native-reanimated";

export const ListItemContainer = styled(Animated.View)`
  width: 100%;
  align-items: center;
`;

export const SwipeToDeleteContainer = styled(Animated.View)`
  width: 100%;
  height: 100%;
  max-height: 50px;
  position: absolute;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.COLORS.RED_DARKER};
  border-radius: 6px;
  padding-right: 16px;
`;

export const MealContentContainer = styled.Pressable`
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
