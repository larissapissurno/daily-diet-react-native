import styled from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Input = styled.TextInput`
  width: 100%;
  min-height: 48px;
  max-height: 48px;

  padding: 0 16px;
  margin-top: 8px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 6px;
`;
