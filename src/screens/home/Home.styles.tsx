import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconOpen = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
  weight: "bold",
}))`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const Logo = styled.Image`
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

export const MealsListTitleContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
`;

export const MealsListTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    margin-bottom: 10px;
    margin-top: 12px;
  `};
`;
