import { ViewProps } from "react-native";
import {
  Container,
  Description,
  Status,
  Time,
  TimeContainer,
} from "./MealsListItem.styles";

type MealsListItemProps = ViewProps & {
  time: string;
  description: string;
  hasEscapedDiet: boolean;
};

export function MealsListItem({
  time,
  description,
  hasEscapedDiet,
}: MealsListItemProps) {
  return (
    <Container>
      <TimeContainer>
        <Time>{time}</Time>
      </TimeContainer>
      <Description>{description}</Description>
      <Status hasEscapedDiet={hasEscapedDiet} />
    </Container>
  );
}
