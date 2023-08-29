import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { VariantProps } from "src/@types/styled";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 50px; /**TODO: Remove this when safe area view is implemented */

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Header = styled.View`
  width: 100%;
  min-height: 64px;
  max-height: 64px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeaderTitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ButtonGoBack = styled(TouchableOpacity).attrs(() => ({
  hitSlop: { top: 16, bottom: 16, left: 16, right: 16 },
}))`
  background-color: transparent;
  border-radius: 50%;
  padding: 8px;
  position: absolute;
  left: 0;
  align-self: center;
  vertical-align: middle;
`;

export const IconGoBack = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_600,
  size: 24,
  weight: "bold",
}))``;

export const Form = styled.View`
  flex: 1;
  gap: 16px;
`;
