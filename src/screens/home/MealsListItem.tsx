import { Animated, ViewProps } from "react-native";
import {
  Container,
  Description,
  Status,
  SwipeToDeleteContainer,
  SwipeToDeleteButton,
  SwipeToDeleteText,
  Time,
  TimeContainer,
  SwipeToDeleteConfirmation,
} from "./MealsListItem.styles";
import { Swipeable } from "react-native-gesture-handler";
import { useMealsContext } from "@contexts/Meals.context";

type MealsListItemProps = ViewProps & {
  id: string;
  time: string;
  description: string;
  onDiet: boolean;
};

export function MealsListItem({
  id,
  time,
  description,
  onDiet,
}: MealsListItemProps) {
  const mealsContext = useMealsContext();

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<any>
  ) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <SwipeToDeleteContainer>
        <SwipeToDeleteConfirmation>
          <SwipeToDeleteText>Tem certeza?</SwipeToDeleteText>
        </SwipeToDeleteConfirmation>
        <Animated.View style={[{ opacity }]}>
          <SwipeToDeleteButton>
            <SwipeToDeleteText>Remover</SwipeToDeleteText>
          </SwipeToDeleteButton>
        </Animated.View>
      </SwipeToDeleteContainer>
    );
  };

  function deleteMealHandler() {
    mealsContext.removeMeal(id);
  }

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onEnded={deleteMealHandler}
    >
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
