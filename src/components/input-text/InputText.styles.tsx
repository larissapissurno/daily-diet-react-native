import { TextInputProps, TextProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

type FormHelperProps = TextProps & {
  error?: boolean;
};

export const FormHelper = styled.Text<FormHelperProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.XSM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme, error }) =>
    error ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600};
`;

type InputProps = TextInputProps & {
  error?: boolean;
};

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  min-height: ${({ multiline }) => (multiline ? 120 : 48)}px;
  max-height: ${({ multiline }) => (multiline ? 120 : 48)}px;

  padding: 16px;
  margin-top: 4px;

  border: 1px solid
    ${({ theme, error }) =>
      !!error ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_400};
  border-radius: 6px;
`;
