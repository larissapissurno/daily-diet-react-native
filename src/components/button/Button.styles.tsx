import { Plus } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-height: 50px;
  max-height: 50px;
  width: 100%;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: 24,
}))`
  margin-right: 8px;
`;
