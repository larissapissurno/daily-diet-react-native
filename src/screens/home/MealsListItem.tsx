import { Animated, ViewProps } from "react-native";
import {
  Container,
  Description,
  Status,
  SwipeToDeleteContainer,
  SwipeToDeleteContent,
  SwipeToDeleteText,
  Time,
  TimeContainer,
} from "./MealsListItem.styles";
import { Swipeable } from "react-native-gesture-handler";

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
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<any>,
    dragAnimatedValue: Animated.AnimatedInterpolation<any>
  ) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <SwipeToDeleteContainer>
        <Animated.View style={[{ opacity }]}>
          <SwipeToDeleteContent>
            <SwipeToDeleteText>Delete</SwipeToDeleteText>
          </SwipeToDeleteContent>
        </Animated.View>
      </SwipeToDeleteContainer>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Container>
        <TimeContainer>
          <Time>{time}</Time>
        </TimeContainer>
        <Description>{description}</Description>
        <Status variant={onDiet ? "success" : "danger"} />
      </Container>
    </Swipeable>
  );
}
