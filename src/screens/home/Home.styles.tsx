import styled from "styled-components/native";

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

export const Percent = styled.View``;

export const Logo = styled.Image`
  height: 37px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;
