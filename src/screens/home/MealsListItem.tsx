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
  onDiet: boolean;
};

export function MealsListItem({
  time,
  description,
  onDiet,
}: MealsListItemProps) {
  return (
    <Container>
      <TimeContainer>
        <Time>{time}</Time>
      </TimeContainer>
      <Description>{description}</Description>
      <Status variant={onDiet ? "success" : "danger"} />
    </Container>
  );
}
