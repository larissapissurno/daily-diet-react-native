import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Header = styled.View`
  width: 100%;
  min-height: 64px;
  max-height: 64px;

  justify-content: center;
  align-items: center;
  position: relative;

  margin-top: 50px;
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

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const DateTimeInput = styled(DateTimePicker).attrs(({ theme }) => ({
  textColor: theme.COLORS.GRAY_600,
  accentColor: theme.COLORS.GRAY_700,
}))``;
