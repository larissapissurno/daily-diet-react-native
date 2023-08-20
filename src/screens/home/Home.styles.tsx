import styled, { css } from "styled-components/native";
import { ArrowUpRight, Plus } from "phosphor-react-native";

export const Container = styled.View`
  margin-top: 50px; /**TODO: Remove this when safe area view is implemented */

  flex: 1;
  padding: 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Percent = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  min-height: 102px;
  max-height: 102px;
  width: 100%;
  margin-top: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  padding: 12px;
`;

export const PercentTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const PercentDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
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
