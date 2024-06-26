import { styled } from "styled-components/native";

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 30px 24px;
  gap: 16px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;
